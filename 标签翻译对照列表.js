
// 翻译番号的特征(tag)
function translateTag(txt){
    var sav_tag_trans = {
        "regex":/(?<!\S)(?:自撮り|ミニスカ|ミニスカート|モデル|キャンギャル|コンパニオン|ワキ|お姉さん|手こき|露天風呂|高身長|膣内射精|若妻|奥さん|綺麗|カップル|連続射精|Handjob|精液ローション|むっちり|経験浅め|ゲイ|アナルセックス|イケメン|プリケツ|種付け|お尻|ナンパ|インタビュー|専業主婦|メイド|かわいい|ツンデレ|パジャマ|ロケットおっぱい|出会い系|ナンパ|ビキニ|女子大生|セフレ|ちっぱい|イラマ|シルク肌|ギャル|ロリ|若い|種付けプレス|くぱぁ|お掃除フェラ|スジマン|水着|寝取り|オイル|スクール水着|女子校生|超かわいい|スレンダー|肉ド隷|生中出し|イマラチオ|色白|電マ|着替え|パイパン|下着|パンツ|寝取られ|隠し撮り|おっぱい|オリジナル|ハメ撮り|フェチ|生ハメ|妊婦|オナニー|個人撮影|コスプレ|マッサージ|生挿入|オイルマッサージ|メンズエステ|フェラ|ごっくん|カップル|パイズリ|デカ尻|スワッピング・夫婦交換|為智能手機推薦垂直視頻|COSPLAY服饰|COSPLAY服飾|アクメ・オーガズム|ハイクオリティVR|部活・マネージャー|女優ベスト・総集編|16時間以上作品|16小时以上作品|16小時以上作品|サイコ・スリラー|スマホ専用縦動画|ファン感謝・訪問|病院・クリニック|性別轉型·女性化|4小时以上作品|4小時以上作品|デカチン・巨根|ビジネススーツ|ヘルス・ソープ|老板娘、女主人|老闆娘，女主人|女主人、女老板|新娘，年輕妻子|新娘、年轻妻子|新娘、年輕妻子|性转换・女体化|飲み会・合コン|DVD多士爐|コミック雑誌|スパンキング|第一人称摄影|第一人稱攝影|二穴同時挿入|翻白眼・失神|覆面・マスク|极致·性高潮|萝莉角色扮演|蘿莉角色扮演|陰道放入食物|DMM獨家|DMM專屬|アクション|アスリート|エマニエル|お婆ちゃん|お爺ちゃん|キス・接吻|チアガール|白目・失神|辦公室美女|被外國人幹|部下・同僚|超級女英雄|扯破連褲襪|成熟的女人|電動按摩器|堵嘴·喜劇|高品质VR|给女性观众|給女性觀眾|和服，喪服|和服、丧服|和服・喪服|和服・浴衣|極小比基尼|角色扮演者|精选、综合|精選，綜合|烂醉如泥的|爛醉如泥的|美少女电影|美少女電影|蒙面・面具|男の潮吹き|女优按摩棒|女優按摩棒|貧乳・微乳|其他恋物癖|其他戀物癖|社团・经理|數位馬賽克|下属・同事|野外・露出|医院・诊所|淫乱、真实|淫亂，真實|原简体特征|原作コラボ|整人・喜剧|AV女優|S級女優|VR専用|Vシネマ|オナサポ|セクシー|ディルド|ノーパン|ノーブラ|ハーレム|ラブコメ|爱情喜剧|愛情旅館|白天出軌|薄馬賽克|鼻フック|變態遊戲|不穿內褲|残忍画面|殘忍畫面|側位內射|插入異物|车掌小姐|車內性愛|車掌小姐|成人電影|單體作品|第一視角|電動陽具|動畫人物|獨佔動畫|粉丝感谢|風格出眾|哥德蘿莉|各種職業|工作人員|公共廁所|国外进口|國外進口|黑幫成員|黑人演员|黑人演員|後入內射|滑稽模仿|即兴性交|家庭主婦|介紹影片|精液塗抹|局部特寫|巨大屁股|巨大陽具|巨大阴茎|巨大陰莖|空中小姐|口內射精|口內射精|拉拉队长|禮儀小姐|立即口交|連續內射|裸体围裙|裸體襪子|裸體圍裙|蠻橫嬌羞|迷你係列|男同性戀|內射潮吹|內射觀察|逆レイプ|年輕人妻|娘・養女|女大學生|女檢察官|女同性戀|女裝人妖|偶像藝人|拍攝現場|妻子出軌|其他学生|其他學生|騎乘內射|騎在臉上|汽车性爱|汽車性愛|洽公服装|情趣內衣|人氣系列|日本動漫|賽車女郎|射在頭髮|射在外陰|身体意识|身體意識|時間停止|視頻聊天|視訊小姐|首次內射|瘦小身型|叔母さん|私人攝影|送貨上門|體驗懺悔|童年朋友|推薦作品|外觀相似|玩弄肛門|猥褻穿著|無碼流出|無碼破解|無套性交|寫真偶像|性感的x|学校作品|學校泳裝|學校作品|颜面骑乘|顏面騎乘|陽具腰帶|已婚妇女|已婚婦女|異物插入|陰道觀察|陰道擴張|饮酒派对|慾求不滿|遠程操作|運動短褲|展場女孩|展场女孩|战斗行动|站立姿勢|戰鬥行動|制服外套|主觀視角|自慰辅助|綜合短篇|C学生|アニメ|エロス|オタク|お風呂|セレブ|デート|バック|ビッチ|ブルマ|ホテル|ママ友|辦公室|变性者|變性者|播音員|插兩根|處女作|打底褲|打飛機|打手槍|打樁機|大學生|大陰蒂|丁字褲|惡作劇|飛特族|服務生|複刻版|感謝祭|高個子|高龄男|格斗家|格鬥家|公交車|汗だく|及膝襪|紀錄片|假陽具|嬌小的|接待员|緊身衣|開口器|啦啦隊|歷史劇|連褲襪|連衣裙|戀乳癖|戀腿癖|戀物癖|萝莉塔|蘿莉塔|猫耳女|貓耳女|美容師|明星臉|模特儿|模特兒|魔鬼系|男潮吹|牛仔褲|女教師|女上位|女體盛|女王様|女醫生|女戰士|胖女人|泡泡襪|奇异的|奇異的|騎乗位|騎乘位|企劃物|日焼け|潤滑劑|潤滑油|深膚色|受付嬢|雙性人|體育服|同性戀|晚禮服|无内裤|无胸罩|戲劇x|小麥色|性伴侶|性感的|性騷擾|胸チラ|休閒裝|顏射x|孕ませ|運動系|治癒系|重印版|子宮頸|做家務|高畫質|ヨガ|白領|伴侣|伴侶|綁縛|背后|鼻勾|變態|別墅|廁所|長發|車內|車震|痴漢|出軌|廚房|處男|處女|觸手|搭訕|蕩婦|導尿|倒追|店員|電車|電話|電梯|電鑽|調教|動画|動漫|短褲|兒子|煩惱|房間|糞便|豐滿|夫婦|肛門|公園|購物|寡婦|灌腸|韓國|黑髮|後入|戶外|護士|花癡|花嫁|幻想|婚禮|監禁|檢查|讲师|講師|嬌小|教師|教學|金發|緊縛|经典|經典|經期|頸鏈|痙攣|劇情|捲髮|看護|科幻|可愛|捆綁|蝋燭|蠟燭|濫交|牢籠|老師|戀愛|獵豔|淋浴|鄰居|樓梯|亂搞|亂交|亂倫|輪姦|蘿莉|旅館|媽媽|罵倒|貓眼|美腳|門口|秘書|密會|面接|面試|苗條|母親|母犬|男性|內褲|內射|年輕|農村|奴隸|虐打|女兒|女僕|女生|女佣|女傭|嘔吐|排便|屁股|騙奸|企畫|強姦|情侶|親人|求職|乳房|軟体|軟體|喪服|瘙癢|沙發|曬黑|曬痕|舌頭|攝影|繩子|食粪|食糞|實拍|手銬|束縛|順從|絲帶|素顏|套裝|特效|舔腳|舔陰|通姦|童顔|偷窺|推銷|脫衣|玩具|網襪|圍裙|溫泉|問卷|問題|屋頂|無碼|無毛|無套|西裝|洗澡|戏剧|戲劇|項圈|行动|行動|羞恥|懸掛|學生|學校|鸭嘴|鴨嘴|壓力|亞洲|顏射|眼鏡|眼淚|陽台|藥物|業餘|醫生|醫院|藝人|陰屁|淫蕩|淫亂|淫語|飲尿|泳衣|泳裝|友誼|誘惑|瑜伽|願望|約會|孕婦|運動|再會|早洩|振動|職員|主動|主婦|注視|姊妹|車|襪)(?=\s|$)|カップ/g,
        "replace_map":{
            "スワッピング・夫婦交換":"夫妻交换",
            "為智能手機推薦垂直視頻":"适合手机播放",
            "COSPLAY服饰":"COSPLAY",
            "COSPLAY服飾":"COSPLAY",
            "アクメ・オーガズム":"绝顶高潮",
            "ハイクオリティVR":"VR",
            "部活・マネージャー":"社团经理",
            "女優ベスト・総集編":"最佳女优合集",
            "16時間以上作品":"16小时+",
            "16小时以上作品":"16小时+",
            "16小時以上作品":"16小时+",
            "サイコ・スリラー":"心理惊悚片",
            "スマホ専用縦動画":"适合手机播放",
            "ファン感謝・訪問":"感恩祭",
            "病院・クリニック":"医院诊所",
            "性別轉型·女性化":"性转换·男变女",
            "4小时以上作品":"4小时+",
            "4小時以上作品":"4小时+",
            "デカチン・巨根":"巨根",
            "ビジネススーツ":"职业装",
            "ヘルス・ソープ":"大保健",
            "老板娘、女主人":"女主人",
            "老闆娘，女主人":"女主人",
            "女主人、女老板":"女主人",
            "新娘，年輕妻子":"少妇",
            "新娘、年轻妻子":"少妇",
            "新娘、年輕妻子":"少妇",
            "性转换・女体化":"变性",
            "飲み会・合コン":"酒会",
            "DVD多士爐":"DVD多士炉",
            "コミック雑誌":"介绍影片",
            "スパンキング":"打屁股",
            "第一人称摄影":"主观视角",
            "第一人稱攝影":"主观视角",
            "二穴同時挿入":"二穴同入",
            "翻白眼・失神":"白眼失神",
            "覆面・マスク":"蒙面",
            "极致·性高潮":"绝顶高潮",
            "萝莉角色扮演":"萝莉Cos",
            "蘿莉角色扮演":"萝莉Cos",
            "陰道放入食物":"阴道放入食物",
            "DMM獨家":"DMM独家",
            "DMM專屬":"DMM专属",
            "アクション":"特摄",
            "アスリート":"运动员",
            "エマニエル":"熟女",
            "お婆ちゃん":"外婆",
            "お爺ちゃん":"爷爷",
            "キス・接吻":"接吻.",
            "チアガール":"拉拉队",
            "白目・失神":"白眼失神",
            "辦公室美女":"职场女性",
            "被外國人幹":"被外国人干",
            "部下・同僚":"下属·同事",
            "超級女英雄":"女战士",
            "扯破連褲襪":"扯破连裤袜",
            "成熟的女人":"熟女",
            "電動按摩器":"电动按摩器",
            "堵嘴·喜劇":"喜剧",
            "高品质VR":"VR",
            "给女性观众":"女性向",
            "給女性觀眾":"女性向",
            "和服，喪服":"和服丧服",
            "和服、丧服":"和服丧服",
            "和服・喪服":"和服丧服",
            "和服・浴衣":"和服浴衣",
            "極小比基尼":"极小比基尼",
            "角色扮演者":"角色扮演",
            "精选、综合":"精选综合",
            "精選，綜合":"精选综合",
            "烂醉如泥的":"酒醉",
            "爛醉如泥的":"酒醉",
            "美少女电影":"美少女",
            "美少女電影":"美少女",
            "蒙面・面具":"蒙面",
            "男の潮吹き":"男优潮吹",
            "女优按摩棒":"按摩棒",
            "女優按摩棒":"按摩棒",
            "貧乳・微乳":"贫乳",
            "其他恋物癖":"恋物癖",
            "其他戀物癖":"恋物癖",
            "社团・经理":"社团经理",
            "數位馬賽克":"马赛克",
            "下属・同事":"下属同事",
            "野外・露出":"野外露出",
            "医院・诊所":"医院诊所",
            "淫乱、真实":"淫乱真实",
            "淫亂，真實":"淫乱真实",
            "原简体特征":"简体",
            "原作コラボ":"漫改",
            "整人・喜剧":"喜剧",
            "AV女優":"AV女优",
            "S級女優":"S级女优",
            "VR専用":"VR",
            "Vシネマ":"电影放映",
            "オナサポ":"打手枪",
            "セクシー":"性感",
            "ディルド":"顶至凸起",
            "ノーパン":"不穿内裤",
            "ノーブラ":"不穿胸罩",
            "ハーレム":"后宫",
            "ラブコメ":"喜剧",
            "爱情喜剧":"喜剧",
            "愛情旅館":"爱情旅馆",
            "白天出軌":"白天出轨",
            "薄馬賽克":"薄马赛克",
            "鼻フック":"鼻钩",
            "變態遊戲":"变态游戏",
            "不穿內褲":"不穿内裤",
            "残忍画面":"残忍",
            "殘忍畫面":"残忍",
            "側位內射":"侧位内射",
            "插入異物":"插入异物",
            "车掌小姐":"巴士乘务员",
            "車內性愛":"车震",
            "車掌小姐":"巴士乘务员",
            "成人電影":"成人电影",
            "單體作品":"单体作品",
            "第一視角":"第一视角",
            "電動陽具":"电动阳具",
            "動畫人物":"动画角色",
            "獨佔動畫":"独佔动画",
            "粉丝感谢":"感谢祭",
            "風格出眾":"风格出众",
            "哥德蘿莉":"歌德萝莉",
            "各種職業":"各种职业",
            "工作人員":"工作人员",
            "公共廁所":"公共厕所",
            "國外進口":"进口",
            "黑幫成員":"黑帮成员",
            "黑人演员":"黑人",
            "黑人演員":"黑人",
            "後入內射":"后入内射",
            "滑稽模仿":"喜剧",
            "即兴性交":"立即插入",
            "家庭主婦":"家庭主妇",
            "介紹影片":"介绍影片",
            "精液塗抹":"精液涂抹",
            "局部特寫":"局部特写",
            "巨大屁股":"巨尻",
            "巨大陽具":"巨根",
            "巨大阴茎":"巨根",
            "巨大陰莖":"巨根",
            "空中小姐":"空姐",
            "口內射精":"口内射精",
            "口內射精":"口内射精",
            "拉拉队长":"拉拉队",
            "禮儀小姐":"礼仪小姐",
            "立即口交":"立即插入",
            "連續內射":"连续内射",
            "裸体围裙":"真空围裙",
            "裸體襪子":"裸体袜子",
            "裸體圍裙":"真空围裙",
            "蠻橫嬌羞":"蛮横娇羞",
            "迷你係列":"迷你系",
            "男同性戀":"男同性恋",
            "內射潮吹":"内射潮吹",
            "內射觀察":"内射观察",
            "逆レイプ":"强奸小姨子",
            "年輕人妻":"年轻人妻",
            "娘・養女":"养女",
            "女大學生":"女大学生",
            "女檢察官":"女检察官",
            "女同性戀":"女同性恋",
            "女裝人妖":"人妖",
            "偶像藝人":"偶像",
            "拍攝現場":"拍摄现场",
            "妻子出軌":"妻子出轨",
            "其他学生":"高中生",
            "其他學生":"高中生",
            "騎乘內射":"骑乘内射",
            "騎在臉上":"骑脸",
            "汽车性爱":"车震",
            "汽車性愛":"车震",
            "洽公服装":"职业装",
            "情趣內衣":"情趣内衣",
            "人氣系列":"人气系列",
            "日本動漫":"COSPLAY",
            "賽車女郎":"赛车女郎",
            "射在頭髮":"射在头发",
            "射在外陰":"射在外阴",
            "身体意识":"丰乳肥臀",
            "身體意識":"丰乳肥臀",
            "時間停止":"时间停止",
            "視頻聊天":"视频聊天",
            "視訊小姐":"视频聊天",
            "首次內射":"首次内射",
            "瘦小身型":"娇小",
            "叔母さん":"叔母",
            "私人攝影":"私人摄影",
            "送貨上門":"送货上门",
            "體驗懺悔":"体验忏悔",
            "童年朋友":"青梅竹马",
            "推薦作品":"推荐作品",
            "外觀相似":"外观相似",
            "玩弄肛門":"玩弄肛门",
            "猥褻穿著":"猥亵穿着",
            "無碼流出":"无码流出",
            "無碼破解":"无码破解",
            "無套性交":"无套性交",
            "寫真偶像":"写真偶像",
            "性感的x":"性感",
            "学校作品":"校园",
            "學校泳裝":"学校泳装",
            "學校作品":"校园",
            "颜面骑乘":"骑脸",
            "顏面騎乘":"骑脸",
            "陽具腰帶":"阳具腰带",
            "已婚妇女":"人妻",
            "已婚婦女":"人妻",
            "異物插入":"异物插入",
            "陰道觀察":"阴道观察",
            "陰道擴張":"阴道扩张",
            "饮酒派对":"酒会",
            "慾求不滿":"欲求不满",
            "遠程操作":"远程操作",
            "運動短褲":"运动短裤",
            "展場女孩":"Show Girl",
            "展场女孩":"Show Girl",
            "战斗行动":"武术格斗",
            "站立姿勢":"站立姿势",
            "戰鬥行動":"武术格斗",
            "制服外套":"JK制服",
            "主觀視角":"主观视角",
            "自慰辅助":"辅助自慰",
            "綜合短篇":"综合短篇",
            "C学生":"操学生",
            "アニメ":"COSPLAY",
            "エロス":"纯欲",
            "オタク":"御宅族",
            "お風呂":"浴室",
            "セレブ":"养尊处优",
            "デート":"约会",
            "バック":"后入",
            "ビッチ":"妓女",
            "ブルマ":"运动短裤",
            "ホテル":"旅馆",
            "ママ友":"妈妈的朋友",
            "辦公室":"办公室",
            "变性者":"变性",
            "變性者":"变性",
            "播音員":"播音员",
            "插兩根":"插两根",
            "處女作":"处女作",
            "打底褲":"打底裤",
            "打飛機":"打飞机",
            "打手槍":"打手枪",
            "打樁機":"打桩机",
            "大學生":"大学生",
            "大陰蒂":"大阴蒂",
            "丁字褲":"丁字裤",
            "惡作劇":"恶作剧",
            "飛特族":"飞特族",
            "服務生":"服务生",
            "複刻版":"重制版",
            "感謝祭":"感谢祭",
            "高個子":"高个头",
            "高龄男":"老头",
            "格斗家":"武术格斗",
            "格鬥家":"武术格斗",
            "公交車":"公交车",
            "汗だく":"汗流浃背",
            "及膝襪":"及膝袜",
            "紀錄片":"纪录片",
            "假陽具":"假阳具",
            "嬌小的":"娇小",
            "接待员":"招待小姐",
            "緊身衣":"紧身衣",
            "開口器":"开口器",
            "啦啦隊":"拉拉队",
            "歷史劇":"历史剧",
            "連褲襪":"连裤袜",
            "連衣裙":"连衣裙",
            "戀乳癖":"恋乳癖",
            "戀腿癖":"恋腿癖",
            "戀物癖":"恋物癖",
            "萝莉塔":"萝莉",
            "蘿莉塔":"萝莉",
            "猫耳女":"猫耳",
            "貓耳女":"猫耳",
            "美容師":"美容师",
            "明星臉":"明星脸",
            "模特儿":"模特",
            "模特兒":"模特",
            "魔鬼系":"调教",
            "男潮吹":"男优潮吹",
            "牛仔褲":"牛仔裤",
            "女教師":"女教师",
            "女上位":"骑乘",
            "女體盛":"女体盛",
            "女王様":"女王",
            "女醫生":"女医生",
            "女戰士":"女战士",
            "胖女人":"坦克",
            "泡泡襪":"泡泡袜",
            "奇异的":"残忍",
            "奇異的":"残忍",
            "騎乗位":"女上位",
            "騎乘位":"骑乘",
            "企劃物":"企划物",
            "日焼け":"晒黑",
            "潤滑劑":"润滑剂",
            "潤滑油":"润滑油",
            "深膚色":"深肤色",
            "受付嬢":"接待员",
            "雙性人":"双性人",
            "體育服":"运动短裤",
            "同性戀":"同性恋",
            "晚禮服":"晚礼服",
            "无内裤":"不穿内裤",
            "无胸罩":"不穿胸罩",
            "戲劇x":"剧情",
            "小麥色":"小麦色",
            "性伴侶":"性伴侣",
            "性感的":"性感",
            "性騷擾":"性骚扰",
            "胸チラ":"露胸",
            "休閒裝":"休閒装",
            "顏射x":"颜射",
            "孕ませ":"危险期",
            "運動系":"运动系",
            "治癒系":"治癒系",
            "重印版":"重制版",
            "子宮頸":"子宫颈",
            "做家務":"做家务",
            "高畫質":"高画质",
            "ヨガ":"瑜伽",
            "白領":"白领",
            "伴侣":"招待小姐",
            "伴侶":"招待小姐",
            "綁縛":"绑缚",
            "背后":"后入",
            "鼻勾":"鼻钩",
            "變態":"变态",
            "別墅":"别墅",
            "廁所":"厕所",
            "長發":"长发",
            "車內":"车内",
            "車震":"车震",
            "痴漢":"痴汉",
            "出軌":"出轨",
            "廚房":"厨房",
            "處男":"处男",
            "處女":"处女",
            "觸手":"触手",
            "搭訕":"搭讪",
            "蕩婦":"荡妇",
            "導尿":"导尿",
            "倒追":"女方搭讪",
            "店員":"店员",
            "電車":"电车",
            "電話":"电话",
            "電梯":"电梯",
            "電鑽":"电钻",
            "調教":"调教",
            "動画":"动画",
            "動漫":"动漫",
            "短褲":"短裤",
            "兒子":"儿子",
            "煩惱":"烦恼",
            "房間":"房间",
            "糞便":"粪便",
            "豐滿":"丰满",
            "夫婦":"夫妇",
            "肛門":"肛门",
            "公園":"公园",
            "購物":"购物",
            "寡婦":"寡妇",
            "灌腸":"灌肠",
            "韓國":"韩国",
            "黑髮":"黑发",
            "後入":"后入",
            "戶外":"户外",
            "護士":"护士",
            "花癡":"花痴",
            "花嫁":"新娘",
            "幻想":"妄想",
            "婚禮":"婚礼",
            "監禁":"监禁",
            "檢查":"检查",
            "讲师":"瑜伽",
            "講師":"瑜伽",
            "嬌小":"娇小",
            "教師":"教师",
            "教學":"性教学",
            "金發":"金发",
            "緊縛":"紧身衣",
            "經典":"经典",
            "經期":"经期",
            "頸鏈":"颈链",
            "痙攣":"痉挛",
            "劇情":"剧情",
            "捲髮":"卷发",
            "看護":"看护",
            "科幻":"奇幻",
            "可愛":"可爱",
            "捆綁":"捆绑",
            "蝋燭":"蜡烛",
            "蠟燭":"蜡烛",
            "濫交":"滥交",
            "牢籠":"牢笼",
            "老師":"老师",
            "戀愛":"恋爱",
            "獵豔":"猎艳",
            "淋浴":"洗浴",
            "鄰居":"邻居",
            "樓梯":"楼梯",
            "亂搞":"乱搞",
            "亂交":"乱交",
            "亂倫":"乱伦",
            "輪姦":"轮奸",
            "蘿莉":"萝莉",
            "旅館":"旅馆",
            "媽媽":"妈妈",
            "罵倒":"骂倒",
            "貓眼":"猫眼",
            "美腳":"美脚",
            "門口":"门口",
            "秘書":"秘书",
            "密會":"密会",
            "面接":"面试",
            "面試":"面试",
            "苗條":"苗条",
            "母親":"母亲",
            "母犬":"母狗",
            "男性":"男优介绍",
            "內褲":"内裤",
            "內射":"内射",
            "年輕":"年轻",
            "農村":"农村",
            "奴隸":"奴隶",
            "虐打":"打屁股",
            "女兒":"女儿",
            "女僕":"女仆",
            "女生":"辣妹",
            "女佣":"女仆",
            "女傭":"女仆",
            "嘔吐":"呕吐",
            "排便":"粪便",
            "屁股":"美臀",
            "騙奸":"骗奸",
            "企畫":"企画",
            "強姦":"强奸",
            "情侶":"情侣",
            "親人":"亲人",
            "求職":"求职",
            "乳房":"美乳",
            "軟体":"软体",
            "軟體":"软体",
            "喪服":"丧服",
            "瘙癢":"瘙痒",
            "沙發":"沙发",
            "曬黑":"晒黑",
            "曬痕":"晒痕",
            "舌頭":"舌头",
            "攝影":"摄影",
            "繩子":"绳子",
            "食粪":"粪便",
            "食糞":"粪便",
            "實拍":"实拍",
            "手銬":"手铐",
            "束縛":"束缚",
            "順從":"顺从",
            "絲帶":"丝带",
            "素顏":"素颜",
            "套裝":"套装",
            "特效":"特摄",
            "舔腳":"舔脚",
            "舔陰":"舔阴",
            "通姦":"通奸",
            "童顔":"童颜",
            "偷窺":"偷窥",
            "推銷":"推销",
            "脫衣":"脱衣",
            "玩具":"玩物",
            "網襪":"网袜",
            "圍裙":"围裙",
            "溫泉":"温泉",
            "問卷":"问卷",
            "問題":"问题",
            "屋頂":"屋顶",
            "無碼":"无码",
            "無毛":"无毛",
            "無套":"无套",
            "西裝":"西装",
            "洗澡":"洗浴",
            "戏剧":"剧情",
            "戲劇":"剧情",
            "項圈":"项圈",
            "行动":"女战士",
            "行動":"女战士",
            "羞恥":"羞耻",
            "懸掛":"悬挂",
            "學生":"学生",
            "學校":"学校",
            "鸭嘴":"肛检",
            "鴨嘴":"肛检",
            "壓力":"压力",
            "亞洲":"亚洲",
            "顏射":"颜射",
            "眼鏡":"眼镜",
            "眼淚":"眼泪",
            "陽台":"阳台",
            "藥物":"药物",
            "業餘":"业余",
            "醫生":"医生",
            "醫院":"医院",
            "藝人":"艺人",
            "陰屁":"阴屁",
            "淫蕩":"淫荡",
            "淫亂":"淫乱",
            "淫語":"淫语",
            "飲尿":"饮尿",
            "泳衣":"泳装",
            "泳裝":"泳装",
            "友誼":"友谊",
            "誘惑":"诱惑",
            "瑜伽":"瑜伽",
            "願望":"愿望",
            "約會":"约会",
            "孕婦":"孕妇",
            "運動":"运动",
            "再會":"再会",
            "早洩":"早泄",
            "振動":"振动",
            "職員":"职员",
            "主動":"主动",
            "主婦":"主妇",
            "注視":"注视",
            "姊妹":"姐妹",
            "車":"车",
            "襪":"袜",
            "配信専用":"线上发布",
            "フルハイビジョン(FHD)":"全高清",
            // fc2 
            // 部分替换
            "カップ":"罩杯",
            // 全词替换
            "自撮り":"自拍",
            "妊婦":"孕妇",
            "オナニー":"自慰",
            "個人撮影":"私人摄影",
            "コスプレ":"cosplay",
            "マッサージ":"按摩",
            "生挿入":"强制插入",
            "オイルマッサージ":"推油",
            "メンズエステ":"男士按摩",
            "フェラ":"口交",
            "ごっくん":"吞精",
            "カップル":"情侣",
            "パイズリ":"乳交",
            "デカ尻":"大屁股",
            "オリジナル":"原创",
            "ハメ撮り":"性爱自拍",
            "フェチ":"恋物癖",
            "生ハメ":"无套",
            "寝取られ":"NTR",
            "隠し撮り":"偷拍",
            "おっぱい":"美乳",
            "下着":"内衣",
            "パンツ":"内裤",
            "着替え":"换衣服",
            "パイパン":"无毛",
            "肉ド隷":"肉体的奴隶",
            "生中出し":"无套中出",
            "イマラチオ":"深喉",
            "色白":"肤白",
            "電マ":"电击",
            "水着":"泳装",
            "寝取り":"NTR",
            "オイル":"推油",
            "スクール水着":"学校泳装",
            "女子校生":"学生",
            "超かわいい":"超级可爱",
            "スレンダー":"苗条",
            "むっちり":"丰满的屁股",
            "経験浅め":"没有经验",
            "ゲイ":"同性恋",
            "アナルセックス":"肛交",
            "イケメン":"帅哥",
            "プリケツ":"屁股",
            "種付け":"配种",
            "お尻":"屁股",
            "ナンパ":"搭讪",
            "インタビュー":"访谈",
            "専業主婦":"家庭主妇",
            "メイド":"女仆",
            "かわいい":"可爱",
            "ツンデレ":"傲娇",
            "パジャマ":"睡衣",
            "ロケットおっぱい":"大胸",
            "出会い系":"约会",
            "ナンパ":"easy girl",
            "ビキニ":"泳衣",
            "女子大生":"大学生",
            "セフレ":"炮友",
            "ちっぱい":"贫乳",
            "イラマ":"深喉",
            "シルク肌":"鲜肤",
            "ギャル":"辣妹",
            "ロリ":"萝莉",
            "若い":"年轻",
            "ミニスカ":"迷你裙",
            "ミニスカート":"迷你裙",
            "モデル":"模特",
            "キャンギャル":"展台女郎",
            "コンパニオン":"伴侣",
            "ワキ":"腋下",
            "お姉さん":"姐姐",
            "手こき":"手淫",
            "露天風呂":"露天浴场",
            "高身長":"高个头",
            "膣内射精":"阴道射精",
            "若妻":"年轻妻子",
            "奥さん":"妻子",
            "綺麗":"美丽",
            "カップル":"夫妻",
            "連続射精":"连续射精",
            "Handjob":"手淫",
            "精液ローション":"精液",

            // 猜的
            "種付けプレス":"交配",
            "くぱぁ":"开放阴道",
            "お掃除フェラ":"口爆",
            "スジマン":"荡妇",
            "イベント":"演出",
            
            // 猜不出来的
            // 逆さ
        }
    }
    const regex_expr = sav_tag_trans.regex;
    const replace_map = sav_tag_trans.replace_map;
    sav_tag_trans = null;
    let trans = txt.replace(regex_expr, function(word){
        return replace_map[word]
    })
    return trans;
}
