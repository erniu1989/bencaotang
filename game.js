/* ============================================================
 * 本草堂游戏逻辑
 * 知识库由 herbs.js、formulas.js、scenarios.js 提供。
 * 必须先加载知识库，再加载本文件。
 * ============================================================ */


(() => {
  "use strict";

  const SAVE_KEY = "bencaotang_rows_game_v1";

  const API_URL =
    "https://br-peppy-grue-dfccd1b7.supabase2.aidap-global.cn-beijing.volces.com/functions/v1/game-record-api";

  const MODES = {
    identify: "辨药识材",
    formula: "组方配伍",
    classify: "四性五味",
    prescribe: "情境研习",
    match: "药材连连看"
  };

  /*
   * 普通题与组方题分别计时。
   * 分数固定，不叠加时间奖励、连击倍率。
   */
  const LEVELS = {
    beginner: {
      name: "初学",
      icon: "🌱",
      time: 60,
      formulaTime: 120,
      matchTime: 150,
      identify: 6,
      formula: 4,
      classify: 8,
      prescribe: 6,
      pairs: 6,
      distractors: 3
    },
    intermediate: {
      name: "进阶",
      icon: "📘",
      time: 45,
      formulaTime: 90,
      matchTime: 120,
      identify: 8,
      formula: 5,
      classify: 10,
      prescribe: 8,
      pairs: 8,
      distractors: 5
    },
    challenge: {
      name: "挑战",
      icon: "🔥",
      time: 30,
      formulaTime: 75,
      matchTime: 90,
      identify: 10,
      formula: 6,
      classify: 12,
      prescribe: 10,
      pairs: 10,
      distractors: 7
    }
  };

  const POINTS = {
    identify: 3,
    formula: 6,
    classify: 3,
    prescribe: 4,
    match: 3
  };

  const $ = id => document.getElementById(id);

  const escapeHtml = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function sample(items, count) {
    return shuffle(items).slice(0, count);
  }

  function unique(items) {
    return [...new Set(items)];
  }

  function splitTerms(value) {
    return String(value ?? "")
      .split(/[、，,；;\/\s]+/)
      .map(item => item.trim())
      .filter(Boolean);
  }

  /*
   * 只忽略顺序和分隔符，不把不同药味合并。
   * 辛、苦 = 苦、辛
   * 苦 ≠ 微苦
   * 甘 ≠ 甘、淡
   */
  function flavorKey(value) {
    return unique(splitTerms(value)).sort().join("|");
  }

  function flavorLabel(value) {
    const order = [
      "酸", "微酸", "苦", "微苦",
      "甘", "微甘", "辛", "微辛",
      "咸", "微咸", "涩", "微涩", "淡"
    ];

    return unique(splitTerms(value))
      .sort((a, b) => {
        const ai = order.indexOf(a);
        const bi = order.indexOf(b);
        const difference =
          (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);

        return difference || a.localeCompare(b, "zh-CN");
      })
      .join("、");
  }

  function natureCategory(value) {
    const text = String(value || "");
    if (/[寒凉]/.test(text)) return "寒凉";
    if (/[温热]/.test(text)) return "温热";
    if (text === "平") return "平性";
    return "";
  }

  /*
   * 仅用于图鉴归类，不改写原始药性、药味或方剂组成。
   */
  const SAME_HERB_NAMES = {
    "夜交藤": "首乌藤",
    "血竭粉": "血竭",
    "珍珠粉": "珍珠",
    "儿茶膏": "儿茶"
  };

  function canonicalName(name) {
    const text = String(name || "").trim();
    return SAME_HERB_NAMES[text] || text;
  }

  /*
   * 同名条目合并为一张图鉴卡，但保留原始数据库不动。
   * 不根据数组位置重新分配ID。
   */
  const herbMap = new Map();

  HERBS.forEach(item => {
    const key = canonicalName(item.name);
    if (!key) return;

    if (!herbMap.has(key)) {
      herbMap.set(key, {
        ...item,
        key,
        name: key,
        aliases: [item.name]
      });
    } else {
      const saved = herbMap.get(key);
      saved.aliases = unique([...saved.aliases, item.name]);
    }
  });

  const herbs = [...herbMap.values()];

  /*
   * 这些条目不是独立药材，暂不用于药材抽题。
   * 仍保留在原始HERBS中，便于以后人工核对。
   */
  const EXCLUDED_ROWS = new Set([
    "蚯蚓白糖浸出液",
    "牛黄清心药料"
  ]);

  const activeHerbs = herbs.filter(
    herb => !EXCLUDED_ROWS.has(herb.name)
  );

  const activeHerbMap = new Map(
    activeHerbs.map(herb => [herb.key, herb])
  );

  /*
   * 只用于寻找关联图鉴，不用于判断组方答案。
   * 炙甘草等炮制名称仍会作为独立的组方选项保留。
   */
  const RELATED_NAMES = {
    "炙甘草": "甘草",
    "生甘草": "甘草",
    "生甘草梢": "甘草",
    "甘草梢": "甘草",
    "苦桔梗": "桔梗",
    "荆芥穗": "荆芥",
    "黑芥穗": "荆芥",
    "藿香": "广藿香",
    "紫苏": "紫苏叶",
    "白芥子": "芥子",
    "瓜蒌仁": "瓜蒌子",
    "炒白术": "白术",
    "炒白芍": "白芍",
    "生白芍": "白芍",
    "炒陈皮": "陈皮",
    "生黄芪": "黄芪",
    "煅龙骨": "龙骨",
    "煅牡蛎": "牡蛎",
    "全当归": "当归",
    "当归身": "当归",
    "当归尾": "当归",
    "川大黄": "大黄",
    "酒大黄": "大黄",
    "山栀子": "栀子",
    "山栀子仁": "栀子",
    "莲子粉": "莲子",
    "制半夏": "半夏",
    "半夏曲": "半夏",
    "生附子": "附子",
    "制附子": "附子",
    "熟附子": "附子",
    "煨生姜": "生姜"
  };

  function relatedHerbKey(name) {
    return canonicalName(RELATED_NAMES[name] || name);
  }

  /*
   * 适配新方剂数据：composition字符串 → herbs数组。
   * 不修改原始FORMULAS。
   */
  const formulas = FORMULAS.map(item => ({
    ...item,
    herbs: unique(splitTerms(item.composition))
  })).filter(item => item.herbs.length > 0);

  const formulaMap = new Map(
    formulas.map(item => [item.name, item])
  );

  /*
   * 避免把同源/近似称谓作为组方干扰项。
   * 这里仅用于排除干扰项，不把它们判为可互相替代。
   */
  function ingredientFamily(name) {
    const extra = {
      "橘红": "陈皮",
      "化橘红": "陈皮",
      "贝母": "贝母类",
      "川贝母": "贝母类",
      "浙贝母": "贝母类",
      "沙参": "沙参类",
      "北沙参": "沙参类",
      "南沙参": "沙参类",
      "干地黄": "地黄类",
      "生地黄": "地黄类",
      "熟地黄": "地黄类",
      "竹叶心": "竹叶类",
      "竹叶": "竹叶类",
      "淡竹叶": "竹叶类",
      "炮姜": "姜类",
      "姜炭": "姜类",
      "干姜": "姜类",
      "生姜": "姜类",
      "茯神": "茯苓",
      "龟甲胶": "龟甲",
      "鹿角胶": "鹿角类",
      "鹿茸": "鹿角类",
      "穿山甲历史药材": "穿山甲"
    };

    const base = relatedHerbKey(name);
    return extra[name] || extra[base] || base;
  }

  function freshSave() {
    return {
      version: 1,
      score: 0,
      difficulty: "beginner",
      sound: true,
      unlocked: [],
      best: {},
      wrongbook: []
    };
  }

  let save;

  function loadSave() {
    let source = null;

    try {
      source = JSON.parse(localStorage.getItem(SAVE_KEY));
    } catch (error) {
      console.warn("存档读取失败，使用新存档。", error);
    }

    if (!source || typeof source !== "object" || Array.isArray(source)) {
      source = {};
    }

    save = {
      ...freshSave(),
      score: Number.isFinite(Number(source.score))
        ? Math.max(0, Math.floor(Number(source.score)))
        : 0,
      difficulty: Object.hasOwn(LEVELS, source.difficulty)
        ? source.difficulty
        : "beginner",
      sound: source.sound !== false,
      unlocked: Array.isArray(source.unlocked)
        ? unique(source.unlocked.filter(
          name => activeHerbMap.has(name)
        ))
        : [],
      best: source.best && typeof source.best === "object"
        && !Array.isArray(source.best)
        ? source.best
        : {},
      wrongbook: Array.isArray(source.wrongbook)
        ? source.wrongbook.filter(
          item => item && typeof item === "object" && item.key
        ).slice(0, 100)
        : []
    };
  }

  function persist() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch (error) {
      console.warn("本地保存失败，当前页面仍可答题。", error);
    }
  }

  function unlock(names) {
    const keys = names
      .map(relatedHerbKey)
      .filter(key => activeHerbMap.has(key));

    save.unlocked = unique([...save.unlocked, ...keys]);
    persist();
  }

  function recordWrong(question, userAnswer) {
    const entry = {
      key: question.key,
      mode: game.mode,
      title: question.title,
      question: question.prompt,
      userAnswer,
      correctAnswer: question.answer,
      explanation: question.explanation,
      time: Date.now(),
      difficulty: game.level
    };

    save.wrongbook = [
      entry,
      ...save.wrongbook.filter(item => item.key !== entry.key)
    ].slice(0, 100);

    persist();
  }

  function playerTitle(score) {
    if (score >= 3000) return "杏林宗师";
    if (score >= 1800) return "本草名家";
    if (score >= 1000) return "杏林医者";
    if (score >= 500) return "本草弟子";
    if (score >= 150) return "采药学徒";
    return "初入杏林";
  }

  let audioContext = null;

  function sound(kind) {
    if (!save.sound) return;

    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;

      audioContext ||= new Audio();

      if (audioContext.state === "suspended") {
        audioContext.resume().catch(() => {});
      }

      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(
        kind === "wrong" ? 180 : kind === "finish" ? 880 : 660,
        now
      );

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      oscillator.start(now);
      oscillator.stop(now + 0.18);
    } catch (error) {
      // 音效不可用不影响游戏。
    }
  }

  let game = null;
  let timer = null;
  let delayed = null;
  let runId = 0;

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function stopTasks() {
    stopTimer();
    clearTimeout(delayed);
    delayed = null;
  }

  function setText(id, text) {
    const element = $(id);
    if (element) element.textContent = text;
  }

  function startTimer(seconds, onEnd) {
    stopTimer();

const thisRun = runId;
const deadline = Date.now() + seconds * 1000;

game.deadline = deadline;


    function tick() {
      if (!game || runId !== thisRun || game.finished) {
        stopTimer();
        return;
      }

      const remaining = Math.max(
        0, Math.ceil((deadline - Date.now()) / 1000)
      );

      setText("game-timer", `${remaining} 秒`);

      const timerElement = $("game-timer");
      const bar = $("timer-bar-inner");

      timerElement?.classList.toggle("warning", remaining <= 10);

      if (bar) {
        bar.style.width = `${remaining / seconds * 100}%`;
        bar.classList.toggle("warning", remaining <= 10);
      }

      if (remaining <= 0) {
        stopTimer();
        onEnd();
      }
    }

    timer = setInterval(tick, 200);
    tick();
  }

  function resetTimerDisplay() {
    setText("game-timer", "");
    $("game-timer")?.classList.remove("warning");

    const bar = $("timer-bar-inner");
    if (bar) {
      bar.style.width = "100%";
      bar.classList.remove("warning");
    }
  }

  function updateHeader() {
    if (!game) return;

    const level = LEVELS[game.level];

    setText(
      "game-title",
      `${MODES[game.mode]} · ${level.icon}${level.name}`
    );

    setText("game-score", game.score);
    setText("game-combo", game.combo >= 2 ? `${game.combo} 连击` : "");

    setText(
      "game-progress",
      game.mode === "match"
        ? `${game.correct}/${game.total} 对`
        : `${game.index + 1}/${game.total}`
    );
  }

  /*
   * 删除原HTML中重复的难度区域，只生成一套。
   */
  function installInterface() {
    const home = $("screen-home");
    if (!home) throw new Error("缺少首页 screen-home。");

    home.querySelectorAll(".difficulty-panel").forEach(
      panel => panel.remove()
    );

    const panel = document.createElement("div");
    panel.className = "difficulty-panel";
    panel.id = "bct-difficulty-panel";

    panel.innerHTML = `
      <h2 style="font-size:1.1rem;margin-bottom:10px">
        选择研习难度
      </h2>
      <div class="bct-level-buttons">
        ${Object.entries(LEVELS).map(([key, level]) => `
          <button type="button" data-level="${key}">
            ${level.icon} ${level.name}
          </button>
        `).join("")}
      </div>
      <p id="bct-level-description"></p>
      <p style="font-size:.76rem;color:var(--ink-light)">
        三档自由选择，无积分门槛。连击仅作记录，不额外加分。
      </p>
    `;

    const profile = home.querySelector(".home-profile");
    if (profile) profile.after(panel);
    else home.prepend(panel);

    panel.querySelectorAll("[data-level]").forEach(button => {
      button.addEventListener("click", () => {
        App.setDifficulty(button.dataset.level);
      });
    });

    const style = document.createElement("style");
    style.textContent = `
      #bct-difficulty-panel{
        margin:0 0 22px;padding:16px;text-align:center;
      }
      #bct-difficulty-panel .bct-level-buttons{
        display:grid;grid-template-columns:repeat(3,1fr);gap:8px;
      }
      #bct-difficulty-panel button{
        min-height:44px;padding:8px;
      }
      #bct-difficulty-panel button.active{
        color:white;background:var(--vermilion);
        border-color:var(--vermilion);
      }
      #bct-level-description{
        font-size:.8rem;color:var(--ink-light);margin:10px 0;
      }
      .bct-question{white-space:pre-line}
      .bct-chip.selected{
        color:white;background:var(--ink);border-color:var(--ink);
      }
      #game-content .match-cell{font-size:.86rem}
      .badge{font-size:.73rem}
      .bct-warning{
        margin:10px 0;padding:10px;
        border-left:3px solid var(--vermilion);
        color:var(--error);font-size:.83rem;
      }
    `;
    document.head.appendChild(style);

    home.querySelectorAll(".mode-card").forEach(card => {
      if ((card.getAttribute("onclick") || "").includes("'prescribe'")) {
        const name = card.querySelector(".mode-name");
        const description = card.querySelector(".mode-desc");
        if (name) name.textContent = "情境研习";
        if (description) {
          description.textContent = "方剂辨识、药材知识与用药安全";
        }
      }
    });
  }

  function renderHome() {
    setText("home-score", save.score);
    setText("home-title-name", playerTitle(save.score));
    setText(
      "home-unlocked",
      `${save.unlocked.length}/${activeHerbs.length}`
    );
    setText(
      "sound-button",
      save.sound ? "🔊 音效开启" : "🔇 音效关闭"
    );

    const level = LEVELS[save.difficulty];

    document.querySelectorAll("#bct-difficulty-panel [data-level]")
      .forEach(button => {
        const active = button.dataset.level === save.difficulty;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });

    setText(
      "bct-level-description",
      `${level.icon}${level.name}：普通题${level.time}秒，` +
      `组方题${level.formulaTime}秒，连连看${level.pairs}对／` +
      `${level.matchTime}秒。药材库已合并同名条目。`
    );
  }

  function makeQuestions(mode, level) {
    if (mode === "identify") {
      const seen = new Set();

      return sample(activeHerbs.filter(herb => {
        const signature = [
          flavorKey(herb.flavor),
          herb.meridian,
          herb.effect
        ].join(";");
        if (seen.has(signature)) return false;
        seen.add(signature);
        return true;
      }), level.identify).map(herb => {
        const others = activeHerbs.filter(item =>
          item.key !== herb.key &&
          !(
            flavorKey(item.flavor) === flavorKey(herb.flavor) &&
            item.meridian === herb.meridian &&
            item.effect === herb.effect
          )
        );

        return {
          key: `identify:${herb.key}`,
          title: "辨药识材",
          prompt:
            `请根据线索辨认药材：\n` +
            `药性：${herb.nature}\n药味：${herb.flavor}\n` +
            `归经：${herb.meridian}\n功效：${herb.effect}`,
          answer: herb.name,
          options: shuffle([
            herb.name,
            ...sample(others, 3).map(item => item.name)
          ]),
          explanation:
            `${herb.name}：${herb.effect}。\n${herb.fun || ""}`,
          hint: `分类：${herb.cat}。`,
          unlock: [herb.name]
        };
      });
    }

    if (mode === "formula") {
      /*
       * 保留历史方在原数据库中。
       * 带“历史药材”的方暂不进入实际选药配伍题。
       */
      const pool = formulas.filter(formula =>
        !formula.herbs.some(name => name.includes("历史药材"))
      );

      return sample(pool, level.formula).map(formula => {
        const families = new Set(
          formula.herbs.map(ingredientFamily)
        );

        const wrongPool = activeHerbs.filter(herb =>
          !formula.herbs.includes(herb.name) &&
          !families.has(ingredientFamily(herb.name))
        );

        return {
          key: `formula:${formula.id}`,
          title: formula.name,
          prompt:
            `${formula.name}\n功效：${formula.effect}\n` +
            `主治：${formula.indication}\n` +
            `请选择本题所列版本的全部${formula.herbs.length}项组成。` +
            `炮制名称按原文保留。`,
          answer: formula.herbs.join("、"),
          expected: formula.herbs,
          options: shuffle([
            ...formula.herbs,
            ...sample(wrongPool, level.distractors)
              .map(herb => herb.name)
          ]),
          explanation:
            `功效：${formula.effect}。\n出处：${formula.source}。` +
            `\n组成按当前题库所列版本，不同文献可能存在差异。`,
          hint: `组成中含有：${formula.herbs[0]}。`,
          unlock: formula.herbs
        };
      });
    }

    if (mode === "classify") {
      const pool = activeHerbs.filter(
        herb => natureCategory(herb.nature) && flavorKey(herb.flavor)
      );

      const flavorMap = new Map();

      pool.forEach(herb => {
        const key = flavorKey(herb.flavor);
        if (!flavorMap.has(key)) {
          flavorMap.set(key, flavorLabel(herb.flavor));
        }
      });

      return sample(pool, level.classify).map((herb, index) => {
        const isNature = index % 2 === 0;
        const key = flavorKey(herb.flavor);
        const answer = isNature
          ? natureCategory(herb.nature)
          : flavorLabel(herb.flavor);

        const alternatives = [...flavorMap.entries()]
          .filter(([otherKey]) => otherKey !== key)
          .map(([, label]) => label);

        return {
          key: `classify:${isNature ? "nature" : "flavor"}:${herb.key}`,
          title: `${herb.name} · ${isNature ? "药性" : "药味"}`,
          prompt: isNature
            ? `${herb.emoji || "🌿"} ${herb.name}\n请选择药性类别。`
            : `${herb.emoji || "🌿"} ${herb.name}\n请选择完整药味组合。`,

          answer,
          flavor: !isNature,
          options: isNature
            ? ["寒凉", "温热", "平性"]
            : shuffle([answer, ...sample(alternatives, 3)]),
          explanation:
            `${herb.name}：药性${herb.nature}，药味${herb.flavor}。` +
            `\n功效：${herb.effect}。`,
          hint: isNature
            ? `原始药性记载：${herb.nature}。`
            : `完整药味共有${unique(splitTerms(herb.flavor)).length}项。`,
          unlock: [herb.name]
        };
      });
    }

    /*
     * 新情境库的answer是编号。
     * 先取答案文字，再打乱选项，避免打乱后答案错位。
     */
    return sample(SCENARIOS, level.prescribe).map(item => {
      const answer = item.options[item.answer];
      const formula = formulaMap.get(answer);

      return {
        key: `scenario:${item.id}`,
        title: `${item.title} · ${item.topic}`,
        prompt: `${item.scene}\n\n${item.question}`,
        answer,
        options: shuffle([...item.options]),
        explanation: item.explanation,
        hint: formula
          ? `相关方剂的功效：${formula.effect}。`
          : `本题知识分类：${item.topic}。请仔细阅读题干。`,
        unlock: formula
          ? formula.herbs
          : activeHerbMap.has(canonicalName(answer))
            ? [answer]
            : []
      };
    });
  }

  function renderQuestion() {
    if (!game || game.finished) return;

    const question = game.questions[game.index];
    if (!question) {
      finishGame();
      return;
    }

    game.locked = false;
    game.hintUsed = false;
    game.selected = new Set();

    updateHeader();

    $("game-content").innerHTML = `
      <div class="question-area">
        <div class="question-text bct-question">
          ${escapeHtml(question.prompt)}
        </div>
        <div class="question-tools">
          <span id="bct-selection" class="selection-count">
            ${question.expected
              ? `需要选择${question.expected.length}项`
              : "请选择一个答案"}
          </span>
          <button type="button" class="small secondary" id="bct-hint">
            查看提示（答对少1分）
          </button>
        </div>
        <div id="bct-hint-content"></div>
        <div id="bct-options" class="${question.expected ? "herb-pool" : "options-grid"}">
          ${question.options.map((option, index) => `
            <button type="button"
              class="${question.expected ? "bct-chip" : "option-btn"}"
              data-option="${index}">
              ${escapeHtml(option)}
            </button>
          `).join("")}
        </div>
        ${question.expected ? `
          <div class="next-area">
            <button type="button" class="primary" id="bct-submit">
              确认提交
            </button>
          </div>
        ` : ""}
        <div id="bct-feedback"></div>
      </div>
    `;

    $("bct-options").querySelectorAll("[data-option]").forEach(button => {
      button.addEventListener("click", () => {
        if (!game || game.locked || game.finished) return;

        const option = question.options[Number(button.dataset.option)];

        if (question.expected) {
          if (game.selected.has(option)) {
            game.selected.delete(option);
          } else {
            if (game.selected.size >= question.expected.length) {
              setText("bct-selection", "已选满，请先取消一项再更换。");
              return;
            }
            game.selected.add(option);
          }

          button.classList.toggle("selected", game.selected.has(option));
          setText(
            "bct-selection",
            `需要${question.expected.length}项，已选${game.selected.size}项`
          );
        } else {
          answerQuestion(option, false);
        }
      });
    });

    $("bct-submit")?.addEventListener("click", () => {
      if (game.selected.size !== question.expected.length) {
        setText(
          "bct-selection",
          `请选满${question.expected.length}项后提交。`
        );
        return;
      }

      answerQuestion([...game.selected], false);
    });

    $("bct-hint").addEventListener("click", () => {
      if (game.locked || game.hintUsed) return;

      game.hintUsed = true;
      game.hints++;
      $("bct-hint").disabled = true;

      $("bct-hint-content").innerHTML = `
        <div class="hint-box">${escapeHtml(question.hint)}</div>
      `;
    });

    const level = LEVELS[game.level];

    startTimer(
      question.expected ? level.formulaTime : level.time,
      () => answerQuestion(
        question.expected ? [...game.selected] : null,
        true
      )
    );
  }

