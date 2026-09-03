// ===== HERBS DATABASE (65 herbs) =====
const HERBS=[
{id:1,name:"麻黄",emoji:"\u{1F33F}",cat:"解表药",nature:"温",flavor:"辛、微苦",meridian:"肺、膀胱",effect:"发汗散寒、宣肺平喘、利水消肿",indication:"风寒感冒、胸闷喘咳、风水浮肿",formula:"麻黄汤",fun:"麻黄是中药中的'发汗解表第一药'，含麻黄碱，现代感冒药中常见其成分。"},
{id:2,name:"桂枝",emoji:"\u{1F333}",cat:"解表药",nature:"温",flavor:"辛、甘",meridian:"心、肺、膀胱",effect:"发汗解肌、温通经脉、助阳化气",indication:"风寒感冒、寒凝血滞、痰饮蓄水",formula:"桂枝汤",fun:"桂枝就是肉桂的嫩枝，张仲景'群方之冠'桂枝汤以它为主药。"},
{id:3,name:"紫苏",emoji:"\u{1F33F}",cat:"解表药",nature:"温",flavor:"辛",meridian:"肺、脾",effect:"解表散寒、行气和胃",indication:"风寒感冒、咳嗽呕恶、鱼蟹中毒",formula:"香苏散",fun:"吃螃蟹后肚子不舒服？古人就用紫苏叶煮水解鱼蟹毒。"},
{id:4,name:"生姜",emoji:"\u{1F331}",cat:"解表药",nature:"微温",flavor:"辛",meridian:"肺、脾、胃",effect:"解表散寒、温中止呕、化痰止咳",indication:"风寒感冒、胃寒呕吐、寒痰咳嗽",formula:"桂枝汤",fun:"'冬吃萝卜夏吃姜'是千年养生智慧。"},
{id:5,name:"荆芥",emoji:"\u{1F33E}",cat:"解表药",nature:"微温",flavor:"辛",meridian:"肺、肝",effect:"解表散风、透疹消疮、止血",indication:"感冒头痛、麻疹不透、疮疡初起",formula:"银翘散",fun:"荆芥炒黑后能止血，生用发散、炒用止血，炮制之妙。"},
{id:6,name:"防风",emoji:"\u{1F343}",cat:"解表药",nature:"微温",flavor:"辛、甘",meridian:"膀胱、肝、脾",effect:"祛风解表、胜湿止痛、止痉",indication:"感冒头痛、风湿痹痛、破伤风",formula:"玉屏风散",fun:"防风能'防御风邪'，是治疗风证的要药。"},
{id:7,name:"羌活",emoji:"\u{1F33F}",cat:"解表药",nature:"温",flavor:"辛、苦",meridian:"膀胱、肾",effect:"散寒祛风、除湿止痛",indication:"风寒感冒、头痛身痛、风湿痹痛",formula:"九味羌活汤",fun:"羌活因产于古羌族地区而得名，善治上半身风寒湿痛。"},
{id:8,name:"白芷",emoji:"\u{1F33C}",cat:"解表药",nature:"温",flavor:"辛",meridian:"肺、胃、大肠",effect:"解表散寒、祛风止痛、宣通鼻窍",indication:"感冒头痛、鼻塞流涕、牙痛",formula:"川芎茶调散",fun:"白芷是古代美容方中的常客，很多宫廷面膜都含白芷。"},
{id:9,name:"薄荷",emoji:"\u{1F33F}",cat:"解表药",nature:"凉",flavor:"辛",meridian:"肺、肝",effect:"疏散风热、清利头目、利咽透疹",indication:"风热感冒、头痛目赤、咽喉肿痛",formula:"银翘散",fun:"薄荷含薄荷醇，入口清凉，是少数能'凉'到嘴里的中药。"},
{id:10,name:"桑叶",emoji:"\u{1F343}",cat:"解表药",nature:"寒",flavor:"甘、苦",meridian:"肺、肝",effect:"疏散风热、清肺润燥、清肝明目",indication:"风热感冒、肺热咳嗽、目赤昏花",formula:"桑菊饮",fun:"蚕宝宝最爱吃桑叶，桑叶泡茶还能降血糖。"},
{id:11,name:"菊花",emoji:"\u{1F33C}",cat:"解表药",nature:"微寒",flavor:"甘、苦",meridian:"肺、肝",effect:"疏散风热、平肝明目、清热解毒",indication:"风热感冒、头痛眩晕、目赤肿痛",formula:"桑菊饮",fun:"陶渊明'采菊东篱下'，菊花更是清肝明目良药。"},
{id:12,name:"柴胡",emoji:"\u{1F33F}",cat:"解表药",nature:"微寒",flavor:"辛、苦",meridian:"肝、胆、肺",effect:"和解退热、疏肝解郁、升举阳气",indication:"感冒发热、胸胁胀痛、子宫脱垂",formula:"小柴胡汤",fun:"柴胡是'和解少阳'的代表药，小柴胡汤在日本也是家庭常备药。"},
{id:13,name:"葛根",emoji:"\u{1F331}",cat:"解表药",nature:"凉",flavor:"甘、辛",meridian:"脾、胃、肺",effect:"解肌退热、生津止渴、透疹升阳",indication:"发热口渴、麻疹不透、脾虚泄泻",formula:"葛根汤",fun:"葛根粉是南方常见的养生食品，能解酒醒脾。"},
{id:14,name:"石膏",emoji:"\u{1FAA8}",cat:"清热药",nature:"大寒",flavor:"甘、辛",meridian:"肺、胃",effect:"清热泻火、除烦止渴",indication:"高热不退、肺热喘咳、胃火牙痛",formula:"白虎汤",fun:"石膏和做豆腐的石膏是同一种矿物，生用清热、煅用敛疮。"},
{id:15,name:"知母",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦、甘",meridian:"肺、胃、肾",effect:"清热泻火、生津润燥",indication:"高热烦渴、肺热咳嗽、骨蒸潮热",formula:"知柏地黄丸",fun:"知母常与黄柏搭配，'知柏地黄丸'是滋阴降火经典。"},
{id:16,name:"黄芩",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"肺、胆、脾、大肠",effect:"清热燥湿、泻火解毒、止血安胎",indication:"湿热痞满、肺热咳嗽、高热烦渴",formula:"小柴胡汤",fun:"黄芩善清上焦之火，是治疗肺热的要药。"},
{id:17,name:"黄连",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"心、脾、胃、胆",effect:"清热燥湿、泻火解毒",indication:"湿热痞满、呕吐吞酸、高热神昏",formula:"黄连解毒汤",fun:"'哑巴吃黄连，有苦说不出'，黄连之苦堪称中药之最。"},
{id:18,name:"黄柏",emoji:"\u{1F333}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"肾、膀胱",effect:"清热燥湿、泻火除蒸、解毒疗疮",indication:"湿热泻痢、黄疸、骨蒸劳热",formula:"知柏地黄丸",fun:"黄柏取自黄檗树的树皮，其黄色素可作天然染料。"},
{id:19,name:"金银花",emoji:"\u{1F33C}",cat:"清热药",nature:"寒",flavor:"甘",meridian:"肺、心、胃",effect:"清热解毒、疏散风热",indication:"痈肿疔疮、喉痹、风热感冒",formula:"银翘散",fun:"金银花初开白色后变黄色，金银相间故得此名。"},
{id:20,name:"连翘",emoji:"\u{1F33C}",cat:"清热药",nature:"微寒",flavor:"苦",meridian:"肺、心、小肠",effect:"清热解毒、消肿散结、疏散风热",indication:"痈疽瘰疬、风热感冒、温热入营",formula:"银翘散",fun:"连翘是春天的黄花使者，也是银翘散的核心药材。"},
{id:21,name:"蒲公英",emoji:"\u{1F33C}",cat:"清热药",nature:"寒",flavor:"苦、甘",meridian:"肝、胃",effect:"清热解毒、消肿散结、利湿通淋",indication:"痈肿疔毒、乳痈、热淋涩痛",formula:"五味消毒饮",fun:"蒲公英被称为'药草皇后'，路边常见的野花竟是消炎良药。"},
{id:22,name:"板蓝根",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"心、胃",effect:"清热解毒、凉血利咽",indication:"温毒发斑、痄腮喉痹、丹毒",formula:"普济消毒饮",fun:"板蓝根颗粒是中国家庭的'万能感冒药'，其实更适合热毒证。"},
{id:23,name:"生地黄",emoji:"\u{1F331}",cat:"清热药",nature:"寒",flavor:"甘、苦",meridian:"心、肝、肾",effect:"清热凉血、养阴生津",indication:"热入营血、温毒发斑、津伤便秘",formula:"六味地黄丸",fun:"生地黄炮制变成熟地黄后，从清热变为补血，药性大转变。"},
{id:24,name:"牡丹皮",emoji:"\u{1F33A}",cat:"清热药",nature:"微寒",flavor:"苦、辛",meridian:"心、肝、肾",effect:"清热凉血、活血化瘀",indication:"温毒发斑、吐血衄血、经闭痛经",formula:"六味地黄丸",fun:"牡丹虽是花中之王，其根皮却是清热凉血良药。"},
{id:25,name:"人参",emoji:"\u{1F331}",cat:"补益药",nature:"微温",flavor:"甘、微苦",meridian:"脾、肺、心、肾",effect:"大补元气、复脉固脱、补脾益肺",indication:"体虚欲脱、气短喘促、脾虚食少",formula:"四君子汤",fun:"人参是'百草之王'，野山参生长缓慢，百年老参价值连城。"},
{id:26,name:"黄芪",emoji:"\u{1F33F}",cat:"补益药",nature:"微温",flavor:"甘",meridian:"脾、肺",effect:"补气升阳、固表止汗、利水消肿",indication:"气虚乏力、自汗盗汗、水肿",formula:"补中益气汤",fun:"黄芪补气而不燥，是'补气诸药之最'。"},
{id:27,name:"白术",emoji:"\u{1F33F}",cat:"补益药",nature:"温",flavor:"苦、甘",meridian:"脾、胃",effect:"补气健脾、燥湿利水、止汗安胎",indication:"脾虚食少、腹胀泄泻、痰饮水肿",formula:"四君子汤",fun:"白术是健脾第一药，几乎所有补脾方剂都有它。"},
{id:28,name:"甘草",emoji:"\u{1F33F}",cat:"补益药",nature:"平",flavor:"甘",meridian:"心、肺、脾、胃",effect:"补脾益气、清热解毒、调和诸药",indication:"脾胃虚弱、咳嗽咽痛、药物中毒",formula:"四君子汤",fun:"甘草被称为'国老'，能调和百药，几乎每个方剂都有它。"},
{id:29,name:"当归",emoji:"\u{1F33F}",cat:"补益药",nature:"温",flavor:"甘、辛",meridian:"肝、心、脾",effect:"补血活血、调经止痛、润肠通便",indication:"血虚萎黄、月经不调、经闭痛经",formula:"四物汤",fun:"当归名取'应当归来'之意，是妇科补血圣药。"},
{id:30,name:"熟地黄",emoji:"\u{1F331}",cat:"补益药",nature:"微温",flavor:"甘",meridian:"肝、肾",effect:"补血滋阴、益精填髓",indication:"血虚萎黄、肝肾阴虚、腰膝酸软",formula:"六味地黄丸",fun:"熟地黄由生地黄九蒸九晒而成，色黑如漆，味甜如蜜。"},
{id:31,name:"白芍",emoji:"\u{1F33C}",cat:"补益药",nature:"微寒",flavor:"苦、酸",meridian:"肝、脾",effect:"养血调经、敛阴止汗、柔肝止痛",indication:"血虚萎黄、月经不调、自汗盗汗",formula:"四物汤",fun:"白芍与赤芍同源，白芍偏补、赤芍偏泻。"},
{id:32,name:"枸杞子",emoji:"\u{1FAD0}",cat:"补益药",nature:"平",flavor:"甘",meridian:"肝、肾",effect:"滋补肝肾、益精明目",indication:"腰膝酸软、头晕目眩、视力减退",formula:"杞菊地黄丸",fun:"枸杞是药食同源的典范，宁夏枸杞甲天下。"},
{id:33,name:"麦冬",emoji:"\u{1F33F}",cat:"补益药",nature:"微寒",flavor:"甘、微苦",meridian:"心、肺、胃",effect:"养阴生津、润肺清心",indication:"肺燥干咳、阴虚劳嗽、津伤口渴",formula:"生脉散",fun:"麦冬的根中间有一条细芯，像麦子的穗。"},
{id:34,name:"石斛",emoji:"\u{1F33F}",cat:"补益药",nature:"微寒",flavor:"甘",meridian:"胃、肾",effect:"益胃生津、滋阴清热",indication:"口干烦渴、胃阴不足、目暗不明",formula:"石斛夜光丸",fun:"铁皮石斛被称为'中华九大仙草之首'。"},
{id:35,name:"大枣",emoji:"\u{1FAD1}",cat:"补益药",nature:"温",flavor:"甘",meridian:"脾、胃、心",effect:"补中益气、养血安神、缓和药性",indication:"脾虚食少、乏力便溏、妇人脏躁",formula:"桂枝汤",fun:"'日食三枣，百岁不显老'。"},
{id:36,name:"阿胶",emoji:"\u{1F9C9}",cat:"补益药",nature:"平",flavor:"甘",meridian:"肺、肝、肾",effect:"补血滋阴、润燥止血",indication:"血虚萎黄、眩晕心悸、肺燥咳嗽",formula:"阿胶鸡子黄汤",fun:"阿胶以驴皮为原料，山东东阿县所产最为道地。"},
{id:37,name:"陈皮",emoji:"\u{1F34A}",cat:"理气药",nature:"温",flavor:"辛、苦",meridian:"脾、肺",effect:"理气健脾、燥湿化痰",indication:"脘腹胀满、食少吐泻、咳嗽痰多",formula:"二陈汤",fun:"陈皮越陈越好，广东新会陈皮最为著名。"},
{id:38,name:"枳实",emoji:"\u{1F34A}",cat:"理气药",nature:"微寒",flavor:"苦、辛",meridian:"脾、胃",effect:"破气消积、化痰散痞",indication:"积滞内停、痞满胀痛、大便不畅",formula:"枳实导滞丸",fun:"枳实就是未成熟的橘子，小而性烈。"},
{id:39,name:"木香",emoji:"\u{1F33F}",cat:"理气药",nature:"温",flavor:"辛、苦",meridian:"脾、胃、大肠、胆",effect:"行气止痛、健脾消食",indication:"胸胁胀痛、泻痢后重、食积不消",formula:"香砂六君子汤",fun:"木香香气浓郁，善调胃肠气滞。"},
{id:40,name:"香附",emoji:"\u{1F33F}",cat:"理气药",nature:"平",flavor:"辛、微苦",meridian:"肝、脾、三焦",effect:"疏肝解郁、理气宽中、调经止痛",indication:"肝郁气滞、胸胁胀痛、月经不调",formula:"逍遥散",fun:"李时珍称香附为'气病之总司，女科之主帅'。"},
{id:41,name:"厚朴",emoji:"\u{1F333}",cat:"理气药",nature:"温",flavor:"苦、辛",meridian:"脾、胃、肺、大肠",effect:"燥湿消痰、下气除满",indication:"湿阻中焦、脘腹胀满、咳喘痰多",formula:"平胃散",fun:"厚朴树皮厚实芳香，是化湿行气的代表药。"},
{id:42,name:"川芎",emoji:"\u{1F33F}",cat:"活血化瘀药",nature:"温",flavor:"辛",meridian:"肝、胆、心包",effect:"活血行气、祛风止痛",indication:"头痛眩晕、胸胁疼痛、风湿痹痛",formula:"血府逐瘀汤",fun:"川芎被称为'血中气药'，善治头痛。"},
{id:43,name:"丹参",emoji:"\u{1F33F}",cat:"活血化瘀药",nature:"微寒",flavor:"苦",meridian:"心、肝",effect:"活血祛瘀、通经止痛、清心除烦",indication:"经闭痛经、胸痹心痛、疮痈肿痛",formula:"丹参饮",fun:"一味丹参饮，功同四物汤。"},
{id:44,name:"红花",emoji:"\u{1F33A}",cat:"活血化瘀药",nature:"温",flavor:"辛",meridian:"心、肝",effect:"活血通经、散瘀止痛",indication:"经闭痛经、恶露不行、跌打损伤",formula:"桃红四物汤",fun:"红花与藏红花不同，红花性温力缓。"},
{id:45,name:"桃仁",emoji:"\u{1F351}",cat:"活血化瘀药",nature:"平",flavor:"苦、甘",meridian:"心、肝、大肠",effect:"活血祛瘀、润肠通便、止咳平喘",indication:"经闭痛经、跌打损伤、肠燥便秘",formula:"桃红四物汤",fun:"桃仁就是桃子的种子，既能活血又能润肠。"},
{id:46,name:"三七",emoji:"\u{1F33F}",cat:"活血化瘀药",nature:"温",flavor:"甘、微苦",meridian:"肝、胃",effect:"散瘀止血、消肿定痛",indication:"各种出血、跌打损伤、瘀血疼痛",formula:"云南白药",fun:"三七是云南白药的核心成分，'止血之神药'。"},
{id:47,name:"牛膝",emoji:"\u{1F33F}",cat:"活血化瘀药",nature:"平",flavor:"苦、酸",meridian:"肝、肾",effect:"活血通经、补肝肾、强筋骨、引血下行",indication:"经闭痛经、腰膝酸痛、头痛眩晕",formula:"血府逐瘀汤",fun:"牛膝善治下肢疾病，还能引药下行。"},
{id:48,name:"益母草",emoji:"\u{1F33F}",cat:"活血化瘀药",nature:"微寒",flavor:"苦、辛",meridian:"肝、心包、膀胱",effect:"活血调经、利尿消肿、清热解毒",indication:"月经不调、经闭痛经、水肿",formula:"益母草颗粒",fun:"益母草是'益于母亲之草'，妇科圣药。"},
{id:49,name:"茯苓",emoji:"\u{1F344}",cat:"祛湿药",nature:"平",flavor:"甘、淡",meridian:"心、肺、脾、肾",effect:"利水渗湿、健脾宁心",indication:"水肿尿少、脾虚泄泻、心悸失眠",formula:"四君子汤",fun:"茯苓长在松树根上，是'利水渗湿第一药'。"},
{id:50,name:"泽泻",emoji:"\u{1F33F}",cat:"祛湿药",nature:"寒",flavor:"甘、淡",meridian:"肾、膀胱",effect:"利水渗湿、泄热",indication:"小便不利、水肿胀满、痰饮眩晕",formula:"六味地黄丸",fun:"泽泻利水而不伤阴，是六味地黄丸中'三泻'之一。"},
{id:51,name:"薏苡仁",emoji:"\u{1F33E}",cat:"祛湿药",nature:"微寒",flavor:"甘、淡",meridian:"脾、胃、肺",effect:"利水渗湿、健脾止泻、清热排脓",indication:"水肿脚气、脾虚泄泻、湿痹拘挛",formula:"参苓白术散",fun:"薏苡仁就是薏米，夏天煮薏米水祛湿。"},
{id:52,name:"苍术",emoji:"\u{1F33F}",cat:"祛湿药",nature:"温",flavor:"辛、苦",meridian:"脾、胃、肝",effect:"燥湿健脾、祛风散寒、明目",indication:"湿阻中焦、腹胀泄泻、风寒湿痹",formula:"平胃散",fun:"古人熏苍术来消毒空气。"},
{id:53,name:"藿香",emoji:"\u{1F33F}",cat:"祛湿药",nature:"微温",flavor:"辛",meridian:"脾、胃、肺",effect:"化湿醒脾、解暑发表、止呕",indication:"湿阻中焦、暑湿感冒、呕吐泄泻",formula:"藿香正气散",fun:"藿香正气水是夏日神药。"},
{id:54,name:"酸枣仁",emoji:"\u{1FAD2}",cat:"安神药",nature:"平",flavor:"甘、酸",meridian:"心、肝、胆",effect:"养心益肝、安神敛汗",indication:"虚烦不眠、惊悸多梦、体虚多汗",formula:"酸枣仁汤",fun:"酸枣仁是失眠者的福音。"},
{id:55,name:"远志",emoji:"\u{1F33F}",cat:"安神药",nature:"温",flavor:"苦、辛",meridian:"心、肾、肺",effect:"安神益智、祛痰开窍、消散痈肿",indication:"失眠多梦、健忘惊悸、咳嗽痰多",formula:"归脾汤",fun:"远志寓意'志向远大'，能益智健脑。"},
{id:56,name:"龙骨",emoji:"\u{1F9B4}",cat:"安神药",nature:"平",flavor:"甘、涩",meridian:"心、肝、肾",effect:"镇惊安神、平肝潜阳、收敛固涩",indication:"惊悸失眠、癫痫狂乱、自汗盗汗",formula:"桂枝甘草龙骨牡蛎汤",fun:"龙骨其实是古代哺乳动物的化石。"},
{id:57,name:"五味子",emoji:"\u{1FAD0}",cat:"补益药",nature:"温",flavor:"酸、甘",meridian:"肺、心、肾",effect:"收敛固涩、益气生津、补肾宁心",indication:"久咳虚喘、自汗盗汗、遗精滑精",formula:"生脉散",fun:"五味子皮肉甘酸核中辛苦咸，五味俱全。"},
{id:58,name:"山药",emoji:"\u{1F360}",cat:"补益药",nature:"平",flavor:"甘",meridian:"脾、肺、肾",effect:"补脾养胃、生津益肺、补肾涩精",indication:"脾虚食少、肺虚喘咳、肾虚遗精",formula:"六味地黄丸",fun:"河南焦作所产最为道地，称'怀山药'。"},
{id:59,name:"山茱萸",emoji:"\u{1FAD2}",cat:"补益药",nature:"微温",flavor:"酸、涩",meridian:"肝、肾",effect:"补益肝肾、收涩固脱",indication:"腰膝酸软、头晕耳鸣、遗精尿频",formula:"六味地黄丸",fun:"重阳节佩戴茱萸的习俗与之相关。"},
{id:60,name:"杏仁",emoji:"\u{1F330}",cat:"止咳药",nature:"微温",flavor:"苦",meridian:"肺、大肠",effect:"降气止咳平喘、润肠通便",indication:"咳嗽气喘、肠燥便秘",formula:"麻黄汤",fun:"杏仁分苦杏仁和甜杏仁，苦杏仁入药。"},
{id:61,name:"桔梗",emoji:"\u{1F33C}",cat:"止咳药",nature:"平",flavor:"苦、辛",meridian:"肺",effect:"宣肺利咽、祛痰排脓",indication:"咳嗽痰多、咽喉肿痛、肺痈吐脓",formula:"银翘散",fun:"桔梗是'舟楫之剂'，能载药上行。"},
{id:62,name:"半夏",emoji:"\u{1F33F}",cat:"化痰药",nature:"温",flavor:"辛",meridian:"脾、胃、肺",effect:"燥湿化痰、降逆止呕、消痞散结",indication:"痰多咳喘、痰饮眩悸、风痰眩晕",formula:"二陈汤",fun:"半夏有毒须经炮制后方可入药。"},
{id:63,name:"龙胆草",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"肝、胆",effect:"清热燥湿、泻肝胆火",indication:"湿热黄疸、阴肿阴痒、带下湿疹",formula:"龙胆泻肝汤",fun:"龙胆草苦寒至极，专泻肝胆实火。"},
{id:64,name:"柏子仁",emoji:"\u{1F332}",cat:"安神药",nature:"平",flavor:"甘",meridian:"心、肾、大肠",effect:"养心安神、润肠通便",indication:"虚烦失眠、心悸怔忡、肠燥便秘",formula:"天王补心丹",fun:"柏子仁取自侧柏的种仁，既安神又润肠。"},
{id:65,name:"龙眼肉",emoji:"\u{1FAD0}",cat:"补益药",nature:"温",flavor:"甘",meridian:"心、脾",effect:"补益心脾、养血安神",indication:"气血不足、心悸怔忡、健忘失眠",formula:"归脾汤",fun:"龙眼肉即桂圆肉，是补血安神佳品。"}
];

// ===== FORMULAS DATABASE (16 formulas) =====
const FORMULAS=[
{id:1,name:"六味地黄丸",effect:"滋阴补肾",indication:"肾阴亏损、头晕耳鸣、腰膝酸软、骨蒸潮热、盗汗遗精",herbs:["熟地黄","山茱萸","山药","泽泻","茯苓","牡丹皮"],source:"钱乙《小儿药证直诀》"},
{id:2,name:"四君子汤",effect:"益气健脾",indication:"脾胃气虚、面色萎白、语声低微、四肢无力、食少便溏",herbs:["人参","白术","茯苓","甘草"],source:"《太平惠民和剂局方》"},
{id:3,name:"桂枝汤",effect:"解肌发表、调和营卫",indication:"外感风寒表虚证、头痛发热、汗出恶风",herbs:["桂枝","白芍","生姜","大枣","甘草"],source:"张仲景《伤寒论》"},
{id:4,name:"麻黄汤",effect:"发汗解表、宣肺平喘",indication:"外感风寒表实证、恶寒发热、无汗而喘",herbs:["麻黄","桂枝","杏仁","甘草"],source:"张仲景《伤寒论》"},
{id:5,name:"逍遥散",effect:"疏肝解郁、养血健脾",indication:"肝郁血虚脾弱证、两胁作痛、头痛目眩",herbs:["柴胡","当归","白芍","白术","茯苓","甘草","薄荷","生姜"],source:"《太平惠民和剂局方》"},
{id:6,name:"银翘散",effect:"辛凉透表、清热解毒",indication:"温病初起、发热微恶风寒、头痛口渴",herbs:["金银花","连翘","桔梗","薄荷","荆芥","牛蒡子","淡豆豉","竹叶","芦根","甘草"],source:"吴鞠通《温病条辨》"},
{id:7,name:"小柴胡汤",effect:"和解少阳",indication:"少阳证、寒热往来、胸胁苦满、不欲饮食",herbs:["柴胡","黄芩","人参","半夏","甘草","生姜","大枣"],source:"张仲景《伤寒论》"},
{id:8,name:"补中益气汤",effect:"补中益气、升阳举陷",indication:"脾虚气陷证、饮食减少、体倦肢软",herbs:["黄芪","人参","白术","甘草","当归","陈皮","升麻","柴胡"],source:"李东垣《脾胃论》"},
{id:9,name:"归脾汤",effect:"益气补血、健脾养心",indication:"心脾气血两虚证、心悸怔忡、健忘失眠",herbs:["人参","黄芪","白术","茯苓","甘草","当归","酸枣仁","远志","木香","龙眼肉","生姜","大枣"],source:"严用和《济生方》"},
{id:10,name:"天王补心丹",effect:"滋阴养血、补心安神",indication:"阴虚血少神志不安、心悸失眠、虚烦神疲",herbs:["酸枣仁","柏子仁","当归","生地黄","人参","玄参","丹参","天冬","麦冬","茯苓","远志","桔梗"],source:"《摄生秘剖》"},
{id:11,name:"血府逐瘀汤",effect:"活血化瘀、行气止痛",indication:"胸中血瘀证、胸痛头痛如针刺",herbs:["桃仁","红花","当归","生地黄","川芎","赤芍","牛膝","桔梗","柴胡","枳壳","甘草"],source:"王清任《医林改错》"},
{id:12,name:"二陈汤",effect:"燥湿化痰、理气和中",indication:"湿痰证、咳嗽痰多色白易咯",herbs:["半夏","陈皮","茯苓","甘草"],source:"《太平惠民和剂局方》"},
{id:13,name:"四物汤",effect:"补血和血",indication:"营血虚滞证、头晕目眩、月经不调",herbs:["当归","川芎","白芍","熟地黄"],source:"《太平惠民和剂局方》"},
{id:14,name:"生脉散",effect:"益气生津、敛阴止汗",indication:"气阴两伤证、汗多神疲、气短懒言",herbs:["人参","麦冬","五味子"],source:"李东垣《内外伤辨惑论》"},
{id:15,name:"龙胆泻肝汤",effect:"清泻肝胆实火、清利肝经湿热",indication:"肝胆实火上炎、头痛目赤、胁痛口苦",herbs:["龙胆草","黄芩","栀子","泽泻","木通","车前子","当归","生地黄","柴胡","甘草"],source:"《医方集解》"},
{id:16,name:"玉屏风散",effect:"益气固表止汗",indication:"表虚自汗证、易感风邪、汗出恶风",herbs:["黄芪","白术","防风"],source:"《医方类聚》"}
];

// ===== SYMPTOMS DATABASE (16 scenarios) =====
const SYMPTOMS=[
{id:1,patient:"张先生，45岁",symptoms:"头晕目眩，腰膝酸软，潮热盗汗，耳鸣如蝉，口干咽燥，舌红少苔，脉细数",answer:"六味地黄丸",explain:"此为肾阴亏损之证。肾开窍于耳，肾阴不足则耳鸣；阴虚内热则潮热盗汗。治宜滋阴补肾。",distractors:["补中益气汤","逍遥散","归脾汤"]},
{id:2,patient:"李女士，32岁",symptoms:"面色萎白，语声低微，四肢乏力，食少便溏，脘腹胀满，舌淡苔白，脉细弱",answer:"四君子汤",explain:"此为脾胃气虚之证。脾主四肢，脾虚则四肢乏力；运化失常则食少便溏。治宜益气健脾。",distractors:["六味地黄丸","血府逐瘀汤","龙胆泻肝汤"]},
{id:3,patient:"王大爷，60岁",symptoms:"恶寒发热，头痛无汗，身体疼痛，喘咳痰白，舌苔薄白，脉浮紧",answer:"麻黄汤",explain:"此为外感风寒表实证。寒邪束表则无汗；肺气不宣则喘咳。治宜发汗解表、宣肺平喘。",distractors:["桂枝汤","银翘散","小柴胡汤"]},
{id:4,patient:"赵女士，28岁",symptoms:"两胁胀痛，情志抑郁，头痛目眩，口燥咽干，神疲食少，月经不调",answer:"逍遥散",explain:"此为肝郁血虚脾弱之证。肝气郁结则胁痛抑郁；血虚则头晕目眩。治宜疏肝解郁、养血健脾。",distractors:["四君子汤","归脾汤","天王补心丹"]},
{id:5,patient:"陈先生，55岁",symptoms:"发热微恶风寒，头痛口渴，咽喉肿痛，舌尖红，苔薄黄，脉浮数",answer:"银翘散",explain:"此为温病初起，风热袭表。热邪伤津则口渴；热毒上攻则咽痛。治宜辛凉透表、清热解毒。",distractors:["麻黄汤","桂枝汤","小柴胡汤"]},
{id:6,patient:"孙女士，40岁",symptoms:"寒热往来，胸胁苦满，默默不欲饮食，心烦喜呕，口苦咽干，目眩",answer:"小柴胡汤",explain:"此为少阳证。邪在半表半里，正邪交争则寒热往来；胆火上炎则口苦。治宜和解少阳。",distractors:["逍遥散","龙胆泻肝汤","银翘散"]},
{id:7,patient:"周先生，50岁",symptoms:"饮食减少，体倦肢软，少气懒言，面色萎黄，大便稀溏，气短自汗，脱肛",answer:"补中益气汤",explain:"此为脾胃气虚、中气下陷之证。脾虚则食少便溏；气虚下陷则脱肛。治宜补中益气、升阳举陷。",distractors:["四君子汤","归脾汤","六味地黄丸"]},
{id:8,patient:"吴女士，35岁",symptoms:"心悸怔忡，健忘失眠，盗汗虚热，体倦食少，面色萎黄，月经量多色淡",answer:"归脾汤",explain:"此为心脾气血两虚之证。心血不足则心悸失眠；脾气虚则食少体倦。治宜益气补血、健脾养心。",distractors:["天王补心丹","四君子汤","逍遥散"]},
{id:9,patient:"郑先生，48岁",symptoms:"心悸失眠，虚烦神疲，梦遗健忘，大便干结，口舌生疮，舌红少苔，脉细数",answer:"天王补心丹",explain:"此为阴虚血少、心神不安之证。阴虚则虚烦；血少则心悸健忘。治宜滋阴养血、补心安神。",distractors:["归脾汤","酸枣仁汤","六味地黄丸"]},
{id:10,patient:"刘先生，42岁",symptoms:"胸痛头痛，痛如针刺而有定处，心悸怔忡，失眠多梦，急躁易怒",answer:"血府逐瘀汤",explain:"此为胸中血瘀之证。瘀血阻滞则刺痛有定处；心神失养则心悸失眠。治宜活血化瘀、行气止痛。",distractors:["归脾汤","逍遥散","天王补心丹"]},
{id:11,patient:"黄女士，38岁",symptoms:"咳嗽痰多，色白易咯，恶心呕吐，胸膈痞闷，肢体困重，舌苔白滑，脉滑",answer:"二陈汤",explain:"此为湿痰内阻之证。脾失健运，聚湿生痰；痰阻气机则胸闷恶心。治宜燥湿化痰、理气和中。",distractors:["逍遥散","补中益气汤","银翘散"]},
{id:12,patient:"马先生，30岁",symptoms:"头晕目眩，心悸失眠，面色无华，月经不调，脐腹作痛，舌淡，脉细弦",answer:"四物汤",explain:"此为营血虚滞之证。血虚不能上荣则头晕面黄；血虚冲任失调则月经异常。治宜补血和血。",distractors:["归脾汤","逍遥散","六味地黄丸"]},
{id:13,patient:"钱女士，45岁",symptoms:"汗多神疲，体倦乏力，气短懒言，咽干口渴，舌干红少苔，脉虚数",answer:"生脉散",explain:"此为气阴两伤之证。气虚则神疲乏力；阴伤则咽干口渴。治宜益气生津、敛阴止汗。",distractors:["四君子汤","补中益气汤","六味地黄丸"]},
{id:14,patient:"何先生，36岁",symptoms:"头痛目赤，胁痛口苦，耳聋耳肿，小便短赤，大便秘结，舌红苔黄，脉弦数有力",answer:"龙胆泻肝汤",explain:"此为肝胆实火上炎之证。肝火上攻则头痛目赤；胆火上逆则口苦耳聋。治宜清泻肝胆实火。",distractors:["小柴胡汤","逍遥散","银翘散"]},
{id:15,patient:"林女士，50岁",symptoms:"虚烦不眠，触事易惊，心悸盗汗，头目眩晕，咽干口燥，舌红，脉细弦",answer:"天王补心丹",explain:"此为阴虚血少、心神不安之证。肝血虚则魂不守舍而失眠；虚热内生则咽干口燥。治宜养血安神。",distractors:["归脾汤","逍遥散","六味地黄丸"]},
{id:16,patient:"杨先生，55岁",symptoms:"自汗恶风，面色㿠白，体虚易感冒，舌淡苔白，脉浮虚",answer:"玉屏风散",explain:"此为表虚自汗之证。卫气不固则自汗恶风；腠理疏松则易感外邪。治宜益气固表止汗。",distractors:["四君子汤","补中益气汤","桂枝汤"]}
];

// ===== UTILITY FUNCTIONS =====
const Utils={
  shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;},
  pick(arr,n){return Utils.shuffle(arr).slice(0,n);},
  pickOne(arr){return arr[Math.floor(Math.random()*arr.length)];},
  $(id){return document.getElementById(id);},
  getHerb(name){return HERBS.find(h=>h.name===name);},
  getFormula(name){return FORMULAS.find(f=>f.name===name);},
  natureBadge(n){
    if(n.includes('寒'))return '<span class="badge badge-cold">'+n+'</span>';
    if(n.includes('凉'))return '<span class="badge badge-cold">'+n+'</span>';
    if(n.includes('温'))return '<span class="badge badge-warm">'+n+'</span>';
    if(n.includes('热'))return '<span class="badge badge-hot">'+n+'</span>';
    return '<span class="badge badge-neutral">'+n+'</span>';
  },
  natureCat(n){
    if(n.includes('寒'))return '寒';
    if(n.includes('凉'))return '凉';
    if(n.includes('温')||n.includes('热'))return '温';
    return '平';
  },
  flavorCat(f){
    const fs=['酸','苦','甘','辛','咸'];
    for(const x of fs){if(f.includes(x))return x;}
    return '甘';
  },
  playSound(type){
    try{
      const ctx=new(window.AudioContext||window.webkitAudioContext)();
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.connect(gain);gain.connect(ctx.destination);
      if(type==='correct'){
        osc.frequency.setValueAtTime(523,ctx.currentTime);
        osc.frequency.setValueAtTime(659,ctx.currentTime+0.1);
        osc.frequency.setValueAtTime(784,ctx.currentTime+0.2);
        gain.gain.setValueAtTime(0.15,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.4);
        osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.4);
      }else if(type==='wrong'){
        osc.frequency.setValueAtTime(200,ctx.currentTime);
        osc.frequency.setValueAtTime(150,ctx.currentTime+0.15);
        gain.gain.setValueAtTime(0.15,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.3);
        osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.3);
      }else if(type==='combo'){
        osc.frequency.setValueAtTime(784,ctx.currentTime);
        osc.frequency.setValueAtTime(988,ctx.currentTime+0.08);
        osc.frequency.setValueAtTime(1175,ctx.currentTime+0.16);
        gain.gain.setValueAtTime(0.12,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.35);
        osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.35);
      }else if(type==='click'){
        osc.frequency.setValueAtTime(440,ctx.currentTime);
        gain.gain.setValueAtTime(0.08,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.1);
        osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.1);
      }else if(type==='unlock'){
        osc.type='sine';
        osc.frequency.setValueAtTime(440,ctx.currentTime);
        osc.frequency.setValueAtTime(554,ctx.currentTime+0.1);
        osc.frequency.setValueAtTime(659,ctx.currentTime+0.2);
        osc.frequency.setValueAtTime(880,ctx.currentTime+0.3);
        gain.gain.setValueAtTime(0.12,ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+0.5);
        osc.start(ctx.currentTime);osc.stop(ctx.currentTime+0.5);
      }
    }catch(e){}
  },
  showComboFloat(combo){
    const el=document.createElement('div');
    el.className='combo-float';
    el.textContent=combo+' 连击!';
    el.style.left=(window.innerWidth/2-40)+'px';
    el.style.top=(window.innerHeight/2)+'px';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),800);
  }
};

