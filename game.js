// ===== HERBS DATABASE (102 herbs) =====
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
{id:65,name:"龙眼肉",emoji:"\u{1FAD0}",cat:"补益药",nature:"温",flavor:"甘",meridian:"心、脾",effect:"补益心脾、养血安神",indication:"气血不足、心悸怔忡、健忘失眠",formula:"归脾汤",fun:"龙眼肉即桂圆肉，是补血安神佳品。"},
{id:66,name:"牛蒡子",emoji:"",cat:"解表药",nature:"寒",flavor:"辛、苦",meridian:"肺、胃",effect:"疏散风热、宣肺透疹、解毒利咽",indication:"风热感冒、咽喉肿痛、麻疹不透、痈肿疮毒",formula:"银翘散",fun:"牛蒡子的果实可以入药，外形带有钩刺，容易附着在衣物和动物毛发上。"},
{id:67,name:"淡豆豉",emoji:"",cat:"解表药",nature:"凉",flavor:"苦、辛",meridian:"肺、胃",effect:"解表除烦、宣发郁热",indication:"感冒寒热、头痛、热病烦闷、虚烦不眠",formula:"银翘散",fun:"淡豆豉由黑豆经过发酵加工而成，是中药炮制与发酵结合的代表药材。"},
{id:68,name:"竹叶",emoji:"",cat:"清热药",nature:"寒",flavor:"甘、辛、淡",meridian:"心、胃、小肠",effect:"清热泻火、除烦、生津、利尿",indication:"热病烦渴、口舌生疮、小便短赤",formula:"银翘散",fun:"竹叶药性清轻，常用于热病烦渴及心火上炎等相关证候。"},
{id:69,name:"芦根",emoji:"",cat:"清热药",nature:"寒",flavor:"甘",meridian:"肺、胃",effect:"清热泻火、生津止渴、除烦止呕、利尿",indication:"热病烦渴、肺热咳嗽、胃热呕吐、小便短赤",formula:"银翘散",fun:"芦根是芦苇的地下根茎，鲜品含有较多水分，常用于生津止渴。"},
{id:70,name:"升麻",emoji:"",cat:"解表药",nature:"微寒",flavor:"辛、微甘",meridian:"肺、脾、胃、大肠",effect:"发表透疹、清热解毒、升举阳气",indication:"风热头痛、麻疹不透、咽喉肿痛、中气下陷",formula:"补中益气汤",fun:"升麻既能疏散风热，又能升举阳气，是补中益气汤中的重要配伍药物。"},
{id:71,name:"玄参",emoji:"",cat:"清热药",nature:"微寒",flavor:"甘、苦、咸",meridian:"肺、胃、肾",effect:"清热凉血、滋阴降火、解毒散结",indication:"热入营血、温毒发斑、咽喉肿痛、津伤便秘",formula:"天王补心丹",fun:"玄参颜色较深，具有清热凉血和滋阴降火的特点。"},
{id:72,name:"天冬",emoji:"",cat:"补益药",nature:"寒",flavor:"甘、苦",meridian:"肺、肾",effect:"养阴润燥、清肺生津",indication:"肺燥干咳、阴虚劳嗽、津伤口渴、肠燥便秘",formula:"天王补心丹",fun:"天冬与麦冬都能养阴生津，天冬滋阴清热之力相对较强。"},
{id:73,name:"赤芍",emoji:"",cat:"活血化瘀药",nature:"微寒",flavor:"苦",meridian:"肝",effect:"清热凉血、散瘀止痛",indication:"热入营血、吐血衄血、目赤肿痛、经闭痛经",formula:"血府逐瘀汤",fun:"赤芍与白芍来源相近，但赤芍偏于清热凉血、散瘀止痛，白芍偏于养血敛阴。"},
{id:74,name:"枳壳",emoji:"",cat:"理气药",nature:"微寒",flavor:"苦、辛、酸",meridian:"脾、胃",effect:"理气宽中、行滞消胀",indication:"胸胁气滞、脘腹胀满、食积不化",formula:"血府逐瘀汤",fun:"枳壳与枳实来源相近，枳壳通常取较成熟果实，作用相对缓和。"},
{id:75,name:"栀子",emoji:"",cat:"清热药",nature:"寒",flavor:"苦",meridian:"心、肺、三焦",effect:"泻火除烦、清热利湿、凉血解毒",indication:"热病心烦、湿热黄疸、血热吐衄、目赤肿痛",formula:"龙胆泻肝汤",fun:"栀子果实可以入药，其黄色色素过去也曾用于染色。"},
{id:76,name:"木通",emoji:"",cat:"祛湿药",nature:"寒",flavor:"苦",meridian:"心、小肠、膀胱",effect:"利尿通淋、清心除烦、通经下乳",indication:"热淋涩痛、水肿、口舌生疮、乳汁不下",formula:"龙胆泻肝汤",fun:"木通用药时需要注意品种鉴别，不应与含马兜铃酸的关木通混淆。"},
{id:77,name:"车前子",emoji:"",cat:"祛湿药",nature:"微寒",flavor:"甘",meridian:"肝、肾、肺、小肠",effect:"清热利尿通淋、渗湿止泻、明目、祛痰",indication:"热淋涩痛、水肿、暑湿泄泻、目赤肿痛、痰热咳嗽",formula:"龙胆泻肝汤",fun:"车前子颗粒细小，传统煎煮时通常需要装入布袋包煎。"},
{id:78,name:"辛夷",emoji:"\u{1F33C}",cat:"解表药",nature:"温",flavor:"辛",meridian:"肺、胃",effect:"散风寒、通鼻窍",indication:"风寒头痛、鼻塞流涕、鼻渊、鼻鼽",formula:"苍耳子散",fun:"辛夷是木兰科植物的干燥花蕾，表面密被茸毛，传统入药时常包煎。"},
{id:79,name:"苍耳子",emoji:"\u{1F33F}",cat:"解表药",nature:"温",flavor:"辛、苦",meridian:"肺",effect:"散风寒、通鼻窍、祛风湿、止痛",indication:"风寒头痛、鼻塞流涕、鼻渊、风湿痹痛",formula:"苍耳子散",fun:"苍耳子的果实表面具有钩刺，容易附着在衣物和动物毛发上；本品有毒，应用应注意规范。"},
{id:80,name:"蝉蜕",emoji:"\u{1F997}",cat:"解表药",nature:"寒",flavor:"甘",meridian:"肺、肝",effect:"疏散风热、利咽开音、透疹、明目退翳、息风止痉",indication:"风热感冒、咽痛音哑、麻疹不透、目赤翳障、惊风抽搐",formula:"消风散",fun:"蝉蜕是蝉羽化时脱落的外壳，质地轻清，传统认为其善于疏散风热。"},
{id:81,name:"蔓荆子",emoji:"\u{1FAD0}",cat:"解表药",nature:"微寒",flavor:"辛、苦",meridian:"膀胱、肝、胃",effect:"疏散风热、清利头目",indication:"风热感冒头痛、头昏、目赤肿痛、耳鸣耳聋",formula:"川芎茶调散",fun:"蔓荆子善于疏散头面部风热，传统上常用于风热所致的头痛和目赤。"},
{id:82,name:"藁本",emoji:"\u{1F33F}",cat:"解表药",nature:"温",flavor:"辛",meridian:"膀胱",effect:"祛风散寒、除湿止痛",indication:"风寒感冒、巅顶头痛、风寒湿痹",formula:"羌活胜湿汤",fun:"藁本善治风寒所致的巅顶头痛，在传统应用中常与羌活等药配伍。"},
{id:83,name:"夏枯草",emoji:"\u{1F33E}",cat:"清热药",nature:"寒",flavor:"辛、苦",meridian:"肝、胆",effect:"清肝泻火、明目、散结消肿",indication:"目赤肿痛、头痛眩晕、目珠夜痛、瘰疬、瘿瘤、乳痈",formula:"夏枯草汤",fun:"夏枯草常在夏季果穗枯黄时采收，名称也与这一生长特点有关。"},
{id:84,name:"决明子",emoji:"\u{1F331}",cat:"清热药",nature:"微寒",flavor:"甘、苦、咸",meridian:"肝、大肠",effect:"清热明目、润肠通便",indication:"目赤涩痛、羞明多泪、头痛眩晕、目暗不明、肠燥便秘",formula:"决明子散",fun:"决明子之名含有使眼目清明之意，也是较常见的药食两用材料。"},
{id:85,name:"苦参",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"心、肝、胃、大肠、膀胱",effect:"清热燥湿、杀虫、利尿",indication:"湿热泻痢、黄疸、带下、湿疹、湿疮、皮肤瘙痒、疥癣",formula:"苦参汤",fun:"苦参味道极苦，传统应用尤其重视其清热燥湿和杀虫止痒作用。"},
{id:86,name:"白鲜皮",emoji:"\u{1F333}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"脾、胃、膀胱",effect:"清热燥湿、祛风解毒",indication:"湿热疮毒、黄水淋漓、湿疹、风疹、疥癣、湿热黄疸",formula:"消风散",fun:"白鲜皮来源于植物的根皮，常用于湿热兼风所致的皮肤相关证候。"},
{id:87,name:"大青叶",emoji:"\u{1F343}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"心、胃",effect:"清热解毒、凉血消斑",indication:"温病高热、神昏、发斑发疹、喉痹、口疮、痄腮、丹毒",formula:"大青叶汤",fun:"大青叶与板蓝根在部分来源上关系密切，但入药部位不同，功效侧重点也有所区别。"},
{id:88,name:"青黛",emoji:"\u{1F7E6}",cat:"清热药",nature:"寒",flavor:"咸",meridian:"肝",effect:"清热解毒、凉血消斑、清肝泻火、定惊",indication:"温毒发斑、血热吐衄、胸痛咳血、口疮、痄腮、喉痹、惊痫",formula:"青黛散",fun:"青黛是由含靛蓝成分的植物加工制成的深蓝色粉末，既是药材，也曾用于传统染色。"},
{id:89,name:"鱼腥草",emoji:"\u{1F33F}",cat:"清热药",nature:"微寒",flavor:"辛",meridian:"肺",effect:"清热解毒、消痈排脓、利尿通淋",indication:"肺痈吐脓、痰热喘咳、热痢、热淋、痈肿疮毒",formula:"苇茎汤",fun:"鱼腥草揉碎后具有特殊气味，在西南地区也常作为具有地方特色的食材。"},
{id:90,name:"射干",emoji:"\u{1F33A}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"肺",effect:"清热解毒、消痰、利咽",indication:"咽喉肿痛、痰盛咳喘",formula:"射干麻黄汤",fun:"射干虽然名称中有“干”字，但这里是药名，并不是指经过干燥处理的普通植物。"},
{id:91,name:"马齿苋",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"酸",meridian:"肝、大肠",effect:"清热解毒、凉血止血、止痢",indication:"热毒血痢、痈肿疔疮、湿疹、丹毒、便血、痔血",formula:"马齿苋汤",fun:"马齿苋生命力较强，是常见的药食两用植物，叶片形态被认为与马齿相似。"},
{id:92,name:"白头翁",emoji:"\u{1F33C}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"胃、大肠",effect:"清热解毒、凉血止痢",indication:"热毒血痢、里急后重、湿热泻痢",formula:"白头翁汤",fun:"白头翁的根头部常有白色茸毛，形似白发，因此得名。"},
{id:93,name:"地骨皮",emoji:"\u{1F333}",cat:"清热药",nature:"寒",flavor:"甘",meridian:"肺、肝、肾",effect:"凉血除蒸、清肺降火、生津止渴",indication:"阴虚潮热、骨蒸盗汗、肺热咳嗽、血热出血、内热消渴",formula:"泻白散",fun:"地骨皮是枸杞植物的根皮，与枸杞子来自同类植物，但药用部位和功效不同。"},
{id:94,name:"青蒿",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦、辛",meridian:"肝、胆",effect:"清虚热、除骨蒸、解暑热、截疟、退黄",indication:"温邪伤阴、夜热早凉、阴虚发热、暑热、疟疾寒热、湿热黄疸",formula:"青蒿鳖甲汤",fun:"从黄花蒿中发现的青蒿素，对现代抗疟药物研究产生了重要影响。"},
{id:95,name:"胡黄连",emoji:"\u{1F33F}",cat:"清热药",nature:"寒",flavor:"苦",meridian:"肝、胃、大肠",effect:"退虚热、除疳热、清湿热",indication:"骨蒸潮热、小儿疳热、湿热泻痢、黄疸、痔疮肿痛",formula:"肥儿丸",fun:"胡黄连与黄连名称相近，但植物来源不同，传统功效的侧重点也不完全相同。"},
{id:96,name:"银柴胡",emoji:"\u{1F33F}",cat:"清热药",nature:"微寒",flavor:"甘",meridian:"肝、胃",effect:"清虚热、除疳热",indication:"阴虚发热、骨蒸劳热、小儿疳热",formula:"清骨散",fun:"银柴胡与柴胡并非同一种药，银柴胡偏于清虚热，柴胡则偏于解表退热和疏肝。"},
{id:97,name:"大黄",emoji:"\u{1F331}",cat:"泻下药",nature:"寒",flavor:"苦",meridian:"脾、胃、大肠、肝、心包",effect:"泻下攻积、清热泻火、凉血解毒、逐瘀通经、利湿退黄",indication:"实热积滞便秘、血热吐衄、目赤咽肿、痈肿疔疮、瘀血经闭、湿热黄疸",formula:"大承气汤",fun:"大黄有“将军”之称，取其攻下通腑、推陈致新的作用特点。"},
{id:98,name:"芒硝",emoji:"\u{1FAA8}",cat:"泻下药",nature:"寒",flavor:"咸、苦",meridian:"胃、大肠",effect:"泻下通便、润燥软坚、清火消肿",indication:"实热积滞、大便燥结、咽痛、口疮、目赤、痈肿",formula:"大承气汤",fun:"芒硝属于矿物类药材，传统汤剂中通常采用溶化服用的方式，而不是长时间煎煮。"},
{id:99,name:"番泻叶",emoji:"\u{1F343}",cat:"泻下药",nature:"寒",flavor:"甘、苦",meridian:"大肠",effect:"泻热行滞、通便、利水",indication:"热结积滞、便秘、腹水肿胀",formula:"番泻叶饮",fun:"番泻叶泻下作用较明显，传统应用强调控制用量和使用时间，不宜随意长期使用。"},
{id:100,name:"火麻仁",emoji:"\u{1F331}",cat:"泻下药",nature:"平",flavor:"甘",meridian:"脾、胃、大肠",effect:"润肠通便",indication:"血虚津亏、肠燥便秘",formula:"麻子仁丸",fun:"火麻仁富含油脂，传统上常利用其质润多脂的特点治疗津亏肠燥便秘。"},
{id:101,name:"郁李仁",emoji:"\u{1F330}",cat:"泻下药",nature:"平",flavor:"辛、苦、甘",meridian:"脾、大肠、小肠",effect:"润肠通便、利水消肿",indication:"津枯肠燥便秘、水肿胀满、脚气浮肿",formula:"五仁丸",fun:"郁李仁是蔷薇科植物的种仁，既能润肠，也具有一定利水消肿作用。"},
{id:102,name:"独活",emoji:"\u{1F33F}",cat:"祛风湿药",nature:"微温",flavor:"辛、苦",meridian:"肾、膀胱",effect:"祛风除湿、通痹止痛、解表",indication:"风寒湿痹、腰膝疼痛、少阴头痛、风寒挟湿表证",formula:"独活寄生汤",fun:"传统上常说羌活偏治上半身风湿疼痛，独活则更常用于腰膝及下半身风寒湿痹。"}

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

const GAME_CONFIG = {
  questionTime: 60,
  matchTime: 180,
  identifyTotal: 10,
  formulaTotal: 8,
  classifyNatureTotal: 10,
  classifyFlavorTotal: 10,
  prescribeTotal: 10
};

// 修正个别原始资料中的表述
(function correctOriginalData() {
  const herb22 = HERBS.find(h => h.id === 22);
  if (herb22) {
    herb22.fun =
      "板蓝根广为人知，但中医用药强调辨证，并非所有感冒都适用。";
  }

  const herb53 = HERBS.find(h => h.id === 53);
  if (herb53) {
    herb53.fun =
      "藿香常用于暑湿、湿阻中焦等相关证候，具体应用应注意辨证。";
  }

  const herb59 = HERBS.find(h => h.id === 59);
  if (herb59) {
    herb59.fun =
      "山茱萸果实成熟后色红，具有补益肝肾、收涩固脱等功效。";
  }

  const scenario12 = SYMPTOMS.find(item => item.id === 12);
  if (scenario12) {
    scenario12.patient = "马女士，30岁";
  }
})();

// ============================================================
// 通用工具
// ============================================================

const Utils = {
  shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  },

  pick(array, count) {
    return this.shuffle(array).slice(0, count);
  },

  $(id) {
    return document.getElementById(id);
  },

  escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  getHerb(value) {
    if (typeof value === "number") {
      return HERBS.find(h => h.id === value);
    }

    return HERBS.find(h => h.name === value);
  },

  getFormula(name) {
    return FORMULAS.find(f => f.name === name);
  },

  getNatureCategory(nature) {
    if (nature.includes("寒") || nature.includes("凉")) {
      return "寒凉";
    }

    if (nature.includes("温") || nature.includes("热")) {
      return "温热";
    }

    return "平性";
  },

  getFlavors(flavor) {
    return ["酸", "苦", "甘", "辛", "咸"]
      .filter(item => flavor.includes(item));
  },

  natureBadge(nature) {
    let className = "badge-neutral";

    if (nature.includes("寒") || nature.includes("凉")) {
      className = "badge-cold";
    } else if (nature.includes("热")) {
      className = "badge-hot";
    } else if (nature.includes("温")) {
      className = "badge-warm";
    }

    return (
      '<span class="badge ' +
      className +
      '">' +
      this.escapeHtml(nature) +
      "</span>"
    );
  },

  showComboFloat(combo) {
    const element = document.createElement("div");

    element.className = "combo-float";
    element.textContent = combo + " 连击";
    element.style.left = Math.max(10, window.innerWidth / 2 - 45) + "px";
    element.style.top = window.innerHeight / 2 + "px";

    document.body.appendChild(element);

    setTimeout(() => element.remove(), 800);
  },

  playSound(type) {
    if (!State.soundEnabled) return;

    try {
      if (!this.audioContext) {
        this.audioContext = new (
          window.AudioContext || window.webkitAudioContext
        )();
      }

      const context = this.audioContext;
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.connect(gain);
      gain.connect(context.destination);

      const now = context.currentTime;

      if (type === "correct") {
        oscillator.frequency.setValueAtTime(523, now);
        oscillator.frequency.setValueAtTime(659, now + 0.1);
        oscillator.frequency.setValueAtTime(784, now + 0.2);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        oscillator.start(now);
        oscillator.stop(now + 0.4);
      } else if (type === "combo") {
        oscillator.frequency.setValueAtTime(659, now);
        oscillator.frequency.setValueAtTime(880, now + 0.1);
        oscillator.frequency.setValueAtTime(1046, now + 0.2);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        oscillator.start(now);
        oscillator.stop(now + 0.4);
      } else if (type === "wrong") {
        oscillator.frequency.setValueAtTime(210, now);
        oscillator.frequency.setValueAtTime(155, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        oscillator.start(now);
        oscillator.stop(now + 0.3);
      } else if (type === "click") {
        oscillator.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        oscillator.start(now);
        oscillator.stop(now + 0.1);
      } else if (type === "finish") {
        oscillator.frequency.setValueAtTime(440, now);
        oscillator.frequency.setValueAtTime(554, now + 0.1);
        oscillator.frequency.setValueAtTime(659, now + 0.2);
        oscillator.frequency.setValueAtTime(880, now + 0.3);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);
        oscillator.start(now);
        oscillator.stop(now + 0.55);
      }
    } catch (error) {
      // 浏览器不支持声音时不影响游戏运行
    }
  },

  updateCombo(combo) {
    const element = this.$("game-combo");

    if (!element) return;

    if (combo >= 2) {
      element.textContent = combo + " 连击";
      this.showComboFloat(combo);
    } else {
      element.textContent = "";
    }
  },

  createNextButton(gameObject, isLast) {
    const area = document.createElement("div");
    area.className = "next-area";

    const button = document.createElement("button");
    button.className = "primary";
    button.textContent = isLast ? "查看本局成绩" : "下一题";

    button.addEventListener("click", () => {
      gameObject.next();
    });

    area.appendChild(button);
    Utils.$("game-content").appendChild(area);
  },

  getScoreTitle(score) {
    if (score >= 2000) return "杏林宗师";
    if (score >= 1000) return "本草名家";
    if (score >= 600) return "杏林医者";
    if (score >= 300) return "本草弟子";
    if (score >= 100) return "采药学徒";
    return "初入杏林";
  },

  getResultLevel(accuracy) {
    if (accuracy === 100) return "本草通达";
    if (accuracy >= 80) return "杏林高手";
    if (accuracy >= 60) return "勤学善思";
    return "继续研习";
  },

  formatDate(timestamp) {
    try {
      return new Date(timestamp).toLocaleString("zh-CN");
    } catch (error) {
      return "";
    }
  }
};

// ============================================================
// 统一计时器
// ============================================================

const GameTimer = {
  interval: null,
  timeLeft: 0,
  totalTime: 0,
  onEnd: null,

  start(seconds, onEnd) {
    this.stop();

    this.timeLeft = seconds;
    this.totalTime = seconds;
    this.onEnd = onEnd;

    this.render();

    this.interval = setInterval(() => {
      this.timeLeft -= 1;
      this.render();

      if (this.timeLeft <= 0) {
        const callback = this.onEnd;
        this.stop();

        if (typeof callback === "function") {
          callback();
        }
      }
    }, 1000);
  },

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = null;
    this.onEnd = null;
  },

  render() {
    const timer = Utils.$("game-timer");
    const bar = Utils.$("timer-bar-inner");

    if (timer) {
      timer.textContent = this.timeLeft + " 秒";
      timer.classList.toggle("warning", this.timeLeft <= 10);
    }

    if (bar) {
      const percent = this.totalTime
        ? Math.max(0, this.timeLeft / this.totalTime * 100)
        : 0;

      bar.style.width = percent + "%";
      bar.classList.toggle("warning", this.timeLeft <= 10);
    }
  },

  resetDisplay() {
    this.stop();

    const timer = Utils.$("game-timer");
    const bar = Utils.$("timer-bar-inner");

    if (timer) {
      timer.textContent = "";
      timer.classList.remove("warning");
    }

    if (bar) {
      bar.style.width = "100%";
      bar.classList.remove("warning");
    }
  }
};

// ============================================================
// 本地进度
// ============================================================

const State = {
  data: null,

  load() {
    try {
      const saved = localStorage.getItem("bencaotang_save");
      this.data = saved ? JSON.parse(saved) : {};
    } catch (error) {
      this.data = {};
    }

    this.data.score = Number(this.data.score) || 0;
    this.data.unlocked = Array.isArray(this.data.unlocked)
      ? this.data.unlocked
      : [];
    this.data.bestScores = this.data.bestScores || {};
    this.data.wrongbook = Array.isArray(this.data.wrongbook)
      ? this.data.wrongbook
      : [];
    this.data.soundEnabled =
      this.data.soundEnabled === undefined
        ? true
        : Boolean(this.data.soundEnabled);

    this.save();
  },

  save() {
    try {
      localStorage.setItem(
        "bencaotang_save",
        JSON.stringify(this.data)
      );
    } catch (error) {
      // 本地存储不可用时不影响基础答题
    }
  },

  get score() {
    return this.data.score || 0;
  },

  get unlocked() {
    return this.data.unlocked || [];
  },

  get wrongbook() {
    return this.data.wrongbook || [];
  },

  get soundEnabled() {
    return this.data.soundEnabled !== false;
  },

  addScore(score) {
    this.data.score += Number(score) || 0;
    this.save();
  },

  setSound(enabled) {
    this.data.soundEnabled = Boolean(enabled);
    this.save();
  },

  unlockHerb(id) {
    if (!id || this.data.unlocked.includes(id)) {
      return false;
    }

    this.data.unlocked.push(id);
    this.save();
    return true;
  },

  unlockHerbs(names) {
    let count = 0;

    names.forEach(name => {
      const herb = Utils.getHerb(name);

      if (herb && this.unlockHerb(herb.id)) {
        count += 1;
      }
    });

    return count;
  },

  setBest(mode, score) {
    const oldScore = Number(this.data.bestScores[mode]) || 0;

    if (score > oldScore) {
      this.data.bestScores[mode] = score;
      this.save();
    }
  },

  getBest(mode) {
    return Number(this.data.bestScores[mode]) || 0;
  },

  addWrong(entry) {
    const key = entry.key;
    const oldIndex = this.data.wrongbook.findIndex(
      item => item.key === key
    );

    const record = {
      ...entry,
      createdAt: Date.now(),
      mastered: false
    };

    if (oldIndex >= 0) {
      this.data.wrongbook[oldIndex] = record;
    } else {
      this.data.wrongbook.unshift(record);
    }

    this.data.wrongbook = this.data.wrongbook.slice(0, 100);
    this.save();
  },

  removeWrong(key) {
    this.data.wrongbook = this.data.wrongbook.filter(
      item => item.key !== key
    );
    this.save();
  },

  clearWrongbook() {
    this.data.wrongbook = [];
    this.save();
  },

  reset() {
    this.data = {
      score: 0,
      unlocked: [],
      bestScores: {},
      wrongbook: [],
      soundEnabled: true
    };

    this.save();
  }
};

// ============================================================
// 游戏公共统计
// ============================================================

function createGameStats() {
  return {
    correct: 0,
    wrong: 0,
    timeout: 0,
    hints: 0,
    maxCombo: 0
  };
}

function calculateTimeBonus(timeLeft, maxBonus) {
  if (timeLeft >= 45) return maxBonus;
  if (timeLeft >= 30) return Math.ceil(maxBonus * 0.6);
  if (timeLeft >= 15) return Math.ceil(maxBonus * 0.3);
  return 0;
}

// ============================================================
// 应用控制
// ============================================================

const GameMap = {};

const App = {
  currentMode: null,

  init() {
    State.load();

    GameMap.identify = IdentifyGame;
    GameMap.formula = FormulaGame;
    GameMap.classify = ClassifyGame;
    GameMap.prescribe = PrescribeGame;
    GameMap.match = MatchGame;

    this.updateHome();
  },

  showScreen(name) {
    if (name !== "game") {
      GameTimer.resetDisplay();
    }

    document.querySelectorAll(".screen").forEach(screen => {
      screen.classList.remove("active");
    });

    const target = Utils.$("screen-" + name);

    if (target) {
      target.classList.add("active");
    }

    if (name === "home") {
      this.updateHome();
    } else if (name === "encyclopedia") {
      this.renderEncyclopedia();
    } else if (name === "wrongbook") {
      this.renderWrongbook();
    } else if (name === "leaderboard") {
      this.renderLeaderboard();
    }
  },

  startGame(mode) {
    GameTimer.resetDisplay();
    this.currentMode = mode;
    this.showScreen("game");

    const game = GameMap[mode];

    if (game) {
      game.start();
    }
  },

  leaveGame() {
    if (
      confirm("确定返回首页吗？本局尚未结算的积分不会保存。")
    ) {
      GameTimer.resetDisplay();

      const game = GameMap[this.currentMode];

      if (game && typeof game.cancel === "function") {
        game.cancel();
      }

      this.currentMode = null;
      this.showScreen("home");
    }
  },

  updateHome() {
    Utils.$("home-score").textContent = State.score;
    Utils.$("home-title-name").textContent =
      Utils.getScoreTitle(State.score);
    Utils.$("home-unlocked").textContent =
      State.unlocked.length + "/" + HERBS.length;

    const soundButton = Utils.$("sound-button");

    if (soundButton) {
      soundButton.textContent = State.soundEnabled
        ? "🔊 音效开启"
        : "🔇 音效关闭";
    }
  },

  toggleSound() {
    State.setSound(!State.soundEnabled);
    this.updateHome();

    if (State.soundEnabled) {
      Utils.playSound("click");
    }
  },

  resetProgress() {
    const confirmed = confirm(
      "确定要重置全部进度吗？积分、图鉴、最佳成绩和错题记录都将被清除。"
    );

    if (!confirmed) return;

    State.reset();
    this.updateHome();
    alert("游戏进度已重置。");
  },

  finishGame(mode, title, score, stats) {
    GameTimer.resetDisplay();

    State.addScore(score);
    State.setBest(mode, score);

    Utils.playSound("finish");

    DataSubmit.submit(
      mode,
      score,
      State.unlocked.length,
      stats.maxCombo
    );

    this.showResult(title, score, stats, mode);
  },

  showResult(title, score, stats, mode) {
    const total =
      stats.correct + stats.wrong + stats.timeout;

    const accuracy = total
      ? Math.round(stats.correct / total * 100)
      : 0;

    const level = Utils.getResultLevel(accuracy);

    const overlay = document.createElement("div");
    overlay.className = "result-overlay";

    overlay.innerHTML = `
      <div class="result-card">
        <h2>${Utils.escapeHtml(title)}</h2>
        <div class="score-big">${score} 分</div>
        <div class="result-level">${level}</div>

        <div class="result-stats">
          <div class="result-stat">
            <span>答对</span>
            <strong>${stats.correct}</strong>
          </div>

          <div class="result-stat">
            <span>答错</span>
            <strong>${stats.wrong}</strong>
          </div>

          <div class="result-stat">
            <span>超时</span>
            <strong>${stats.timeout}</strong>
          </div>

          <div class="result-stat">
            <span>正确率</span>
            <strong>${accuracy}%</strong>
          </div>

          <div class="result-stat">
            <span>最高连击</span>
            <strong>${stats.maxCombo}</strong>
          </div>

          <div class="result-stat">
            <span>使用提示</span>
            <strong>${stats.hints}</strong>
          </div>
        </div>

        <p style="color:var(--ink-light);font-size:.82rem">
          总积分：${State.score}　
          当前称号：${Utils.getScoreTitle(State.score)}
        </p>

        <div class="btn-group">
          <button data-action="home">返回首页</button>
          <button data-action="wrongbook">查看错题</button>
          <button class="primary" data-action="again">再来一局</button>
        </div>
      </div>
    `;

    overlay.querySelector('[data-action="home"]')
      .addEventListener("click", () => {
        overlay.remove();
        this.currentMode = null;
        this.showScreen("home");
      });

    overlay.querySelector('[data-action="wrongbook"]')
      .addEventListener("click", () => {
        overlay.remove();
        this.currentMode = null;
        this.showScreen("wrongbook");
      });

    overlay.querySelector('[data-action="again"]')
      .addEventListener("click", () => {
        overlay.remove();
        this.startGame(mode);
      });

    document.body.appendChild(overlay);
  },

  renderEncyclopedia() {
    Utils.$("ency-score").textContent = State.score;
    Utils.$("ency-count").textContent =
      State.unlocked.length + "/" + HERBS.length;

    const categories = [...new Set(HERBS.map(h => h.cat))];

    let filterHtml = `
      <button class="active" data-category="all">全部</button>
    `;

    categories.forEach(category => {
      filterHtml += `
        <button data-category="${Utils.escapeHtml(category)}">
          ${Utils.escapeHtml(category)}
        </button>
      `;
    });

    Utils.$("ency-filter").innerHTML = filterHtml;

    Utils.$("ency-filter")
      .querySelectorAll("button")
      .forEach(button => {
        button.addEventListener("click", () => {
          Utils.$("ency-filter")
            .querySelectorAll("button")
            .forEach(item => item.classList.remove("active"));

          button.classList.add("active");
          this.renderEncyclopediaGrid(button.dataset.category);
        });
      });

    this.renderEncyclopediaGrid("all");
  },

  renderEncyclopediaGrid(category) {
    const list =
      category === "all"
        ? HERBS
        : HERBS.filter(h => h.cat === category);

    let html = '<div class="ency-grid">';

    list.forEach(herb => {
      const unlocked = State.unlocked.includes(herb.id);

      html += `
        <div
          class="ency-card ${unlocked ? "" : "locked"}"
          data-id="${herb.id}"
        >
          <span class="herb-emoji">
            ${unlocked ? herb.emoji : "🔒"}
          </span>

          <div class="herb-name">
            ${unlocked ? Utils.escapeHtml(herb.name) : "???"}
          </div>

          <div class="herb-cat">
            ${Utils.escapeHtml(herb.cat)}
          </div>
        </div>
      `;
    });

    html += "</div>";

    Utils.$("ency-content").innerHTML = html;

    Utils.$("ency-content")
      .querySelectorAll(".ency-card:not(.locked)")
      .forEach(card => {
        card.addEventListener("click", () => {
          this.showHerbDetail(Number(card.dataset.id));
        });
      });
  },

  showHerbDetail(id) {
    const herb = Utils.getHerb(id);

    if (!herb || !State.unlocked.includes(id)) return;

    const relatedFormulas = FORMULAS.filter(formula =>
      formula.herbs.includes(herb.name)
    );

    Utils.$("ency-content").innerHTML = `
      <button class="small" id="back-to-ency">← 返回图鉴</button>

      <div class="ency-detail card">
        <div style="font-size:3rem;text-align:center">
          ${herb.emoji}
        </div>

        <h2 style="text-align:center">
          ${Utils.escapeHtml(herb.name)}
        </h2>

        <div style="text-align:center;margin:8px 0">
          ${Utils.natureBadge(herb.nature)}
          <span class="badge badge-green">
            ${Utils.escapeHtml(herb.cat)}
          </span>
        </div>

        <div class="detail-section">
          <h4>性味</h4>
          <p>${Utils.escapeHtml(herb.flavor)}</p>
        </div>

        <div class="detail-section">
          <h4>归经</h4>
          <p>${Utils.escapeHtml(herb.meridian)}</p>
        </div>

        <div class="detail-section">
          <h4>功效</h4>
          <p>${Utils.escapeHtml(herb.effect)}</p>
        </div>

        <div class="detail-section">
          <h4>主治</h4>
          <p>${Utils.escapeHtml(herb.indication)}</p>
        </div>

        <div class="detail-section">
          <h4>相关方剂</h4>
          <p>
            ${
              relatedFormulas.length
                ? relatedFormulas
                    .map(f => Utils.escapeHtml(f.name))
                    .join("、")
                : Utils.escapeHtml(herb.formula || "暂无")
            }
          </p>
        </div>

        <div class="knowledge-card">
          <h4>本草小知识</h4>
          <p>${Utils.escapeHtml(herb.fun)}</p>
        </div>
      </div>
    `;

    Utils.$("back-to-ency").addEventListener("click", () => {
      this.renderEncyclopedia();
    });
  },

  renderWrongbook() {
    const container = Utils.$("wrongbook-content");
    const records = State.wrongbook;

    if (!records.length) {
      container.innerHTML = `
        <div class="wrongbook-empty">
          <div style="font-size:2.5rem">📖</div>
          <p>暂无错题记录。</p>
          <p style="font-size:.82rem">
            答错或超时的题目会自动收录在这里。
          </p>
        </div>
      `;
      return;
    }

    let html = `
      <div class="question-tools">
        <span class="selection-count">
          共 ${records.length} 条错题
        </span>

        <button class="small danger" id="clear-wrongbook">
          清空错题
        </button>
      </div>
    `;

    records.forEach(record => {
      html += `
        <div class="wrong-item">
          <h3>${Utils.escapeHtml(record.title)}</h3>

          <div class="wrong-meta">
            ${Utils.escapeHtml(record.modeName)} ·
            ${Utils.formatDate(record.createdAt)}
          </div>

          <p>
            <strong>题目：</strong>
            ${Utils.escapeHtml(record.question)}
          </p>

          <p class="answer-wrong">
            <strong>你的答案：</strong>
            ${Utils.escapeHtml(record.userAnswer || "未作答")}
          </p>

          <p class="answer-right">
            <strong>正确答案：</strong>
            ${Utils.escapeHtml(record.correctAnswer)}
          </p>

          <p>
            <strong>解析：</strong>
            ${Utils.escapeHtml(record.explanation || "暂无")}
          </p>

          <div class="wrong-actions">
            <button
              class="small"
              data-review="${Utils.escapeHtml(record.mode)}"
            >
              练习该模式
            </button>

            <button
              class="small danger"
              data-remove="${Utils.escapeHtml(record.key)}"
            >
              移除
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    const clearButton = Utils.$("clear-wrongbook");

    if (clearButton) {
      clearButton.addEventListener("click", () => {
        if (confirm("确定清空全部错题记录吗？")) {
          State.clearWrongbook();
          this.renderWrongbook();
        }
      });
    }

    container.querySelectorAll("[data-review]").forEach(button => {
      button.addEventListener("click", () => {
        this.startGame(button.dataset.review);
      });
    });

    container.querySelectorAll("[data-remove]").forEach(button => {
      button.addEventListener("click", () => {
        State.removeWrong(button.dataset.remove);
        this.renderWrongbook();
      });
    });
  },

  renderLeaderboard() {
    const modes = [
      ["identify", "辨药识材"],
      ["formula", "组方配伍"],
      ["classify", "四性五味"],
      ["prescribe", "对症开方"],
      ["match", "药材连连看"]
    ];

    let html = `
      <div class="card" style="text-align:center">
        <p style="color:var(--ink-light)">当前称号</p>
        <h2 style="color:var(--vermilion);margin:4px 0">
          ${Utils.getScoreTitle(State.score)}
        </h2>

        <p style="color:var(--ink-light)">医道总积分</p>
        <div style="
          color:var(--gold);
          font-family:var(--font-num);
          font-size:2.3rem
        ">
          ${State.score}
        </div>
      </div>

      <h2 class="section-title">各模式最佳成绩</h2>
      <div class="lb-list">
    `;

    modes.forEach(([key, name]) => {
      html += `
        <div class="lb-item">
          <span>${name}</span>
          <span class="lb-score">${State.getBest(key)} 分</span>
        </div>
      `;
    });

    html += `
      </div>

      <div class="notice">
        成绩保存在当前浏览器中。
        清理浏览器数据或更换设备后，本地记录可能无法保留。
      </div>
    `;

    Utils.$("lb-content").innerHTML = html;
  }
};

// ============================================================
// 辨药识材
// ============================================================

const IdentifyGame = {
  questions: [],
  current: 0,
  score: 0,
  combo: 0,
  stats: null,
  locked: false,
  hintUsed: false,

  start() {
    App.currentMode = "identify";
    Utils.$("game-title").textContent = "辨药识材";

    this.questions = Utils.pick(
      HERBS,
      GAME_CONFIG.identifyTotal
    ).map(herb => {
      const sameCategory = HERBS.filter(
        item => item.id !== herb.id && item.cat === herb.cat
      );

      const wrongPool =
        sameCategory.length >= 3
          ? sameCategory
          : HERBS.filter(item => item.id !== herb.id);

      return {
        herb,
        options: Utils.shuffle([
          herb.name,
          ...Utils.pick(wrongPool, 3).map(item => item.name)
        ])
      };
    });

    this.current = 0;
    this.score = 0;
    this.combo = 0;
    this.stats = createGameStats();

    Utils.$("game-score").textContent = "0";
    Utils.$("game-combo").textContent = "";

    this.render();
  },

  render() {
    const question = this.questions[this.current];
    const herb = question.herb;

    this.locked = false;
    this.hintUsed = false;

    Utils.$("game-progress").textContent =
      `${this.current + 1}/${this.questions.length}`;

    Utils.$("game-content").innerHTML = `
      <div class="question-area">
        <div class="question-text">
          <strong>请根据以下线索辨认药材：</strong><br>
          性味：${Utils.escapeHtml(herb.flavor)}<br>
          归经：${Utils.escapeHtml(herb.meridian)}<br>
          功效：${Utils.escapeHtml(herb.effect)}
        </div>

        <div class="question-tools">
          <span class="selection-count">
            每题限时 ${GAME_CONFIG.questionTime} 秒
          </span>

          <button class="small secondary" id="identify-hint">
            查看提示
          </button>
        </div>

        <div id="hint-container"></div>

        <div class="options-grid" id="identify-options">
          ${question.options.map((option, index) => `
            <button
              class="option-btn"
              data-index="${index}"
            >
              ${Utils.escapeHtml(option)}
            </button>
          `).join("")}
        </div>
      </div>
    `;

    Utils.$("identify-options")
      .querySelectorAll(".option-btn")
      .forEach(button => {
        button.addEventListener("click", () => {
          this.answer(
            question.options[Number(button.dataset.index)],
            false
          );
        });
      });

    Utils.$("identify-hint").addEventListener("click", () => {
      this.showHint();
    });

    GameTimer.start(GAME_CONFIG.questionTime, () => {
      this.answer(null, true);
    });
  },

  showHint() {
    if (this.locked || this.hintUsed) return;

    this.hintUsed = true;
    this.stats.hints += 1;

    const herb = this.questions[this.current].herb;

    Utils.$("hint-container").innerHTML = `
      <div class="hint-box">
        提示：本药属于“${Utils.escapeHtml(herb.cat)}”，
        相关方剂为“${Utils.escapeHtml(herb.formula)}”。
      </div>
    `;

    Utils.$("identify-hint").disabled = true;
  },

  answer(selected, timeout) {
    if (this.locked) return;

    this.locked = true;
    GameTimer.stop();

    const question = this.questions[this.current];
    const herb = question.herb;
    const correct = selected === herb.name;

    document.querySelectorAll("#identify-options .option-btn")
      .forEach(button => {
        button.classList.add("disabled");

        if (button.textContent.trim() === herb.name) {
          button.classList.add("correct");
        }

        if (
          selected &&
          button.textContent.trim() === selected &&
          !correct
        ) {
          button.classList.add("wrong");
        }
      });

    let points = 0;

    if (correct) {
      this.combo += 1;
      this.stats.correct += 1;

      points =
        10 +
        calculateTimeBonus(GameTimer.timeLeft, 5) +
        (this.combo >= 3 ? 5 : 0);

      if (this.hintUsed) {
        points = Math.max(5, points - 3);
      }

      this.score += points;
      this.stats.maxCombo = Math.max(
        this.stats.maxCombo,
        this.combo
      );

      Utils.playSound(this.combo >= 3 ? "combo" : "correct");
    } else {
      this.combo = 0;

      if (timeout) {
        this.stats.timeout += 1;
      } else {
        this.stats.wrong += 1;
      }

      Utils.playSound("wrong");

      State.addWrong({
        key: "identify-" + herb.id,
        mode: "identify",
        modeName: "辨药识材",
        title: herb.name,
        question: "根据性味、归经和功效辨认药材",
        userAnswer: timeout ? "超时未作答" : selected,
        correctAnswer: herb.name,
        explanation:
          herb.effect + "。主治：" + herb.indication
      });
    }

    State.unlockHerb(herb.id);

    Utils.$("game-score").textContent = this.score;
    Utils.updateCombo(this.combo);

    const feedback = document.createElement("div");
    feedback.className = "knowledge-card pop-in";

    feedback.innerHTML = `
      <h4>
        ${
          correct
            ? `✓ 回答正确，获得 ${points} 分`
            : timeout
              ? "⌛ 时间到"
              : "✗ 回答有误"
        }
      </h4>

      <p>
        <strong>正确答案：</strong>
        ${herb.emoji} ${Utils.escapeHtml(herb.name)}
      </p>

      <p>
        <strong>类别：</strong>
        ${Utils.escapeHtml(herb.cat)}
      </p>

      <p>
        <strong>功效：</strong>
        ${Utils.escapeHtml(herb.effect)}
      </p>

      <p>
        <strong>主治：</strong>
        ${Utils.escapeHtml(herb.indication)}
      </p>

      <p class="fun-fact">
        本草小知识：${Utils.escapeHtml(herb.fun)}
      </p>
    `;

    Utils.$("game-content").appendChild(feedback);

    Utils.createNextButton(
      this,
      this.current === this.questions.length - 1
    );
  },

  next() {
    this.current += 1;

    if (this.current >= this.questions.length) {
      App.finishGame(
        "identify",
        "辨药识材完成",
        this.score,
        this.stats
      );
    } else {
      this.render();
    }
  },

  cancel() {
    GameTimer.stop();
  }
};

// ============================================================
// 组方配伍
// ============================================================

const FormulaGame = {
  questions: [],
  current: 0,
  score: 0,
  combo: 0,
  stats: null,
  selected: [],
  pool: [],
  locked: false,
  hintUsed: false,

  start() {
    App.currentMode = "formula";
    Utils.$("game-title").textContent = "组方配伍";

    this.questions = Utils.pick(
      FORMULAS,
      GAME_CONFIG.formulaTotal
    );

    this.current = 0;
    this.score = 0;
    this.combo = 0;
    this.stats = createGameStats();

    Utils.$("game-score").textContent = "0";
    Utils.$("game-combo").textContent = "";

    this.render();
  },

  render() {
    const formula = this.questions[this.current];

    this.selected = [];
    this.locked = false;
    this.hintUsed = false;

    const distractors = Utils.pick(
      HERBS.filter(h => !formula.herbs.includes(h.name)),
      6
    ).map(h => h.name);

    this.pool = Utils.shuffle([
      ...formula.herbs,
      ...distractors
    ]);

    Utils.$("game-progress").textContent =
      `${this.current + 1}/${this.questions.length}`;

    Utils.$("game-content").innerHTML = `
      <div class="question-area">
        <div class="question-text">
          <strong>${Utils.escapeHtml(formula.name)}</strong><br>
          功效：${Utils.escapeHtml(formula.effect)}<br>
          <span style="color:var(--ink-light);font-size:.88rem">
            主治：${Utils.escapeHtml(formula.indication)}
          </span>
        </div>

        <div class="question-tools">
          <span class="selection-count" id="formula-count">
            需要选择 ${formula.herbs.length} 味，
            已选择 0 味
          </span>

          <button class="small secondary" id="formula-hint">
            查看提示
          </button>
        </div>

        <div id="hint-container"></div>

        <div class="formula-slots empty" id="formula-slots"></div>

        <div class="herb-pool" id="formula-pool">
          ${this.pool.map((name, index) => `
            <span class="herb-chip" data-index="${index}">
              ${Utils.escapeHtml(name)}
            </span>
          `).join("")}
        </div>

        <div style="text-align:center;margin-top:16px">
          <button class="primary" id="formula-submit">
            确认提交
          </button>
        </div>
      </div>
    `;

    Utils.$("formula-pool")
      .querySelectorAll(".herb-chip")
      .forEach(chip => {
        chip.addEventListener("click", () => {
          this.toggle(
            chip,
            this.pool[Number(chip.dataset.index)]
          );
        });
      });

    Utils.$("formula-submit").addEventListener("click", () => {
      this.submit(false);
    });

    Utils.$("formula-hint").addEventListener("click", () => {
      this.showHint();
    });

    GameTimer.start(GAME_CONFIG.questionTime, () => {
      this.submit(true);
    });
  },

  toggle(element, name) {
    if (this.locked) return;

    Utils.playSound("click");

    if (this.selected.includes(name)) {
      this.selected = this.selected.filter(item => item !== name);
      element.classList.remove("selected");
    } else {
      const formula = this.questions[this.current];

      if (this.selected.length >= formula.herbs.length) {
        alert(
          `本方共需选择 ${formula.herbs.length} 味药材，请先取消一味已选药材。`
        );
        return;
      }

      this.selected.push(name);
      element.classList.add("selected");
    }

    this.updateSelection();
  },

  updateSelection() {
    const formula = this.questions[this.current];
    const slots = Utils.$("formula-slots");

    Utils.$("formula-count").textContent =
      `需要选择 ${formula.herbs.length} 味，` +
      `已选择 ${this.selected.length} 味，` +
      `还差 ${Math.max(0, formula.herbs.length - this.selected.length)} 味`;

    slots.classList.toggle("empty", this.selected.length === 0);

    slots.innerHTML = this.selected
      .map(name => `
        <span class="herb-chip selected">
          ${Utils.escapeHtml(name)}
        </span>
      `)
      .join("");
  },

  showHint() {
    if (this.locked || this.hintUsed) return;

    this.hintUsed = true;
    this.stats.hints += 1;

    const formula = this.questions[this.current];
    const notSelected = formula.herbs.filter(
      name => !this.selected.includes(name)
    );

    const hintHerb = notSelected[0] || formula.herbs[0];

    Utils.$("hint-container").innerHTML = `
      <div class="hint-box">
        提示：本方组成中包含“${Utils.escapeHtml(hintHerb)}”。
      </div>
    `;

    Utils.$("formula-hint").disabled = true;
  },

  submit(timeout) {
    if (this.locked) return;

    this.locked = true;
    GameTimer.stop();

    const formula = this.questions[this.current];

    const selectedCorrect = this.selected.filter(name =>
      formula.herbs.includes(name)
    );

    const wrongSelected = this.selected.filter(name =>
      !formula.herbs.includes(name)
    );

    const missed = formula.herbs.filter(name =>
      !this.selected.includes(name)
    );

    const correct =
      wrongSelected.length === 0 &&
      missed.length === 0 &&
      this.selected.length === formula.herbs.length;

    let points = 0;

    if (correct) {
      this.combo += 1;
      this.stats.correct += 1;

      points =
        20 +
        calculateTimeBonus(GameTimer.timeLeft, 10) +
        (this.combo >= 3 ? 5 : 0);

      if (this.hintUsed) {
        points = Math.max(10, points - 3);
      }

      this.score += points;
      this.stats.maxCombo = Math.max(
        this.stats.maxCombo,
        this.combo
      );

      Utils.playSound(this.combo >= 3 ? "combo" : "correct");
    } else {
      this.combo = 0;

      if (timeout) {
        this.stats.timeout += 1;
      } else {
        this.stats.wrong += 1;
      }

      Utils.playSound("wrong");

      State.addWrong({
        key: "formula-" + formula.id,
        mode: "formula",
        modeName: "组方配伍",
        title: formula.name,
        question: "选出该方剂的全部组成药材",
        userAnswer:
          timeout
            ? "超时：" + (this.selected.join("、") || "未选择")
            : this.selected.join("、") || "未选择",
        correctAnswer: formula.herbs.join("、"),
        explanation:
          formula.effect + "。出处：" + formula.source
      });
    }

    State.unlockHerbs(formula.herbs);

    Utils.$("game-score").textContent = this.score;
    Utils.updateCombo(this.combo);

    document.querySelectorAll("#formula-pool .herb-chip")
      .forEach(chip => {
        const name = chip.textContent.trim();
        chip.classList.remove("selected");
        chip.style.pointerEvents = "none";

        if (formula.herbs.includes(name)) {
          if (this.selected.includes(name)) {
            chip.classList.add("correct-pick");
          } else {
            chip.classList.add("missed");
          }
        } else if (this.selected.includes(name)) {
          chip.classList.add("wrong-pick");
        }
      });

    Utils.$("formula-submit").disabled = true;

    const feedback = document.createElement("div");
    feedback.className = "knowledge-card pop-in";

    feedback.innerHTML = `
      <h4>
        ${
          correct
            ? `✓ 配伍正确，获得 ${points} 分`
            : timeout
              ? "⌛ 时间到"
              : "✗ 配伍不完整"
        }
      </h4>

      <p>
        <strong>方剂组成：</strong>
        ${Utils.escapeHtml(formula.herbs.join("、"))}
      </p>

      <p class="answer-right">
        <strong>选对：</strong>
        ${Utils.escapeHtml(selectedCorrect.join("、") || "无")}
      </p>

      <p class="answer-wrong">
        <strong>错选：</strong>
        ${Utils.escapeHtml(wrongSelected.join("、") || "无")}
      </p>

      <p>
        <strong>遗漏：</strong>
        ${Utils.escapeHtml(missed.join("、") || "无")}
      </p>

      <p>
        <strong>功效：</strong>
        ${Utils.escapeHtml(formula.effect)}
      </p>

      <p>
        <strong>出处：</strong>
        ${Utils.escapeHtml(formula.source)}
      </p>
    `;

    Utils.$("game-content").appendChild(feedback);

    Utils.createNextButton(
      this,
      this.current === this.questions.length - 1
    );
  },

  next() {
    this.current += 1;

    if (this.current >= this.questions.length) {
      App.finishGame(
        "formula",
        "组方配伍完成",
        this.score,
        this.stats
      );
    } else {
      this.render();
    }
  },

  cancel() {
    GameTimer.stop();
  }
};

// ============================================================
// 四性五味
// ============================================================

const ClassifyGame = {
  questions: [],
  current: 0,
  score: 0,
  combo: 0,
  stats: null,
  locked: false,
  hintUsed: false,

  start() {
    App.currentMode = "classify";
    Utils.$("game-title").textContent = "四性五味";

    const natureQuestions = Utils.pick(
      HERBS,
      GAME_CONFIG.classifyNatureTotal
    ).map(herb => ({
      herb,
      type: "nature"
    }));

    const flavorQuestions = Utils.pick(
      HERBS,
      GAME_CONFIG.classifyFlavorTotal
    ).map(herb => ({
      herb,
      type: "flavor"
    }));

    this.questions = [
      ...natureQuestions,
      ...flavorQuestions
    ];

    this.current = 0;
    this.score = 0;
    this.combo = 0;
    this.stats = createGameStats();

    Utils.$("game-score").textContent = "0";
    Utils.$("game-combo").textContent = "";

    this.render();
  },

  render() {
    const question = this.questions[this.current];
    const herb = question.herb;

    this.locked = false;
    this.hintUsed = false;

    const isNature = question.type === "nature";

    const lanes = isNature
      ? ["寒凉", "温热", "平性"]
      : ["酸", "苦", "甘", "辛", "咸"];

    Utils.$("game-progress").textContent =
      `${this.current + 1}/${this.questions.length}`;

    Utils.$("game-content").innerHTML = `
      <div class="question-area">
        <div class="classify-note">
          ${
            isNature
              ? "药性分类：微寒归入寒凉，微温归入温热，平归入平性"
              : "部分中药具有多种药味，选择其中任一正确药味即可"
          }
        </div>

        <div class="current-herb-display">
          ${herb.emoji} ${Utils.escapeHtml(herb.name)}
        </div>

        <div class="question-tools">
          <span class="selection-count">
            ${
              isNature
                ? "请选择该药材所属药性"
                : "请选择该药材的一种正确药味"
            }
          </span>

          <button class="small secondary" id="classify-hint">
            查看提示
          </button>
        </div>

        <div id="hint-container"></div>

        <div
          class="classify-lanes"
          id="classify-lanes"
          style="${isNature ? "" : "grid-template-columns:repeat(5,1fr)"}"
        >
          ${lanes.map(lane => `
            <div class="classify-lane" data-lane="${lane}">
              ${lane}
            </div>
          `).join("")}
        </div>
      </div>
    `;

    Utils.$("classify-lanes")
      .querySelectorAll(".classify-lane")
      .forEach(lane => {
        lane.addEventListener("click", () => {
          this.answer(lane.dataset.lane, false);
        });
      });

    Utils.$("classify-hint").addEventListener("click", () => {
      this.showHint();
    });

    GameTimer.start(GAME_CONFIG.questionTime, () => {
      this.answer(null, true);
    });
  },

  showHint() {
    if (this.locked || this.hintUsed) return;

    this.hintUsed = true;
    this.stats.hints += 1;

    const question = this.questions[this.current];
    const herb = question.herb;

    const text =
      question.type === "nature"
        ? `提示：数据库记载本药药性为“${herb.nature}”。`
        : `提示：本药共有 ${Utils.getFlavors(herb.flavor).length} 种主要药味。`;

    Utils.$("hint-container").innerHTML = `
      <div class="hint-box">${Utils.escapeHtml(text)}</div>
    `;

    Utils.$("classify-hint").disabled = true;
  },

  answer(selected, timeout) {
    if (this.locked) return;

    this.locked = true;
    GameTimer.stop();

    const question = this.questions[this.current];
    const herb = question.herb;

    const correctAnswers =
      question.type === "nature"
        ? [Utils.getNatureCategory(herb.nature)]
        : Utils.getFlavors(herb.flavor);

    const correct = correctAnswers.includes(selected);

    document.querySelectorAll("#classify-lanes .classify-lane")
      .forEach(lane => {
        lane.style.pointerEvents = "none";

        if (correctAnswers.includes(lane.dataset.lane)) {
          lane.classList.add("correct");
        }

        if (
          selected &&
          lane.dataset.lane === selected &&
          !correct
        ) {
          lane.classList.add("wrong");
        }
      });

    let points = 0;

    if (correct) {
      this.combo += 1;
      this.stats.correct += 1;

      points =
        10 +
        calculateTimeBonus(GameTimer.timeLeft, 5) +
        (this.combo >= 3 ? 5 : 0);

      if (this.hintUsed) {
        points = Math.max(5, points - 3);
      }

      this.score += points;
      this.stats.maxCombo = Math.max(
        this.stats.maxCombo,
        this.combo
      );

      Utils.playSound(this.combo >= 3 ? "combo" : "correct");
    } else {
      this.combo = 0;

      if (timeout) {
        this.stats.timeout += 1;
      } else {
        this.stats.wrong += 1;
      }

      Utils.playSound("wrong");

      State.addWrong({
        key:
          "classify-" +
          question.type +
          "-" +
          herb.id,
        mode: "classify",
        modeName: "四性五味",
        title:
          herb.name +
          (question.type === "nature" ? "·药性" : "·药味"),
        question:
          question.type === "nature"
            ? "判断该药材所属药性"
            : "判断该药材的药味",
        userAnswer: timeout ? "超时未作答" : selected,
        correctAnswer:
          question.type === "nature"
            ? correctAnswers.join("、")
            : herb.flavor,
        explanation:
          `${herb.name}性味为${herb.nature}，${herb.flavor}；` +
          `功效为${herb.effect}。`
      });
    }

    State.unlockHerb(herb.id);

    Utils.$("game-score").textContent = this.score;
    Utils.updateCombo(this.combo);

    const feedback = document.createElement("div");
    feedback.className = "knowledge-card pop-in";

    feedback.innerHTML = `
      <h4>
        ${
          correct
            ? `✓ 分类正确，获得 ${points} 分`
            : timeout
              ? "⌛ 时间到"
              : "✗ 分类有误"
        }
      </h4>

      <p>
        <strong>药材：</strong>
        ${herb.emoji} ${Utils.escapeHtml(herb.name)}
      </p>

      <p>
        <strong>完整药性：</strong>
        ${Utils.escapeHtml(herb.nature)}
      </p>

      <p>
        <strong>完整药味：</strong>
        ${Utils.escapeHtml(herb.flavor)}
      </p>

      <p>
        <strong>功效：</strong>
        ${Utils.escapeHtml(herb.effect)}
      </p>
    `;

    Utils.$("game-content").appendChild(feedback);

    Utils.createNextButton(
      this,
      this.current === this.questions.length - 1
    );
  },

  next() {
    this.current += 1;

    if (this.current >= this.questions.length) {
      App.finishGame(
        "classify",
        "四性五味完成",
        this.score,
        this.stats
      );
    } else {
      this.render();
    }
  },

  cancel() {
    GameTimer.stop();
  }
};

// ============================================================
// 对症开方
// ============================================================

const PrescribeGame = {
  questions: [],
  current: 0,
  score: 0,
  combo: 0,
  stats: null,
  locked: false,
  hintUsed: false,
  options: [],

  start() {
    App.currentMode = "prescribe";
    Utils.$("game-title").textContent = "对症开方";

    this.questions = Utils.pick(
      SYMPTOMS,
      GAME_CONFIG.prescribeTotal
    );

    this.current = 0;
    this.score = 0;
    this.combo = 0;
    this.stats = createGameStats();

    Utils.$("game-score").textContent = "0";
    Utils.$("game-combo").textContent = "";

    this.render();
  },

  render() {
    const question = this.questions[this.current];

    this.locked = false;
    this.hintUsed = false;
    this.options = Utils.shuffle([
      question.answer,
      ...question.distractors
    ]);

    Utils.$("game-progress").textContent =
      `${this.current + 1}/${this.questions.length}`;

    Utils.$("game-content").innerHTML = `
      <div class="question-area">
        <div class="symptom-card">
          <div class="patient">
            🩺 模拟情境：${Utils.escapeHtml(question.patient)}
          </div>

          <div class="symptoms">
            ${Utils.escapeHtml(question.symptoms)}
          </div>
        </div>

        <div class="question-tools">
          <span class="selection-count">
            请根据上述表现选择适宜的经典方剂
          </span>

          <button class="small secondary" id="prescribe-hint">
            查看提示
          </button>
        </div>

        <div id="hint-container"></div>

        <div class="options-grid" id="prescribe-options">
          ${this.options.map((option, index) => `
            <button class="option-btn" data-index="${index}">
              ${Utils.escapeHtml(option)}
            </button>
          `).join("")}
        </div>
      </div>
    `;

    Utils.$("prescribe-options")
      .querySelectorAll(".option-btn")
      .forEach(button => {
        button.addEventListener("click", () => {
          this.answer(
            this.options[Number(button.dataset.index)],
            false
          );
        });
      });

    Utils.$("prescribe-hint").addEventListener("click", () => {
      this.showHint();
    });

    GameTimer.start(GAME_CONFIG.questionTime, () => {
      this.answer(null, true);
    });
  },

  showHint() {
    if (this.locked || this.hintUsed) return;

    this.hintUsed = true;
    this.stats.hints += 1;

    const question = this.questions[this.current];
    const formula = Utils.getFormula(question.answer);

    Utils.$("hint-container").innerHTML = `
      <div class="hint-box">
        提示：治法方向为“${
          formula
            ? Utils.escapeHtml(formula.effect)
            : "辨证选方"
        }”。
      </div>
    `;

    Utils.$("prescribe-hint").disabled = true;
  },

  answer(selected, timeout) {
    if (this.locked) return;

    this.locked = true;
    GameTimer.stop();

    const question = this.questions[this.current];
    const formula = Utils.getFormula(question.answer);
    const correct = selected === question.answer;

    document.querySelectorAll("#prescribe-options .option-btn")
      .forEach(button => {
        button.classList.add("disabled");

        if (button.textContent.trim() === question.answer) {
          button.classList.add("correct");
        }

        if (
          selected &&
          button.textContent.trim() === selected &&
          !correct
        ) {
          button.classList.add("wrong");
        }
      });

    let points = 0;

    if (correct) {
      this.combo += 1;
      this.stats.correct += 1;

      points =
        15 +
        calculateTimeBonus(GameTimer.timeLeft, 5) +
        (this.combo >= 3 ? 5 : 0);

      if (this.hintUsed) {
        points = Math.max(8, points - 3);
      }

      this.score += points;
      this.stats.maxCombo = Math.max(
        this.stats.maxCombo,
        this.combo
      );

      Utils.playSound(this.combo >= 3 ? "combo" : "correct");
    } else {
      this.combo = 0;

      if (timeout) {
        this.stats.timeout += 1;
      } else {
        this.stats.wrong += 1;
      }

      Utils.playSound("wrong");

      State.addWrong({
        key: "prescribe-" + question.id,
        mode: "prescribe",
        modeName: "对症开方",
        title: question.patient,
        question: question.symptoms,
        userAnswer: timeout ? "超时未作答" : selected,
        correctAnswer: question.answer,
        explanation: question.explain
      });
    }

    if (formula) {
      State.unlockHerbs(formula.herbs);
    }

    Utils.$("game-score").textContent = this.score;
    Utils.updateCombo(this.combo);

    const feedback = document.createElement("div");
    feedback.className = "knowledge-card pop-in";

    feedback.innerHTML = `
      <h4>
        ${
          correct
            ? `✓ 辨证选方正确，获得 ${points} 分`
            : timeout
              ? "⌛ 时间到"
              : "✗ 辨证选方有误"
        }
      </h4>

      <p>
        <strong>正确方剂：</strong>
        ${Utils.escapeHtml(question.answer)}
      </p>

      ${
        formula
          ? `
            <p>
              <strong>方剂功效：</strong>
              ${Utils.escapeHtml(formula.effect)}
            </p>

            <p>
              <strong>方剂组成：</strong>
              ${Utils.escapeHtml(formula.herbs.join("、"))}
            </p>

            <p>
              <strong>方剂出处：</strong>
              ${Utils.escapeHtml(formula.source)}
            </p>
          `
          : ""
      }

      <p>
        <strong>辨证思路：</strong>
        ${Utils.escapeHtml(question.explain)}
      </p>

      <p class="fun-fact">
        本题为中医药知识模拟情境，不作为现实诊疗或用药建议。
      </p>
    `;

    Utils.$("game-content").appendChild(feedback);

    Utils.createNextButton(
      this,
      this.current === this.questions.length - 1
    );
  },

  next() {
    this.current += 1;

    if (this.current >= this.questions.length) {
      App.finishGame(
        "prescribe",
        "对症开方完成",
        this.score,
        this.stats
      );
    } else {
      this.render();
    }
  },

  cancel() {
    GameTimer.stop();
  }
};

// ============================================================
// 药材连连看
// ============================================================

const MatchGame = {
  grid: [],
  pairHerbs: [],
  selectedIndex: null,
  matched: 0,
  score: 0,
  combo: 0,
  stats: null,
  locked: false,
  ended: false,

  start() {
    App.currentMode = "match";
    Utils.$("game-title").textContent = "药材连连看";

    this.pairHerbs = Utils.pick(HERBS, 8);
    this.grid = [];

    this.pairHerbs.forEach(herb => {
      const representativeEffect =
        herb.effect.split("、").slice(0, 2).join("、");

      this.grid.push({
        type: "herb",
        matchId: herb.id,
        text: herb.name,
        matched: false
      });

      this.grid.push({
        type: "effect",
        matchId: herb.id,
        text: representativeEffect,
        matched: false
      });
    });

    this.grid = Utils.shuffle(this.grid);
    this.selectedIndex = null;
    this.matched = 0;
    this.score = 0;
    this.combo = 0;
    this.locked = false;
    this.ended = false;
    this.stats = createGameStats();

    Utils.$("game-score").textContent = "0";
    Utils.$("game-combo").textContent = "";

    this.render();

    GameTimer.start(GAME_CONFIG.matchTime, () => {
      this.endGame(true);
    });
  },

  render() {
    Utils.$("game-progress").textContent =
      `${this.matched}/${this.pairHerbs.length} 对`;

    Utils.$("game-content").innerHTML = `
      <div class="question-area">
        <div class="classify-note">
          在 ${GAME_CONFIG.matchTime} 秒内，
          配对药材名称与代表性功效
        </div>

        <div class="match-grid" id="match-grid">
          ${this.grid.map((cell, index) => `
            <div
              class="match-cell
                ${cell.matched ? "matched" : ""}
                ${this.selectedIndex === index ? "selected" : ""}
              "
              data-index="${index}"
            >
              ${Utils.escapeHtml(cell.text)}
            </div>
          `).join("")}
        </div>
      </div>
    `;

    Utils.$("match-grid")
      .querySelectorAll(".match-cell")
      .forEach(cell => {
        cell.addEventListener("click", () => {
          this.click(Number(cell.dataset.index));
        });
      });
  },

  click(index) {
    if (this.locked || this.ended) return;

    const cell = this.grid[index];

    if (!cell || cell.matched) return;

    Utils.playSound("click");

    if (this.selectedIndex === null) {
      this.selectedIndex = index;
      this.render();
      return;
    }

    if (this.selectedIndex === index) {
      this.selectedIndex = null;
      this.render();
      return;
    }

    const firstIndex = this.selectedIndex;
    const first = this.grid[firstIndex];
    const second = this.grid[index];

    const matched =
      first.matchId === second.matchId &&
      first.type !== second.type;

    if (matched) {
      first.matched = true;
      second.matched = true;

      this.matched += 1;
      this.combo += 1;
      this.stats.correct += 1;
      this.stats.maxCombo = Math.max(
        this.stats.maxCombo,
        this.combo
      );

      const points = 15 + (this.combo >= 3 ? 5 : 0);
      this.score += points;

      const herb = Utils.getHerb(first.matchId);

      if (herb) {
        State.unlockHerb(herb.id);
      }

      this.selectedIndex = null;

      Utils.$("game-score").textContent = this.score;
      Utils.updateCombo(this.combo);
      Utils.playSound(this.combo >= 3 ? "combo" : "correct");

      this.render();

      if (this.matched >= this.pairHerbs.length) {
        this.endGame(false);
      }
    } else {
      this.locked = true;
      this.combo = 0;
      this.stats.wrong += 1;

      Utils.updateCombo(0);
      Utils.playSound("wrong");

      const cells = document.querySelectorAll(".match-cell");

      if (cells[firstIndex]) {
        cells[firstIndex].classList.add("wrong");
      }

      if (cells[index]) {
        cells[index].classList.add("wrong");
      }

      setTimeout(() => {
        this.selectedIndex = null;
        this.locked = false;
        this.render();
      }, 450);
    }
  },

  endGame(timeout) {
    if (this.ended) return;

    this.ended = true;
    this.locked = true;
    GameTimer.stop();

    if (timeout) {
      this.stats.timeout += 1;

      if (this.matched < this.pairHerbs.length) {
        State.addWrong({
          key: "match-" + Date.now(),
          mode: "match",
          modeName: "药材连连看",
          title: "药材与功效配对",
          question: "在规定时间内完成全部配对",
          userAnswer:
            `已完成 ${this.matched}/${this.pairHerbs.length} 对`,
          correctAnswer: this.pairHerbs
            .map(h => `${h.name}—${h.effect.split("、").slice(0, 2).join("、")}`)
            .join("；"),
          explanation: "可通过药材的代表性功效建立记忆联系。"
        });
      }
    }

    this.pairHerbs.forEach(herb => {
      State.unlockHerb(herb.id);
    });

    const pairsHtml = this.pairHerbs.map(herb => `
      <p>
        <strong>${Utils.escapeHtml(herb.name)}</strong>
        — ${Utils.escapeHtml(
          herb.effect.split("、").slice(0, 2).join("、")
        )}
      </p>
    `).join("");

    Utils.$("game-content").innerHTML += `
      <div class="knowledge-card pop-in">
        <h4>
          ${
            timeout
              ? "⌛ 时间到，以下为正确配对"
              : "✓ 全部配对完成"
          }
        </h4>

        ${pairsHtml}
      </div>

      <div class="next-area">
        <button class="primary" id="match-result-button">
          查看本局成绩
        </button>
      </div>
    `;

    Utils.$("match-result-button").addEventListener("click", () => {
      App.finishGame(
        "match",
        "药材连连看完成",
        this.score,
        this.stats
      );
    });
  },

  cancel() {
    this.ended = true;
    GameTimer.stop();
  }
};

// ============================================================
// 数据提交
// ============================================================

const DataSubmit = {
  apiUrl:
    "https://br-peppy-grue-dfccd1b7.supabase2.aidap-global.cn-beijing.volces.com/functions/v1/game-record-api",

  submit(gameMode, score, unlockedCount, comboMax) {
    fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        game_mode: gameMode,
        score,
        unlocked_count: unlockedCount,
        combo_max: comboMax
      })
    }).catch(() => {
      // 网络提交失败不影响本地游戏
    });
  }
};

// ============================================================
// 初始化
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