function answerQuestion(selected, timeout) {
  if (!game || game.locked || game.finished) return;

  if (
    !timeout &&
    Number.isFinite(game.deadline) &&
    Date.now() >= game.deadline
  ) {
    timeout = true;
  }

  game.locked = true;

    stopTimer();

    const question = game.questions[game.index];

    const correct = !timeout && (
      question.expected
        ? selected.length === question.expected.length &&
          question.expected.every(name => selected.includes(name))
        : question.flavor
          ? flavorKey(selected) === flavorKey(question.answer)
          : selected === question.answer
    );

    let gained = 0;

    if (correct) {
      game.correct++;
      game.combo++;
      game.maxCombo = Math.max(game.maxCombo, game.combo);

      gained = Math.max(
        1, POINTS[game.mode] - (game.hintUsed ? 1 : 0)
      );

      game.score += gained;
      unlock(question.unlock);
      sound("correct");
    } else {
      if (timeout) game.timeout++;
      else game.wrong++;

      game.combo = 0;

      const userAnswer = Array.isArray(selected)
        ? selected.join("、") || "未选择"
        : selected || "未作答";

      recordWrong(
        question,
        timeout ? `超时：${userAnswer}` : userAnswer
      );

      sound("wrong");
    }

    $("bct-options").querySelectorAll("[data-option]").forEach(button => {
      const option = question.options[Number(button.dataset.option)];
      button.disabled = true;

      const right = question.expected
        ? question.expected.includes(option)
        : question.flavor
          ? flavorKey(option) === flavorKey(question.answer)
          : option === question.answer;

      const chosen = Array.isArray(selected)
        ? selected.includes(option)
        : selected === option;

      if (right) {
        button.style.background = "var(--green-light)";
        button.style.borderColor = "var(--green)";
        button.style.color = "var(--green)";
      } else if (chosen) {
        button.style.background = "#F4E3DF";
        button.style.color = "var(--error)";
      }
    });

    $("bct-hint").disabled = true;
    if ($("bct-submit")) $("bct-submit").disabled = true;

    let extra = "";

    if (question.expected) {
      const chosen = Array.isArray(selected) ? selected : [];

      const missed = question.expected.filter(name => !chosen.includes(name));
      const wrong = chosen.filter(name => !question.expected.includes(name));

      extra = `
        <p>漏选：${escapeHtml(missed.join("、") || "无")}</p>
        <p>错选：${escapeHtml(wrong.join("、") || "无")}</p>
      `;
    }

    $("bct-feedback").innerHTML = `
      <div class="knowledge-card">
        <h4>${correct
          ? `✓ 回答正确，获得${gained}分`
          : timeout ? "⌛ 时间到，本题不计分" : "✗ 回答有误"}</h4>
        <p><strong>正确答案：</strong>${escapeHtml(question.answer)}</p>
        ${extra}
        <p class="bct-question">${escapeHtml(question.explanation)}</p>
        <p class="fun-fact">
          仅用于知识学习，不作为诊断、处方或自行用药依据。
        </p>
      </div>
      <div class="next-area">
        <button type="button" class="primary" id="bct-next">
          ${game.index + 1 >= game.total ? "查看本局成绩" : "下一题"}
        </button>
      </div>
    `;

    updateHeader();

    $("bct-next").addEventListener("click", event => {
      event.currentTarget.disabled = true;

      if (!game || game.finished) return;

      game.index++;
      if (game.index >= game.total) finishGame();
      else renderQuestion();
    }, { once: true });
  }

  function representativeEffect(herb) {
    return splitTerms(herb.effect).slice(0, 2).join("、");
  }

  function startMatch(level) {
    const seen = new Set();

    const pool = shuffle(activeHerbs).filter(herb => {
      const effect = representativeEffect(herb);
      const key = unique(splitTerms(effect)).sort().join("|");

      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    game.pairs = pool.slice(0, level.pairs);
    game.total = game.pairs.length;
    game.cards = shuffle(game.pairs.flatMap(herb => [
      { key: herb.key, type: "herb", text: herb.name, matched: false },
      {
        key: herb.key,
        type: "effect",
        text: representativeEffect(herb),
        matched: false
      }
    ]));

    game.first = null;
    game.matchEnded = false;

    renderMatch();

    startTimer(level.matchTime, () => endMatch(true));
  }

  function renderMatch() {
    if (!game || game.finished || game.matchEnded) return;

    updateHeader();

    $("game-content").innerHTML = `
      <p class="classify-note">
        选择一张药材名称和一张对应功效。每配对成功得3分。
      </p>
      <div class="match-grid" id="bct-match">
        ${game.cards.map((card, index) => `
          <button type="button"
            class="match-cell ${card.matched ? "matched" : ""}
              ${game.first === index ? "selected" : ""}"
            data-card="${index}"
            ${card.matched ? "disabled" : ""}>
            ${escapeHtml(card.text)}
          </button>
        `).join("")}
      </div>
      <div id="bct-match-end"></div>
    `;

    $("bct-match").querySelectorAll("[data-card]").forEach(button => {
      button.addEventListener("click", () => {
        clickMatch(Number(button.dataset.card));
      });
    });
  }

function clickMatch(index) {
  if (!game || game.locked || game.matchEnded || game.finished) return;

  if (
    Number.isFinite(game.deadline) &&
    Date.now() >= game.deadline
  ) {
    endMatch(true);
    return;
  }

  const card = game.cards[index];

    if (!card || card.matched) return;

    if (game.first === null) {
      game.first = index;
      renderMatch();
      return;
    }

    if (game.first === index) {
      game.first = null;
      renderMatch();
      return;
    }

    const firstIndex = game.first;
    const first = game.cards[firstIndex];

    /*
     * 点到同类卡片时改选，不视为一次错误配对。
     */
    if (first.type === card.type) {
      game.first = index;
      renderMatch();
      return;
    }

    if (first.key === card.key) {
      first.matched = true;
      card.matched = true;
      game.first = null;
      game.correct++;
      game.combo++;
      game.maxCombo = Math.max(game.maxCombo, game.combo);
      game.score += POINTS.match;

      unlock([card.key]);
      sound("correct");
      renderMatch();

      if (game.correct >= game.total) endMatch(false);
      return;
    }

    game.wrong++;
    game.combo = 0;
    game.locked = true;
    updateHeader();
    sound("wrong");

    $("bct-match").querySelector(`[data-card="${firstIndex}"]`)
      ?.classList.add("wrong");
    $("bct-match").querySelector(`[data-card="${index}"]`)
      ?.classList.add("wrong");

    const thisRun = runId;

    delayed = setTimeout(() => {
      delayed = null;

      if (
        !game || runId !== thisRun ||
        game.matchEnded || game.finished
      ) return;

      game.first = null;
      game.locked = false;
      renderMatch();
    }, 450);
  }

  function endMatch(timeout) {
    if (!game || game.matchEnded || game.finished) return;

    stopTasks();
    game.matchEnded = true;
    game.locked = true;
    game.timeout = timeout ? game.total - game.correct : 0;

    $("bct-match").querySelectorAll("button").forEach(button => {
      button.disabled = true;
    });

    if (timeout) {
      game.pairs.forEach(herb => {
        const done = game.cards.some(
          card => card.key === herb.key && card.matched
        );

        if (!done) {
          recordWrong({
            key: `match:${herb.key}`,
            title: `${herb.name} · 功效配对`,
            prompt: `请匹配${herb.name}的代表性功效`,
            answer: representativeEffect(herb),
            explanation: herb.effect
          }, "超时，未完成配对");
        }
      });
    }

    $("bct-match-end").innerHTML = `
      <div class="knowledge-card">
        <h4>${timeout ? "⌛ 时间到" : "✓ 全部配对完成"}</h4>
        ${game.pairs.map(herb => `
          <p><strong>${escapeHtml(herb.name)}</strong>
          — ${escapeHtml(representativeEffect(herb))}</p>
        `).join("")}
      </div>
      <div class="next-area">
        <button type="button" class="primary" id="bct-match-result">
          查看本局成绩
        </button>
      </div>
    `;

    $("bct-match-result").addEventListener("click", event => {
      event.currentTarget.disabled = true;
      finishGame();
    }, { once: true });
  }

  async function submitRecord(snapshot) {
    /*
     * 保留原后台字段，不擅自假定服务器支持新增字段。
     * 难度先保存在本地，后台难度统计需接口另行支持。
     */
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          game_mode: snapshot.mode,
          score: snapshot.score,
          unlocked_count: save.unlocked.length,
          combo_max: snapshot.maxCombo
        }),
        keepalive: true
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const text = await response.text();

      if (text) {
        const result = JSON.parse(text);
        if (result?.success === false) {
          throw new Error(result.error || "后台未接受成绩");
        }
      }
    } catch (error) {
      console.warn("成绩上传失败，本地成绩已保存：", error);
    }
  }

  function finishGame() {
    if (!game || game.finished) return;

    game.finished = true;
    stopTasks();

    const snapshot = { ...game };
    const bestKey = `${game.mode}:${game.level}`;

    save.score += game.score;
    save.best[bestKey] = Math.max(
      Number(save.best[bestKey]) || 0,
      game.score
    );

    persist();
    sound("finish");
    void submitRecord(snapshot);

    const denominator = game.mode === "match"
      ? game.correct + game.wrong + game.timeout
      : game.total;

    const accuracy = denominator
      ? Math.round(game.correct / denominator * 100)
      : 0;

    const level = LEVELS[game.level];
    const overlay = document.createElement("div");

    overlay.className = "result-overlay";
    overlay.id = "bct-result-overlay";

    overlay.innerHTML = `
      <div class="result-card">
        <h2>${escapeHtml(MODES[game.mode])}完成</h2>
        <p>${level.icon}${level.name}</p>
        <div class="score-big">${game.score} 分</div>
        <div class="result-stats">
          <div class="result-stat">
            <span>${game.mode === "match" ? "完成配对" : "答对"}</span>
            <strong>${game.correct}</strong>
          </div>
          <div class="result-stat">
            <span>${game.mode === "match" ? "错误配对次数" : "答错"}</span>
            <strong>${game.wrong}</strong>
          </div>
          <div class="result-stat">
            <span>${game.mode === "match" ? "未完成配对" : "超时"}</span>
            <strong>${game.timeout}</strong>
          </div>
          <div class="result-stat">
            <span>正确率</span><strong>${accuracy}%</strong>
          </div>
          <div class="result-stat">
            <span>最高连击</span><strong>${game.maxCombo}</strong>
          </div>
          <div class="result-stat">
            <span>提示次数</span><strong>${game.hints}</strong>
          </div>
        </div>
        ${game.mode === "match" ? `
          <p style="font-size:.75rem;color:var(--ink-light)">
            正确率＝成功配对数÷（成功配对数＋错误尝试数＋未完成对数）。
          </p>
        ` : ""}
        <p>累计积分：${save.score}</p>
        <div class="btn-group">
          <button type="button" data-result="home">返回首页</button>
          <button type="button" data-result="wrongbook">查看错题</button>
          <button type="button" class="primary" data-result="again">再来一局</button>
        </div>
      </div>
    `;

    overlay.querySelectorAll("[data-result]").forEach(button => {
      button.addEventListener("click", () => {
        const action = button.dataset.result;
        overlay.remove();
        game = null;

        if (action === "again") App.startGame(snapshot.mode);
        else App.showScreen(action);
      }, { once: true });
    });

    document.body.appendChild(overlay);
  }

  let encyclopediaCategory = "all";

  function renderEncyclopedia() {
    setText("ency-score", save.score);
    setText("ency-count", `${save.unlocked.length}/${activeHerbs.length}`);

    const categories = unique(activeHerbs.map(herb => herb.cat));

    $("ency-filter").innerHTML = `
      ${["all", ...categories].map((category, index) => `
        <button type="button" data-category-index="${index}"
          class="${category === encyclopediaCategory ? "active" : ""}">
          ${escapeHtml(category === "all" ? "全部" : category)}
        </button>
      `).join("")}
    `;

    $("ency-filter").querySelectorAll("[data-category-index]").forEach(button => {
      button.addEventListener("click", () => {
        encyclopediaCategory =
          ["all", ...categories][Number(button.dataset.categoryIndex)];
        renderEncyclopedia();
      });
    });

    const list = activeHerbs.filter(
      herb => encyclopediaCategory === "all" || herb.cat === encyclopediaCategory
    );

    $("ency-content").innerHTML = `
      <p style="font-size:.78rem;color:var(--ink-light);margin-bottom:10px">
        同名及已确认的部分别名条目已合并。
        图鉴数量按当前整理后的条目计算，不强凑500。
      </p>
      <div class="ency-grid">
        ${list.map((herb, index) => {
          const unlocked = save.unlocked.includes(herb.key);

          return `
            <div class="ency-card ${unlocked ? "" : "locked"}"
              data-herb-index="${index}">
              <span class="herb-emoji">
                ${unlocked ? escapeHtml(herb.emoji || "🌿") : "🔒"}
              </span>
              <div class="herb-name">
                ${unlocked ? escapeHtml(herb.name) : "未解锁"}
              </div>
              <div class="herb-cat">${escapeHtml(herb.cat)}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    $("ency-content").querySelectorAll("[data-herb-index]").forEach(card => {
      card.addEventListener("click", () => {
        const herb = list[Number(card.dataset.herbIndex)];
        if (save.unlocked.includes(herb.key)) showHerb(herb);
      });
    });
  }

  function showHerb(herb) {
    const related = formulas.filter(
      formula => formula.herbs.some(
        name => relatedHerbKey(name) === herb.key
      )
    );

    $("ency-content").innerHTML = `
      <button type="button" class="small" id="bct-ency-back">← 返回图鉴</button>
      <div class="card ency-detail">
        <h2>${escapeHtml(herb.emoji || "🌿")} ${escapeHtml(herb.name)}</h2>
        <div class="detail-section">
          <h4>药性与药味</h4>
          <p>${escapeHtml(herb.nature)}；${escapeHtml(herb.flavor)}</p>
        </div>
        <div class="detail-section">
          <h4>归经</h4><p>${escapeHtml(herb.meridian)}</p>
        </div>
        <div class="detail-section">
          <h4>功效</h4><p>${escapeHtml(herb.effect)}</p>
        </div>
        <div class="detail-section">
          <h4>传统主治记载</h4><p>${escapeHtml(herb.indication)}</p>
        </div>
        <div class="detail-section">
          <h4>相关方剂</h4>
          <p>${escapeHtml(
            related.map(item => item.name).join("、") || herb.formula || "暂无"
          )}</p>
          <p style="font-size:.76rem">
            关联可能涉及炮制品，不能据此认定生品与制品可以互换。
          </p>
        </div>
        <div class="bct-warning">${escapeHtml(herb.fun || "")}</div>
        <p class="notice">
          本数据库仍需专业人员审核。传统记载不等同于现代适应证或自行用药建议。
        </p>
      </div>
    `;

    $("bct-ency-back").addEventListener("click", renderEncyclopedia);
  }

  function renderWrongbook() {
    const container = $("wrongbook-content");

    if (!save.wrongbook.length) {
      container.innerHTML = `
        <div class="wrongbook-empty">📖 暂无错题，答错或超时后会自动记录。</div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="question-tools">
        <span>共${save.wrongbook.length}条错题</span>
        <button type="button" class="small danger" id="bct-clear-wrong">清空错题</button>
      </div>
      ${save.wrongbook.map((entry, index) => `
        <div class="wrong-item">
          <h3>${escapeHtml(entry.title)}</h3>
          <div class="wrong-meta">
            ${escapeHtml(MODES[entry.mode] || entry.mode)}
            · ${escapeHtml(LEVELS[entry.difficulty]?.name || "")}
            · ${escapeHtml(new Date(entry.time).toLocaleString("zh-CN"))}
          </div>
          <p class="bct-question">${escapeHtml(entry.question)}</p>
          <p class="answer-wrong">你的答案：${escapeHtml(entry.userAnswer)}</p>
          <p class="answer-right">正确答案：${escapeHtml(entry.correctAnswer)}</p>
          <p class="bct-question">${escapeHtml(entry.explanation)}</p>
          <div class="wrong-actions">
            <button type="button" class="small" data-review="${index}">练习该模式</button>
            <button type="button" class="small danger" data-remove="${index}">移除</button>
          </div>
        </div>
      `).join("")}
    `;

    $("bct-clear-wrong").addEventListener("click", () => {
      if (!confirm("确定清空错题本吗？")) return;
      save.wrongbook = [];
      persist();
      renderWrongbook();
    });

    container.querySelectorAll("[data-review]").forEach(button => {
      button.addEventListener("click", () => {
        App.startGame(save.wrongbook[Number(button.dataset.review)].mode);
      });
    });

    container.querySelectorAll("[data-remove]").forEach(button => {
      button.addEventListener("click", () => {
        save.wrongbook.splice(Number(button.dataset.remove), 1);
        persist();
        renderWrongbook();
      });
    });
  }

  function renderLeaderboard() {
    $("lb-content").innerHTML = `
      <div class="card" style="text-align:center">
        <h2>${playerTitle(save.score)}</h2>
        <div class="score-big">${save.score} 分</div>
        <p>新题库独立存档，旧版存档未删除。</p>
      </div>
      ${Object.entries(LEVELS).map(([levelKey, level]) => `
        <h2 class="section-title">${level.icon}${level.name} · 最佳成绩</h2>
        <div class="lb-list">
          ${Object.entries(MODES).map(([mode, name]) => `
            <div class="lb-item">
              <span>${name}</span>
              <span class="lb-score">
                ${Number(save.best[`${mode}:${levelKey}`]) || 0} 分
              </span>
            </div>
          `).join("")}
        </div>
      `).join("")}
      <div class="notice">
        分难度保存本地最佳成绩。清理网站数据后，本地记录可能丢失。
      </div>
    `;
  }

  const App = {
    setDifficulty(level) {
      if (!Object.hasOwn(LEVELS, level)) return;

      if (game && !game.finished) {
        alert("请先完成或退出当前游戏。");
        return;
      }

      save.difficulty = level;
      persist();
      renderHome();
    },

    showScreen(name) {
      if (!$( `screen-${name}` )) return;

      if (name !== "game" && game && !game.finished) {
        if (!confirm(
  "离开后本局积分不结算，已解锁图鉴和错题记录仍保留。确定离开吗？"
)) return;


        stopTasks();
        runId++;
        game = null;
      }

      if (name !== "game") {
        stopTasks();
        resetTimerDisplay();
      }

      document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.toggle("active", screen.id === `screen-${name}`);
      });

      if (name === "home") renderHome();
      else if (name === "encyclopedia") renderEncyclopedia();
      else if (name === "wrongbook") renderWrongbook();
      else if (name === "leaderboard") renderLeaderboard();

      window.scrollTo(0, 0);
    },

    startGame(mode) {
      if (!Object.hasOwn(MODES, mode)) {
        alert("未知游戏模式。");
        return;
      }

      if (game && !game.finished) {
        if (!confirm("重新开始会放弃当前局，是否继续？")) return;
      }

      stopTasks();
      runId++;
      $("bct-result-overlay")?.remove();

      const level = LEVELS[save.difficulty];

      game = {
        mode,
        level: save.difficulty,
        index: 0,
        total: 0,
        score: 0,
        correct: 0,
        wrong: 0,
        timeout: 0,
        combo: 0,
        maxCombo: 0,
        hints: 0,
        hintUsed: false,
        locked: false,
        finished: false
      };

      this.showScreen("game");

      try {
        if (mode === "match") {
          startMatch(level);
        } else {
          game.questions = makeQuestions(mode, level);
          game.total = game.questions.length;

          if (!game.total) throw new Error("当前模式没有可用题目。");
          renderQuestion();
        }
      } catch (error) {
        stopTasks();
        game = null;
        console.error("开始游戏失败：", error);
        alert(`开始游戏失败：${error.message}`);
        this.showScreen("home");
      }
    },

    leaveGame() {
      this.showScreen("home");
    },

    toggleSound() {
      save.sound = !save.sound;
      persist();
      renderHome();
      if (save.sound) sound("correct");
    },

    resetProgress() {
      if (!confirm("清空本版本积分、图鉴、最佳成绩和错题？旧版备份存档不受影响。")) {
        return;
      }

      stopTasks();
      runId++;
      game = null;
      $("bct-result-overlay")?.remove();

      save = freshSave();
      persist();
      this.showScreen("home");
    }
  };

  window.App = App;

  let initialized = false;

  function initialize() {
    if (initialized) return;
    initialized = true;

    try {
      const required = [
        "screen-home", "screen-game", "game-content",
        "game-title", "game-score", "game-progress",
        "game-timer", "timer-bar-inner",
        "ency-filter", "ency-content",
        "wrongbook-content", "lb-content"
      ];

      const missing = required.filter(id => !$(id));
      if (missing.length) {
        throw new Error(`页面缺少这些区域：${missing.join("、")}`);
      }

      loadSave();
      installInterface();
      renderHome();

      console.info(
        `本草堂已初始化：原始药材${HERBS.length}条，` +
        `整理后药材${activeHerbs.length}条，` +
        `方剂${formulas.length}首，情境题${SCENARIOS.length}道。`
      );
    } catch (error) {
      console.error("本草堂初始化失败：", error);
      alert(`初始化失败：${error.message}`);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();