// ===== STATE MANAGEMENT =====
const State={
  _data:null,
  load(){
    try{
      const raw=localStorage.getItem('bencaotang_save');
      this._data=raw?JSON.parse(raw):null;
    }catch(e){this._data=null;}
    if(!this._data)this._data={score:0,unlocked:[],bestScores:{}};
    if(!this._data.unlocked)this._data.unlocked=[];
    if(!this._data.bestScores)this._data.bestScores={};
    return this._data;
  },
  save(){try{localStorage.setItem('bencaotang_save',JSON.stringify(this._data));}catch(e){}},
  get score(){return this._data.score||0;},
  addScore(n){this._data.score=(this._data.score||0)+n;this.save();},
  get unlocked(){return this._data.unlocked||[];},
  unlockHerb(id){
    if(!this._data.unlocked.includes(id)){this._data.unlocked.push(id);this.save();return true;}
    return false;
  },
  unlockHerbs(names){
    let c=0;
    names.forEach(n=>{const h=Utils.getHerb(n);if(h&&this.unlockHerb(h.id))c++;});
    return c;
  },
  setBest(mode,s){
    if(!this._data.bestScores[mode]||s>this._data.bestScores[mode]){
      this._data.bestScores[mode]=s;this.save();
    }
  },
  getBest(mode){return this._data.bestScores[mode]||0;},
  reset(){this._data={score:0,unlocked:[],bestScores:{}};this.save();}
};

// ===== APP CONTROLLER =====
const App={
  currentScreen:'home',currentGame:null,
  init(){State.load();this.updateHomeScore();},
  showScreen(name){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    const screen=Utils.$('screen-'+name);
    if(screen){screen.classList.add('active');this.currentScreen=name;}
    if(name==='home')this.updateHomeScore();
    if(name==='encyclopedia')this.renderEncyclopedia();
    if(name==='leaderboard')this.renderLeaderboard();
    if(this.currentGame&&name!=='game')this.currentGame=null;
  },
  updateHomeScore(){Utils.$('home-score').textContent=State.score;},
  startGame(mode){
    this.showScreen('game');
    switch(mode){
      case 'identify':IdentifyGame.start();break;
      case 'formula':FormulaGame.start();break;
      case 'classify':ClassifyGame.start();break;
      case 'prescribe':PrescribeGame.start();break;
      case 'match':MatchGame.start();break;
    }
  },
  resetProgress(){
    if(confirm('确定要重置所有进度吗？积分、图鉴解锁都将被清除。')){
      State.reset();this.updateHomeScore();alert('进度已重置');
    }
  },
  showResult(title,score,details,mode){
    const overlay=document.createElement('div');
    overlay.className='result-overlay';
    overlay.innerHTML='<div class="result-card"><h2>'+title+'</h2>'+
      '<div class="score-big">+'+score+'</div>'+
      '<p style="color:var(--ink-light);font-size:0.9rem">'+(details||'')+'</p>'+
      '<div class="btn-group">'+
      '<button onclick="this.closest(\'.result-overlay\').remove();App.showScreen(\'home\')">返回首页</button>'+
      '<button class="primary" onclick="this.closest(\'.result-overlay\').remove();App.startGame(\''+(mode||'identify')+'\')">再来一局</button>'+
      '</div></div>';
    document.body.appendChild(overlay);
  },
  renderEncyclopedia(){
    Utils.$('ency-score').textContent=State.score;
    const unlocked=State.unlocked;
    Utils.$('ency-count').textContent=unlocked.length+'/'+HERBS.length;
    const cats=[...new Set(HERBS.map(h=>h.cat))];
    let html='<button class="active" onclick="App.filterEncy(\'all\',this)">全部</button>';
    cats.forEach(c=>{html+='<button onclick="App.filterEncy(\''+c+'\',this)">'+c+'</button>';});
    Utils.$('ency-filter').innerHTML=html;
    this._encyFilter='all';
    this._renderEncyGrid();
  },
  _encyFilter:'all',
  filterEncy(cat,btn){
    this._encyFilter=cat;
    document.querySelectorAll('#ency-filter button').forEach(b=>b.classList.remove('active'));
    if(btn)btn.classList.add('active');
    this._renderEncyGrid();
  },
  _renderEncyGrid(){
    const filter=this._encyFilter;
    const herbs=filter==='all'?HERBS:HERBS.filter(h=>h.cat===filter);
    let html='<div class="ency-grid">';
    herbs.forEach(h=>{
      const u=State.unlocked.includes(h.id);
      html+='<div class="ency-card'+(u?'':' locked')+'" onclick="App.showHerbDetail('+h.id+')">'+
        '<span class="herb-emoji">'+(u?h.emoji:'\u{1F512}')+'</span>'+
        '<div class="herb-name">'+(u?h.name:'???')+'</div>'+
        '<div class="herb-cat">'+h.cat+'</div></div>';
    });
    html+='</div>';
    Utils.$('ency-content').innerHTML=html;
  },
  showHerbDetail(id){
    const h=Utils.getHerb(id);
    if(!h||!State.unlocked.includes(id))return;
    const rf=FORMULAS.filter(f=>f.herbs.includes(h.name));
    let html='<button class="small" onclick="App.renderEncyclopedia()" style="margin-bottom:12px">\u2190 返回图鉴</button>';
    html+='<div class="ency-detail card">';
    html+='<div style="text-align:center;font-size:3rem;margin-bottom:8px">'+h.emoji+'</div>';
    html+='<h2 style="text-align:center">'+h.name+'</h2>';
    html+='<div style="text-align:center;margin:8px 0">'+Utils.natureBadge(h.nature)+' <span class="badge badge-green">'+h.cat+'</span></div>';
    html+='<hr class="divider">';
    html+='<div class="detail-section"><h4>性味</h4><p>'+h.flavor+'</p></div>';
    html+='<div class="detail-section"><h4>归经</h4><p>'+h.meridian+'</p></div>';
    html+='<div class="detail-section"><h4>功效</h4><p>'+h.effect+'</p></div>';
    html+='<div class="detail-section"><h4>主治</h4><p>'+h.indication+'</p></div>';
    if(rf.length>0)html+='<div class="detail-section"><h4>经典方剂</h4><p>'+rf.map(f=>f.name).join('、')+'</p></div>';
    html+='<div class="knowledge-card"><h4>趣味冷知识</h4><p class="fun-fact">'+h.fun+'</p></div>';
    html+='</div>';
    Utils.$('ency-content').innerHTML=html;
  },
  renderLeaderboard(){
    const modes=[{key:'identify',name:'辨药识材'},{key:'formula',name:'组方配伍'},{key:'classify',name:'四性五味'},{key:'prescribe',name:'对症开方'},{key:'match',name:'药材连连看'}];
    let html='<div style="text-align:center;margin:16px 0"><p style="color:var(--ink-light)">总积分</p><div style="font-family:var(--font-num);font-size:2.4rem;color:var(--gold)">'+State.score+'</div></div><hr class="divider"><h3 style="margin:16px 0 8px">各模式最佳成绩</h3><div class="lb-list">';
    modes.forEach(m=>{
      const best=State.getBest(m.key);
      html+='<div class="lb-item"><span class="rank">'+m.name+'</span><span class="lb-score">'+best+' 分</span></div>';
    });
    html+='</div>';
    Utils.$('lb-content').innerHTML=html;
  }
};

// ===== GAME 1: IDENTIFY (辨药识材) =====
const IdentifyGame={
  questions:[],current:0,total:10,score:0,combo:0,
  start(){
    App.currentGame='identify';
    Utils.$('game-title').textContent='辨药识材';
    this.questions=this.genQ();this.current=0;this.score=0;this.combo=0;
    Utils.$('game-score').textContent='0';Utils.$('game-combo').textContent='';
    this.render();
  },
  genQ(){
    const qs=[];const shuffled=Utils.shuffle(HERBS);
    const diffs=['初级','中级','高级'];
    for(let i=0;i<this.total&&i<shuffled.length;i++){
      const herb=shuffled[i];
      const diff=diffs[Math.min(2,Math.floor(i/4))];
      let clue='';
      if(diff==='初级')clue='功效：'+herb.effect+'\n主治：'+herb.indication;
      else if(diff==='中级')clue='性味：'+herb.flavor+'\n归经：'+herb.meridian+'\n功效：'+herb.effect;
      else clue='性味：'+herb.flavor+'\n归经：'+herb.meridian+'\n类别：'+herb.cat+'\n相关方剂：'+herb.formula;
      const wrongs=Utils.shuffle(HERBS.filter(h=>h.id!==herb.id)).slice(0,3).map(h=>h.name);
      const options=Utils.shuffle([herb.name,...wrongs]);
      qs.push({herb,clue,options,diff,answered:false});
    }
    return qs;
  },
  render(){
    if(this.current>=this.total){this.finish();return;}
    const q=this.questions[this.current];
    Utils.$('game-progress').textContent=(this.current+1)+'/'+this.total;
    Utils.$('game-timer').textContent=q.diff;
    let html='<div class="question-area">';
    html+='<div class="question-text" style="white-space:pre-line">'+q.clue+'</div>';
    html+='<div class="options-grid">';
    q.options.forEach((opt,i)=>{
      html+='<button class="option-btn" onclick="IdentifyGame.answer('+i+',this)" data-idx="'+i+'">'+opt+'</button>';
    });
    html+='</div></div>';
    Utils.$('game-content').innerHTML=html;
  },
  answer(idx,btn){
    const q=this.questions[this.current];
    if(q.answered)return;q.answered=true;
    const selected=q.options[idx];
    const correct=selected===q.herb.name;
    document.querySelectorAll('.option-btn').forEach(b=>{
      b.classList.add('disabled');
      if(b.textContent===q.herb.name)b.classList.add('correct');
    });
    if(correct){
      this.combo++;
      const bonus=this.combo>=3?5:0;
      const pts=10+bonus;
      this.score+=pts;
      Utils.$('game-score').textContent=this.score;
      Utils.playSound(this.combo>=3?'combo':'correct');
      if(this.combo>=2){
        Utils.$('game-combo').textContent=this.combo+' 连击!';
        Utils.$('game-combo').classList.remove('pop');
        void Utils.$('game-combo').offsetWidth;
        Utils.$('game-combo').classList.add('pop');
        Utils.showComboFloat(this.combo);
      }
      State.unlockHerb(q.herb.id);
    }else{
      btn.classList.add('wrong');btn.classList.add('shake');
      this.combo=0;Utils.$('game-combo').textContent='';
      Utils.playSound('wrong');
    }
    const el=document.createElement('div');
    el.className='knowledge-card pop-in';
    el.innerHTML='<h4>'+q.herb.emoji+' '+q.herb.name+(correct?' (+'+pts+'分)':'')+'</h4><p>'+q.herb.effect+'</p><p class="fun-fact">'+q.herb.fun+'</p>';
    Utils.$('game-content').appendChild(el);
    setTimeout(()=>{this.current++;this.render();},2500);
  },
  finish(){
    State.addScore(this.score);State.setBest('identify',this.score);
    Utils.playSound('unlock');
    DataSubmit.submit('identify',this.score,State.unlocked.length,0);
    App.showResult('辨药识材 - 完成',this.score,'共答 '+this.total+' 题','identify');
  }
};

// ===== GAME 2: FORMULA (组方配伍) =====
const FormulaGame={
  formulas:[],current:0,total:8,score:0,selected:[],timeLeft:0,timer:null,
  start(){
    App.currentGame='formula';
    Utils.$('game-title').textContent='组方配伍';
    this.formulas=Utils.shuffle(FORMULAS).slice(0,this.total);
    this.current=0;this.score=0;
    Utils.$('game-score').textContent='0';Utils.$('game-combo').textContent='';
    this.render();
  },
  render(){
    if(this.current>=this.total){this.finish();return;}
    const f=this.formulas[this.current];
    this.selected=[];
    Utils.$('game-progress').textContent=(this.current+1)+'/'+this.total;
    this.timeLeft=30+f.herbs.length*5;
    Utils.$('game-timer').textContent=this.timeLeft+'s';
    if(this.timer)clearInterval(this.timer);
    this.timer=setInterval(()=>{
      this.timeLeft--;
      Utils.$('game-timer').textContent=this.timeLeft+'s';
      if(this.timeLeft<=0)this.timeUp();
    },1000);
    const distractors=Utils.shuffle(HERBS.filter(h=>!f.herbs.includes(h.name))).slice(0,6).map(h=>h.name);
    const allHerbs=Utils.shuffle([...f.herbs,...distractors]);
    let html='<div class="question-area">';
    html+='<div class="question-text"><strong>'+f.name+'</strong><br>'+f.effect+'<br><span style="font-size:0.85rem;color:var(--ink-light)">主治：'+f.indication+'</span></div>';
    html+='<p style="font-size:0.9rem;color:var(--ink-light);margin-bottom:8px">请选出该方剂的全部组成药材（共'+f.herbs.length+'味）：</p>';
    html+='<div class="formula-slots" id="formula-slots"></div>';
    html+='<div class="herb-pool" id="herb-pool">';
    allHerbs.forEach(h=>{
      html+='<span class="herb-chip" onclick="FormulaGame.toggle(this,\''+h+'\')">'+h+'</span>';
    });
    html+='</div>';
    html+='<div style="text-align:center;margin-top:16px"><button class="primary" onclick="FormulaGame.submit()">确认提交</button></div>';
    html+='</div>';
    Utils.$('game-content').innerHTML=html;
  },
  toggle(el,name){
    Utils.playSound('click');
    if(el.classList.contains('selected')){
      el.classList.remove('selected');
      this.selected=this.selected.filter(n=>n!==name);
    }else{
      el.classList.add('selected');
      this.selected.push(name);
    }
    Utils.$('formula-slots').innerHTML=this.selected.map(n=>'<span class="herb-chip">'+n+'</span>').join('');
  },
  submit(){
    if(this.timer)clearInterval(this.timer);
    const f=this.formulas[this.current];
    const correct=f.herbs;
    const isOk=this.selected.length===correct.length&&correct.every(h=>this.selected.includes(h));
    if(isOk){
      const pts=20+Math.max(0,this.timeLeft);
      this.score+=pts;
      Utils.$('game-score').textContent=this.score;
      Utils.playSound('correct');
      State.unlockHerbs(correct);
    }else{
      Utils.playSound('wrong');
      correct.forEach(h=>{const hb=Utils.getHerb(h);if(hb)State.unlockHerb(hb.id);});
    }
    let rh='<div class="knowledge-card pop-in"><h4>'+(isOk?'正确! (+'+( 20+Math.max(0,this.timeLeft))+'分)':'不完全正确')+'</h4>';
    rh+='<p><strong>'+f.name+'</strong> 组成：'+correct.join('、')+'</p>';
    rh+='<p style="font-size:0.8rem;color:var(--ink-light)">出处：'+f.source+'</p>';
    if(!isOk)rh+='<p style="color:var(--error);font-size:0.85rem">你选了：'+(this.selected.length?this.selected.join('、'):'无')+'</p>';
    rh+='</div>';
    Utils.$('game-content').appendChild(document.createRange().createContextualFragment(rh));
    document.querySelectorAll('.herb-chip').forEach(c=>c.style.pointerEvents='none');
    setTimeout(()=>{this.current++;this.render();},3000);
  },
  timeUp(){
    if(this.timer)clearInterval(this.timer);
    const f=this.formulas[this.current];
    Utils.playSound('wrong');
    const herbIds=f.herbs.map(n=>{const h=Utils.getHerb(n);return h?h.id:null;}).filter(Boolean);
    herbIds.forEach(id=>State.unlockHerb(id));
    let rh='<div class="knowledge-card pop-in"><h4>时间到!</h4>';
    rh+='<p><strong>'+f.name+'</strong> 组成：'+f.herbs.join('、')+'</p>';
    rh+='<p style="font-size:0.8rem;color:var(--ink-light)">出处：'+f.source+'</p></div>';
    Utils.$('game-content').appendChild(document.createRange().createContextualFragment(rh));
    document.querySelectorAll('.herb-chip').forEach(c=>c.style.pointerEvents='none');
    setTimeout(()=>{this.current++;this.render();},3000);
  },
  finish(){
    if(this.timer)clearInterval(this.timer);
    State.addScore(this.score);State.setBest('formula',this.score);
    Utils.playSound('unlock');
    DataSubmit.submit('formula',this.score,State.unlocked.length,0);
    App.showResult('组方配伍 - 完成',this.score,'共配 '+this.total+' 方','formula');
  }
};

// ===== GAME 3: CLASSIFY (四性五味分类) =====
const ClassifyGame={
  herbs:[],current:0,total:20,score:0,combo:0,maxCombo:0,
  mode:'nature',timer:null,timeLeft:0,
  start(){
    App.currentGame='classify';
    Utils.$('game-title').textContent='四性五味';
    this.herbs=Utils.shuffle(HERBS).slice(0,this.total);
    this.current=0;this.score=0;this.combo=0;this.maxCombo=0;
    Utils.$('game-score').textContent='0';Utils.$('game-combo').textContent='';
    this.render();
  },
  render(){
    if(this.current>=this.total){this.finish();return;}
    const h=this.herbs[this.current];
    Utils.$('game-progress').textContent=(this.current+1)+'/'+this.total;
    Utils.$('game-timer').textContent='';
    const lanes=this.mode==='nature'?['寒','凉','温','平']:['酸','苦','甘','辛','咸'];
    let html='<div style="text-align:center;margin-bottom:8px;font-size:0.85rem;color:var(--ink-light)">';
    html+=this.mode==='nature'?'请将药材按「四性」分类到对应区域':'请将药材按「五味」分类到对应区域';
    html+='</div>';
    html+='<div class="current-herb-display">'+h.emoji+' '+h.name+'</div>';
    html+='<div class="classify-lanes" style="grid-template-columns:repeat('+lanes.length+',1fr)">';
    lanes.forEach(lane=>{
      html+='<div class="classify-lane" onclick="ClassifyGame.classify(\''+lane+'\')" data-lane="'+lane+'">';
      html+='<div>'+lane+'</div></div>';
    });
    html+='</div>';
    Utils.$('game-content').innerHTML=html;
  },
  classify(lane){
    const h=this.herbs[this.current];
    let correctAnswer;
    if(this.mode==='nature'){
      correctAnswer=Utils.natureCat(h.nature);
    }else{
      correctAnswer=Utils.flavorCat(h.flavor);
    }
    const isCorrect=lane===correctAnswer;
    const laneEl=document.querySelector('[data-lane="'+lane+'"]');
    if(isCorrect){
      this.combo++;
      if(this.combo>this.maxCombo)this.maxCombo=this.combo;
      const pts=10+(this.combo>=3?5:0);
      this.score+=pts;
      Utils.$('game-score').textContent=this.score;
      Utils.playSound(this.combo>=3?'combo':'correct');
      if(laneEl)laneEl.classList.add('highlight');
      if(this.combo>=2){
        Utils.$('game-combo').textContent=this.combo+' 连击!';
        Utils.$('game-combo').classList.remove('pop');
        void Utils.$('game-combo').offsetWidth;
        Utils.$('game-combo').classList.add('pop');
        Utils.showComboFloat(this.combo);
      }
      State.unlockHerb(h.id);
      if(laneEl){
        const item=document.createElement('div');
        item.className='lane-item';
        item.textContent=h.name+' \u2713';
        item.style.color='var(--herb-green)';
        laneEl.appendChild(item);
      }
    }else{
      this.combo=0;
      Utils.$('game-combo').textContent='';
      Utils.playSound('wrong');
      if(laneEl){laneEl.classList.add('shake');setTimeout(()=>laneEl.classList.remove('shake'),400);}
    }
    setTimeout(()=>{
      this.current++;
      if(this.current===10&&this.mode==='nature'){
        this.mode='flavor';
        this.herbs=Utils.shuffle(HERBS).slice(0,this.total);
        this.current=0;
      }
      this.render();
    },800);
  },
  finish(){
    State.addScore(this.score);State.setBest('classify',this.score);
    Utils.playSound('unlock');
    DataSubmit.submit('classify',this.score,State.unlocked.length,this.maxCombo);
    App.showResult('四性五味 - 完成',this.score,'最高连击：'+this.maxCombo,'classify');
  }
};

// ===== GAME 4: PRESCRIBE (对症开方) =====
const PrescribeGame={
  questions:[],current:0,total:10,score:0,combo:0,
  start(){
    App.currentGame='prescribe';
    Utils.$('game-title').textContent='对症开方';
    this.questions=Utils.shuffle(SYMPTOMS).slice(0,this.total);
    this.current=0;this.score=0;this.combo=0;
    Utils.$('game-score').textContent='0';Utils.$('game-combo').textContent='';
    this.render();
  },
  render(){
    if(this.current>=this.total){this.finish();return;}
    const q=this.questions[this.current];
    Utils.$('game-progress').textContent=(this.current+1)+'/'+this.total;
    Utils.$('game-timer').textContent='';
    const options=Utils.shuffle([q.answer,...q.distractors]);
    let html='<div class="question-area">';
    html+='<div class="symptom-card"><div class="patient">\u{1FA7A} 患者：'+q.patient+'</div>';
    html+='<div class="symptoms">'+q.symptoms+'</div></div>';
    html+='<p style="font-size:0.9rem;color:var(--ink-light);margin:12px 0">请根据症状，选出最对症的方剂：</p>';
    html+='<div class="options-grid">';
    options.forEach(opt=>{
      html+='<button class="option-btn" onclick="PrescribeGame.answer(this,\''+opt.replace(/'/g,"\\'")+'\')">'+opt+'</button>';
    });
    html+='</div></div>';
    Utils.$('game-content').innerHTML=html;
  },
  answer(btn,selected){
    const q=this.questions[this.current];
    const correct=selected===q.answer;
    document.querySelectorAll('.option-btn').forEach(b=>{
      b.classList.add('disabled');
      if(b.textContent===q.answer)b.classList.add('correct');
    });
    if(correct){
      this.combo++;
      const pts=15+(this.combo>=3?5:0);
      this.score+=pts;
      Utils.$('game-score').textContent=this.score;
      Utils.playSound(this.combo>=3?'combo':'correct');
      if(this.combo>=2){
        Utils.$('game-combo').textContent=this.combo+' 连击!';
        Utils.$('game-combo').classList.remove('pop');
        void Utils.$('game-combo').offsetWidth;
        Utils.$('game-combo').classList.add('pop');
        Utils.showComboFloat(this.combo);
      }
      const f=Utils.getFormula(q.answer);
      if(f)State.unlockHerbs(f.herbs);
    }else{
      btn.classList.add('wrong');btn.classList.add('shake');
      this.combo=0;Utils.$('game-combo').textContent='';
      Utils.playSound('wrong');
    }
    const el=document.createElement('div');
    el.className='knowledge-card pop-in';
    el.innerHTML='<h4>'+(correct?'\u2713 辨证正确':'\u2717 辨证有误')+'</h4><p><strong>正确方剂：'+q.answer+'</strong></p><p>'+q.explain+'</p>';
    Utils.$('game-content').appendChild(el);
    setTimeout(()=>{this.current++;this.render();},3000);
  },
  finish(){
    State.addScore(this.score);State.setBest('prescribe',this.score);
    Utils.playSound('unlock');
    DataSubmit.submit('prescribe',this.score,State.unlocked.length,this.combo);
    App.showResult('对症开方 - 完成',this.score,'共诊治 '+this.total+' 位患者','prescribe');
  }
};

// ===== GAME 5: MATCH (药材连连看) =====
const MatchGame={
  pairs:[],grid:[],selected:null,matched:0,total:0,score:0,combo:0,
  start(){
    App.currentGame='match';
    Utils.$('game-title').textContent='药材连连看';
    this.score=0;this.combo=0;this.matched=0;
    Utils.$('game-score').textContent='0';Utils.$('game-combo').textContent='';
    this.generateGrid();
    this.render();
  },
  generateGrid(){
    const selectedHerbs=Utils.shuffle(HERBS).slice(0,8);
    this.pairs=[];
    this.total=selectedHerbs.length;
    selectedHerbs.forEach(h=>{
      this.pairs.push({id:'h'+h.id,text:h.name,type:'herb',matchId:h.id});
      this.pairs.push({id:'e'+h.id,text:h.effect.split('\u3001')[0],type:'effect',matchId:h.id});
    });
    this.grid=Utils.shuffle([...this.pairs]);
    this.selected=null;
  },
  render(){
    Utils.$('game-progress').textContent=this.matched+'/'+this.total+' 对';
    Utils.$('game-timer').textContent='';
    let html='<div style="text-align:center;margin-bottom:8px;font-size:0.85rem;color:var(--ink-light)">配对药材名与功效</div>';
    html+='<div class="match-grid" style="grid-template-columns:repeat(4,1fr)">';
    this.grid.forEach((cell,i)=>{
      const cls=cell.matched?'matched':(this.selected===i?'selected':'');
      html+='<div class="match-cell '+cls+'" onclick="MatchGame.click('+i+')" data-idx="'+i+'">'+cell.text+'</div>';
    });
    html+='</div>';
    Utils.$('game-content').innerHTML=html;
  },
  click(idx){
    const cell=this.grid[idx];
    if(cell.matched)return;
    Utils.playSound('click');
    if(this.selected===null){
      this.selected=idx;
      this.render();
    }else if(this.selected===idx){
      this.selected=null;
      this.render();
    }else{
      const first=this.grid[this.selected];
      const second=cell;
      if(first.matchId===second.matchId&&first.type!==second.type){
        first.matched=true;second.matched=true;
        this.matched++;
        this.combo++;
        const pts=15+(this.combo>=3?5:0);
        this.score+=pts;
        Utils.$('game-score').textContent=this.score;
        Utils.playSound(this.combo>=3?'combo':'correct');
        if(this.combo>=2){
          Utils.$('game-combo').textContent=this.combo+' 连击!';
          Utils.$('game-combo').classList.remove('pop');
          void Utils.$('game-combo').offsetWidth;
          Utils.$('game-combo').classList.add('pop');
          Utils.showComboFloat(this.combo);
        }
        const herb=HERBS.find(h=>h.id===first.matchId);
        if(herb)State.unlockHerb(herb.id);
        this.selected=null;
        this.render();
        if(this.matched>=this.total){
          setTimeout(()=>this.finish(),500);
        }
      }else{
        this.combo=0;Utils.$('game-combo').textContent='';
        Utils.playSound('wrong');
        const cells=document.querySelectorAll('.match-cell');
        cells[this.selected].classList.add('wrong');
        cells[idx].classList.add('wrong');
        const sel=this.selected;
        setTimeout(()=>{
          if(cells[sel])cells[sel].classList.remove('wrong');
          if(cells[idx])cells[idx].classList.remove('wrong');
        },400);
        this.selected=null;
      }
    }
  },
  finish(){
    State.addScore(this.score);State.setBest('match',this.score);
    Utils.playSound('unlock');
    DataSubmit.submit('match',this.score,State.unlocked.length,this.combo);
    App.showResult('药材连连看 - 完成',this.score,'配对 '+this.total+' 组','match');
  }
};

// ===== DATA SUBMISSION =====
const DataSubmit={
  apiUrl:'https://br-peppy-grue-dfccd1b7.supabase2.aidap-global.cn-beijing.volces.com/functions/v1/game-record-api',
  submit(gameMode,score,unlockedCount,comboMax){
    fetch(this.apiUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({game_mode:gameMode,score:score,unlocked_count:unlockedCount,combo_max:comboMax})
    }).catch(()=>{});
  }
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>App.init());
