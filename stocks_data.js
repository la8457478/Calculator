const stockList = [
    {
        "code": "600519",
        "name": "贵州茅台",
        "pinyin": "gzmt",
        "market": "SH"
    },
    {
        "code": "301308",
        "name": "江波龙",
        "pinyin": "jbl",
        "market": "SZ"
    },
    {
        "code": "603444",
        "name": "吉比特",
        "pinyin": "jbt",
        "market": "SH"
    },
    {
        "code": "300139",
        "name": "晓程科技",
        "pinyin": "xckj",
        "market": "SZ"
    },
    {
        "code": "300751",
        "name": "迈为股份",
        "pinyin": "mwgf",
        "market": "SZ"
    },
    {
        "code": "605499",
        "name": "东鹏饮料",
        "pinyin": "dpyl",
        "market": "SH"
    },
    {
        "code": "301005",
        "name": "超捷股份",
        "pinyin": "cjgf",
        "market": "SZ"
    },
    {
        "code": "605255",
        "name": "天普股份",
        "pinyin": "tpgf",
        "market": "SH"
    },
    {
        "code": "300033",
        "name": "同花顺",
        "pinyin": "ths",
        "market": "SZ"
    },
    {
        "code": "300454",
        "name": "深信服",
        "pinyin": "sxf",
        "market": "SZ"
    },
    {
        "code": "603979",
        "name": "金诚信",
        "pinyin": "jcx",
        "market": "SH"
    },
    {
        "code": "300436",
        "name": "广生堂",
        "pinyin": "gst",
        "market": "SZ"
    },
    {
        "code": "603129",
        "name": "春风动力",
        "pinyin": "cfdl",
        "market": "SH"
    },
    {
        "code": "603040",
        "name": "新坐标",
        "pinyin": "xzb",
        "market": "SH"
    },
    {
        "code": "002738",
        "name": "中矿资源",
        "pinyin": "zkzy",
        "market": "SZ"
    },
    {
        "code": "001337",
        "name": "四川黄金",
        "pinyin": "schj",
        "market": "SZ"
    },
    {
        "code": "300765",
        "name": "新诺威",
        "pinyin": "xnw",
        "market": "SZ"
    },
    {
        "code": "600362",
        "name": "江西铜业",
        "pinyin": "jxty",
        "market": "SH"
    },
    {
        "code": "301141",
        "name": "中科磁业",
        "pinyin": "zkcy",
        "market": "SZ"
    },
    {
        "code": "000426",
        "name": "兴业银锡",
        "pinyin": "xyyx",
        "market": "SZ"
    },
    {
        "code": "301563",
        "name": "云汉芯城",
        "pinyin": "yhxc",
        "market": "SZ"
    },
    {
        "code": "000603",
        "name": "盛达资源",
        "pinyin": "sdzy",
        "market": "SZ"
    },
    {
        "code": "603799",
        "name": "华友钴业",
        "pinyin": "hygy",
        "market": "SH"
    },
    {
        "code": "000596",
        "name": "古井贡酒",
        "pinyin": "gjgj",
        "market": "SZ"
    },
    {
        "code": "600809",
        "name": "山西汾酒",
        "pinyin": "sxfj",
        "market": "SH"
    },
    {
        "code": "600436",
        "name": "片仔癀",
        "pinyin": "pzh",
        "market": "SH"
    },
    {
        "code": "600301",
        "name": "华锡有色",
        "pinyin": "hxys",
        "market": "SH"
    },
    {
        "code": "603257",
        "name": "中国瑞林",
        "pinyin": "zgrl",
        "market": "SH"
    },
    {
        "code": "600547",
        "name": "山东黄金",
        "pinyin": "sdhj",
        "market": "SH"
    },
    {
        "code": "000858",
        "name": "五 粮 液",
        "pinyin": "w l y",
        "market": "SZ"
    },
    {
        "code": "605123",
        "name": "派克新材",
        "pinyin": "pkxc",
        "market": "SH"
    },
    {
        "code": "002460",
        "name": "赣锋锂业",
        "pinyin": "gfly",
        "market": "SZ"
    },
    {
        "code": "600259",
        "name": "中稀有色",
        "pinyin": "zxys",
        "market": "SH"
    },
    {
        "code": "000408",
        "name": "藏格矿业",
        "pinyin": "cgky",
        "market": "SZ"
    },
    {
        "code": "301421",
        "name": "波长光电",
        "pinyin": "bcgd",
        "market": "SZ"
    },
    {
        "code": "301392",
        "name": "汇成真空",
        "pinyin": "hczk",
        "market": "SZ"
    },
    {
        "code": "300818",
        "name": "耐普矿机",
        "pinyin": "npkj",
        "market": "SZ"
    },
    {
        "code": "301232",
        "name": "飞沃科技",
        "pinyin": "fwkj",
        "market": "SZ"
    },
    {
        "code": "301177",
        "name": "迪阿股份",
        "pinyin": "dagf",
        "market": "SZ"
    },
    {
        "code": "601127",
        "name": "赛力斯",
        "pinyin": "sls",
        "market": "SH"
    },
    {
        "code": "300709",
        "name": "精研科技",
        "pinyin": "jykj",
        "market": "SZ"
    },
    {
        "code": "002718",
        "name": "友邦吊顶",
        "pinyin": "ybdd",
        "market": "SZ"
    },
    {
        "code": "600988",
        "name": "赤峰黄金",
        "pinyin": "cfhj",
        "market": "SH"
    },
    {
        "code": "002595",
        "name": "豪迈科技",
        "pinyin": "hmkj",
        "market": "SZ"
    },
    {
        "code": "300919",
        "name": "中伟新材",
        "pinyin": "zwxc",
        "market": "SZ"
    },
    {
        "code": "300896",
        "name": "爱美客",
        "pinyin": "amk",
        "market": "SZ"
    },
    {
        "code": "300191",
        "name": "潜能恒信",
        "pinyin": "qnhx",
        "market": "SZ"
    },
    {
        "code": "300706",
        "name": "阿石创",
        "pinyin": "asc",
        "market": "SZ"
    },
    {
        "code": "002466",
        "name": "天齐锂业",
        "pinyin": "tqly",
        "market": "SZ"
    },
    {
        "code": "600111",
        "name": "北方稀土",
        "pinyin": "bfxt",
        "market": "SH"
    },
    {
        "code": "002304",
        "name": "洋河股份",
        "pinyin": "yhgf",
        "market": "SZ"
    },
    {
        "code": "300837",
        "name": "浙矿股份",
        "pinyin": "zkgf",
        "market": "SZ"
    },
    {
        "code": "300618",
        "name": "寒锐钴业",
        "pinyin": "hrgy",
        "market": "SZ"
    },
    {
        "code": "000831",
        "name": "中国稀土",
        "pinyin": "zgxt",
        "market": "SZ"
    },
    {
        "code": "301026",
        "name": "浩通科技",
        "pinyin": "htkj",
        "market": "SZ"
    },
    {
        "code": "002865",
        "name": "钧达股份",
        "pinyin": "jdgf",
        "market": "SZ"
    },
    {
        "code": "301155",
        "name": "海力风电",
        "pinyin": "hlfd",
        "market": "SZ"
    },
    {
        "code": "002192",
        "name": "融捷股份",
        "pinyin": "rjgf",
        "market": "SZ"
    },
    {
        "code": "300760",
        "name": "迈瑞医疗",
        "pinyin": "mryl",
        "market": "SZ"
    },
    {
        "code": "600489",
        "name": "中金黄金",
        "pinyin": "zjhj",
        "market": "SH"
    },
    {
        "code": "601799",
        "name": "星宇股份",
        "pinyin": "xygf",
        "market": "SH"
    },
    {
        "code": "301219",
        "name": "腾远钴业",
        "pinyin": "tygy",
        "market": "SZ"
    },
    {
        "code": "301398",
        "name": "星源卓镁",
        "pinyin": "xyzm",
        "market": "SZ"
    },
    {
        "code": "601069",
        "name": "西部黄金",
        "pinyin": "xbhj",
        "market": "SH"
    },
    {
        "code": "601168",
        "name": "西部矿业",
        "pinyin": "xbky",
        "market": "SH"
    },
    {
        "code": "000975",
        "name": "山金国际",
        "pinyin": "sjgj",
        "market": "SZ"
    },
    {
        "code": "603090",
        "name": "宏盛股份",
        "pinyin": "hsgf",
        "market": "SH"
    },
    {
        "code": "301622",
        "name": "英思特",
        "pinyin": "yst",
        "market": "SZ"
    },
    {
        "code": "301500",
        "name": "飞南资源",
        "pinyin": "fnzy",
        "market": "SZ"
    },
    {
        "code": "000960",
        "name": "锡业股份",
        "pinyin": "xygf",
        "market": "SZ"
    },
    {
        "code": "300945",
        "name": "曼卡龙",
        "pinyin": "mkl",
        "market": "SZ"
    },
    {
        "code": "600612",
        "name": "老凤祥",
        "pinyin": "lfx",
        "market": "SH"
    },
    {
        "code": "300803",
        "name": "指南针",
        "pinyin": "znz",
        "market": "SZ"
    },
    {
        "code": "300748",
        "name": "金力永磁",
        "pinyin": "jlyc",
        "market": "SZ"
    },
    {
        "code": "301209",
        "name": "联合化学",
        "pinyin": "lhhx",
        "market": "SZ"
    },
    {
        "code": "600600",
        "name": "青岛啤酒",
        "pinyin": "qdpj",
        "market": "SH"
    },
    {
        "code": "600549",
        "name": "厦门钨业",
        "pinyin": "smwy",
        "market": "SH"
    },
    {
        "code": "002756",
        "name": "永兴材料",
        "pinyin": "yxcl",
        "market": "SZ"
    },
    {
        "code": "601020",
        "name": "华钰矿业",
        "pinyin": "hyky",
        "market": "SH"
    },
    {
        "code": "001280",
        "name": "中国铀业",
        "pinyin": "zgyy",
        "market": "SZ"
    },
    {
        "code": "000807",
        "name": "云铝股份",
        "pinyin": "ylgf",
        "market": "SZ"
    },
    {
        "code": "603353",
        "name": "和顺石油",
        "pinyin": "hssy",
        "market": "SH"
    },
    {
        "code": "601899",
        "name": "紫金矿业",
        "pinyin": "zjky",
        "market": "SH"
    },
    {
        "code": "603260",
        "name": "合盛硅业",
        "pinyin": "hsgy",
        "market": "SH"
    },
    {
        "code": "600702",
        "name": "舍得酒业",
        "pinyin": "sdjy",
        "market": "SH"
    },
    {
        "code": "300545",
        "name": "联得装备",
        "pinyin": "ldzb",
        "market": "SZ"
    },
    {
        "code": "300619",
        "name": "金银河",
        "pinyin": "jyh",
        "market": "SZ"
    },
    {
        "code": "301667",
        "name": "纳百川",
        "pinyin": "nbc",
        "market": "SZ"
    },
    {
        "code": "601112",
        "name": "C振石",
        "pinyin": "czs",
        "market": "SH"
    },
    {
        "code": "301548",
        "name": "崇德科技",
        "pinyin": "cdkj",
        "market": "SZ"
    },
    {
        "code": "603072",
        "name": "天和磁材",
        "pinyin": "thcc",
        "market": "SH"
    },
    {
        "code": "002880",
        "name": "卫光生物",
        "pinyin": "wgsw",
        "market": "SZ"
    },
    {
        "code": "603061",
        "name": "金海通",
        "pinyin": "jht",
        "market": "SH"
    },
    {
        "code": "002850",
        "name": "科达利",
        "pinyin": "kdl",
        "market": "SZ"
    },
    {
        "code": "600392",
        "name": "盛和资源",
        "pinyin": "shzy",
        "market": "SH"
    },
    {
        "code": "000878",
        "name": "云南铜业",
        "pinyin": "ynty",
        "market": "SZ"
    },
    {
        "code": "300127",
        "name": "银河磁体",
        "pinyin": "yhct",
        "market": "SZ"
    },
    {
        "code": "301529",
        "name": "福赛科技",
        "pinyin": "fskj",
        "market": "SZ"
    },
    {
        "code": "601888",
        "name": "中国中免",
        "pinyin": "zgzm",
        "market": "SH"
    },
    {
        "code": "301306",
        "name": "西测测试",
        "pinyin": "xccs",
        "market": "SZ"
    },
    {
        "code": "000506",
        "name": "招金黄金",
        "pinyin": "zjhj",
        "market": "SZ"
    },
    {
        "code": "301323",
        "name": "新莱福",
        "pinyin": "xlf",
        "market": "SZ"
    },
    {
        "code": "603259",
        "name": "药明康德",
        "pinyin": "ymkd",
        "market": "SH"
    },
    {
        "code": "301158",
        "name": "德石股份",
        "pinyin": "dsgf",
        "market": "SZ"
    },
    {
        "code": "301117",
        "name": "佳缘科技",
        "pinyin": "jykj",
        "market": "SZ"
    },
    {
        "code": "000762",
        "name": "西藏矿业",
        "pinyin": "xcky",
        "market": "SZ"
    },
    {
        "code": "603993",
        "name": "洛阳钼业",
        "pinyin": "lymy",
        "market": "SH"
    },
    {
        "code": "301446",
        "name": "福事特",
        "pinyin": "fst",
        "market": "SZ"
    },
    {
        "code": "689009",
        "name": "九号公司-WD",
        "pinyin": "jhgs-wd",
        "market": "SH"
    },
    {
        "code": "603171",
        "name": "税友股份",
        "pinyin": "sygf",
        "market": "SH"
    },
    {
        "code": "300697",
        "name": "电工合金",
        "pinyin": "dghj",
        "market": "SZ"
    },
    {
        "code": "600459",
        "name": "贵研铂业",
        "pinyin": "gyby",
        "market": "SH"
    },
    {
        "code": "002428",
        "name": "云南锗业",
        "pinyin": "ynzy",
        "market": "SZ"
    },
    {
        "code": "301338",
        "name": "凯格精机",
        "pinyin": "kgjj",
        "market": "SZ"
    },
    {
        "code": "603486",
        "name": "科沃斯",
        "pinyin": "kws",
        "market": "SH"
    },
    {
        "code": "603619",
        "name": "中曼石油",
        "pinyin": "zmsy",
        "market": "SH"
    },
    {
        "code": "600961",
        "name": "株冶集团",
        "pinyin": "zyjt",
        "market": "SH"
    },
    {
        "code": "300917",
        "name": "特发服务",
        "pinyin": "tffw",
        "market": "SZ"
    },
    {
        "code": "600132",
        "name": "重庆啤酒",
        "pinyin": "zqpj",
        "market": "SH"
    },
    {
        "code": "300533",
        "name": "冰川网络",
        "pinyin": "bcwl",
        "market": "SZ"
    },
    {
        "code": "600531",
        "name": "豫光金铅",
        "pinyin": "ygjq",
        "market": "SH"
    },
    {
        "code": "301613",
        "name": "新铝时代",
        "pinyin": "xlsd",
        "market": "SZ"
    },
    {
        "code": "301522",
        "name": "上大股份",
        "pinyin": "sdgf",
        "market": "SZ"
    },
    {
        "code": "300866",
        "name": "安克创新",
        "pinyin": "akcx",
        "market": "SZ"
    },
    {
        "code": "300780",
        "name": "德恩精工",
        "pinyin": "dejg",
        "market": "SZ"
    },
    {
        "code": "000661",
        "name": "长春高新",
        "pinyin": "ccgx",
        "market": "SZ"
    },
    {
        "code": "300316",
        "name": "晶盛机电",
        "pinyin": "jsjd",
        "market": "SZ"
    },
    {
        "code": "605117",
        "name": "德业股份",
        "pinyin": "dygf",
        "market": "SH"
    },
    {
        "code": "002353",
        "name": "杰瑞股份",
        "pinyin": "jrgf",
        "market": "SZ"
    },
    {
        "code": "000688",
        "name": "国城矿业",
        "pinyin": "gcky",
        "market": "SZ"
    },
    {
        "code": "000933",
        "name": "神火股份",
        "pinyin": "shgf",
        "market": "SZ"
    },
    {
        "code": "603196",
        "name": "日播时尚",
        "pinyin": "rbss",
        "market": "SH"
    },
    {
        "code": "605090",
        "name": "九丰能源",
        "pinyin": "jfny",
        "market": "SH"
    },
    {
        "code": "002237",
        "name": "恒邦股份",
        "pinyin": "hbgf",
        "market": "SZ"
    },
    {
        "code": "003042",
        "name": "中农联合",
        "pinyin": "znlh",
        "market": "SZ"
    },
    {
        "code": "601958",
        "name": "金钼股份",
        "pinyin": "jmgf",
        "market": "SH"
    },
    {
        "code": "002667",
        "name": "威领股份",
        "pinyin": "wlgf",
        "market": "SZ"
    },
    {
        "code": "000923",
        "name": "河钢资源",
        "pinyin": "hgzy",
        "market": "SZ"
    },
    {
        "code": "002240",
        "name": "盛新锂能",
        "pinyin": "sxln",
        "market": "SZ"
    },
    {
        "code": "603396",
        "name": "金辰股份",
        "pinyin": "jcgf",
        "market": "SH"
    },
    {
        "code": "300474",
        "name": "景嘉微",
        "pinyin": "jjw",
        "market": "SZ"
    },
    {
        "code": "603606",
        "name": "东方电缆",
        "pinyin": "dfdl",
        "market": "SH"
    },
    {
        "code": "300342",
        "name": "天银机电",
        "pinyin": "tyjd",
        "market": "SZ"
    },
    {
        "code": "300053",
        "name": "航宇微",
        "pinyin": "hyw",
        "market": "SZ"
    },
    {
        "code": "603132",
        "name": "金徽股份",
        "pinyin": "jhgf",
        "market": "SH"
    },
    {
        "code": "301606",
        "name": "绿联科技",
        "pinyin": "llkj",
        "market": "SZ"
    },
    {
        "code": "001233",
        "name": "海安集团",
        "pinyin": "hajt",
        "market": "SZ"
    },
    {
        "code": "002716",
        "name": "湖南白银",
        "pinyin": "hnby",
        "market": "SZ"
    },
    {
        "code": "603312",
        "name": "西典新能",
        "pinyin": "xdxn",
        "market": "SH"
    },
    {
        "code": "600118",
        "name": "中国卫星",
        "pinyin": "zgwx",
        "market": "SH"
    },
    {
        "code": "300487",
        "name": "蓝晓科技",
        "pinyin": "lxkj",
        "market": "SZ"
    },
    {
        "code": "300758",
        "name": "七彩化学",
        "pinyin": "qchx",
        "market": "SZ"
    },
    {
        "code": "300390",
        "name": "天华新能",
        "pinyin": "thxn",
        "market": "SZ"
    },
    {
        "code": "301382",
        "name": "蜂助手",
        "pinyin": "fzs",
        "market": "SZ"
    },
    {
        "code": "300402",
        "name": "宝色股份",
        "pinyin": "bsgf",
        "market": "SZ"
    },
    {
        "code": "301636",
        "name": "泽润新能",
        "pinyin": "zrxn",
        "market": "SZ"
    },
    {
        "code": "002497",
        "name": "雅化集团",
        "pinyin": "yhjt",
        "market": "SZ"
    },
    {
        "code": "002978",
        "name": "安宁股份",
        "pinyin": "angf",
        "market": "SZ"
    },
    {
        "code": "300997",
        "name": "欢乐家",
        "pinyin": "hlj",
        "market": "SZ"
    },
    {
        "code": "301269",
        "name": "华大九天",
        "pinyin": "hdjt",
        "market": "SZ"
    },
    {
        "code": "600563",
        "name": "法拉电子",
        "pinyin": "fldz",
        "market": "SH"
    },
    {
        "code": "301555",
        "name": "惠柏新材",
        "pinyin": "hbxc",
        "market": "SZ"
    },
    {
        "code": "603198",
        "name": "迎驾贡酒",
        "pinyin": "yjgj",
        "market": "SH"
    },
    {
        "code": "000962",
        "name": "东方钽业",
        "pinyin": "dfty",
        "market": "SZ"
    },
    {
        "code": "000568",
        "name": "泸州老窖",
        "pinyin": "lzlj",
        "market": "SZ"
    },
    {
        "code": "300331",
        "name": "苏大维格",
        "pinyin": "sdwg",
        "market": "SZ"
    },
    {
        "code": "603920",
        "name": "世运电路",
        "pinyin": "sydl",
        "market": "SH"
    },
    {
        "code": "002552",
        "name": "宝鼎科技",
        "pinyin": "bdkj",
        "market": "SZ"
    },
    {
        "code": "300755",
        "name": "华致酒行",
        "pinyin": "hzjh",
        "market": "SZ"
    },
    {
        "code": "603369",
        "name": "今世缘",
        "pinyin": "jsy",
        "market": "SH"
    },
    {
        "code": "603589",
        "name": "口子窖",
        "pinyin": "kzj",
        "market": "SH"
    },
    {
        "code": "300378",
        "name": "鼎捷数智",
        "pinyin": "djsz",
        "market": "SZ"
    },
    {
        "code": "300766",
        "name": "每日互动",
        "pinyin": "mrhd",
        "market": "SZ"
    },
    {
        "code": "300986",
        "name": "志特新材",
        "pinyin": "ztxc",
        "market": "SZ"
    },
    {
        "code": "002796",
        "name": "世嘉科技",
        "pinyin": "sjkj",
        "market": "SZ"
    },
    {
        "code": "300102",
        "name": "乾照光电",
        "pinyin": "qzgd",
        "market": "SZ"
    },
    {
        "code": "301071",
        "name": "力量钻石",
        "pinyin": "llzs",
        "market": "SZ"
    },
    {
        "code": "001360",
        "name": "南矿集团",
        "pinyin": "nkjt",
        "market": "SZ"
    },
    {
        "code": "002326",
        "name": "永太科技",
        "pinyin": "ytkj",
        "market": "SZ"
    },
    {
        "code": "301080",
        "name": "百普赛斯",
        "pinyin": "bpss",
        "market": "SZ"
    },
    {
        "code": "301196",
        "name": "唯科科技",
        "pinyin": "wkkj",
        "market": "SZ"
    },
    {
        "code": "601336",
        "name": "新华保险",
        "pinyin": "xhbx",
        "market": "SH"
    },
    {
        "code": "301358",
        "name": "湖南裕能",
        "pinyin": "hnyn",
        "market": "SZ"
    },
    {
        "code": "603212",
        "name": "赛伍技术",
        "pinyin": "swjs",
        "market": "SH"
    },
    {
        "code": "600785",
        "name": "新华百货",
        "pinyin": "xhbh",
        "market": "SH"
    },
    {
        "code": "603345",
        "name": "安井食品",
        "pinyin": "ajsp",
        "market": "SH"
    },
    {
        "code": "600367",
        "name": "红星发展",
        "pinyin": "hxfz",
        "market": "SH"
    },
    {
        "code": "600893",
        "name": "航发动力",
        "pinyin": "hfdl",
        "market": "SH"
    },
    {
        "code": "603195",
        "name": "公牛集团",
        "pinyin": "gnjt",
        "market": "SH"
    },
    {
        "code": "600391",
        "name": "航发科技",
        "pinyin": "hfkj",
        "market": "SH"
    },
    {
        "code": "300483",
        "name": "首华燃气",
        "pinyin": "shrq",
        "market": "SZ"
    },
    {
        "code": "300696",
        "name": "爱乐达",
        "pinyin": "ald",
        "market": "SZ"
    },
    {
        "code": "002645",
        "name": "华宏科技",
        "pinyin": "hhkj",
        "market": "SZ"
    },
    {
        "code": "002842",
        "name": "翔鹭钨业",
        "pinyin": "xlwy",
        "market": "SZ"
    },
    {
        "code": "600714",
        "name": "金瑞矿业",
        "pinyin": "jrky",
        "market": "SH"
    },
    {
        "code": "600262",
        "name": "北方股份",
        "pinyin": "bfgf",
        "market": "SH"
    },
    {
        "code": "600711",
        "name": "盛屯矿业",
        "pinyin": "stky",
        "market": "SH"
    },
    {
        "code": "603120",
        "name": "肯特催化",
        "pinyin": "ktch",
        "market": "SH"
    },
    {
        "code": "300775",
        "name": "三角防务",
        "pinyin": "sjfw",
        "market": "SZ"
    },
    {
        "code": "300892",
        "name": "品渥食品",
        "pinyin": "pwsp",
        "market": "SZ"
    },
    {
        "code": "603501",
        "name": "豪威集团",
        "pinyin": "hwjt",
        "market": "SH"
    },
    {
        "code": "001203",
        "name": "大中矿业",
        "pinyin": "dzky",
        "market": "SZ"
    },
    {
        "code": "002532",
        "name": "天山铝业",
        "pinyin": "tsly",
        "market": "SZ"
    },
    {
        "code": "002851",
        "name": "麦格米特",
        "pinyin": "mgmt",
        "market": "SZ"
    },
    {
        "code": "300842",
        "name": "帝科股份",
        "pinyin": "dkgf",
        "market": "SZ"
    },
    {
        "code": "603092",
        "name": "德力佳",
        "pinyin": "dlj",
        "market": "SH"
    },
    {
        "code": "300293",
        "name": "蓝英装备",
        "pinyin": "lyzb",
        "market": "SZ"
    },
    {
        "code": "300774",
        "name": "倍杰特",
        "pinyin": "bjt",
        "market": "SZ"
    },
    {
        "code": "600378",
        "name": "昊华科技",
        "pinyin": "hhkj",
        "market": "SH"
    },
    {
        "code": "600456",
        "name": "宝钛股份",
        "pinyin": "btgf",
        "market": "SH"
    },
    {
        "code": "300810",
        "name": "中科海讯",
        "pinyin": "zkhx",
        "market": "SZ"
    },
    {
        "code": "300816",
        "name": "艾可蓝",
        "pinyin": "akl",
        "market": "SZ"
    },
    {
        "code": "301291",
        "name": "明阳电气",
        "pinyin": "mydq",
        "market": "SZ"
    },
    {
        "code": "301050",
        "name": "雷电微力",
        "pinyin": "ldwl",
        "market": "SZ"
    },
    {
        "code": "002847",
        "name": "盐津铺子",
        "pinyin": "yjpz",
        "market": "SZ"
    },
    {
        "code": "002223",
        "name": "鱼跃医疗",
        "pinyin": "yyyl",
        "market": "SZ"
    },
    {
        "code": "300726",
        "name": "宏达电子",
        "pinyin": "hddz",
        "market": "SZ"
    },
    {
        "code": "300617",
        "name": "安靠智电",
        "pinyin": "akzd",
        "market": "SZ"
    },
    {
        "code": "600338",
        "name": "西藏珠峰",
        "pinyin": "xczf",
        "market": "SH"
    },
    {
        "code": "600877",
        "name": "电科芯片",
        "pinyin": "dkxp",
        "market": "SH"
    },
    {
        "code": "601600",
        "name": "中国铝业",
        "pinyin": "zgly",
        "market": "SH"
    },
    {
        "code": "002379",
        "name": "宏桥控股",
        "pinyin": "hqkg",
        "market": "SZ"
    },
    {
        "code": "002487",
        "name": "大金重工",
        "pinyin": "djzg",
        "market": "SZ"
    },
    {
        "code": "301631",
        "name": "壹连科技",
        "pinyin": "ylkj",
        "market": "SZ"
    },
    {
        "code": "000534",
        "name": "万泽股份",
        "pinyin": "wzgf",
        "market": "SZ"
    },
    {
        "code": "300567",
        "name": "精测电子",
        "pinyin": "jcdz",
        "market": "SZ"
    },
    {
        "code": "300769",
        "name": "德方纳米",
        "pinyin": "dfnm",
        "market": "SZ"
    },
    {
        "code": "603067",
        "name": "振华股份",
        "pinyin": "zhgf",
        "market": "SH"
    },
    {
        "code": "601212",
        "name": "白银有色",
        "pinyin": "byys",
        "market": "SH"
    },
    {
        "code": "300676",
        "name": "华大基因",
        "pinyin": "hdjy",
        "market": "SZ"
    },
    {
        "code": "301293",
        "name": "三博脑科",
        "pinyin": "sbnk",
        "market": "SZ"
    },
    {
        "code": "300339",
        "name": "润和软件",
        "pinyin": "rhrj",
        "market": "SZ"
    },
    {
        "code": "600763",
        "name": "通策医疗",
        "pinyin": "tcyl",
        "market": "SH"
    },
    {
        "code": "601702",
        "name": "华峰铝业",
        "pinyin": "hfly",
        "market": "SH"
    },
    {
        "code": "000593",
        "name": "德龙汇能",
        "pinyin": "dlhn",
        "market": "SZ"
    },
    {
        "code": "605598",
        "name": "上海港湾",
        "pinyin": "shgw",
        "market": "SH"
    },
    {
        "code": "002128",
        "name": "电投能源",
        "pinyin": "dtny",
        "market": "SZ"
    },
    {
        "code": "301378",
        "name": "通达海",
        "pinyin": "tdh",
        "market": "SZ"
    },
    {
        "code": "002828",
        "name": "贝肯能源",
        "pinyin": "bkny",
        "market": "SZ"
    },
    {
        "code": "300443",
        "name": "金雷股份",
        "pinyin": "jlgf",
        "market": "SZ"
    },
    {
        "code": "600761",
        "name": "安徽合力",
        "pinyin": "ahhl",
        "market": "SH"
    },
    {
        "code": "002731",
        "name": "萃华珠宝",
        "pinyin": "chzb",
        "market": "SZ"
    },
    {
        "code": "600141",
        "name": "兴发集团",
        "pinyin": "xfjt",
        "market": "SH"
    },
    {
        "code": "000792",
        "name": "盐湖股份",
        "pinyin": "yhgf",
        "market": "SZ"
    },
    {
        "code": "002594",
        "name": "比亚迪",
        "pinyin": "byd",
        "market": "SZ"
    },
    {
        "code": "300711",
        "name": "广哈通信",
        "pinyin": "ghtx",
        "market": "SZ"
    },
    {
        "code": "003021",
        "name": "兆威机电",
        "pinyin": "zwjd",
        "market": "SZ"
    },
    {
        "code": "002230",
        "name": "科大讯飞",
        "pinyin": "kdxf",
        "market": "SZ"
    },
    {
        "code": "000612",
        "name": "焦作万方",
        "pinyin": "jzwf",
        "market": "SZ"
    },
    {
        "code": "002988",
        "name": "豪美新材",
        "pinyin": "hmxc",
        "market": "SZ"
    },
    {
        "code": "300455",
        "name": "航天智装",
        "pinyin": "htzz",
        "market": "SZ"
    },
    {
        "code": "300772",
        "name": "运达股份",
        "pinyin": "ydgf",
        "market": "SZ"
    },
    {
        "code": "300973",
        "name": "立高食品",
        "pinyin": "lgsp",
        "market": "SZ"
    },
    {
        "code": "001316",
        "name": "润贝航科",
        "pinyin": "rbhk",
        "market": "SZ"
    },
    {
        "code": "301285",
        "name": "鸿日达",
        "pinyin": "hrd",
        "market": "SZ"
    },
    {
        "code": "301368",
        "name": "丰立智能",
        "pinyin": "flzn",
        "market": "SZ"
    },
    {
        "code": "002112",
        "name": "三变科技",
        "pinyin": "sbkj",
        "market": "SZ"
    },
    {
        "code": "300844",
        "name": "山水比德",
        "pinyin": "ssbd",
        "market": "SZ"
    },
    {
        "code": "601061",
        "name": "XD中信金",
        "pinyin": "xdzxj",
        "market": "SH"
    },
    {
        "code": "002023",
        "name": "海特高新",
        "pinyin": "htgx",
        "market": "SZ"
    },
    {
        "code": "300380",
        "name": "安硕信息",
        "pinyin": "asxx",
        "market": "SZ"
    },
    {
        "code": "300904",
        "name": "威力传动",
        "pinyin": "wlcd",
        "market": "SZ"
    },
    {
        "code": "002056",
        "name": "横店东磁",
        "pinyin": "hddc",
        "market": "SZ"
    },
    {
        "code": "002792",
        "name": "通宇通讯",
        "pinyin": "tytx",
        "market": "SZ"
    },
    {
        "code": "300573",
        "name": "兴齐眼药",
        "pinyin": "xqyy",
        "market": "SZ"
    },
    {
        "code": "300763",
        "name": "锦浪科技",
        "pinyin": "jlkj",
        "market": "SZ"
    },
    {
        "code": "300496",
        "name": "中科创达",
        "pinyin": "zkcd",
        "market": "SZ"
    },
    {
        "code": "600366",
        "name": "宁波韵升",
        "pinyin": "nbys",
        "market": "SH"
    },
    {
        "code": "600885",
        "name": "宏发股份",
        "pinyin": "hfgf",
        "market": "SH"
    },
    {
        "code": "002213",
        "name": "大为股份",
        "pinyin": "dwgf",
        "market": "SZ"
    },
    {
        "code": "300085",
        "name": "银之杰",
        "pinyin": "yzj",
        "market": "SZ"
    },
    {
        "code": "300927",
        "name": "江天化学",
        "pinyin": "jthx",
        "market": "SZ"
    },
    {
        "code": "301231",
        "name": "荣信文化",
        "pinyin": "rxwh",
        "market": "SZ"
    },
    {
        "code": "301313",
        "name": "凡拓数创",
        "pinyin": "ftsc",
        "market": "SZ"
    },
    {
        "code": "002364",
        "name": "中恒电气",
        "pinyin": "zhdq",
        "market": "SZ"
    },
    {
        "code": "301261",
        "name": "恒工精密",
        "pinyin": "hgjm",
        "market": "SZ"
    },
    {
        "code": "301299",
        "name": "卓创资讯",
        "pinyin": "zczx",
        "market": "SZ"
    },
    {
        "code": "301408",
        "name": "华人健康",
        "pinyin": "hrjk",
        "market": "SZ"
    },
    {
        "code": "301632",
        "name": "广东建科",
        "pinyin": "gdjk",
        "market": "SZ"
    },
    {
        "code": "600363",
        "name": "联创光电",
        "pinyin": "lcgd",
        "market": "SH"
    },
    {
        "code": "603630",
        "name": "拉芳家化",
        "pinyin": "lfjh",
        "market": "SH"
    },
    {
        "code": "600096",
        "name": "云天化",
        "pinyin": "yth",
        "market": "SH"
    },
    {
        "code": "002295",
        "name": "精艺股份",
        "pinyin": "jygf",
        "market": "SZ"
    },
    {
        "code": "000893",
        "name": "亚钾国际",
        "pinyin": "yjgj",
        "market": "SZ"
    },
    {
        "code": "002432",
        "name": "九安医疗",
        "pinyin": "jayl",
        "market": "SZ"
    },
    {
        "code": "301316",
        "name": "慧博云通",
        "pinyin": "hbyt",
        "market": "SZ"
    },
    {
        "code": "601579",
        "name": "会稽山",
        "pinyin": "hjs",
        "market": "SH"
    },
    {
        "code": "002623",
        "name": "亚玛顿",
        "pinyin": "ymd",
        "market": "SZ"
    },
    {
        "code": "300846",
        "name": "首都在线",
        "pinyin": "sdzx",
        "market": "SZ"
    },
    {
        "code": "301201",
        "name": "诚达药业",
        "pinyin": "cdyy",
        "market": "SZ"
    },
    {
        "code": "002568",
        "name": "百润股份",
        "pinyin": "brgf",
        "market": "SZ"
    },
    {
        "code": "300762",
        "name": "上海瀚讯",
        "pinyin": "shhx",
        "market": "SZ"
    },
    {
        "code": "600980",
        "name": "北矿科技",
        "pinyin": "bkkj",
        "market": "SH"
    },
    {
        "code": "601318",
        "name": "中国平安",
        "pinyin": "zgpa",
        "market": "SH"
    },
    {
        "code": "603160",
        "name": "汇顶科技",
        "pinyin": "hdkj",
        "market": "SH"
    },
    {
        "code": "300124",
        "name": "汇川技术",
        "pinyin": "hcjs",
        "market": "SZ"
    },
    {
        "code": "301658",
        "name": "首航新能",
        "pinyin": "shxn",
        "market": "SZ"
    },
    {
        "code": "603308",
        "name": "应流股份",
        "pinyin": "ylgf",
        "market": "SH"
    },
    {
        "code": "301079",
        "name": "邵阳液压",
        "pinyin": "syyy",
        "market": "SZ"
    },
    {
        "code": "301275",
        "name": "汉朔科技",
        "pinyin": "hskj",
        "market": "SZ"
    },
    {
        "code": "603800",
        "name": "洪田股份",
        "pinyin": "htgf",
        "market": "SH"
    },
    {
        "code": "300972",
        "name": "万辰集团",
        "pinyin": "wcjt",
        "market": "SZ"
    },
    {
        "code": "600536",
        "name": "中国软件",
        "pinyin": "zgrj",
        "market": "SH"
    },
    {
        "code": "600570",
        "name": "恒生电子",
        "pinyin": "hsdz",
        "market": "SH"
    },
    {
        "code": "300399",
        "name": "天利科技",
        "pinyin": "tlkj",
        "market": "SZ"
    },
    {
        "code": "301101",
        "name": "明月镜片",
        "pinyin": "myjp",
        "market": "SZ"
    },
    {
        "code": "002227",
        "name": "奥 特 迅",
        "pinyin": "a t x",
        "market": "SZ"
    },
    {
        "code": "002838",
        "name": "道恩股份",
        "pinyin": "degf",
        "market": "SZ"
    },
    {
        "code": "300433",
        "name": "蓝思科技",
        "pinyin": "lskj",
        "market": "SZ"
    },
    {
        "code": "300688",
        "name": "创业黑马",
        "pinyin": "cyhm",
        "market": "SZ"
    },
    {
        "code": "300937",
        "name": "药易购",
        "pinyin": "yyg",
        "market": "SZ"
    },
    {
        "code": "301236",
        "name": "软通动力",
        "pinyin": "rtdl",
        "market": "SZ"
    },
    {
        "code": "002991",
        "name": "甘源食品",
        "pinyin": "gysp",
        "market": "SZ"
    },
    {
        "code": "301137",
        "name": "哈焊华通",
        "pinyin": "hhht",
        "market": "SZ"
    },
    {
        "code": "600058",
        "name": "五矿发展",
        "pinyin": "wkfz",
        "market": "SH"
    },
    {
        "code": "605168",
        "name": "三人行",
        "pinyin": "srh",
        "market": "SH"
    },
    {
        "code": "002378",
        "name": "章源钨业",
        "pinyin": "zywy",
        "market": "SZ"
    },
    {
        "code": "300244",
        "name": "迪安诊断",
        "pinyin": "dazd",
        "market": "SZ"
    },
    {
        "code": "300773",
        "name": "拉卡拉",
        "pinyin": "lkl",
        "market": "SZ"
    },
    {
        "code": "603988",
        "name": "中电电机",
        "pinyin": "zddj",
        "market": "SH"
    },
    {
        "code": "600765",
        "name": "中航重机",
        "pinyin": "zhzj",
        "market": "SH"
    },
    {
        "code": "003038",
        "name": "鑫铂股份",
        "pinyin": "xbgf",
        "market": "SZ"
    },
    {
        "code": "300364",
        "name": "中文在线",
        "pinyin": "zwzx",
        "market": "SZ"
    },
    {
        "code": "300118",
        "name": "东方日升",
        "pinyin": "dfrs",
        "market": "SZ"
    },
    {
        "code": "603337",
        "name": "杰克科技",
        "pinyin": "jkkj",
        "market": "SH"
    },
    {
        "code": "300588",
        "name": "熙菱信息",
        "pinyin": "xlxx",
        "market": "SZ"
    },
    {
        "code": "301093",
        "name": "华兰股份",
        "pinyin": "hlgf",
        "market": "SZ"
    },
    {
        "code": "302132",
        "name": "中航成飞",
        "pinyin": "zhcf",
        "market": "SZ"
    },
    {
        "code": "600490",
        "name": "鹏欣资源",
        "pinyin": "pxzy",
        "market": "SH"
    },
    {
        "code": "603688",
        "name": "石英股份",
        "pinyin": "sygf",
        "market": "SH"
    },
    {
        "code": "603916",
        "name": "苏博特",
        "pinyin": "sbt",
        "market": "SH"
    },
    {
        "code": "300224",
        "name": "正海磁材",
        "pinyin": "zhcc",
        "market": "SZ"
    },
    {
        "code": "300346",
        "name": "南大光电",
        "pinyin": "ndgd",
        "market": "SZ"
    },
    {
        "code": "300948",
        "name": "冠中生态",
        "pinyin": "gzst",
        "market": "SZ"
    },
    {
        "code": "603288",
        "name": "海天味业",
        "pinyin": "htwy",
        "market": "SH"
    },
    {
        "code": "603393",
        "name": "新天然气",
        "pinyin": "xtrq",
        "market": "SH"
    },
    {
        "code": "002028",
        "name": "思源电气",
        "pinyin": "sydq",
        "market": "SZ"
    },
    {
        "code": "600497",
        "name": "驰宏锌锗",
        "pinyin": "chxz",
        "market": "SH"
    },
    {
        "code": "601865",
        "name": "福莱特",
        "pinyin": "flt",
        "market": "SH"
    },
    {
        "code": "603341",
        "name": "龙旗科技",
        "pinyin": "lqkj",
        "market": "SH"
    },
    {
        "code": "000737",
        "name": "北方铜业",
        "pinyin": "bfty",
        "market": "SZ"
    },
    {
        "code": "300034",
        "name": "钢研高纳",
        "pinyin": "gygn",
        "market": "SZ"
    },
    {
        "code": "301001",
        "name": "凯淳股份",
        "pinyin": "kcgf",
        "market": "SZ"
    },
    {
        "code": "300634",
        "name": "彩讯股份",
        "pinyin": "cxgf",
        "market": "SZ"
    },
    {
        "code": "600038",
        "name": "中直股份",
        "pinyin": "zzgf",
        "market": "SH"
    },
    {
        "code": "002444",
        "name": "巨星科技",
        "pinyin": "jxkj",
        "market": "SZ"
    },
    {
        "code": "300045",
        "name": "华力创通",
        "pinyin": "hlct",
        "market": "SZ"
    },
    {
        "code": "603612",
        "name": "索通发展",
        "pinyin": "stfz",
        "market": "SH"
    },
    {
        "code": "603716",
        "name": "塞力医疗",
        "pinyin": "slyl",
        "market": "SH"
    },
    {
        "code": "000860",
        "name": "顺鑫农业",
        "pinyin": "sxny",
        "market": "SZ"
    },
    {
        "code": "300136",
        "name": "信维通信",
        "pinyin": "xwtx",
        "market": "SZ"
    },
    {
        "code": "300226",
        "name": "上海钢联",
        "pinyin": "shgl",
        "market": "SZ"
    },
    {
        "code": "300925",
        "name": "法本信息",
        "pinyin": "fbxx",
        "market": "SZ"
    },
    {
        "code": "002125",
        "name": "湘潭电化",
        "pinyin": "xtdh",
        "market": "SZ"
    },
    {
        "code": "002261",
        "name": "拓维信息",
        "pinyin": "twxx",
        "market": "SZ"
    },
    {
        "code": "002773",
        "name": "康弘药业",
        "pinyin": "khyy",
        "market": "SZ"
    },
    {
        "code": "002785",
        "name": "万里石",
        "pinyin": "wls",
        "market": "SZ"
    },
    {
        "code": "300783",
        "name": "三只松鼠",
        "pinyin": "szss",
        "market": "SZ"
    },
    {
        "code": "002201",
        "name": "九鼎新材",
        "pinyin": "jdxc",
        "market": "SZ"
    },
    {
        "code": "002270",
        "name": "华明装备",
        "pinyin": "hmzb",
        "market": "SZ"
    },
    {
        "code": "301380",
        "name": "挖金客",
        "pinyin": "wjk",
        "market": "SZ"
    },
    {
        "code": "600150",
        "name": "中国船舶",
        "pinyin": "zgcb",
        "market": "SH"
    },
    {
        "code": "600559",
        "name": "老白干酒",
        "pinyin": "lbgj",
        "market": "SH"
    },
    {
        "code": "603392",
        "name": "万泰生物",
        "pinyin": "wtsw",
        "market": "SH"
    },
    {
        "code": "603900",
        "name": "莱绅通灵",
        "pinyin": "lstl",
        "market": "SH"
    },
    {
        "code": "000063",
        "name": "中兴通讯",
        "pinyin": "zxtx",
        "market": "SZ"
    },
    {
        "code": "001288",
        "name": "运机集团",
        "pinyin": "yjjt",
        "market": "SZ"
    },
    {
        "code": "300260",
        "name": "新莱应材",
        "pinyin": "xlyc",
        "market": "SZ"
    },
    {
        "code": "300703",
        "name": "创源股份",
        "pinyin": "cygf",
        "market": "SZ"
    },
    {
        "code": "300959",
        "name": "线上线下",
        "pinyin": "xsxx",
        "market": "SZ"
    },
    {
        "code": "603271",
        "name": "永杰新材",
        "pinyin": "yjxc",
        "market": "SH"
    },
    {
        "code": "603737",
        "name": "三棵树",
        "pinyin": "sks",
        "market": "SH"
    },
    {
        "code": "605305",
        "name": "中际联合",
        "pinyin": "zjlh",
        "market": "SH"
    },
    {
        "code": "300888",
        "name": "稳健医疗",
        "pinyin": "wjyl",
        "market": "SZ"
    },
    {
        "code": "002025",
        "name": "航天电器",
        "pinyin": "htdq",
        "market": "SZ"
    },
    {
        "code": "002032",
        "name": "苏 泊 尔",
        "pinyin": "s b e",
        "market": "SZ"
    },
    {
        "code": "300687",
        "name": "赛意信息",
        "pinyin": "syxx",
        "market": "SZ"
    },
    {
        "code": "300699",
        "name": "光威复材",
        "pinyin": "gwfc",
        "market": "SZ"
    },
    {
        "code": "301592",
        "name": "六九一二",
        "pinyin": "ljye",
        "market": "SZ"
    },
    {
        "code": "002214",
        "name": "*ST大立",
        "pinyin": "*stdl",
        "market": "SZ"
    },
    {
        "code": "300229",
        "name": "拓尔思",
        "pinyin": "tes",
        "market": "SZ"
    },
    {
        "code": "300662",
        "name": "科锐国际",
        "pinyin": "krgj",
        "market": "SZ"
    },
    {
        "code": "600315",
        "name": "上海家化",
        "pinyin": "shjh",
        "market": "SH"
    },
    {
        "code": "603833",
        "name": "欧派家居",
        "pinyin": "opjj",
        "market": "SH"
    },
    {
        "code": "601677",
        "name": "明泰铝业",
        "pinyin": "mtly",
        "market": "SH"
    },
    {
        "code": "002821",
        "name": "凯莱英",
        "pinyin": "kly",
        "market": "SZ"
    },
    {
        "code": "300277",
        "name": "海联讯",
        "pinyin": "hlx",
        "market": "SZ"
    },
    {
        "code": "300868",
        "name": "杰美特",
        "pinyin": "jmt",
        "market": "SZ"
    },
    {
        "code": "000155",
        "name": "川能动力",
        "pinyin": "cndl",
        "market": "SZ"
    },
    {
        "code": "000738",
        "name": "航发控制",
        "pinyin": "hfkz",
        "market": "SZ"
    },
    {
        "code": "300680",
        "name": "隆盛科技",
        "pinyin": "lskj",
        "market": "SZ"
    },
    {
        "code": "301150",
        "name": "中一科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "301239",
        "name": "普瑞眼科",
        "pinyin": "pryk",
        "market": "SZ"
    },
    {
        "code": "603200",
        "name": "上海洗霸",
        "pinyin": "shxb",
        "market": "SH"
    },
    {
        "code": "300598",
        "name": "诚迈科技",
        "pinyin": "cmkj",
        "market": "SZ"
    },
    {
        "code": "300745",
        "name": "欣锐科技",
        "pinyin": "xrkj",
        "market": "SZ"
    },
    {
        "code": "000869",
        "name": "张  裕A",
        "pinyin": "z  ya",
        "market": "SZ"
    },
    {
        "code": "301153",
        "name": "中科江南",
        "pinyin": "zkjn",
        "market": "SZ"
    },
    {
        "code": "603568",
        "name": "伟明环保",
        "pinyin": "wmhb",
        "market": "SH"
    },
    {
        "code": "603778",
        "name": "国晟科技",
        "pinyin": "gskj",
        "market": "SH"
    },
    {
        "code": "000630",
        "name": "铜陵有色",
        "pinyin": "tlys",
        "market": "SZ"
    },
    {
        "code": "300077",
        "name": "国民技术",
        "pinyin": "gmjs",
        "market": "SZ"
    },
    {
        "code": "600410",
        "name": "华胜天成",
        "pinyin": "hstc",
        "market": "SH"
    },
    {
        "code": "603882",
        "name": "金域医学",
        "pinyin": "jyyx",
        "market": "SH"
    },
    {
        "code": "300631",
        "name": "久吾高科",
        "pinyin": "jwgk",
        "market": "SZ"
    },
    {
        "code": "301047",
        "name": "义翘神州",
        "pinyin": "yqsz",
        "market": "SZ"
    },
    {
        "code": "301159",
        "name": "三维天地",
        "pinyin": "swtd",
        "market": "SZ"
    },
    {
        "code": "301498",
        "name": "乖宝宠物",
        "pinyin": "gbcw",
        "market": "SZ"
    },
    {
        "code": "301518",
        "name": "长华化学",
        "pinyin": "chhx",
        "market": "SZ"
    },
    {
        "code": "600838",
        "name": "上海九百",
        "pinyin": "shjb",
        "market": "SH"
    },
    {
        "code": "000766",
        "name": "通化金马",
        "pinyin": "thjm",
        "market": "SZ"
    },
    {
        "code": "002278",
        "name": "神开股份",
        "pinyin": "skgf",
        "market": "SZ"
    },
    {
        "code": "300445",
        "name": "康斯特",
        "pinyin": "kst",
        "market": "SZ"
    },
    {
        "code": "301119",
        "name": "正强股份",
        "pinyin": "zqgf",
        "market": "SZ"
    },
    {
        "code": "600938",
        "name": "中国海油",
        "pinyin": "zghy",
        "market": "SH"
    },
    {
        "code": "300652",
        "name": "雷迪克",
        "pinyin": "ldk",
        "market": "SZ"
    },
    {
        "code": "300852",
        "name": "四会富仕",
        "pinyin": "shfs",
        "market": "SZ"
    },
    {
        "code": "601012",
        "name": "隆基绿能",
        "pinyin": "ljln",
        "market": "SH"
    },
    {
        "code": "000758",
        "name": "中色股份",
        "pinyin": "zsgf",
        "market": "SZ"
    },
    {
        "code": "002046",
        "name": "国机精工",
        "pinyin": "gjjg",
        "market": "SZ"
    },
    {
        "code": "300170",
        "name": "汉得信息",
        "pinyin": "hdxx",
        "market": "SZ"
    },
    {
        "code": "300821",
        "name": "东岳硅材",
        "pinyin": "dygc",
        "market": "SZ"
    },
    {
        "code": "000657",
        "name": "中钨高新",
        "pinyin": "zwgx",
        "market": "SZ"
    },
    {
        "code": "002415",
        "name": "海康威视",
        "pinyin": "hkws",
        "market": "SZ"
    },
    {
        "code": "300130",
        "name": "新国都",
        "pinyin": "xgd",
        "market": "SZ"
    },
    {
        "code": "000997",
        "name": "新 大 陆",
        "pinyin": "x d l",
        "market": "SZ"
    },
    {
        "code": "002549",
        "name": "凯美特气",
        "pinyin": "kmtq",
        "market": "SZ"
    },
    {
        "code": "300467",
        "name": "迅游科技",
        "pinyin": "xykj",
        "market": "SZ"
    },
    {
        "code": "300953",
        "name": "震裕科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "600438",
        "name": "通威股份",
        "pinyin": "twgf",
        "market": "SH"
    },
    {
        "code": "601567",
        "name": "三星医疗",
        "pinyin": "sxyl",
        "market": "SH"
    },
    {
        "code": "605080",
        "name": "浙江自然",
        "pinyin": "zjzr",
        "market": "SH"
    },
    {
        "code": "000060",
        "name": "中金岭南",
        "pinyin": "zjln",
        "market": "SZ"
    },
    {
        "code": "000733",
        "name": "振华科技",
        "pinyin": "zhkj",
        "market": "SZ"
    },
    {
        "code": "002317",
        "name": "众生药业",
        "pinyin": "zsyy",
        "market": "SZ"
    },
    {
        "code": "301111",
        "name": "粤万年青",
        "pinyin": "ywnq",
        "market": "SZ"
    },
    {
        "code": "600206",
        "name": "有研新材",
        "pinyin": "yyxc",
        "market": "SH"
    },
    {
        "code": "600506",
        "name": "统一股份",
        "pinyin": "tygf",
        "market": "SH"
    },
    {
        "code": "300269",
        "name": "联建光电",
        "pinyin": "ljgd",
        "market": "SZ"
    },
    {
        "code": "300036",
        "name": "超图软件",
        "pinyin": "ctrj",
        "market": "SZ"
    },
    {
        "code": "301152",
        "name": "天力锂能",
        "pinyin": "tlln",
        "market": "SZ"
    },
    {
        "code": "600415",
        "name": "小商品城",
        "pinyin": "xspc",
        "market": "SH"
    },
    {
        "code": "603806",
        "name": "福斯特",
        "pinyin": "fst",
        "market": "SH"
    },
    {
        "code": "002123",
        "name": "梦网科技",
        "pinyin": "mwkj",
        "market": "SZ"
    },
    {
        "code": "002203",
        "name": "海亮股份",
        "pinyin": "hlgf",
        "market": "SZ"
    },
    {
        "code": "002605",
        "name": "姚记科技",
        "pinyin": "yjkj",
        "market": "SZ"
    },
    {
        "code": "300593",
        "name": "新雷能",
        "pinyin": "xln",
        "market": "SZ"
    },
    {
        "code": "600197",
        "name": "伊力特",
        "pinyin": "ylt",
        "market": "SH"
    },
    {
        "code": "600219",
        "name": "南山铝业",
        "pinyin": "nsly",
        "market": "SH"
    },
    {
        "code": "000581",
        "name": "威孚高科",
        "pinyin": "wfgk",
        "market": "SZ"
    },
    {
        "code": "002368",
        "name": "太极股份",
        "pinyin": "tjgf",
        "market": "SZ"
    },
    {
        "code": "003010",
        "name": "若羽臣",
        "pinyin": "ryc",
        "market": "SZ"
    },
    {
        "code": "300418",
        "name": "昆仑万维",
        "pinyin": "klww",
        "market": "SZ"
    },
    {
        "code": "301066",
        "name": "万事利",
        "pinyin": "wsl",
        "market": "SZ"
    },
    {
        "code": "000034",
        "name": "神州数码",
        "pinyin": "szsm",
        "market": "SZ"
    },
    {
        "code": "002064",
        "name": "华峰化学",
        "pinyin": "hfhx",
        "market": "SZ"
    },
    {
        "code": "300427",
        "name": "红相股份",
        "pinyin": "hxgf",
        "market": "SZ"
    },
    {
        "code": "300523",
        "name": "辰安科技",
        "pinyin": "cakj",
        "market": "SZ"
    },
    {
        "code": "300836",
        "name": "佰奥智能",
        "pinyin": "bazn",
        "market": "SZ"
    },
    {
        "code": "300940",
        "name": "南极光",
        "pinyin": "njg",
        "market": "SZ"
    },
    {
        "code": "301077",
        "name": "星华新材",
        "pinyin": "xhxc",
        "market": "SZ"
    },
    {
        "code": "600773",
        "name": "西藏城投",
        "pinyin": "xcct",
        "market": "SH"
    },
    {
        "code": "600862",
        "name": "中航高科",
        "pinyin": "zhgk",
        "market": "SH"
    },
    {
        "code": "603496",
        "name": "恒为科技",
        "pinyin": "hwkj",
        "market": "SH"
    },
    {
        "code": "000739",
        "name": "普洛药业",
        "pinyin": "plyy",
        "market": "SZ"
    },
    {
        "code": "001376",
        "name": "百通能源",
        "pinyin": "btny",
        "market": "SZ"
    },
    {
        "code": "002114",
        "name": "罗平锌电",
        "pinyin": "lpxd",
        "market": "SZ"
    },
    {
        "code": "002202",
        "name": "金风科技",
        "pinyin": "jfkj",
        "market": "SZ"
    },
    {
        "code": "002315",
        "name": "焦点科技",
        "pinyin": "jdkj",
        "market": "SZ"
    },
    {
        "code": "002920",
        "name": "德赛西威",
        "pinyin": "dsxw",
        "market": "SZ"
    },
    {
        "code": "300161",
        "name": "华中数控",
        "pinyin": "hzsk",
        "market": "SZ"
    },
    {
        "code": "300979",
        "name": "华利集团",
        "pinyin": "hljt",
        "market": "SZ"
    },
    {
        "code": "600372",
        "name": "中航机载",
        "pinyin": "zhjz",
        "market": "SH"
    },
    {
        "code": "600845",
        "name": "宝信软件",
        "pinyin": "bxrj",
        "market": "SH"
    },
    {
        "code": "000963",
        "name": "华东医药",
        "pinyin": "hdyy",
        "market": "SZ"
    },
    {
        "code": "002017",
        "name": "东信和平",
        "pinyin": "dxhp",
        "market": "SZ"
    },
    {
        "code": "002490",
        "name": "山东墨龙",
        "pinyin": "sdml",
        "market": "SZ"
    },
    {
        "code": "002943",
        "name": "宇晶股份",
        "pinyin": "yjgf",
        "market": "SZ"
    },
    {
        "code": "300374",
        "name": "中铁装配",
        "pinyin": "ztzp",
        "market": "SZ"
    },
    {
        "code": "300428",
        "name": "立中集团",
        "pinyin": "lzjt",
        "market": "SZ"
    },
    {
        "code": "600021",
        "name": "上海电力",
        "pinyin": "shdl",
        "market": "SH"
    },
    {
        "code": "600298",
        "name": "安琪酵母",
        "pinyin": "aqjm",
        "market": "SH"
    },
    {
        "code": "601137",
        "name": "博威合金",
        "pinyin": "bwhj",
        "market": "SH"
    },
    {
        "code": "603358",
        "name": "华达科技",
        "pinyin": "hdkj",
        "market": "SH"
    },
    {
        "code": "002115",
        "name": "三维通信",
        "pinyin": "swtx",
        "market": "SZ"
    },
    {
        "code": "002945",
        "name": "华林证券",
        "pinyin": "hlzq",
        "market": "SZ"
    },
    {
        "code": "300578",
        "name": "会畅科技",
        "pinyin": "hckj",
        "market": "SZ"
    },
    {
        "code": "300719",
        "name": "安达维尔",
        "pinyin": "adwe",
        "market": "SZ"
    },
    {
        "code": "300963",
        "name": "中洲特材",
        "pinyin": "zztc",
        "market": "SZ"
    },
    {
        "code": "301052",
        "name": "果麦文化",
        "pinyin": "gmwh",
        "market": "SZ"
    },
    {
        "code": "301307",
        "name": "美利信",
        "pinyin": "mlx",
        "market": "SZ"
    },
    {
        "code": "600764",
        "name": "中国海防",
        "pinyin": "zghf",
        "market": "SH"
    },
    {
        "code": "603121",
        "name": "华培动力",
        "pinyin": "hpdl",
        "market": "SH"
    },
    {
        "code": "603727",
        "name": "博迈科",
        "pinyin": "bmk",
        "market": "SH"
    },
    {
        "code": "603927",
        "name": "中科软",
        "pinyin": "zkr",
        "market": "SH"
    },
    {
        "code": "000751",
        "name": "锌业股份",
        "pinyin": "xygf",
        "market": "SZ"
    },
    {
        "code": "000768",
        "name": "中航西飞",
        "pinyin": "zhxf",
        "market": "SZ"
    },
    {
        "code": "600160",
        "name": "巨化股份",
        "pinyin": "jhgf",
        "market": "SH"
    },
    {
        "code": "600895",
        "name": "张江高科",
        "pinyin": "zjgk",
        "market": "SH"
    },
    {
        "code": "300638",
        "name": "广和通",
        "pinyin": "ght",
        "market": "SZ"
    },
    {
        "code": "002867",
        "name": "周大生",
        "pinyin": "zds",
        "market": "SZ"
    },
    {
        "code": "600520",
        "name": "三佳科技",
        "pinyin": "sjkj",
        "market": "SH"
    },
    {
        "code": "603039",
        "name": "泛微网络",
        "pinyin": "fwwl",
        "market": "SH"
    },
    {
        "code": "000025",
        "name": "特  力A",
        "pinyin": "t  la",
        "market": "SZ"
    },
    {
        "code": "300947",
        "name": "德必集团",
        "pinyin": "dbjt",
        "market": "SZ"
    },
    {
        "code": "300982",
        "name": "苏文电能",
        "pinyin": "swdn",
        "market": "SZ"
    },
    {
        "code": "301089",
        "name": "拓新药业",
        "pinyin": "txyy",
        "market": "SZ"
    },
    {
        "code": "301459",
        "name": "丰茂股份",
        "pinyin": "fmgf",
        "market": "SZ"
    },
    {
        "code": "600172",
        "name": "黄河旋风",
        "pinyin": "hhxf",
        "market": "SH"
    },
    {
        "code": "605358",
        "name": "立昂微",
        "pinyin": "law",
        "market": "SH"
    },
    {
        "code": "000519",
        "name": "中兵红箭",
        "pinyin": "zbhj",
        "market": "SZ"
    },
    {
        "code": "001269",
        "name": "欧晶科技",
        "pinyin": "ojkj",
        "market": "SZ"
    },
    {
        "code": "002160",
        "name": "常铝股份",
        "pinyin": "clgf",
        "market": "SZ"
    },
    {
        "code": "300063",
        "name": "天龙集团",
        "pinyin": "tljt",
        "market": "SZ"
    },
    {
        "code": "301281",
        "name": "科源制药",
        "pinyin": "kyzy",
        "market": "SZ"
    },
    {
        "code": "603383",
        "name": "顶点软件",
        "pinyin": "ddrj",
        "market": "SH"
    },
    {
        "code": "300850",
        "name": "新强联",
        "pinyin": "xql",
        "market": "SZ"
    },
    {
        "code": "600562",
        "name": "国睿科技",
        "pinyin": "grkj",
        "market": "SH"
    },
    {
        "code": "300607",
        "name": "拓斯达",
        "pinyin": "tsd",
        "market": "SZ"
    },
    {
        "code": "300674",
        "name": "宇信科技",
        "pinyin": "yxkj",
        "market": "SZ"
    },
    {
        "code": "301208",
        "name": "中亦科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "301225",
        "name": "恒勃股份",
        "pinyin": "hbgf",
        "market": "SZ"
    },
    {
        "code": "600173",
        "name": "卧龙新能",
        "pinyin": "wlxn",
        "market": "SH"
    },
    {
        "code": "603338",
        "name": "浙江鼎力",
        "pinyin": "zjdl",
        "market": "SH"
    },
    {
        "code": "603505",
        "name": "金石资源",
        "pinyin": "jszy",
        "market": "SH"
    },
    {
        "code": "000636",
        "name": "风华高科",
        "pinyin": "fhgk",
        "market": "SZ"
    },
    {
        "code": "002173",
        "name": "创新医疗",
        "pinyin": "cxyl",
        "market": "SZ"
    },
    {
        "code": "300753",
        "name": "爱朋医疗",
        "pinyin": "apyl",
        "market": "SZ"
    },
    {
        "code": "300841",
        "name": "康华生物",
        "pinyin": "khsw",
        "market": "SZ"
    },
    {
        "code": "301327",
        "name": "华宝新能",
        "pinyin": "hbxn",
        "market": "SZ"
    },
    {
        "code": "301479",
        "name": "弘景光电",
        "pinyin": "hjgd",
        "market": "SZ"
    },
    {
        "code": "600059",
        "name": "古越龙山",
        "pinyin": "gyls",
        "market": "SH"
    },
    {
        "code": "603786",
        "name": "科博达",
        "pinyin": "kbd",
        "market": "SH"
    },
    {
        "code": "001386",
        "name": "马可波罗",
        "pinyin": "mkbl",
        "market": "SZ"
    },
    {
        "code": "002139",
        "name": "拓邦股份",
        "pinyin": "tbgf",
        "market": "SZ"
    },
    {
        "code": "002339",
        "name": "积成电子",
        "pinyin": "jcdz",
        "market": "SZ"
    },
    {
        "code": "300416",
        "name": "苏试试验",
        "pinyin": "sssy",
        "market": "SZ"
    },
    {
        "code": "300723",
        "name": "一品红",
        "pinyin": "yph",
        "market": "SZ"
    },
    {
        "code": "300855",
        "name": "图南股份",
        "pinyin": "tngf",
        "market": "SZ"
    },
    {
        "code": "301207",
        "name": "华兰疫苗",
        "pinyin": "hlym",
        "market": "SZ"
    },
    {
        "code": "603049",
        "name": "中策橡胶",
        "pinyin": "zcxj",
        "market": "SH"
    },
    {
        "code": "603197",
        "name": "保隆科技",
        "pinyin": "blkj",
        "market": "SH"
    },
    {
        "code": "002151",
        "name": "北斗星通",
        "pinyin": "bdxt",
        "market": "SZ"
    },
    {
        "code": "002271",
        "name": "东方雨虹",
        "pinyin": "dfyh",
        "market": "SZ"
    },
    {
        "code": "002410",
        "name": "广联达",
        "pinyin": "gld",
        "market": "SZ"
    },
    {
        "code": "003002",
        "name": "壶化股份",
        "pinyin": "hhgf",
        "market": "SZ"
    },
    {
        "code": "003009",
        "name": "中天火箭",
        "pinyin": "zthj",
        "market": "SZ"
    },
    {
        "code": "301393",
        "name": "昊帆生物",
        "pinyin": "hfsw",
        "market": "SZ"
    },
    {
        "code": "600066",
        "name": "宇通客车",
        "pinyin": "ytkc",
        "market": "SH"
    },
    {
        "code": "600986",
        "name": "浙文互联",
        "pinyin": "zwhl",
        "market": "SH"
    },
    {
        "code": "002218",
        "name": "拓日新能",
        "pinyin": "trxn",
        "market": "SZ"
    },
    {
        "code": "002318",
        "name": "久立特材",
        "pinyin": "jltc",
        "market": "SZ"
    },
    {
        "code": "002961",
        "name": "瑞达期货",
        "pinyin": "rdqh",
        "market": "SZ"
    },
    {
        "code": "300157",
        "name": "新锦动力",
        "pinyin": "xjdl",
        "market": "SZ"
    },
    {
        "code": "300943",
        "name": "春晖智控",
        "pinyin": "chzk",
        "market": "SZ"
    },
    {
        "code": "301073",
        "name": "君亭酒店",
        "pinyin": "jtjd",
        "market": "SZ"
    },
    {
        "code": "600685",
        "name": "中船防务",
        "pinyin": "zcfw",
        "market": "SH"
    },
    {
        "code": "600718",
        "name": "东软集团",
        "pinyin": "drjt",
        "market": "SH"
    },
    {
        "code": "601808",
        "name": "中海油服",
        "pinyin": "zhyf",
        "market": "SH"
    },
    {
        "code": "603399",
        "name": "永杉锂业",
        "pinyin": "ysly",
        "market": "SH"
    },
    {
        "code": "000546",
        "name": "金圆股份",
        "pinyin": "jygf",
        "market": "SZ"
    },
    {
        "code": "002167",
        "name": "东方锆业",
        "pinyin": "dfgy",
        "market": "SZ"
    },
    {
        "code": "002176",
        "name": "江特电机",
        "pinyin": "jtdj",
        "market": "SZ"
    },
    {
        "code": "002338",
        "name": "奥普光电",
        "pinyin": "apgd",
        "market": "SZ"
    },
    {
        "code": "301292",
        "name": "海科新源",
        "pinyin": "hkxy",
        "market": "SZ"
    },
    {
        "code": "301303",
        "name": "真兰仪表",
        "pinyin": "zlyb",
        "market": "SZ"
    },
    {
        "code": "603175",
        "name": "超颖电子",
        "pinyin": "cydz",
        "market": "SH"
    },
    {
        "code": "000786",
        "name": "北新建材",
        "pinyin": "bxjc",
        "market": "SZ"
    },
    {
        "code": "002459",
        "name": "晶澳科技",
        "pinyin": "jakj",
        "market": "SZ"
    },
    {
        "code": "002683",
        "name": "广东宏大",
        "pinyin": "gdhd",
        "market": "SZ"
    },
    {
        "code": "300475",
        "name": "香农芯创",
        "pinyin": "xnxc",
        "market": "SZ"
    },
    {
        "code": "600556",
        "name": "天下秀",
        "pinyin": "txx",
        "market": "SH"
    },
    {
        "code": "600588",
        "name": "用友网络",
        "pinyin": "yywl",
        "market": "SH"
    },
    {
        "code": "300489",
        "name": "光智科技",
        "pinyin": "gzkj",
        "market": "SZ"
    },
    {
        "code": "301567",
        "name": "贝隆精密",
        "pinyin": "bljm",
        "market": "SZ"
    },
    {
        "code": "600595",
        "name": "中孚实业",
        "pinyin": "zfsy",
        "market": "SH"
    },
    {
        "code": "600732",
        "name": "爱旭股份",
        "pinyin": "axgf",
        "market": "SH"
    },
    {
        "code": "601601",
        "name": "中国太保",
        "pinyin": "zgtb",
        "market": "SH"
    },
    {
        "code": "000655",
        "name": "金岭矿业",
        "pinyin": "jlky",
        "market": "SZ"
    },
    {
        "code": "002182",
        "name": "宝武镁业",
        "pinyin": "bwmy",
        "market": "SZ"
    },
    {
        "code": "002352",
        "name": "顺丰控股",
        "pinyin": "sfkg",
        "market": "SZ"
    },
    {
        "code": "300101",
        "name": "振芯科技",
        "pinyin": "zxkj",
        "market": "SZ"
    },
    {
        "code": "300122",
        "name": "智飞生物",
        "pinyin": "zfsw",
        "market": "SZ"
    },
    {
        "code": "300131",
        "name": "英唐智控",
        "pinyin": "ytzk",
        "market": "SZ"
    },
    {
        "code": "000969",
        "name": "安泰科技",
        "pinyin": "atkj",
        "market": "SZ"
    },
    {
        "code": "002646",
        "name": "天佑德酒",
        "pinyin": "tydj",
        "market": "SZ"
    },
    {
        "code": "300448",
        "name": "浩云科技",
        "pinyin": "hykj",
        "market": "SZ"
    },
    {
        "code": "300682",
        "name": "朗新科技",
        "pinyin": "lxkj",
        "market": "SZ"
    },
    {
        "code": "301017",
        "name": "漱玉平民",
        "pinyin": "sypm",
        "market": "SZ"
    },
    {
        "code": "301160",
        "name": "翔楼新材",
        "pinyin": "xlxc",
        "market": "SZ"
    },
    {
        "code": "301221",
        "name": "光庭信息",
        "pinyin": "gtxx",
        "market": "SZ"
    },
    {
        "code": "301580",
        "name": "爱迪特",
        "pinyin": "adt",
        "market": "SZ"
    },
    {
        "code": "301638",
        "name": "南网数字",
        "pinyin": "nwsz",
        "market": "SZ"
    },
    {
        "code": "000032",
        "name": "深桑达A",
        "pinyin": "ssda",
        "market": "SZ"
    },
    {
        "code": "002253",
        "name": "*ST智胜",
        "pinyin": "*stzs",
        "market": "SZ"
    },
    {
        "code": "002614",
        "name": "奥佳华",
        "pinyin": "ajh",
        "market": "SZ"
    },
    {
        "code": "002898",
        "name": "*ST赛隆",
        "pinyin": "*stsl",
        "market": "SZ"
    },
    {
        "code": "300693",
        "name": "盛弘股份",
        "pinyin": "shgf",
        "market": "SZ"
    },
    {
        "code": "600941",
        "name": "中国移动",
        "pinyin": "zgyd",
        "market": "SH"
    },
    {
        "code": "002291",
        "name": "遥望科技",
        "pinyin": "ywkj",
        "market": "SZ"
    },
    {
        "code": "300357",
        "name": "我武生物",
        "pinyin": "wwsw",
        "market": "SZ"
    },
    {
        "code": "300642",
        "name": "透景生命",
        "pinyin": "tjsm",
        "market": "SZ"
    },
    {
        "code": "300663",
        "name": "科蓝软件",
        "pinyin": "klrj",
        "market": "SZ"
    },
    {
        "code": "603579",
        "name": "荣泰健康",
        "pinyin": "rtjk",
        "market": "SH"
    },
    {
        "code": "300725",
        "name": "药石科技",
        "pinyin": "yskj",
        "market": "SZ"
    },
    {
        "code": "301449",
        "name": "天溯计量",
        "pinyin": "tsjl",
        "market": "SZ"
    },
    {
        "code": "603601",
        "name": "再升科技",
        "pinyin": "zskj",
        "market": "SH"
    },
    {
        "code": "000833",
        "name": "粤桂股份",
        "pinyin": "yggf",
        "market": "SZ"
    },
    {
        "code": "002345",
        "name": "潮宏基",
        "pinyin": "chj",
        "market": "SZ"
    },
    {
        "code": "003022",
        "name": "联泓新科",
        "pinyin": "lhxk",
        "market": "SZ"
    },
    {
        "code": "301302",
        "name": "华如科技",
        "pinyin": "hrkj",
        "market": "SZ"
    },
    {
        "code": "301315",
        "name": "威士顿",
        "pinyin": "wsd",
        "market": "SZ"
    },
    {
        "code": "301591",
        "name": "肯特股份",
        "pinyin": "ktgf",
        "market": "SZ"
    },
    {
        "code": "600085",
        "name": "同仁堂",
        "pinyin": "trt",
        "market": "SH"
    },
    {
        "code": "601615",
        "name": "明阳智能",
        "pinyin": "myzn",
        "market": "SH"
    },
    {
        "code": "603680",
        "name": "今创集团",
        "pinyin": "jcjt",
        "market": "SH"
    },
    {
        "code": "603918",
        "name": "金桥信息",
        "pinyin": "jqxx",
        "market": "SH"
    },
    {
        "code": "000531",
        "name": "穗恒运A",
        "pinyin": "shya",
        "market": "SZ"
    },
    {
        "code": "002335",
        "name": "科华数据",
        "pinyin": "khsj",
        "market": "SZ"
    },
    {
        "code": "300192",
        "name": "科德教育",
        "pinyin": "kdjy",
        "market": "SZ"
    },
    {
        "code": "300409",
        "name": "道氏技术",
        "pinyin": "dsjs",
        "market": "SZ"
    },
    {
        "code": "300576",
        "name": "容大感光",
        "pinyin": "rdgg",
        "market": "SZ"
    },
    {
        "code": "300767",
        "name": "震安科技",
        "pinyin": "zakj",
        "market": "SZ"
    },
    {
        "code": "301330",
        "name": "熵基科技",
        "pinyin": "sjkj",
        "market": "SZ"
    },
    {
        "code": "605179",
        "name": "一鸣食品",
        "pinyin": "ymsp",
        "market": "SH"
    },
    {
        "code": "000066",
        "name": "中国长城",
        "pinyin": "zgcc",
        "market": "SZ"
    },
    {
        "code": "000968",
        "name": "蓝焰控股",
        "pinyin": "lykg",
        "market": "SZ"
    },
    {
        "code": "002058",
        "name": "*ST威尔",
        "pinyin": "*stwe",
        "market": "SZ"
    },
    {
        "code": "300037",
        "name": "新宙邦",
        "pinyin": "xzb",
        "market": "SZ"
    },
    {
        "code": "300075",
        "name": "数字政通",
        "pinyin": "szzt",
        "market": "SZ"
    },
    {
        "code": "300248",
        "name": "新开普",
        "pinyin": "xkp",
        "market": "SZ"
    },
    {
        "code": "300581",
        "name": "晨曦航空",
        "pinyin": "cxhk",
        "market": "SZ"
    },
    {
        "code": "600760",
        "name": "中航沈飞",
        "pinyin": "zhsf",
        "market": "SH"
    },
    {
        "code": "600774",
        "name": "汉商集团",
        "pinyin": "hsjt",
        "market": "SH"
    },
    {
        "code": "600829",
        "name": "人民同泰",
        "pinyin": "rmtt",
        "market": "SH"
    },
    {
        "code": "600875",
        "name": "东方电气",
        "pinyin": "dfdq",
        "market": "SH"
    },
    {
        "code": "000400",
        "name": "许继电气",
        "pinyin": "xjdq",
        "market": "SZ"
    },
    {
        "code": "002392",
        "name": "北京利尔",
        "pinyin": "bjle",
        "market": "SZ"
    },
    {
        "code": "300377",
        "name": "赢时胜",
        "pinyin": "yss",
        "market": "SZ"
    },
    {
        "code": "300759",
        "name": "康龙化成",
        "pinyin": "klhc",
        "market": "SZ"
    },
    {
        "code": "600801",
        "name": "华新建材",
        "pinyin": "hxjc",
        "market": "SH"
    },
    {
        "code": "603139",
        "name": "康惠股份",
        "pinyin": "khgf",
        "market": "SH"
    },
    {
        "code": "603529",
        "name": "爱玛科技",
        "pinyin": "amkj",
        "market": "SH"
    },
    {
        "code": "002439",
        "name": "启明星辰",
        "pinyin": "qmxc",
        "market": "SZ"
    },
    {
        "code": "300253",
        "name": "卫宁健康",
        "pinyin": "wnjk",
        "market": "SZ"
    },
    {
        "code": "300468",
        "name": "四方精创",
        "pinyin": "sfjc",
        "market": "SZ"
    },
    {
        "code": "300622",
        "name": "博士眼镜",
        "pinyin": "bsyj",
        "market": "SZ"
    },
    {
        "code": "600771",
        "name": "广誉远",
        "pinyin": "gyy",
        "market": "SH"
    },
    {
        "code": "600909",
        "name": "华安证券",
        "pinyin": "hazq",
        "market": "SH"
    },
    {
        "code": "603298",
        "name": "杭叉集团",
        "pinyin": "hcjt",
        "market": "SH"
    },
    {
        "code": "603713",
        "name": "密尔克卫",
        "pinyin": "mekw",
        "market": "SH"
    },
    {
        "code": "605318",
        "name": "法狮龙",
        "pinyin": "fsl",
        "market": "SH"
    },
    {
        "code": "000795",
        "name": "英洛华",
        "pinyin": "ylh",
        "market": "SZ"
    },
    {
        "code": "000970",
        "name": "中科三环",
        "pinyin": "zksh",
        "market": "SZ"
    },
    {
        "code": "002043",
        "name": "兔 宝 宝",
        "pinyin": "t b b",
        "market": "SZ"
    },
    {
        "code": "002508",
        "name": "老板电器",
        "pinyin": "lbdq",
        "market": "SZ"
    },
    {
        "code": "300003",
        "name": "乐普医疗",
        "pinyin": "lpyl",
        "market": "SZ"
    },
    {
        "code": "301360",
        "name": "荣旗科技",
        "pinyin": "rqkj",
        "market": "SZ"
    },
    {
        "code": "600745",
        "name": "闻泰科技",
        "pinyin": "wtkj",
        "market": "SH"
    },
    {
        "code": "601877",
        "name": "正泰电器",
        "pinyin": "ztdq",
        "market": "SH"
    },
    {
        "code": "603658",
        "name": "安图生物",
        "pinyin": "atsw",
        "market": "SH"
    },
    {
        "code": "603883",
        "name": "老百姓",
        "pinyin": "lbx",
        "market": "SH"
    },
    {
        "code": "000561",
        "name": "烽火电子",
        "pinyin": "fhdz",
        "market": "SZ"
    },
    {
        "code": "002126",
        "name": "银轮股份",
        "pinyin": "ylgf",
        "market": "SZ"
    },
    {
        "code": "002171",
        "name": "楚江新材",
        "pinyin": "cjxc",
        "market": "SZ"
    },
    {
        "code": "002578",
        "name": "闽发铝业",
        "pinyin": "mfly",
        "market": "SZ"
    },
    {
        "code": "300109",
        "name": "新开源",
        "pinyin": "xky",
        "market": "SZ"
    },
    {
        "code": "300252",
        "name": "金信诺",
        "pinyin": "jxn",
        "market": "SZ"
    },
    {
        "code": "300275",
        "name": "梅安森",
        "pinyin": "mas",
        "market": "SZ"
    },
    {
        "code": "300579",
        "name": "数字认证",
        "pinyin": "szrz",
        "market": "SZ"
    },
    {
        "code": "300999",
        "name": "金龙鱼",
        "pinyin": "jly",
        "market": "SZ"
    },
    {
        "code": "600602",
        "name": "云赛智联",
        "pinyin": "yszl",
        "market": "SH"
    },
    {
        "code": "601121",
        "name": "宝地矿业",
        "pinyin": "bdky",
        "market": "SH"
    },
    {
        "code": "603185",
        "name": "弘元绿能",
        "pinyin": "hyln",
        "market": "SH"
    },
    {
        "code": "000681",
        "name": "视觉中国",
        "pinyin": "sjzg",
        "market": "SZ"
    },
    {
        "code": "000938",
        "name": "紫光股份",
        "pinyin": "zggf",
        "market": "SZ"
    },
    {
        "code": "000951",
        "name": "中国重汽",
        "pinyin": "zgzq",
        "market": "SZ"
    },
    {
        "code": "001696",
        "name": "宗申动力",
        "pinyin": "zsdl",
        "market": "SZ"
    },
    {
        "code": "002577",
        "name": "雷柏科技",
        "pinyin": "lbkj",
        "market": "SZ"
    },
    {
        "code": "002841",
        "name": "视源股份",
        "pinyin": "sygf",
        "market": "SZ"
    },
    {
        "code": "003006",
        "name": "百亚股份",
        "pinyin": "bygf",
        "market": "SZ"
    },
    {
        "code": "300129",
        "name": "泰胜风能",
        "pinyin": "tsfn",
        "market": "SZ"
    },
    {
        "code": "300479",
        "name": "神思电子",
        "pinyin": "ssdz",
        "market": "SZ"
    },
    {
        "code": "300698",
        "name": "万马科技",
        "pinyin": "wmkj",
        "market": "SZ"
    },
    {
        "code": "300921",
        "name": "南凌科技",
        "pinyin": "nlkj",
        "market": "SZ"
    },
    {
        "code": "600089",
        "name": "特变电工",
        "pinyin": "tbdg",
        "market": "SH"
    },
    {
        "code": "601100",
        "name": "恒立液压",
        "pinyin": "hlyy",
        "market": "SH"
    },
    {
        "code": "601118",
        "name": "海南橡胶",
        "pinyin": "hnxj",
        "market": "SH"
    },
    {
        "code": "601179",
        "name": "中国西电",
        "pinyin": "zgxd",
        "market": "SH"
    },
    {
        "code": "603093",
        "name": "南华期货",
        "pinyin": "nhqh",
        "market": "SH"
    },
    {
        "code": "603666",
        "name": "亿嘉和",
        "pinyin": "yjh",
        "market": "SH"
    },
    {
        "code": "603712",
        "name": "七一二",
        "pinyin": "qye",
        "market": "SH"
    },
    {
        "code": "000538",
        "name": "云南白药",
        "pinyin": "ynby",
        "market": "SZ"
    },
    {
        "code": "000710",
        "name": "贝瑞基因",
        "pinyin": "brjy",
        "market": "SZ"
    },
    {
        "code": "002534",
        "name": "西子洁能",
        "pinyin": "xzjn",
        "market": "SZ"
    },
    {
        "code": "002629",
        "name": "仁智股份",
        "pinyin": "rzgf",
        "market": "SZ"
    },
    {
        "code": "002728",
        "name": "特一药业",
        "pinyin": "tyyy",
        "market": "SZ"
    },
    {
        "code": "300047",
        "name": "天源迪科",
        "pinyin": "tydk",
        "market": "SZ"
    },
    {
        "code": "300632",
        "name": "光莆股份",
        "pinyin": "gpgf",
        "market": "SZ"
    },
    {
        "code": "300737",
        "name": "科顺股份",
        "pinyin": "ksgf",
        "market": "SZ"
    },
    {
        "code": "301260",
        "name": "格力博",
        "pinyin": "glb",
        "market": "SZ"
    },
    {
        "code": "600868",
        "name": "梅雁吉祥",
        "pinyin": "myjx",
        "market": "SH"
    },
    {
        "code": "600887",
        "name": "伊利股份",
        "pinyin": "ylgf",
        "market": "SH"
    },
    {
        "code": "601995",
        "name": "中金公司",
        "pinyin": "zjgs",
        "market": "SH"
    },
    {
        "code": "603068",
        "name": "博通集成",
        "pinyin": "btjc",
        "market": "SH"
    },
    {
        "code": "603605",
        "name": "珀莱雅",
        "pinyin": "ply",
        "market": "SH"
    },
    {
        "code": "002264",
        "name": "新 华 都",
        "pinyin": "x h d",
        "market": "SZ"
    },
    {
        "code": "002361",
        "name": "神剑股份",
        "pinyin": "sjgf",
        "market": "SZ"
    },
    {
        "code": "002362",
        "name": "汉王科技",
        "pinyin": "hwkj",
        "market": "SZ"
    },
    {
        "code": "002639",
        "name": "雪人集团",
        "pinyin": "xrjt",
        "market": "SZ"
    },
    {
        "code": "300004",
        "name": "南风股份",
        "pinyin": "nfgf",
        "market": "SZ"
    },
    {
        "code": "300298",
        "name": "三诺生物",
        "pinyin": "snsw",
        "market": "SZ"
    },
    {
        "code": "300465",
        "name": "高伟达",
        "pinyin": "gwd",
        "market": "SZ"
    },
    {
        "code": "300747",
        "name": "锐科激光",
        "pinyin": "rkjg",
        "market": "SZ"
    },
    {
        "code": "301363",
        "name": "美好医疗",
        "pinyin": "mhyl",
        "market": "SZ"
    },
    {
        "code": "600030",
        "name": "中信证券",
        "pinyin": "zxzq",
        "market": "SH"
    },
    {
        "code": "600888",
        "name": "新疆众和",
        "pinyin": "xjzh",
        "market": "SH"
    },
    {
        "code": "000554",
        "name": "泰山石油",
        "pinyin": "tssy",
        "market": "SZ"
    },
    {
        "code": "000729",
        "name": "燕京啤酒",
        "pinyin": "yjpj",
        "market": "SZ"
    },
    {
        "code": "002471",
        "name": "中超控股",
        "pinyin": "zckg",
        "market": "SZ"
    },
    {
        "code": "002511",
        "name": "中顺洁柔",
        "pinyin": "zsjr",
        "market": "SZ"
    },
    {
        "code": "002601",
        "name": "龙佰集团",
        "pinyin": "lbjt",
        "market": "SZ"
    },
    {
        "code": "300001",
        "name": "特锐德",
        "pinyin": "trd",
        "market": "SZ"
    },
    {
        "code": "301169",
        "name": "零点有数",
        "pinyin": "ldys",
        "market": "SZ"
    },
    {
        "code": "301263",
        "name": "泰恩康",
        "pinyin": "tek",
        "market": "SZ"
    },
    {
        "code": "301348",
        "name": "蓝箭电子",
        "pinyin": "ljdz",
        "market": "SZ"
    },
    {
        "code": "301584",
        "name": "建发致新",
        "pinyin": "jfzx",
        "market": "SZ"
    },
    {
        "code": "600416",
        "name": "湘电股份",
        "pinyin": "xdgf",
        "market": "SH"
    },
    {
        "code": "000510",
        "name": "新金路",
        "pinyin": "xjl",
        "market": "SZ"
    },
    {
        "code": "000777",
        "name": "中核科技",
        "pinyin": "zhkj",
        "market": "SZ"
    },
    {
        "code": "002268",
        "name": "电科网安",
        "pinyin": "dkwa",
        "market": "SZ"
    },
    {
        "code": "002297",
        "name": "博云新材",
        "pinyin": "byxc",
        "market": "SZ"
    },
    {
        "code": "002557",
        "name": "洽洽食品",
        "pinyin": "qqsp",
        "market": "SZ"
    },
    {
        "code": "002612",
        "name": "朗姿股份",
        "pinyin": "lzgf",
        "market": "SZ"
    },
    {
        "code": "002959",
        "name": "小熊电器",
        "pinyin": "xxdq",
        "market": "SZ"
    },
    {
        "code": "300337",
        "name": "银邦股份",
        "pinyin": "ybgf",
        "market": "SZ"
    },
    {
        "code": "300363",
        "name": "博腾股份",
        "pinyin": "btgf",
        "market": "SZ"
    },
    {
        "code": "300432",
        "name": "富临精工",
        "pinyin": "fljg",
        "market": "SZ"
    },
    {
        "code": "300740",
        "name": "水羊股份",
        "pinyin": "sygf",
        "market": "SZ"
    },
    {
        "code": "301110",
        "name": "青木科技",
        "pinyin": "qmkj",
        "market": "SZ"
    },
    {
        "code": "301487",
        "name": "盟固利",
        "pinyin": "mgl",
        "market": "SZ"
    },
    {
        "code": "603997",
        "name": "继峰股份",
        "pinyin": "jfgf",
        "market": "SH"
    },
    {
        "code": "605228",
        "name": "神通科技",
        "pinyin": "stkj",
        "market": "SH"
    },
    {
        "code": "002544",
        "name": "普天科技",
        "pinyin": "ptkj",
        "market": "SZ"
    },
    {
        "code": "002906",
        "name": "华阳集团",
        "pinyin": "hyjt",
        "market": "SZ"
    },
    {
        "code": "300291",
        "name": "百纳千成",
        "pinyin": "bnqc",
        "market": "SZ"
    },
    {
        "code": "300612",
        "name": "宣亚国际",
        "pinyin": "xygj",
        "market": "SZ"
    },
    {
        "code": "300629",
        "name": "新劲刚",
        "pinyin": "xjg",
        "market": "SZ"
    },
    {
        "code": "301096",
        "name": "百诚医药",
        "pinyin": "bcyy",
        "market": "SZ"
    },
    {
        "code": "301265",
        "name": "华新环保",
        "pinyin": "hxhb",
        "market": "SZ"
    },
    {
        "code": "600183",
        "name": "生益科技",
        "pinyin": "sykj",
        "market": "SH"
    },
    {
        "code": "600196",
        "name": "复星医药",
        "pinyin": "fxyy",
        "market": "SH"
    },
    {
        "code": "600292",
        "name": "电投水电",
        "pinyin": "dtsd",
        "market": "SH"
    },
    {
        "code": "600586",
        "name": "金晶科技",
        "pinyin": "jjkj",
        "market": "SH"
    },
    {
        "code": "603108",
        "name": "润达医疗",
        "pinyin": "rdyl",
        "market": "SH"
    },
    {
        "code": "603236",
        "name": "移远通信",
        "pinyin": "yytx",
        "market": "SH"
    },
    {
        "code": "603826",
        "name": "坤彩科技",
        "pinyin": "kckj",
        "market": "SH"
    },
    {
        "code": "002130",
        "name": "沃尔核材",
        "pinyin": "wehc",
        "market": "SZ"
    },
    {
        "code": "002402",
        "name": "和而泰",
        "pinyin": "het",
        "market": "SZ"
    },
    {
        "code": "002709",
        "name": "天赐材料",
        "pinyin": "tccl",
        "market": "SZ"
    },
    {
        "code": "002996",
        "name": "顺博合金",
        "pinyin": "sbhj",
        "market": "SZ"
    },
    {
        "code": "300059",
        "name": "东方财富",
        "pinyin": "dfcf",
        "market": "SZ"
    },
    {
        "code": "300525",
        "name": "博思软件",
        "pinyin": "bsrj",
        "market": "SZ"
    },
    {
        "code": "300722",
        "name": "新余国科",
        "pinyin": "xygk",
        "market": "SZ"
    },
    {
        "code": "300840",
        "name": "酷特智能",
        "pinyin": "ktzn",
        "market": "SZ"
    },
    {
        "code": "600105",
        "name": "永鼎股份",
        "pinyin": "ydgf",
        "market": "SH"
    },
    {
        "code": "600573",
        "name": "惠泉啤酒",
        "pinyin": "hqpj",
        "market": "SH"
    },
    {
        "code": "600633",
        "name": "浙数文化",
        "pinyin": "zswh",
        "market": "SH"
    },
    {
        "code": "605398",
        "name": "新炬网络",
        "pinyin": "xjwl",
        "market": "SH"
    },
    {
        "code": "000009",
        "name": "中国宝安",
        "pinyin": "zgba",
        "market": "SZ"
    },
    {
        "code": "000555",
        "name": "神州信息",
        "pinyin": "szxx",
        "market": "SZ"
    },
    {
        "code": "002232",
        "name": "启明信息",
        "pinyin": "qmxx",
        "market": "SZ"
    },
    {
        "code": "300288",
        "name": "朗玛信息",
        "pinyin": "lmxx",
        "market": "SZ"
    },
    {
        "code": "300328",
        "name": "宜安科技",
        "pinyin": "yakj",
        "market": "SZ"
    },
    {
        "code": "300348",
        "name": "长亮科技",
        "pinyin": "clkj",
        "market": "SZ"
    },
    {
        "code": "300368",
        "name": "汇金股份",
        "pinyin": "hjgf",
        "market": "SZ"
    },
    {
        "code": "300503",
        "name": "昊志机电",
        "pinyin": "hzjd",
        "market": "SZ"
    },
    {
        "code": "301248",
        "name": "杰创智能",
        "pinyin": "jczn",
        "market": "SZ"
    },
    {
        "code": "301259",
        "name": "艾布鲁",
        "pinyin": "abl",
        "market": "SZ"
    },
    {
        "code": "601068",
        "name": "中铝国际",
        "pinyin": "zlgj",
        "market": "SH"
    },
    {
        "code": "603189",
        "name": "网达软件",
        "pinyin": "wdrj",
        "market": "SH"
    },
    {
        "code": "603191",
        "name": "望变电气",
        "pinyin": "wbdq",
        "market": "SH"
    },
    {
        "code": "603527",
        "name": "众源新材",
        "pinyin": "zyxc",
        "market": "SH"
    },
    {
        "code": "000050",
        "name": "深天马A",
        "pinyin": "stma",
        "market": "SZ"
    },
    {
        "code": "000776",
        "name": "广发证券",
        "pinyin": "gfzq",
        "market": "SZ"
    },
    {
        "code": "002236",
        "name": "大华股份",
        "pinyin": "dhgf",
        "market": "SZ"
    },
    {
        "code": "300071",
        "name": "福石控股",
        "pinyin": "fskg",
        "market": "SZ"
    },
    {
        "code": "300188",
        "name": "国投智能",
        "pinyin": "gtzn",
        "market": "SZ"
    },
    {
        "code": "300830",
        "name": "金现代",
        "pinyin": "jxd",
        "market": "SZ"
    },
    {
        "code": "300898",
        "name": "熊猫乳品",
        "pinyin": "xmrp",
        "market": "SZ"
    },
    {
        "code": "300909",
        "name": "汇创达",
        "pinyin": "hcd",
        "market": "SZ"
    },
    {
        "code": "600596",
        "name": "新安股份",
        "pinyin": "xagf",
        "market": "SH"
    },
    {
        "code": "603290",
        "name": "斯达半导",
        "pinyin": "sdbd",
        "market": "SH"
    },
    {
        "code": "603613",
        "name": "国联股份",
        "pinyin": "glgf",
        "market": "SH"
    },
    {
        "code": "605136",
        "name": "丽人丽妆",
        "pinyin": "lrlz",
        "market": "SH"
    },
    {
        "code": "002150",
        "name": "正泰电源",
        "pinyin": "ztdy",
        "market": "SZ"
    },
    {
        "code": "002244",
        "name": "滨江集团",
        "pinyin": "bjjt",
        "market": "SZ"
    },
    {
        "code": "002279",
        "name": "久其软件",
        "pinyin": "jqrj",
        "market": "SZ"
    },
    {
        "code": "300002",
        "name": "神州泰岳",
        "pinyin": "szty",
        "market": "SZ"
    },
    {
        "code": "300245",
        "name": "天玑科技",
        "pinyin": "tjkj",
        "market": "SZ"
    },
    {
        "code": "300497",
        "name": "富祥药业",
        "pinyin": "fxyy",
        "market": "SZ"
    },
    {
        "code": "300558",
        "name": "贝达药业",
        "pinyin": "bdyy",
        "market": "SZ"
    },
    {
        "code": "300735",
        "name": "光弘科技",
        "pinyin": "ghkj",
        "market": "SZ"
    },
    {
        "code": "300768",
        "name": "迪普科技",
        "pinyin": "dpkj",
        "market": "SZ"
    },
    {
        "code": "300791",
        "name": "仙乐健康",
        "pinyin": "xljk",
        "market": "SZ"
    },
    {
        "code": "300872",
        "name": "天阳科技",
        "pinyin": "tykj",
        "market": "SZ"
    },
    {
        "code": "301217",
        "name": "铜冠铜箔",
        "pinyin": "tgtb",
        "market": "SZ"
    },
    {
        "code": "601633",
        "name": "长城汽车",
        "pinyin": "ccqc",
        "market": "SH"
    },
    {
        "code": "603899",
        "name": "晨光股份",
        "pinyin": "cggf",
        "market": "SH"
    },
    {
        "code": "000423",
        "name": "东阿阿胶",
        "pinyin": "daaj",
        "market": "SZ"
    },
    {
        "code": "001314",
        "name": "亿道信息",
        "pinyin": "ydxx",
        "market": "SZ"
    },
    {
        "code": "002129",
        "name": "TCL中环",
        "pinyin": "tclzh",
        "market": "SZ"
    },
    {
        "code": "002153",
        "name": "石基信息",
        "pinyin": "sjxx",
        "market": "SZ"
    },
    {
        "code": "002265",
        "name": "建设工业",
        "pinyin": "jsgy",
        "market": "SZ"
    },
    {
        "code": "002284",
        "name": "亚太股份",
        "pinyin": "ytgf",
        "market": "SZ"
    },
    {
        "code": "002632",
        "name": "道明光学",
        "pinyin": "dmgx",
        "market": "SZ"
    },
    {
        "code": "002860",
        "name": "星帅尔",
        "pinyin": "xse",
        "market": "SZ"
    },
    {
        "code": "300031",
        "name": "宝通科技",
        "pinyin": "btkj",
        "market": "SZ"
    },
    {
        "code": "300278",
        "name": "华昌达",
        "pinyin": "hcd",
        "market": "SZ"
    },
    {
        "code": "300290",
        "name": "荣科科技",
        "pinyin": "rkkj",
        "market": "SZ"
    },
    {
        "code": "300571",
        "name": "平治信息",
        "pinyin": "pzxx",
        "market": "SZ"
    },
    {
        "code": "600211",
        "name": "西藏药业",
        "pinyin": "xcyy",
        "market": "SH"
    },
    {
        "code": "600660",
        "name": "福耀玻璃",
        "pinyin": "fybl",
        "market": "SH"
    },
    {
        "code": "601360",
        "name": "三六零",
        "pinyin": "sll",
        "market": "SH"
    },
    {
        "code": "603418",
        "name": "友升股份",
        "pinyin": "ysgf",
        "market": "SH"
    },
    {
        "code": "603829",
        "name": "洛凯股份",
        "pinyin": "lkgf",
        "market": "SH"
    },
    {
        "code": "002311",
        "name": "海大集团",
        "pinyin": "hdjt",
        "market": "SZ"
    },
    {
        "code": "002422",
        "name": "科伦药业",
        "pinyin": "klyy",
        "market": "SZ"
    },
    {
        "code": "002579",
        "name": "中京电子",
        "pinyin": "zjdz",
        "market": "SZ"
    },
    {
        "code": "300049",
        "name": "福瑞医科",
        "pinyin": "fryk",
        "market": "SZ"
    },
    {
        "code": "300206",
        "name": "理邦仪器",
        "pinyin": "lbyq",
        "market": "SZ"
    },
    {
        "code": "300232",
        "name": "洲明科技",
        "pinyin": "zmkj",
        "market": "SZ"
    },
    {
        "code": "300246",
        "name": "宝莱特",
        "pinyin": "blt",
        "market": "SZ"
    },
    {
        "code": "300608",
        "name": "思特奇",
        "pinyin": "stq",
        "market": "SZ"
    },
    {
        "code": "300875",
        "name": "捷强装备",
        "pinyin": "jqzb",
        "market": "SZ"
    },
    {
        "code": "300895",
        "name": "铜牛信息",
        "pinyin": "tnxx",
        "market": "SZ"
    },
    {
        "code": "301082",
        "name": "久盛电气",
        "pinyin": "jsdq",
        "market": "SZ"
    },
    {
        "code": "301517",
        "name": "陕西华达",
        "pinyin": "sxhd",
        "market": "SZ"
    },
    {
        "code": "600587",
        "name": "新华医疗",
        "pinyin": "xhyl",
        "market": "SH"
    },
    {
        "code": "600839",
        "name": "四川长虹",
        "pinyin": "scch",
        "market": "SH"
    },
    {
        "code": "600968",
        "name": "海油发展",
        "pinyin": "hyfz",
        "market": "SH"
    },
    {
        "code": "603556",
        "name": "海兴电力",
        "pinyin": "hxdl",
        "market": "SH"
    },
    {
        "code": "002340",
        "name": "格林美",
        "pinyin": "glm",
        "market": "SZ"
    },
    {
        "code": "002434",
        "name": "万里扬",
        "pinyin": "wly",
        "market": "SZ"
    },
    {
        "code": "002461",
        "name": "珠江啤酒",
        "pinyin": "zjpj",
        "market": "SZ"
    },
    {
        "code": "002741",
        "name": "光华科技",
        "pinyin": "ghkj",
        "market": "SZ"
    },
    {
        "code": "002913",
        "name": "奥士康",
        "pinyin": "ask",
        "market": "SZ"
    },
    {
        "code": "002941",
        "name": "新疆交建",
        "pinyin": "xjjj",
        "market": "SZ"
    },
    {
        "code": "002990",
        "name": "盛视科技",
        "pinyin": "sskj",
        "market": "SZ"
    },
    {
        "code": "300327",
        "name": "中颖电子",
        "pinyin": "zydz",
        "market": "SZ"
    },
    {
        "code": "300397",
        "name": "天和防务",
        "pinyin": "thfw",
        "market": "SZ"
    },
    {
        "code": "300446",
        "name": "航天智造",
        "pinyin": "htzz",
        "market": "SZ"
    },
    {
        "code": "300482",
        "name": "万孚生物",
        "pinyin": "wfsw",
        "market": "SZ"
    },
    {
        "code": "301234",
        "name": "五洲医疗",
        "pinyin": "wzyl",
        "market": "SZ"
    },
    {
        "code": "600619",
        "name": "海立股份",
        "pinyin": "hlgf",
        "market": "SH"
    },
    {
        "code": "603011",
        "name": "合锻智能",
        "pinyin": "hdzn",
        "market": "SH"
    },
    {
        "code": "603379",
        "name": "三美股份",
        "pinyin": "smgf",
        "market": "SH"
    },
    {
        "code": "000017",
        "name": "深中华A",
        "pinyin": "szha",
        "market": "SZ"
    },
    {
        "code": "000917",
        "name": "电广传媒",
        "pinyin": "dgcm",
        "market": "SZ"
    },
    {
        "code": "002678",
        "name": "珠江钢琴",
        "pinyin": "zjgq",
        "market": "SZ"
    },
    {
        "code": "002881",
        "name": "美格智能",
        "pinyin": "mgzn",
        "market": "SZ"
    },
    {
        "code": "002925",
        "name": "盈趣科技",
        "pinyin": "yqkj",
        "market": "SZ"
    },
    {
        "code": "002946",
        "name": "新乳业",
        "pinyin": "xry",
        "market": "SZ"
    },
    {
        "code": "300066",
        "name": "三川智慧",
        "pinyin": "sczh",
        "market": "SZ"
    },
    {
        "code": "300235",
        "name": "方直科技",
        "pinyin": "fzkj",
        "market": "SZ"
    },
    {
        "code": "300238",
        "name": "冠昊生物",
        "pinyin": "ghsw",
        "market": "SZ"
    },
    {
        "code": "300267",
        "name": "尔康制药",
        "pinyin": "ekzy",
        "market": "SZ"
    },
    {
        "code": "300349",
        "name": "金卡智能",
        "pinyin": "jkzn",
        "market": "SZ"
    },
    {
        "code": "300393",
        "name": "中来股份",
        "pinyin": "zlgf",
        "market": "SZ"
    },
    {
        "code": "300444",
        "name": "双杰电气",
        "pinyin": "sjdq",
        "market": "SZ"
    },
    {
        "code": "300493",
        "name": "润欣科技",
        "pinyin": "rxkj",
        "market": "SZ"
    },
    {
        "code": "300681",
        "name": "英搏尔",
        "pinyin": "ybe",
        "market": "SZ"
    },
    {
        "code": "300861",
        "name": "美畅股份",
        "pinyin": "mcgf",
        "market": "SZ"
    },
    {
        "code": "600481",
        "name": "双良节能",
        "pinyin": "sljn",
        "market": "SH"
    },
    {
        "code": "600739",
        "name": "辽宁成大",
        "pinyin": "lncd",
        "market": "SH"
    },
    {
        "code": "600850",
        "name": "电科数字",
        "pinyin": "dksz",
        "market": "SH"
    },
    {
        "code": "601066",
        "name": "中信建投",
        "pinyin": "zxjt",
        "market": "SH"
    },
    {
        "code": "000620",
        "name": "盈新发展",
        "pinyin": "yxfz",
        "market": "SZ"
    },
    {
        "code": "000629",
        "name": "钒钛股份",
        "pinyin": "ftgf",
        "market": "SZ"
    },
    {
        "code": "001914",
        "name": "招商积余",
        "pinyin": "zsjy",
        "market": "SZ"
    },
    {
        "code": "002498",
        "name": "汉缆股份",
        "pinyin": "hlgf",
        "market": "SZ"
    },
    {
        "code": "002782",
        "name": "可立克",
        "pinyin": "klk",
        "market": "SZ"
    },
    {
        "code": "300164",
        "name": "通源石油",
        "pinyin": "tysy",
        "market": "SZ"
    },
    {
        "code": "300233",
        "name": "金城医药",
        "pinyin": "jcyy",
        "market": "SZ"
    },
    {
        "code": "300413",
        "name": "芒果超媒",
        "pinyin": "mgcm",
        "market": "SZ"
    },
    {
        "code": "300658",
        "name": "延江股份",
        "pinyin": "yjgf",
        "market": "SZ"
    },
    {
        "code": "300957",
        "name": "贝泰妮",
        "pinyin": "btn",
        "market": "SZ"
    },
    {
        "code": "301087",
        "name": "可孚医疗",
        "pinyin": "kfyl",
        "market": "SZ"
    },
    {
        "code": "600637",
        "name": "东方明珠",
        "pinyin": "dfmz",
        "market": "SH"
    },
    {
        "code": "600641",
        "name": "先导基电",
        "pinyin": "xdjd",
        "market": "SH"
    },
    {
        "code": "600855",
        "name": "航天长峰",
        "pinyin": "htcf",
        "market": "SH"
    },
    {
        "code": "603202",
        "name": "天有为",
        "pinyin": "tyw",
        "market": "SH"
    },
    {
        "code": "603728",
        "name": "鸣志电器",
        "pinyin": "mzdq",
        "market": "SH"
    },
    {
        "code": "603777",
        "name": "来伊份",
        "pinyin": "lyf",
        "market": "SH"
    },
    {
        "code": "000526",
        "name": "学大教育",
        "pinyin": "xdjy",
        "market": "SZ"
    },
    {
        "code": "000623",
        "name": "吉林敖东",
        "pinyin": "jlad",
        "market": "SZ"
    },
    {
        "code": "002298",
        "name": "中电鑫龙",
        "pinyin": "zdxl",
        "market": "SZ"
    },
    {
        "code": "002987",
        "name": "京北方",
        "pinyin": "jbf",
        "market": "SZ"
    },
    {
        "code": "300072",
        "name": "海新能科",
        "pinyin": "hxnk",
        "market": "SZ"
    },
    {
        "code": "300179",
        "name": "四方达",
        "pinyin": "sfd",
        "market": "SZ"
    },
    {
        "code": "300340",
        "name": "科恒股份",
        "pinyin": "khgf",
        "market": "SZ"
    },
    {
        "code": "301251",
        "name": "威尔高",
        "pinyin": "weg",
        "market": "SZ"
    },
    {
        "code": "600171",
        "name": "上海贝岭",
        "pinyin": "shbl",
        "market": "SH"
    },
    {
        "code": "600265",
        "name": "ST景谷",
        "pinyin": "stjg",
        "market": "SH"
    },
    {
        "code": "600327",
        "name": "大东方",
        "pinyin": "ddf",
        "market": "SH"
    },
    {
        "code": "600435",
        "name": "北方导航",
        "pinyin": "bfdh",
        "market": "SH"
    },
    {
        "code": "600566",
        "name": "济川药业",
        "pinyin": "jcyy",
        "market": "SH"
    },
    {
        "code": "600663",
        "name": "陆家嘴",
        "pinyin": "ljz",
        "market": "SH"
    },
    {
        "code": "600690",
        "name": "海尔智家",
        "pinyin": "hezj",
        "market": "SH"
    },
    {
        "code": "600775",
        "name": "南京熊猫",
        "pinyin": "njxm",
        "market": "SH"
    },
    {
        "code": "600879",
        "name": "航天电子",
        "pinyin": "htdz",
        "market": "SH"
    },
    {
        "code": "601126",
        "name": "四方股份",
        "pinyin": "sfgf",
        "market": "SH"
    },
    {
        "code": "603321",
        "name": "梅轮电梯",
        "pinyin": "mldt",
        "market": "SH"
    },
    {
        "code": "603636",
        "name": "南威软件",
        "pinyin": "nwrj",
        "market": "SH"
    },
    {
        "code": "603690",
        "name": "至纯科技",
        "pinyin": "zckj",
        "market": "SH"
    },
    {
        "code": "603703",
        "name": "盛洋科技",
        "pinyin": "sykj",
        "market": "SH"
    },
    {
        "code": "000513",
        "name": "丽珠集团",
        "pinyin": "lzjt",
        "market": "SZ"
    },
    {
        "code": "001318",
        "name": "阳光乳业",
        "pinyin": "ygry",
        "market": "SZ"
    },
    {
        "code": "001389",
        "name": "广合科技",
        "pinyin": "ghkj",
        "market": "SZ"
    },
    {
        "code": "002095",
        "name": "生 意 宝",
        "pinyin": "s y b",
        "market": "SZ"
    },
    {
        "code": "002312",
        "name": "川发龙蟒",
        "pinyin": "cflm",
        "market": "SZ"
    },
    {
        "code": "002400",
        "name": "省广集团",
        "pinyin": "sgjt",
        "market": "SZ"
    },
    {
        "code": "002530",
        "name": "金财互联",
        "pinyin": "jchl",
        "market": "SZ"
    },
    {
        "code": "002862",
        "name": "实丰文化",
        "pinyin": "sfwh",
        "market": "SZ"
    },
    {
        "code": "003018",
        "name": "金富科技",
        "pinyin": "jfkj",
        "market": "SZ"
    },
    {
        "code": "300015",
        "name": "爱尔眼科",
        "pinyin": "aeyk",
        "market": "SZ"
    },
    {
        "code": "300304",
        "name": "云意电气",
        "pinyin": "yydq",
        "market": "SZ"
    },
    {
        "code": "300654",
        "name": "世纪天鸿",
        "pinyin": "sjth",
        "market": "SZ"
    },
    {
        "code": "300659",
        "name": "中孚信息",
        "pinyin": "zfxx",
        "market": "SZ"
    },
    {
        "code": "300683",
        "name": "海特生物",
        "pinyin": "htsw",
        "market": "SZ"
    },
    {
        "code": "300779",
        "name": "惠城环保",
        "pinyin": "hchb",
        "market": "SZ"
    },
    {
        "code": "300962",
        "name": "中金辐照",
        "pinyin": "zjfz",
        "market": "SZ"
    },
    {
        "code": "600184",
        "name": "光电股份",
        "pinyin": "gdgf",
        "market": "SH"
    },
    {
        "code": "600273",
        "name": "嘉化能源",
        "pinyin": "jhny",
        "market": "SH"
    },
    {
        "code": "600501",
        "name": "航天晨光",
        "pinyin": "htcg",
        "market": "SH"
    },
    {
        "code": "600645",
        "name": "中源协和",
        "pinyin": "zyxh",
        "market": "SH"
    },
    {
        "code": "603339",
        "name": "四方科技",
        "pinyin": "sfkj",
        "market": "SH"
    },
    {
        "code": "000411",
        "name": "英特集团",
        "pinyin": "ytjt",
        "market": "SZ"
    },
    {
        "code": "000783",
        "name": "长江证券",
        "pinyin": "cjzq",
        "market": "SZ"
    },
    {
        "code": "002195",
        "name": "岩山科技",
        "pinyin": "yskj",
        "market": "SZ"
    },
    {
        "code": "002512",
        "name": "达华智能",
        "pinyin": "dhzn",
        "market": "SZ"
    },
    {
        "code": "002714",
        "name": "牧原股份",
        "pinyin": "mygf",
        "market": "SZ"
    },
    {
        "code": "002760",
        "name": "凤形股份",
        "pinyin": "fxgf",
        "market": "SZ"
    },
    {
        "code": "300341",
        "name": "麦克奥迪",
        "pinyin": "mkad",
        "market": "SZ"
    },
    {
        "code": "300531",
        "name": "优博讯",
        "pinyin": "ybx",
        "market": "SZ"
    },
    {
        "code": "300941",
        "name": "创识科技",
        "pinyin": "cskj",
        "market": "SZ"
    },
    {
        "code": "301246",
        "name": "宏源药业",
        "pinyin": "hyyy",
        "market": "SZ"
    },
    {
        "code": "301270",
        "name": "汉仪股份",
        "pinyin": "hygf",
        "market": "SZ"
    },
    {
        "code": "301325",
        "name": "曼恩斯特",
        "pinyin": "mest",
        "market": "SZ"
    },
    {
        "code": "600095",
        "name": "湘财股份",
        "pinyin": "xcgf",
        "market": "SH"
    },
    {
        "code": "600621",
        "name": "华鑫股份",
        "pinyin": "hxgf",
        "market": "SH"
    },
    {
        "code": "601519",
        "name": "大智慧",
        "pinyin": "dzh",
        "market": "SH"
    },
    {
        "code": "603097",
        "name": "江苏华辰",
        "pinyin": "jshc",
        "market": "SH"
    },
    {
        "code": "603366",
        "name": "日出东方",
        "pinyin": "rcdf",
        "market": "SH"
    },
    {
        "code": "603596",
        "name": "伯特利",
        "pinyin": "btl",
        "market": "SH"
    },
    {
        "code": "000096",
        "name": "广聚能源",
        "pinyin": "gjny",
        "market": "SZ"
    },
    {
        "code": "002301",
        "name": "齐心集团",
        "pinyin": "qxjt",
        "market": "SZ"
    },
    {
        "code": "002899",
        "name": "英派斯",
        "pinyin": "yps",
        "market": "SZ"
    },
    {
        "code": "300024",
        "name": "机器人",
        "pinyin": "jqr",
        "market": "SZ"
    },
    {
        "code": "300166",
        "name": "东方国信",
        "pinyin": "dfgx",
        "market": "SZ"
    },
    {
        "code": "300345",
        "name": "华民股份",
        "pinyin": "hmgf",
        "market": "SZ"
    },
    {
        "code": "300529",
        "name": "健帆生物",
        "pinyin": "jfsw",
        "market": "SZ"
    },
    {
        "code": "300778",
        "name": "新城市",
        "pinyin": "xcs",
        "market": "SZ"
    },
    {
        "code": "301181",
        "name": "标榜股份",
        "pinyin": "bbgf",
        "market": "SZ"
    },
    {
        "code": "301366",
        "name": "一博科技",
        "pinyin": "ybkj",
        "market": "SZ"
    },
    {
        "code": "600201",
        "name": "生物股份",
        "pinyin": "swgf",
        "market": "SH"
    },
    {
        "code": "600552",
        "name": "凯盛科技",
        "pinyin": "kskj",
        "market": "SH"
    },
    {
        "code": "600585",
        "name": "海螺水泥",
        "pinyin": "hlsn",
        "market": "SH"
    },
    {
        "code": "600655",
        "name": "豫园股份",
        "pinyin": "yygf",
        "market": "SH"
    },
    {
        "code": "603232",
        "name": "格尔软件",
        "pinyin": "gerj",
        "market": "SH"
    },
    {
        "code": "603381",
        "name": "永臻股份",
        "pinyin": "yzgf",
        "market": "SH"
    },
    {
        "code": "603611",
        "name": "诺力股份",
        "pinyin": "nlgf",
        "market": "SH"
    },
    {
        "code": "605020",
        "name": "永和股份",
        "pinyin": "yhgf",
        "market": "SH"
    },
    {
        "code": "000028",
        "name": "国药一致",
        "pinyin": "gyyz",
        "market": "SZ"
    },
    {
        "code": "001979",
        "name": "招商蛇口",
        "pinyin": "zssk",
        "market": "SZ"
    },
    {
        "code": "002423",
        "name": "中粮资本",
        "pinyin": "zlzb",
        "market": "SZ"
    },
    {
        "code": "002427",
        "name": "尤夫股份",
        "pinyin": "yfgf",
        "market": "SZ"
    },
    {
        "code": "002603",
        "name": "以岭药业",
        "pinyin": "ylyy",
        "market": "SZ"
    },
    {
        "code": "002737",
        "name": "葵花药业",
        "pinyin": "khyy",
        "market": "SZ"
    },
    {
        "code": "002885",
        "name": "京泉华",
        "pinyin": "jqh",
        "market": "SZ"
    },
    {
        "code": "300010",
        "name": "豆神教育",
        "pinyin": "dsjy",
        "market": "SZ"
    },
    {
        "code": "300146",
        "name": "汤臣倍健",
        "pinyin": "tcbj",
        "market": "SZ"
    },
    {
        "code": "300811",
        "name": "铂科新材",
        "pinyin": "bkxc",
        "market": "SZ"
    },
    {
        "code": "301013",
        "name": "利和兴",
        "pinyin": "lhx",
        "market": "SZ"
    },
    {
        "code": "301092",
        "name": "争光股份",
        "pinyin": "zggf",
        "market": "SZ"
    },
    {
        "code": "600418",
        "name": "江淮汽车",
        "pinyin": "jhqc",
        "market": "SH"
    },
    {
        "code": "600521",
        "name": "华海药业",
        "pinyin": "hhyy",
        "market": "SH"
    },
    {
        "code": "600571",
        "name": "信雅达",
        "pinyin": "xyd",
        "market": "SH"
    },
    {
        "code": "600593",
        "name": "大连圣亚",
        "pinyin": "dlsy",
        "market": "SH"
    },
    {
        "code": "600616",
        "name": "金枫酒业",
        "pinyin": "jfjy",
        "market": "SH"
    },
    {
        "code": "600649",
        "name": "城投控股",
        "pinyin": "ctkg",
        "market": "SH"
    },
    {
        "code": "600779",
        "name": "水井坊",
        "pinyin": "sjf",
        "market": "SH"
    },
    {
        "code": "600872",
        "name": "中炬高新",
        "pinyin": "zjgx",
        "market": "SH"
    },
    {
        "code": "603038",
        "name": "华立股份",
        "pinyin": "hlgf",
        "market": "SH"
    },
    {
        "code": "000158",
        "name": "常山北明",
        "pinyin": "csbm",
        "market": "SZ"
    },
    {
        "code": "000830",
        "name": "鲁西化工",
        "pinyin": "lxhg",
        "market": "SZ"
    },
    {
        "code": "001216",
        "name": "华瓷股份",
        "pinyin": "hcgf",
        "market": "SZ"
    },
    {
        "code": "002057",
        "name": "中钢天源",
        "pinyin": "zgty",
        "market": "SZ"
    },
    {
        "code": "002170",
        "name": "芭田股份",
        "pinyin": "btgf",
        "market": "SZ"
    },
    {
        "code": "002254",
        "name": "泰和新材",
        "pinyin": "thxc",
        "market": "SZ"
    },
    {
        "code": "002266",
        "name": "浙富控股",
        "pinyin": "zfkg",
        "market": "SZ"
    },
    {
        "code": "002805",
        "name": "丰元股份",
        "pinyin": "fygf",
        "market": "SZ"
    },
    {
        "code": "002935",
        "name": "天奥电子",
        "pinyin": "tadz",
        "market": "SZ"
    },
    {
        "code": "300046",
        "name": "台基股份",
        "pinyin": "tjgf",
        "market": "SZ"
    },
    {
        "code": "300212",
        "name": "易华录",
        "pinyin": "yhl",
        "market": "SZ"
    },
    {
        "code": "300383",
        "name": "光环新网",
        "pinyin": "ghxw",
        "market": "SZ"
    },
    {
        "code": "300419",
        "name": "ST浩丰",
        "pinyin": "sthf",
        "market": "SZ"
    },
    {
        "code": "300481",
        "name": "濮阳惠成",
        "pinyin": "pyhc",
        "market": "SZ"
    },
    {
        "code": "300639",
        "name": "凯普生物",
        "pinyin": "kpsw",
        "market": "SZ"
    },
    {
        "code": "300730",
        "name": "科创信息",
        "pinyin": "kcxx",
        "market": "SZ"
    },
    {
        "code": "600048",
        "name": "保利发展",
        "pinyin": "blfz",
        "market": "SH"
    },
    {
        "code": "600129",
        "name": "太极集团",
        "pinyin": "tjjt",
        "market": "SH"
    },
    {
        "code": "600882",
        "name": "妙可蓝多",
        "pinyin": "mkld",
        "market": "SH"
    },
    {
        "code": "601699",
        "name": "潞安环能",
        "pinyin": "lahn",
        "market": "SH"
    },
    {
        "code": "603001",
        "name": "奥康国际",
        "pinyin": "akgj",
        "market": "SH"
    },
    {
        "code": "603660",
        "name": "苏州科达",
        "pinyin": "szkd",
        "market": "SH"
    },
    {
        "code": "603696",
        "name": "安记食品",
        "pinyin": "ajsp",
        "market": "SH"
    },
    {
        "code": "603823",
        "name": "百合花",
        "pinyin": "bhh",
        "market": "SH"
    },
    {
        "code": "000333",
        "name": "美的集团",
        "pinyin": "mdjt",
        "market": "SZ"
    },
    {
        "code": "000407",
        "name": "胜利股份",
        "pinyin": "slgf",
        "market": "SZ"
    },
    {
        "code": "000905",
        "name": "厦门港务",
        "pinyin": "smgw",
        "market": "SZ"
    },
    {
        "code": "000949",
        "name": "新乡化纤",
        "pinyin": "xxhx",
        "market": "SZ"
    },
    {
        "code": "002044",
        "name": "美年健康",
        "pinyin": "mnjk",
        "market": "SZ"
    },
    {
        "code": "002065",
        "name": "东华软件",
        "pinyin": "dhrj",
        "market": "SZ"
    },
    {
        "code": "002152",
        "name": "广电运通",
        "pinyin": "gdyt",
        "market": "SZ"
    },
    {
        "code": "002373",
        "name": "千方科技",
        "pinyin": "qfkj",
        "market": "SZ"
    },
    {
        "code": "002649",
        "name": "博彦科技",
        "pinyin": "bykj",
        "market": "SZ"
    },
    {
        "code": "002706",
        "name": "良信股份",
        "pinyin": "lxgf",
        "market": "SZ"
    },
    {
        "code": "002908",
        "name": "德生科技",
        "pinyin": "dskj",
        "market": "SZ"
    },
    {
        "code": "300271",
        "name": "华宇软件",
        "pinyin": "hyrj",
        "market": "SZ"
    },
    {
        "code": "300430",
        "name": "诚益通",
        "pinyin": "cyt",
        "market": "SZ"
    },
    {
        "code": "300462",
        "name": "ST华铭",
        "pinyin": "sthm",
        "market": "SZ"
    },
    {
        "code": "300554",
        "name": "三超新材",
        "pinyin": "scxc",
        "market": "SZ"
    },
    {
        "code": "300713",
        "name": "英可瑞",
        "pinyin": "ykr",
        "market": "SZ"
    },
    {
        "code": "300789",
        "name": "唐源电气",
        "pinyin": "tydq",
        "market": "SZ"
    },
    {
        "code": "300933",
        "name": "中辰股份",
        "pinyin": "zcgf",
        "market": "SZ"
    },
    {
        "code": "600281",
        "name": "华阳新材",
        "pinyin": "hyxc",
        "market": "SH"
    },
    {
        "code": "600312",
        "name": "平高电气",
        "pinyin": "pgdq",
        "market": "SH"
    },
    {
        "code": "600678",
        "name": "四川金顶",
        "pinyin": "scjd",
        "market": "SH"
    },
    {
        "code": "600707",
        "name": "彩虹股份",
        "pinyin": "chgf",
        "market": "SH"
    },
    {
        "code": "600835",
        "name": "上海机电",
        "pinyin": "shjd",
        "market": "SH"
    },
    {
        "code": "600859",
        "name": "王府井",
        "pinyin": "wfj",
        "market": "SH"
    },
    {
        "code": "600884",
        "name": "杉杉股份",
        "pinyin": "ssgf",
        "market": "SH"
    },
    {
        "code": "600927",
        "name": "永安期货",
        "pinyin": "yaqh",
        "market": "SH"
    },
    {
        "code": "603037",
        "name": "凯众股份",
        "pinyin": "kzgf",
        "market": "SH"
    },
    {
        "code": "603267",
        "name": "鸿远电子",
        "pinyin": "hydz",
        "market": "SH"
    },
    {
        "code": "001338",
        "name": "永顺泰",
        "pinyin": "yst",
        "market": "SZ"
    },
    {
        "code": "002001",
        "name": "新 和 成",
        "pinyin": "x h c",
        "market": "SZ"
    },
    {
        "code": "002401",
        "name": "中远海科",
        "pinyin": "zyhk",
        "market": "SZ"
    },
    {
        "code": "002585",
        "name": "双星新材",
        "pinyin": "sxxc",
        "market": "SZ"
    },
    {
        "code": "002729",
        "name": "好利科技",
        "pinyin": "hlkj",
        "market": "SZ"
    },
    {
        "code": "002815",
        "name": "崇达技术",
        "pinyin": "cdjs",
        "market": "SZ"
    },
    {
        "code": "002953",
        "name": "日丰股份",
        "pinyin": "rfgf",
        "market": "SZ"
    },
    {
        "code": "300008",
        "name": "天海防务",
        "pinyin": "thfw",
        "market": "SZ"
    },
    {
        "code": "300151",
        "name": "昌红科技",
        "pinyin": "chkj",
        "market": "SZ"
    },
    {
        "code": "300203",
        "name": "聚光科技",
        "pinyin": "jgkj",
        "market": "SZ"
    },
    {
        "code": "300318",
        "name": "博晖创新",
        "pinyin": "bhcx",
        "market": "SZ"
    },
    {
        "code": "300798",
        "name": "锦鸡股份",
        "pinyin": "jjgf",
        "market": "SZ"
    },
    {
        "code": "301603",
        "name": "乔锋智能",
        "pinyin": "qfzn",
        "market": "SZ"
    },
    {
        "code": "600251",
        "name": "冠农股份",
        "pinyin": "gngf",
        "market": "SH"
    },
    {
        "code": "600255",
        "name": "鑫科材料",
        "pinyin": "xkcl",
        "market": "SH"
    },
    {
        "code": "600399",
        "name": "抚顺特钢",
        "pinyin": "fstg",
        "market": "SH"
    },
    {
        "code": "600990",
        "name": "四创电子",
        "pinyin": "scdz",
        "market": "SH"
    },
    {
        "code": "601609",
        "name": "金田股份",
        "pinyin": "jtgf",
        "market": "SH"
    },
    {
        "code": "601611",
        "name": "中国核建",
        "pinyin": "zghj",
        "market": "SH"
    },
    {
        "code": "601688",
        "name": "华泰证券",
        "pinyin": "htzq",
        "market": "SH"
    },
    {
        "code": "601900",
        "name": "南方传媒",
        "pinyin": "nfcm",
        "market": "SH"
    },
    {
        "code": "603939",
        "name": "益丰药房",
        "pinyin": "yfyf",
        "market": "SH"
    },
    {
        "code": "603978",
        "name": "深圳新星",
        "pinyin": "szxx",
        "market": "SH"
    },
    {
        "code": "000409",
        "name": "云鼎科技",
        "pinyin": "ydkj",
        "market": "SZ"
    },
    {
        "code": "000895",
        "name": "双汇发展",
        "pinyin": "shfz",
        "market": "SZ"
    },
    {
        "code": "001208",
        "name": "华菱线缆",
        "pinyin": "hlxl",
        "market": "SZ"
    },
    {
        "code": "002030",
        "name": "达安基因",
        "pinyin": "dajy",
        "market": "SZ"
    },
    {
        "code": "002036",
        "name": "联创电子",
        "pinyin": "lcdz",
        "market": "SZ"
    },
    {
        "code": "002294",
        "name": "信立泰",
        "pinyin": "xlt",
        "market": "SZ"
    },
    {
        "code": "002506",
        "name": "协鑫集成",
        "pinyin": "xxjc",
        "market": "SZ"
    },
    {
        "code": "002554",
        "name": "惠博普",
        "pinyin": "hbp",
        "market": "SZ"
    },
    {
        "code": "002721",
        "name": "金一文化",
        "pinyin": "jywh",
        "market": "SZ"
    },
    {
        "code": "002747",
        "name": "埃斯顿",
        "pinyin": "asd",
        "market": "SZ"
    },
    {
        "code": "002848",
        "name": "*ST高斯",
        "pinyin": "*stgs",
        "market": "SZ"
    },
    {
        "code": "300005",
        "name": "探路者",
        "pinyin": "tlz",
        "market": "SZ"
    },
    {
        "code": "300162",
        "name": "雷曼光电",
        "pinyin": "lmgd",
        "market": "SZ"
    },
    {
        "code": "300996",
        "name": "普联软件",
        "pinyin": "plrj",
        "market": "SZ"
    },
    {
        "code": "301029",
        "name": "怡合达",
        "pinyin": "yhd",
        "market": "SZ"
    },
    {
        "code": "301091",
        "name": "深城交",
        "pinyin": "scj",
        "market": "SZ"
    },
    {
        "code": "301149",
        "name": "隆华新材",
        "pinyin": "lhxc",
        "market": "SZ"
    },
    {
        "code": "600071",
        "name": "凤凰光学",
        "pinyin": "fhgx",
        "market": "SH"
    },
    {
        "code": "600446",
        "name": "金证股份",
        "pinyin": "jzgf",
        "market": "SH"
    },
    {
        "code": "603400",
        "name": "华之杰",
        "pinyin": "hzj",
        "market": "SH"
    },
    {
        "code": "000625",
        "name": "长安汽车",
        "pinyin": "caqc",
        "market": "SZ"
    },
    {
        "code": "000633",
        "name": "合金投资",
        "pinyin": "hjtz",
        "market": "SZ"
    },
    {
        "code": "000987",
        "name": "越秀资本",
        "pinyin": "yxzb",
        "market": "SZ"
    },
    {
        "code": "002212",
        "name": "天融信",
        "pinyin": "trx",
        "market": "SZ"
    },
    {
        "code": "002369",
        "name": "卓翼科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "002590",
        "name": "万安科技",
        "pinyin": "wakj",
        "market": "SZ"
    },
    {
        "code": "300096",
        "name": "ST易联众",
        "pinyin": "stylz",
        "market": "SZ"
    },
    {
        "code": "300142",
        "name": "沃森生物",
        "pinyin": "wssw",
        "market": "SZ"
    },
    {
        "code": "300258",
        "name": "精锻科技",
        "pinyin": "jdkj",
        "market": "SZ"
    },
    {
        "code": "300295",
        "name": "三六五网",
        "pinyin": "slww",
        "market": "SZ"
    },
    {
        "code": "300423",
        "name": "昇辉科技",
        "pinyin": "shkj",
        "market": "SZ"
    },
    {
        "code": "300429",
        "name": "强力新材",
        "pinyin": "qlxc",
        "market": "SZ"
    },
    {
        "code": "300862",
        "name": "蓝盾光电",
        "pinyin": "ldgd",
        "market": "SZ"
    },
    {
        "code": "301042",
        "name": "安联锐视",
        "pinyin": "alrs",
        "market": "SZ"
    },
    {
        "code": "600187",
        "name": "国中水务",
        "pinyin": "gzsw",
        "market": "SH"
    },
    {
        "code": "600326",
        "name": "西藏天路",
        "pinyin": "xctl",
        "market": "SH"
    },
    {
        "code": "600516",
        "name": "方大炭素",
        "pinyin": "fdts",
        "market": "SH"
    },
    {
        "code": "600639",
        "name": "浦东金桥",
        "pinyin": "pdjq",
        "market": "SH"
    },
    {
        "code": "600817",
        "name": "宇通重工",
        "pinyin": "ytzg",
        "market": "SH"
    },
    {
        "code": "601608",
        "name": "中信重工",
        "pinyin": "zxzg",
        "market": "SH"
    },
    {
        "code": "601890",
        "name": "亚星锚链",
        "pinyin": "yxml",
        "market": "SH"
    },
    {
        "code": "601965",
        "name": "中国汽研",
        "pinyin": "zgqy",
        "market": "SH"
    },
    {
        "code": "603026",
        "name": "石大胜华",
        "pinyin": "sdsh",
        "market": "SH"
    },
    {
        "code": "603327",
        "name": "福蓉科技",
        "pinyin": "frkj",
        "market": "SH"
    },
    {
        "code": "000002",
        "name": "万  科A",
        "pinyin": "w  ka",
        "market": "SZ"
    },
    {
        "code": "000532",
        "name": "华金资本",
        "pinyin": "hjzb",
        "market": "SZ"
    },
    {
        "code": "000550",
        "name": "江铃汽车",
        "pinyin": "jlqc",
        "market": "SZ"
    },
    {
        "code": "000670",
        "name": "盈方微",
        "pinyin": "yfw",
        "market": "SZ"
    },
    {
        "code": "000881",
        "name": "中广核技",
        "pinyin": "zghj",
        "market": "SZ"
    },
    {
        "code": "000892",
        "name": "欢瑞世纪",
        "pinyin": "hrsj",
        "market": "SZ"
    },
    {
        "code": "000908",
        "name": "*ST景峰",
        "pinyin": "*stjf",
        "market": "SZ"
    },
    {
        "code": "002040",
        "name": "南 京 港",
        "pinyin": "n j g",
        "market": "SZ"
    },
    {
        "code": "002131",
        "name": "利欧股份",
        "pinyin": "logf",
        "market": "SZ"
    },
    {
        "code": "002189",
        "name": "中光学",
        "pinyin": "zgx",
        "market": "SZ"
    },
    {
        "code": "002416",
        "name": "爱施德",
        "pinyin": "asd",
        "market": "SZ"
    },
    {
        "code": "002501",
        "name": "利源股份",
        "pinyin": "lygf",
        "market": "SZ"
    },
    {
        "code": "002519",
        "name": "银河电子",
        "pinyin": "yhdz",
        "market": "SZ"
    },
    {
        "code": "002600",
        "name": "领益智造",
        "pinyin": "lyzz",
        "market": "SZ"
    },
    {
        "code": "002736",
        "name": "国信证券",
        "pinyin": "gxzq",
        "market": "SZ"
    },
    {
        "code": "300051",
        "name": "琏升科技",
        "pinyin": "lskj",
        "market": "SZ"
    },
    {
        "code": "300068",
        "name": "南都电源",
        "pinyin": "nddy",
        "market": "SZ"
    },
    {
        "code": "300149",
        "name": "睿智医药",
        "pinyin": "rzyy",
        "market": "SZ"
    },
    {
        "code": "300386",
        "name": "飞天诚信",
        "pinyin": "ftcx",
        "market": "SZ"
    },
    {
        "code": "300501",
        "name": "海顺新材",
        "pinyin": "hsxc",
        "market": "SZ"
    },
    {
        "code": "301213",
        "name": "观想科技",
        "pinyin": "gxkj",
        "market": "SZ"
    },
    {
        "code": "301230",
        "name": "泓博医药",
        "pinyin": "hbyy",
        "market": "SZ"
    },
    {
        "code": "600352",
        "name": "浙江龙盛",
        "pinyin": "zjls",
        "market": "SH"
    },
    {
        "code": "600523",
        "name": "贵航股份",
        "pinyin": "ghgf",
        "market": "SH"
    },
    {
        "code": "600886",
        "name": "国投电力",
        "pinyin": "gtdl",
        "market": "SH"
    },
    {
        "code": "603123",
        "name": "翠微股份",
        "pinyin": "cwgf",
        "market": "SH"
    },
    {
        "code": "603233",
        "name": "大参林",
        "pinyin": "dcl",
        "market": "SH"
    },
    {
        "code": "000533",
        "name": "顺钠股份",
        "pinyin": "sngf",
        "market": "SZ"
    },
    {
        "code": "002006",
        "name": "精工科技",
        "pinyin": "jgkj",
        "market": "SZ"
    },
    {
        "code": "002243",
        "name": "力合科创",
        "pinyin": "lhkc",
        "market": "SZ"
    },
    {
        "code": "002273",
        "name": "水晶光电",
        "pinyin": "sjgd",
        "market": "SZ"
    },
    {
        "code": "002354",
        "name": "天娱数科",
        "pinyin": "tysk",
        "market": "SZ"
    },
    {
        "code": "002413",
        "name": "雷科防务",
        "pinyin": "lkfw",
        "market": "SZ"
    },
    {
        "code": "002572",
        "name": "索菲亚",
        "pinyin": "sfy",
        "market": "SZ"
    },
    {
        "code": "002584",
        "name": "西陇科学",
        "pinyin": "xlkx",
        "market": "SZ"
    },
    {
        "code": "002635",
        "name": "安洁科技",
        "pinyin": "ajkj",
        "market": "SZ"
    },
    {
        "code": "002703",
        "name": "浙江世宝",
        "pinyin": "zjsb",
        "market": "SZ"
    },
    {
        "code": "002816",
        "name": "*ST和科",
        "pinyin": "*sthk",
        "market": "SZ"
    },
    {
        "code": "300017",
        "name": "网宿科技",
        "pinyin": "wskj",
        "market": "SZ"
    },
    {
        "code": "300057",
        "name": "万顺新材",
        "pinyin": "wsxc",
        "market": "SZ"
    },
    {
        "code": "300285",
        "name": "国瓷材料",
        "pinyin": "gccl",
        "market": "SZ"
    },
    {
        "code": "300690",
        "name": "双一科技",
        "pinyin": "sykj",
        "market": "SZ"
    },
    {
        "code": "300922",
        "name": "天秦装备",
        "pinyin": "tqzb",
        "market": "SZ"
    },
    {
        "code": "301055",
        "name": "张小泉",
        "pinyin": "zxq",
        "market": "SZ"
    },
    {
        "code": "301103",
        "name": "何氏眼科",
        "pinyin": "hsyk",
        "market": "SZ"
    },
    {
        "code": "301609",
        "name": "山大电力",
        "pinyin": "sddl",
        "market": "SZ"
    },
    {
        "code": "600100",
        "name": "同方股份",
        "pinyin": "tfgf",
        "market": "SH"
    },
    {
        "code": "600246",
        "name": "万通发展",
        "pinyin": "wtfz",
        "market": "SH"
    },
    {
        "code": "600361",
        "name": "创新新材",
        "pinyin": "cxxc",
        "market": "SH"
    },
    {
        "code": "600543",
        "name": "莫高股份",
        "pinyin": "mggf",
        "market": "SH"
    },
    {
        "code": "600759",
        "name": "洲际油气",
        "pinyin": "zjyq",
        "market": "SH"
    },
    {
        "code": "601136",
        "name": "首创证券",
        "pinyin": "sczq",
        "market": "SH"
    },
    {
        "code": "601881",
        "name": "中国银河",
        "pinyin": "zgyh",
        "market": "SH"
    },
    {
        "code": "603131",
        "name": "上海沪工",
        "pinyin": "shhg",
        "market": "SH"
    },
    {
        "code": "000676",
        "name": "智度股份",
        "pinyin": "zdgf",
        "market": "SZ"
    },
    {
        "code": "000921",
        "name": "海信家电",
        "pinyin": "hxjd",
        "market": "SZ"
    },
    {
        "code": "002374",
        "name": "中锐股份",
        "pinyin": "zrgf",
        "market": "SZ"
    },
    {
        "code": "300143",
        "name": "盈康生命",
        "pinyin": "yksm",
        "market": "SZ"
    },
    {
        "code": "300171",
        "name": "东富龙",
        "pinyin": "dfl",
        "market": "SZ"
    },
    {
        "code": "300207",
        "name": "欣旺达",
        "pinyin": "xwd",
        "market": "SZ"
    },
    {
        "code": "300263",
        "name": "隆华科技",
        "pinyin": "lhkj",
        "market": "SZ"
    },
    {
        "code": "300287",
        "name": "飞利信",
        "pinyin": "flx",
        "market": "SZ"
    },
    {
        "code": "300551",
        "name": "古鳌科技",
        "pinyin": "gakj",
        "market": "SZ"
    },
    {
        "code": "300601",
        "name": "康泰生物",
        "pinyin": "ktsw",
        "market": "SZ"
    },
    {
        "code": "300887",
        "name": "谱尼测试",
        "pinyin": "pncs",
        "market": "SZ"
    },
    {
        "code": "300950",
        "name": "德固特",
        "pinyin": "dgt",
        "market": "SZ"
    },
    {
        "code": "301176",
        "name": "逸豪新材",
        "pinyin": "yhxc",
        "market": "SZ"
    },
    {
        "code": "600104",
        "name": "上汽集团",
        "pinyin": "sqjt",
        "market": "SH"
    },
    {
        "code": "600377",
        "name": "宁沪高速",
        "pinyin": "nhgs",
        "market": "SH"
    },
    {
        "code": "600482",
        "name": "中国动力",
        "pinyin": "zgdl",
        "market": "SH"
    },
    {
        "code": "600550",
        "name": "保变电气",
        "pinyin": "bbdq",
        "market": "SH"
    },
    {
        "code": "600876",
        "name": "凯盛新能",
        "pinyin": "ksxn",
        "market": "SH"
    },
    {
        "code": "601717",
        "name": "中创智领",
        "pinyin": "zczl",
        "market": "SH"
    },
    {
        "code": "601811",
        "name": "新华文轩",
        "pinyin": "xhwx",
        "market": "SH"
    },
    {
        "code": "603279",
        "name": "景津装备",
        "pinyin": "jjzb",
        "market": "SH"
    },
    {
        "code": "603305",
        "name": "旭升集团",
        "pinyin": "xsjt",
        "market": "SH"
    },
    {
        "code": "603488",
        "name": "展鹏科技",
        "pinyin": "zpkj",
        "market": "SH"
    },
    {
        "code": "000410",
        "name": "沈阳机床",
        "pinyin": "syjc",
        "market": "SZ"
    },
    {
        "code": "000503",
        "name": "国新健康",
        "pinyin": "gxjk",
        "market": "SZ"
    },
    {
        "code": "000592",
        "name": "平潭发展",
        "pinyin": "ptfz",
        "market": "SZ"
    },
    {
        "code": "000683",
        "name": "博源化工",
        "pinyin": "byhg",
        "market": "SZ"
    },
    {
        "code": "000826",
        "name": "启迪环境",
        "pinyin": "qdhj",
        "market": "SZ"
    },
    {
        "code": "000922",
        "name": "佳电股份",
        "pinyin": "jdgf",
        "market": "SZ"
    },
    {
        "code": "002194",
        "name": "武汉凡谷",
        "pinyin": "whfg",
        "market": "SZ"
    },
    {
        "code": "002548",
        "name": "金新农",
        "pinyin": "jxn",
        "market": "SZ"
    },
    {
        "code": "002637",
        "name": "赞宇科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "002950",
        "name": "奥美医疗",
        "pinyin": "amyl",
        "market": "SZ"
    },
    {
        "code": "300092",
        "name": "科新机电",
        "pinyin": "kxjd",
        "market": "SZ"
    },
    {
        "code": "300272",
        "name": "开能健康",
        "pinyin": "knjk",
        "market": "SZ"
    },
    {
        "code": "300410",
        "name": "正业科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "300435",
        "name": "中泰股份",
        "pinyin": "ztgf",
        "market": "SZ"
    },
    {
        "code": "300466",
        "name": "赛摩智能",
        "pinyin": "smzn",
        "market": "SZ"
    },
    {
        "code": "300600",
        "name": "国瑞科技",
        "pinyin": "grkj",
        "market": "SZ"
    },
    {
        "code": "300885",
        "name": "海昌新材",
        "pinyin": "hcxc",
        "market": "SZ"
    },
    {
        "code": "301267",
        "name": "华厦眼科",
        "pinyin": "hsyk",
        "market": "SZ"
    },
    {
        "code": "301279",
        "name": "金道科技",
        "pinyin": "jdkj",
        "market": "SZ"
    },
    {
        "code": "600243",
        "name": "*ST海华",
        "pinyin": "*sthh",
        "market": "SH"
    },
    {
        "code": "600605",
        "name": "汇通能源",
        "pinyin": "htny",
        "market": "SH"
    },
    {
        "code": "600967",
        "name": "内蒙一机",
        "pinyin": "nmyj",
        "market": "SH"
    },
    {
        "code": "603226",
        "name": "菲林格尔",
        "pinyin": "flge",
        "market": "SH"
    },
    {
        "code": "603719",
        "name": "良品铺子",
        "pinyin": "lppz",
        "market": "SH"
    },
    {
        "code": "603897",
        "name": "长城科技",
        "pinyin": "cckj",
        "market": "SH"
    },
    {
        "code": "603906",
        "name": "龙蟠科技",
        "pinyin": "lpkj",
        "market": "SH"
    },
    {
        "code": "603977",
        "name": "国泰集团",
        "pinyin": "gtjt",
        "market": "SH"
    },
    {
        "code": "000011",
        "name": "深物业A",
        "pinyin": "swya",
        "market": "SZ"
    },
    {
        "code": "000712",
        "name": "锦龙股份",
        "pinyin": "jlgf",
        "market": "SZ"
    },
    {
        "code": "000825",
        "name": "太钢不锈",
        "pinyin": "tgbx",
        "market": "SZ"
    },
    {
        "code": "000887",
        "name": "中鼎股份",
        "pinyin": "zdgf",
        "market": "SZ"
    },
    {
        "code": "000948",
        "name": "南天信息",
        "pinyin": "ntxx",
        "market": "SZ"
    },
    {
        "code": "001221",
        "name": "悍高集团",
        "pinyin": "hgjt",
        "market": "SZ"
    },
    {
        "code": "002221",
        "name": "东华能源",
        "pinyin": "dhny",
        "market": "SZ"
    },
    {
        "code": "002414",
        "name": "高德红外",
        "pinyin": "gdhw",
        "market": "SZ"
    },
    {
        "code": "002456",
        "name": "欧菲光",
        "pinyin": "ofg",
        "market": "SZ"
    },
    {
        "code": "300236",
        "name": "上海新阳",
        "pinyin": "shxy",
        "market": "SZ"
    },
    {
        "code": "300451",
        "name": "创业慧康",
        "pinyin": "cyhk",
        "market": "SZ"
    },
    {
        "code": "300589",
        "name": "江龙船艇",
        "pinyin": "jlct",
        "market": "SZ"
    },
    {
        "code": "300869",
        "name": "康泰医学",
        "pinyin": "ktyx",
        "market": "SZ"
    },
    {
        "code": "301078",
        "name": "孩子王",
        "pinyin": "hzw",
        "market": "SZ"
    },
    {
        "code": "301135",
        "name": "瑞德智能",
        "pinyin": "rdzn",
        "market": "SZ"
    },
    {
        "code": "301256",
        "name": "华融化学",
        "pinyin": "hrhx",
        "market": "SZ"
    },
    {
        "code": "301349",
        "name": "信德新材",
        "pinyin": "xdxc",
        "market": "SZ"
    },
    {
        "code": "600332",
        "name": "白云山",
        "pinyin": "bys",
        "market": "SH"
    },
    {
        "code": "600333",
        "name": "长春燃气",
        "pinyin": "ccrq",
        "market": "SH"
    },
    {
        "code": "600350",
        "name": "山东高速",
        "pinyin": "sdgs",
        "market": "SH"
    },
    {
        "code": "600728",
        "name": "佳都科技",
        "pinyin": "jdkj",
        "market": "SH"
    },
    {
        "code": "600848",
        "name": "上海临港",
        "pinyin": "shlg",
        "market": "SH"
    },
    {
        "code": "600993",
        "name": "马应龙",
        "pinyin": "myl",
        "market": "SH"
    },
    {
        "code": "601696",
        "name": "中银证券",
        "pinyin": "zyzq",
        "market": "SH"
    },
    {
        "code": "601878",
        "name": "浙商证券",
        "pinyin": "zszq",
        "market": "SH"
    },
    {
        "code": "603355",
        "name": "莱克电气",
        "pinyin": "lkdq",
        "market": "SH"
    },
    {
        "code": "603588",
        "name": "高能环境",
        "pinyin": "gnhj",
        "market": "SH"
    },
    {
        "code": "603995",
        "name": "甬金股份",
        "pinyin": "yjgf",
        "market": "SH"
    },
    {
        "code": "605186",
        "name": "健麾信息",
        "pinyin": "jhxx",
        "market": "SH"
    },
    {
        "code": "605368",
        "name": "蓝天燃气",
        "pinyin": "ltrq",
        "market": "SH"
    },
    {
        "code": "000617",
        "name": "中油资本",
        "pinyin": "zyzb",
        "market": "SZ"
    },
    {
        "code": "000837",
        "name": "秦川机床",
        "pinyin": "qcjc",
        "market": "SZ"
    },
    {
        "code": "000925",
        "name": "众合科技",
        "pinyin": "zhkj",
        "market": "SZ"
    },
    {
        "code": "002075",
        "name": "沙钢股份",
        "pinyin": "sggf",
        "market": "SZ"
    },
    {
        "code": "002083",
        "name": "孚日股份",
        "pinyin": "frgf",
        "market": "SZ"
    },
    {
        "code": "002093",
        "name": "国脉科技",
        "pinyin": "gmkj",
        "market": "SZ"
    },
    {
        "code": "002245",
        "name": "蔚蓝锂芯",
        "pinyin": "wllx",
        "market": "SZ"
    },
    {
        "code": "002389",
        "name": "航天彩虹",
        "pinyin": "htch",
        "market": "SZ"
    },
    {
        "code": "002453",
        "name": "华软科技",
        "pinyin": "hrkj",
        "market": "SZ"
    },
    {
        "code": "002475",
        "name": "立讯精密",
        "pinyin": "lxjm",
        "market": "SZ"
    },
    {
        "code": "002537",
        "name": "海联金汇",
        "pinyin": "hljh",
        "market": "SZ"
    },
    {
        "code": "002575",
        "name": "群兴玩具",
        "pinyin": "qxwj",
        "market": "SZ"
    },
    {
        "code": "002688",
        "name": "金河生物",
        "pinyin": "jhsw",
        "market": "SZ"
    },
    {
        "code": "002745",
        "name": "木林森",
        "pinyin": "mls",
        "market": "SZ"
    },
    {
        "code": "002777",
        "name": "久远银海",
        "pinyin": "jyyh",
        "market": "SZ"
    },
    {
        "code": "003007",
        "name": "直真科技",
        "pinyin": "zzkj",
        "market": "SZ"
    },
    {
        "code": "300029",
        "name": "*ST天龙",
        "pinyin": "*sttl",
        "market": "SZ"
    },
    {
        "code": "300062",
        "name": "中能电气",
        "pinyin": "zndq",
        "market": "SZ"
    },
    {
        "code": "300168",
        "name": "万达信息",
        "pinyin": "wdxx",
        "market": "SZ"
    },
    {
        "code": "300257",
        "name": "开山股份",
        "pinyin": "ksgf",
        "market": "SZ"
    },
    {
        "code": "300294",
        "name": "博雅生物",
        "pinyin": "bysw",
        "market": "SZ"
    },
    {
        "code": "300358",
        "name": "楚天科技",
        "pinyin": "ctkj",
        "market": "SZ"
    },
    {
        "code": "300396",
        "name": "迪瑞医疗",
        "pinyin": "dryl",
        "market": "SZ"
    },
    {
        "code": "301002",
        "name": "崧盛股份",
        "pinyin": "ssgf",
        "market": "SZ"
    },
    {
        "code": "301127",
        "name": "武汉天源",
        "pinyin": "whty",
        "market": "SZ"
    },
    {
        "code": "301228",
        "name": "实朴检测",
        "pinyin": "spjc",
        "market": "SZ"
    },
    {
        "code": "301258",
        "name": "富士莱",
        "pinyin": "fsl",
        "market": "SZ"
    },
    {
        "code": "600031",
        "name": "三一重工",
        "pinyin": "syzg",
        "market": "SH"
    },
    {
        "code": "600076",
        "name": "康欣新材",
        "pinyin": "kxxc",
        "market": "SH"
    },
    {
        "code": "600119",
        "name": "长江投资",
        "pinyin": "cjtz",
        "market": "SH"
    },
    {
        "code": "600208",
        "name": "衢州发展",
        "pinyin": "qzfz",
        "market": "SH"
    },
    {
        "code": "600295",
        "name": "鄂尔多斯",
        "pinyin": "eeds",
        "market": "SH"
    },
    {
        "code": "600686",
        "name": "金龙汽车",
        "pinyin": "jlqc",
        "market": "SH"
    },
    {
        "code": "600699",
        "name": "均胜电子",
        "pinyin": "jsdz",
        "market": "SH"
    },
    {
        "code": "600955",
        "name": "维远股份",
        "pinyin": "wygf",
        "market": "SH"
    },
    {
        "code": "600958",
        "name": "东方证券",
        "pinyin": "dfzq",
        "market": "SH"
    },
    {
        "code": "600987",
        "name": "航民股份",
        "pinyin": "hmgf",
        "market": "SH"
    },
    {
        "code": "601908",
        "name": "京运通",
        "pinyin": "jyt",
        "market": "SH"
    },
    {
        "code": "603779",
        "name": "威龙股份",
        "pinyin": "wlgf",
        "market": "SH"
    },
    {
        "code": "000573",
        "name": "粤宏远A",
        "pinyin": "yhya",
        "market": "SZ"
    },
    {
        "code": "000576",
        "name": "甘化科工",
        "pinyin": "ghkg",
        "market": "SZ"
    },
    {
        "code": "000728",
        "name": "国元证券",
        "pinyin": "gyzq",
        "market": "SZ"
    },
    {
        "code": "001965",
        "name": "招商公路",
        "pinyin": "zsgl",
        "market": "SZ"
    },
    {
        "code": "002016",
        "name": "世荣兆业",
        "pinyin": "srzy",
        "market": "SZ"
    },
    {
        "code": "002108",
        "name": "沧州明珠",
        "pinyin": "czmz",
        "market": "SZ"
    },
    {
        "code": "002148",
        "name": "北纬科技",
        "pinyin": "bwkj",
        "market": "SZ"
    },
    {
        "code": "002186",
        "name": "全 聚 德",
        "pinyin": "q j d",
        "market": "SZ"
    },
    {
        "code": "002197",
        "name": "证通电子",
        "pinyin": "ztdz",
        "market": "SZ"
    },
    {
        "code": "002405",
        "name": "四维图新",
        "pinyin": "swtx",
        "market": "SZ"
    },
    {
        "code": "002517",
        "name": "恺英网络",
        "pinyin": "kywl",
        "market": "SZ"
    },
    {
        "code": "002539",
        "name": "云图控股",
        "pinyin": "ytkg",
        "market": "SZ"
    },
    {
        "code": "002617",
        "name": "露笑科技",
        "pinyin": "lxkj",
        "market": "SZ"
    },
    {
        "code": "002690",
        "name": "美亚光电",
        "pinyin": "mygd",
        "market": "SZ"
    },
    {
        "code": "002918",
        "name": "蒙娜丽莎",
        "pinyin": "mnls",
        "market": "SZ"
    },
    {
        "code": "300080",
        "name": "易成新能",
        "pinyin": "ycxn",
        "market": "SZ"
    },
    {
        "code": "300264",
        "name": "佳创视讯",
        "pinyin": "jcsx",
        "market": "SZ"
    },
    {
        "code": "300324",
        "name": "旋极信息",
        "pinyin": "xjxx",
        "market": "SZ"
    },
    {
        "code": "300350",
        "name": "华鹏飞",
        "pinyin": "hpf",
        "market": "SZ"
    },
    {
        "code": "300351",
        "name": "永贵电器",
        "pinyin": "ygdq",
        "market": "SZ"
    },
    {
        "code": "300461",
        "name": "田中精机",
        "pinyin": "tzjj",
        "market": "SZ"
    },
    {
        "code": "300550",
        "name": "和仁科技",
        "pinyin": "hrkj",
        "market": "SZ"
    },
    {
        "code": "300908",
        "name": "仲景食品",
        "pinyin": "zjsp",
        "market": "SZ"
    },
    {
        "code": "301067",
        "name": "显盈科技",
        "pinyin": "xykj",
        "market": "SZ"
    },
    {
        "code": "600094",
        "name": "大名城",
        "pinyin": "dmc",
        "market": "SH"
    },
    {
        "code": "600109",
        "name": "国金证券",
        "pinyin": "gjzq",
        "market": "SH"
    },
    {
        "code": "600185",
        "name": "珠免集团",
        "pinyin": "zmjt",
        "market": "SH"
    },
    {
        "code": "600215",
        "name": "派斯林",
        "pinyin": "psl",
        "market": "SH"
    },
    {
        "code": "600360",
        "name": "*ST华微",
        "pinyin": "*sthw",
        "market": "SH"
    },
    {
        "code": "600426",
        "name": "华鲁恒升",
        "pinyin": "hlhs",
        "market": "SH"
    },
    {
        "code": "600583",
        "name": "海油工程",
        "pinyin": "hygc",
        "market": "SH"
    },
    {
        "code": "600648",
        "name": "外高桥",
        "pinyin": "wgq",
        "market": "SH"
    },
    {
        "code": "601058",
        "name": "赛轮轮胎",
        "pinyin": "sllt",
        "market": "SH"
    },
    {
        "code": "601096",
        "name": "宏盛华源",
        "pinyin": "hshy",
        "market": "SH"
    },
    {
        "code": "601106",
        "name": "中国一重",
        "pinyin": "zgyz",
        "market": "SH"
    },
    {
        "code": "601166",
        "name": "兴业银行",
        "pinyin": "xyyh",
        "market": "SH"
    },
    {
        "code": "601390",
        "name": "中国中铁",
        "pinyin": "zgzt",
        "market": "SH"
    },
    {
        "code": "601456",
        "name": "国联民生",
        "pinyin": "glms",
        "market": "SH"
    },
    {
        "code": "601636",
        "name": "旗滨集团",
        "pinyin": "qbjt",
        "market": "SH"
    },
    {
        "code": "603297",
        "name": "永新光学",
        "pinyin": "yxgx",
        "market": "SH"
    },
    {
        "code": "603380",
        "name": "易德龙",
        "pinyin": "ydl",
        "market": "SH"
    },
    {
        "code": "603456",
        "name": "九洲药业",
        "pinyin": "jzyy",
        "market": "SH"
    },
    {
        "code": "603533",
        "name": "掌阅科技",
        "pinyin": "zykj",
        "market": "SH"
    },
    {
        "code": "603936",
        "name": "博敏电子",
        "pinyin": "bmdz",
        "market": "SH"
    },
    {
        "code": "000514",
        "name": "渝 开 发",
        "pinyin": "y k f",
        "market": "SZ"
    },
    {
        "code": "000651",
        "name": "格力电器",
        "pinyin": "gldq",
        "market": "SZ"
    },
    {
        "code": "000680",
        "name": "山推股份",
        "pinyin": "stgf",
        "market": "SZ"
    },
    {
        "code": "002396",
        "name": "星网锐捷",
        "pinyin": "xwrj",
        "market": "SZ"
    },
    {
        "code": "002467",
        "name": "二六三",
        "pinyin": "els",
        "market": "SZ"
    },
    {
        "code": "002468",
        "name": "申通快递",
        "pinyin": "stkd",
        "market": "SZ"
    },
    {
        "code": "002524",
        "name": "光正眼科",
        "pinyin": "gzyk",
        "market": "SZ"
    },
    {
        "code": "002757",
        "name": "南兴股份",
        "pinyin": "nxgf",
        "market": "SZ"
    },
    {
        "code": "300012",
        "name": "华测检测",
        "pinyin": "hcjc",
        "market": "SZ"
    },
    {
        "code": "300177",
        "name": "中海达",
        "pinyin": "zhd",
        "market": "SZ"
    },
    {
        "code": "300214",
        "name": "日科化学",
        "pinyin": "rkhx",
        "market": "SZ"
    },
    {
        "code": "300365",
        "name": "恒华科技",
        "pinyin": "hhkj",
        "market": "SZ"
    },
    {
        "code": "300628",
        "name": "亿联网络",
        "pinyin": "ylwl",
        "market": "SZ"
    },
    {
        "code": "300648",
        "name": "星云股份",
        "pinyin": "xygf",
        "market": "SZ"
    },
    {
        "code": "300847",
        "name": "中船汉光",
        "pinyin": "zchg",
        "market": "SZ"
    },
    {
        "code": "300926",
        "name": "博俊科技",
        "pinyin": "bjkj",
        "market": "SZ"
    },
    {
        "code": "300981",
        "name": "中红医疗",
        "pinyin": "zhyl",
        "market": "SZ"
    },
    {
        "code": "301075",
        "name": "多瑞医药",
        "pinyin": "dryy",
        "market": "SZ"
    },
    {
        "code": "600062",
        "name": "华润双鹤",
        "pinyin": "hrsh",
        "market": "SH"
    },
    {
        "code": "600075",
        "name": "新疆天业",
        "pinyin": "xjty",
        "market": "SH"
    },
    {
        "code": "600266",
        "name": "城建发展",
        "pinyin": "cjfz",
        "market": "SH"
    },
    {
        "code": "600337",
        "name": "美克家居",
        "pinyin": "mkjj",
        "market": "SH"
    },
    {
        "code": "600381",
        "name": "*ST春天",
        "pinyin": "*stct",
        "market": "SH"
    },
    {
        "code": "600511",
        "name": "国药股份",
        "pinyin": "gygf",
        "market": "SH"
    },
    {
        "code": "600789",
        "name": "鲁抗医药",
        "pinyin": "lkyy",
        "market": "SH"
    },
    {
        "code": "600790",
        "name": "轻纺城",
        "pinyin": "qfc",
        "market": "SH"
    },
    {
        "code": "600800",
        "name": "渤海化学",
        "pinyin": "bhhx",
        "market": "SH"
    },
    {
        "code": "601882",
        "name": "海天精工",
        "pinyin": "htjg",
        "market": "SH"
    },
    {
        "code": "601886",
        "name": "江河集团",
        "pinyin": "jhjt",
        "market": "SH"
    },
    {
        "code": "603063",
        "name": "禾望电气",
        "pinyin": "hwdq",
        "market": "SH"
    },
    {
        "code": "603168",
        "name": "莎普爱思",
        "pinyin": "spas",
        "market": "SH"
    },
    {
        "code": "603367",
        "name": "辰欣药业",
        "pinyin": "cxyy",
        "market": "SH"
    },
    {
        "code": "603559",
        "name": "ST通脉",
        "pinyin": "sttm",
        "market": "SH"
    },
    {
        "code": "603628",
        "name": "清源股份",
        "pinyin": "qygf",
        "market": "SH"
    },
    {
        "code": "603707",
        "name": "健友股份",
        "pinyin": "jygf",
        "market": "SH"
    },
    {
        "code": "603711",
        "name": "香飘飘",
        "pinyin": "xpp",
        "market": "SH"
    },
    {
        "code": "605378",
        "name": "野马电池",
        "pinyin": "ymdc",
        "market": "SH"
    },
    {
        "code": "000403",
        "name": "派林生物",
        "pinyin": "plsw",
        "market": "SZ"
    },
    {
        "code": "000591",
        "name": "太阳能",
        "pinyin": "tyn",
        "market": "SZ"
    },
    {
        "code": "002019",
        "name": "亿帆医药",
        "pinyin": "yfyy",
        "market": "SZ"
    },
    {
        "code": "002054",
        "name": "德美化工",
        "pinyin": "dmhg",
        "market": "SZ"
    },
    {
        "code": "002177",
        "name": "御银股份",
        "pinyin": "yygf",
        "market": "SZ"
    },
    {
        "code": "002179",
        "name": "中航光电",
        "pinyin": "zhgd",
        "market": "SZ"
    },
    {
        "code": "002200",
        "name": "*ST交投",
        "pinyin": "*stjt",
        "market": "SZ"
    },
    {
        "code": "002403",
        "name": "爱仕达",
        "pinyin": "asd",
        "market": "SZ"
    },
    {
        "code": "002448",
        "name": "中原内配",
        "pinyin": "zynp",
        "market": "SZ"
    },
    {
        "code": "002535",
        "name": "林州重机",
        "pinyin": "lzzj",
        "market": "SZ"
    },
    {
        "code": "002659",
        "name": "凯文教育",
        "pinyin": "kwjy",
        "market": "SZ"
    },
    {
        "code": "002939",
        "name": "长城证券",
        "pinyin": "cczq",
        "market": "SZ"
    },
    {
        "code": "002955",
        "name": "鸿合科技",
        "pinyin": "hhkj",
        "market": "SZ"
    },
    {
        "code": "300009",
        "name": "安科生物",
        "pinyin": "aksw",
        "market": "SZ"
    },
    {
        "code": "300081",
        "name": "恒信东方",
        "pinyin": "hxdf",
        "market": "SZ"
    },
    {
        "code": "300095",
        "name": "华伍股份",
        "pinyin": "hwgf",
        "market": "SZ"
    },
    {
        "code": "300181",
        "name": "佐力药业",
        "pinyin": "zlyy",
        "market": "SZ"
    },
    {
        "code": "300384",
        "name": "三联虹普",
        "pinyin": "slhp",
        "market": "SZ"
    },
    {
        "code": "300505",
        "name": "川金诺",
        "pinyin": "cjn",
        "market": "SZ"
    },
    {
        "code": "300825",
        "name": "阿尔特",
        "pinyin": "aet",
        "market": "SZ"
    },
    {
        "code": "301060",
        "name": "兰卫医学",
        "pinyin": "lwyx",
        "market": "SZ"
    },
    {
        "code": "301301",
        "name": "川宁生物",
        "pinyin": "cnsw",
        "market": "SZ"
    },
    {
        "code": "600010",
        "name": "包钢股份",
        "pinyin": "bggf",
        "market": "SH"
    },
    {
        "code": "600056",
        "name": "中国医药",
        "pinyin": "zgyy",
        "market": "SH"
    },
    {
        "code": "600110",
        "name": "诺德股份",
        "pinyin": "ndgf",
        "market": "SH"
    },
    {
        "code": "600271",
        "name": "航天信息",
        "pinyin": "htxx",
        "market": "SH"
    },
    {
        "code": "600293",
        "name": "三峡新材",
        "pinyin": "sxxc",
        "market": "SH"
    },
    {
        "code": "600478",
        "name": "科力远",
        "pinyin": "kly",
        "market": "SH"
    },
    {
        "code": "600529",
        "name": "山东药玻",
        "pinyin": "sdyb",
        "market": "SH"
    },
    {
        "code": "600808",
        "name": "马钢股份",
        "pinyin": "mggf",
        "market": "SH"
    },
    {
        "code": "600819",
        "name": "耀皮玻璃",
        "pinyin": "ypbl",
        "market": "SH"
    },
    {
        "code": "601155",
        "name": "新城控股",
        "pinyin": "xckg",
        "market": "SH"
    },
    {
        "code": "601700",
        "name": "风范股份",
        "pinyin": "ffgf",
        "market": "SH"
    },
    {
        "code": "603025",
        "name": "大豪科技",
        "pinyin": "dhkj",
        "market": "SH"
    },
    {
        "code": "603210",
        "name": "泰鸿万立",
        "pinyin": "thwl",
        "market": "SH"
    },
    {
        "code": "603969",
        "name": "银龙股份",
        "pinyin": "ylgf",
        "market": "SH"
    },
    {
        "code": "605555",
        "name": "德昌股份",
        "pinyin": "dcgf",
        "market": "SH"
    },
    {
        "code": "000014",
        "name": "沙河股份",
        "pinyin": "shgf",
        "market": "SZ"
    },
    {
        "code": "000036",
        "name": "华联控股",
        "pinyin": "hlkg",
        "market": "SZ"
    },
    {
        "code": "000099",
        "name": "中信海直",
        "pinyin": "zxhz",
        "market": "SZ"
    },
    {
        "code": "000422",
        "name": "湖北宜化",
        "pinyin": "hbyh",
        "market": "SZ"
    },
    {
        "code": "000595",
        "name": "*ST宝实",
        "pinyin": "*stbs",
        "market": "SZ"
    },
    {
        "code": "000682",
        "name": "东方电子",
        "pinyin": "dfdz",
        "market": "SZ"
    },
    {
        "code": "000965",
        "name": "天保基建",
        "pinyin": "tbjj",
        "market": "SZ"
    },
    {
        "code": "002027",
        "name": "分众传媒",
        "pinyin": "fzcm",
        "market": "SZ"
    },
    {
        "code": "002052",
        "name": "同洲电子",
        "pinyin": "tzdz",
        "market": "SZ"
    },
    {
        "code": "002256",
        "name": "兆新股份",
        "pinyin": "zxgf",
        "market": "SZ"
    },
    {
        "code": "002285",
        "name": "世联行",
        "pinyin": "slh",
        "market": "SZ"
    },
    {
        "code": "002387",
        "name": "维信诺",
        "pinyin": "wxn",
        "market": "SZ"
    },
    {
        "code": "002429",
        "name": "兆驰股份",
        "pinyin": "zcgf",
        "market": "SZ"
    },
    {
        "code": "002540",
        "name": "亚太科技",
        "pinyin": "ytkj",
        "market": "SZ"
    },
    {
        "code": "002672",
        "name": "东江环保",
        "pinyin": "djhb",
        "market": "SZ"
    },
    {
        "code": "002673",
        "name": "西部证券",
        "pinyin": "xbzq",
        "market": "SZ"
    },
    {
        "code": "002788",
        "name": "鹭燕医药",
        "pinyin": "lyyy",
        "market": "SZ"
    },
    {
        "code": "003043",
        "name": "华亚智能",
        "pinyin": "hyzn",
        "market": "SZ"
    },
    {
        "code": "300123",
        "name": "亚光科技",
        "pinyin": "ygkj",
        "market": "SZ"
    },
    {
        "code": "300128",
        "name": "锦富技术",
        "pinyin": "jfjs",
        "market": "SZ"
    },
    {
        "code": "300215",
        "name": "电科院",
        "pinyin": "dky",
        "market": "SZ"
    },
    {
        "code": "300270",
        "name": "中威电子",
        "pinyin": "zwdz",
        "market": "SZ"
    },
    {
        "code": "300284",
        "name": "苏交科",
        "pinyin": "sjk",
        "market": "SZ"
    },
    {
        "code": "300307",
        "name": "慈星股份",
        "pinyin": "cxgf",
        "market": "SZ"
    },
    {
        "code": "300333",
        "name": "兆日科技",
        "pinyin": "zrkj",
        "market": "SZ"
    },
    {
        "code": "300352",
        "name": "北信源",
        "pinyin": "bxy",
        "market": "SZ"
    },
    {
        "code": "300408",
        "name": "三环集团",
        "pinyin": "shjt",
        "market": "SZ"
    },
    {
        "code": "300415",
        "name": "伊之密",
        "pinyin": "yzm",
        "market": "SZ"
    },
    {
        "code": "300488",
        "name": "恒锋工具",
        "pinyin": "hfgj",
        "market": "SZ"
    },
    {
        "code": "300705",
        "name": "九典制药",
        "pinyin": "jdzy",
        "market": "SZ"
    },
    {
        "code": "300707",
        "name": "威唐工业",
        "pinyin": "wtgy",
        "market": "SZ"
    },
    {
        "code": "300978",
        "name": "东箭科技",
        "pinyin": "djkj",
        "market": "SZ"
    },
    {
        "code": "301510",
        "name": "固高科技",
        "pinyin": "ggkj",
        "market": "SZ"
    },
    {
        "code": "301588",
        "name": "美新科技",
        "pinyin": "mxkj",
        "market": "SZ"
    },
    {
        "code": "301665",
        "name": "泰禾股份",
        "pinyin": "thgf",
        "market": "SZ"
    },
    {
        "code": "600120",
        "name": "浙江东方",
        "pinyin": "zjdf",
        "market": "SH"
    },
    {
        "code": "600207",
        "name": "安彩高科",
        "pinyin": "acgk",
        "market": "SH"
    },
    {
        "code": "600325",
        "name": "华发股份",
        "pinyin": "hfgf",
        "market": "SH"
    },
    {
        "code": "600373",
        "name": "中文传媒",
        "pinyin": "zwcm",
        "market": "SH"
    },
    {
        "code": "600460",
        "name": "士兰微",
        "pinyin": "slw",
        "market": "SH"
    },
    {
        "code": "600708",
        "name": "光明地产",
        "pinyin": "gmdc",
        "market": "SH"
    },
    {
        "code": "600748",
        "name": "上实发展",
        "pinyin": "ssfz",
        "market": "SH"
    },
    {
        "code": "600999",
        "name": "招商证券",
        "pinyin": "zszq",
        "market": "SH"
    },
    {
        "code": "601618",
        "name": "中国中冶",
        "pinyin": "zgzy",
        "market": "SH"
    },
    {
        "code": "601788",
        "name": "光大证券",
        "pinyin": "gdzq",
        "market": "SH"
    },
    {
        "code": "601901",
        "name": "方正证券",
        "pinyin": "fzzq",
        "market": "SH"
    },
    {
        "code": "603211",
        "name": "晋拓股份",
        "pinyin": "jtgf",
        "market": "SH"
    },
    {
        "code": "603650",
        "name": "彤程新材",
        "pinyin": "tcxc",
        "market": "SH"
    },
    {
        "code": "603667",
        "name": "五洲新春",
        "pinyin": "wzxc",
        "market": "SH"
    },
    {
        "code": "603679",
        "name": "华体科技",
        "pinyin": "htkj",
        "market": "SH"
    },
    {
        "code": "603766",
        "name": "隆鑫通用",
        "pinyin": "lxty",
        "market": "SH"
    },
    {
        "code": "603985",
        "name": "恒润股份",
        "pinyin": "hrgf",
        "market": "SH"
    },
    {
        "code": "000523",
        "name": "红棉股份",
        "pinyin": "hmgf",
        "market": "SZ"
    },
    {
        "code": "000607",
        "name": "华媒控股",
        "pinyin": "hmkg",
        "market": "SZ"
    },
    {
        "code": "000952",
        "name": "广济药业",
        "pinyin": "gjyy",
        "market": "SZ"
    },
    {
        "code": "002007",
        "name": "华兰生物",
        "pinyin": "hlsw",
        "market": "SZ"
    },
    {
        "code": "002008",
        "name": "大族激光",
        "pinyin": "dzjg",
        "market": "SZ"
    },
    {
        "code": "002049",
        "name": "紫光国微",
        "pinyin": "zggw",
        "market": "SZ"
    },
    {
        "code": "002091",
        "name": "江苏国泰",
        "pinyin": "jsgt",
        "market": "SZ"
    },
    {
        "code": "002204",
        "name": "大连重工",
        "pinyin": "dlzg",
        "market": "SZ"
    },
    {
        "code": "002287",
        "name": "奇正藏药",
        "pinyin": "qzcy",
        "market": "SZ"
    },
    {
        "code": "002365",
        "name": "永安药业",
        "pinyin": "yayy",
        "market": "SZ"
    },
    {
        "code": "002383",
        "name": "合众思壮",
        "pinyin": "hzsz",
        "market": "SZ"
    },
    {
        "code": "002454",
        "name": "松芝股份",
        "pinyin": "szgf",
        "market": "SZ"
    },
    {
        "code": "002510",
        "name": "天汽模",
        "pinyin": "tqm",
        "market": "SZ"
    },
    {
        "code": "002533",
        "name": "金杯电工",
        "pinyin": "jbdg",
        "market": "SZ"
    },
    {
        "code": "002675",
        "name": "东诚药业",
        "pinyin": "dcyy",
        "market": "SZ"
    },
    {
        "code": "002903",
        "name": "宇环数控",
        "pinyin": "yhsk",
        "market": "SZ"
    },
    {
        "code": "003032",
        "name": "*ST传智",
        "pinyin": "*stcz",
        "market": "SZ"
    },
    {
        "code": "300055",
        "name": "万邦达",
        "pinyin": "wbd",
        "market": "SZ"
    },
    {
        "code": "300083",
        "name": "创世纪",
        "pinyin": "csj",
        "market": "SZ"
    },
    {
        "code": "300088",
        "name": "长信科技",
        "pinyin": "cxkj",
        "market": "SZ"
    },
    {
        "code": "300135",
        "name": "宝利国际",
        "pinyin": "blgj",
        "market": "SZ"
    },
    {
        "code": "300158",
        "name": "振东制药",
        "pinyin": "zdzy",
        "market": "SZ"
    },
    {
        "code": "300210",
        "name": "森远股份",
        "pinyin": "sygf",
        "market": "SZ"
    },
    {
        "code": "300211",
        "name": "*ST亿通",
        "pinyin": "*styt",
        "market": "SZ"
    },
    {
        "code": "300310",
        "name": "宜通世纪",
        "pinyin": "ytsj",
        "market": "SZ"
    },
    {
        "code": "300411",
        "name": "金盾股份",
        "pinyin": "jdgf",
        "market": "SZ"
    },
    {
        "code": "300452",
        "name": "山河药辅",
        "pinyin": "shyf",
        "market": "SZ"
    },
    {
        "code": "300463",
        "name": "迈克生物",
        "pinyin": "mksw",
        "market": "SZ"
    },
    {
        "code": "300477",
        "name": "ST合纵",
        "pinyin": "sthz",
        "market": "SZ"
    },
    {
        "code": "300793",
        "name": "佳禾智能",
        "pinyin": "jhzn",
        "market": "SZ"
    },
    {
        "code": "600009",
        "name": "上海机场",
        "pinyin": "shjc",
        "market": "SH"
    },
    {
        "code": "600166",
        "name": "福田汽车",
        "pinyin": "ftqc",
        "market": "SH"
    },
    {
        "code": "600268",
        "name": "国电南自",
        "pinyin": "gdnz",
        "market": "SH"
    },
    {
        "code": "600390",
        "name": "五矿资本",
        "pinyin": "wkzb",
        "market": "SH"
    },
    {
        "code": "600517",
        "name": "国网英大",
        "pinyin": "gwyd",
        "market": "SH"
    },
    {
        "code": "600730",
        "name": "中国高科",
        "pinyin": "zggk",
        "market": "SH"
    },
    {
        "code": "600776",
        "name": "东方通信",
        "pinyin": "dftx",
        "market": "SH"
    },
    {
        "code": "600992",
        "name": "贵绳股份",
        "pinyin": "gsgf",
        "market": "SH"
    },
    {
        "code": "601001",
        "name": "晋控煤业",
        "pinyin": "jkmy",
        "market": "SH"
    },
    {
        "code": "601108",
        "name": "财通证券",
        "pinyin": "ctzq",
        "market": "SH"
    },
    {
        "code": "601238",
        "name": "广汽集团",
        "pinyin": "gqjt",
        "market": "SH"
    },
    {
        "code": "603402",
        "name": "陕西旅游",
        "pinyin": "sxly",
        "market": "SH"
    },
    {
        "code": "605336",
        "name": "帅丰电器",
        "pinyin": "sfdq",
        "market": "SH"
    },
    {
        "code": "000058",
        "name": "深 赛 格",
        "pinyin": "s s g",
        "market": "SZ"
    },
    {
        "code": "000695",
        "name": "滨海能源",
        "pinyin": "bhny",
        "market": "SZ"
    },
    {
        "code": "000736",
        "name": "*ST中地",
        "pinyin": "*stzd",
        "market": "SZ"
    },
    {
        "code": "000756",
        "name": "新华制药",
        "pinyin": "xhzy",
        "market": "SZ"
    },
    {
        "code": "000859",
        "name": "国风新材",
        "pinyin": "gfxc",
        "market": "SZ"
    },
    {
        "code": "001369",
        "name": "双欣环保",
        "pinyin": "sxhb",
        "market": "SZ"
    },
    {
        "code": "002022",
        "name": "科华生物",
        "pinyin": "khsw",
        "market": "SZ"
    },
    {
        "code": "002079",
        "name": "苏州固锝",
        "pinyin": "szgd",
        "market": "SZ"
    },
    {
        "code": "002097",
        "name": "山河智能",
        "pinyin": "shzn",
        "market": "SZ"
    },
    {
        "code": "002132",
        "name": "恒星科技",
        "pinyin": "hxkj",
        "market": "SZ"
    },
    {
        "code": "002145",
        "name": "钛能化学",
        "pinyin": "tnhx",
        "market": "SZ"
    },
    {
        "code": "002180",
        "name": "纳思达",
        "pinyin": "nsd",
        "market": "SZ"
    },
    {
        "code": "002187",
        "name": "广百股份",
        "pinyin": "gbgf",
        "market": "SZ"
    },
    {
        "code": "002241",
        "name": "歌尔股份",
        "pinyin": "gegf",
        "market": "SZ"
    },
    {
        "code": "002371",
        "name": "北方华创",
        "pinyin": "bfhc",
        "market": "SZ"
    },
    {
        "code": "002573",
        "name": "清新环境",
        "pinyin": "qxhj",
        "market": "SZ"
    },
    {
        "code": "002609",
        "name": "捷顺科技",
        "pinyin": "jskj",
        "market": "SZ"
    },
    {
        "code": "002926",
        "name": "华西证券",
        "pinyin": "hxzq",
        "market": "SZ"
    },
    {
        "code": "300025",
        "name": "华星创业",
        "pinyin": "hxcy",
        "market": "SZ"
    },
    {
        "code": "300222",
        "name": "科大智能",
        "pinyin": "kdzn",
        "market": "SZ"
    },
    {
        "code": "300459",
        "name": "汤姆猫",
        "pinyin": "tmm",
        "market": "SZ"
    },
    {
        "code": "301109",
        "name": "军信股份",
        "pinyin": "jxgf",
        "market": "SZ"
    },
    {
        "code": "600061",
        "name": "国投资本",
        "pinyin": "gtzb",
        "market": "SH"
    },
    {
        "code": "600064",
        "name": "南京高科",
        "pinyin": "njgk",
        "market": "SH"
    },
    {
        "code": "600135",
        "name": "乐凯胶片",
        "pinyin": "lkjp",
        "market": "SH"
    },
    {
        "code": "600161",
        "name": "天坛生物",
        "pinyin": "ttsw",
        "market": "SH"
    },
    {
        "code": "600192",
        "name": "长城电工",
        "pinyin": "ccdg",
        "market": "SH"
    },
    {
        "code": "600272",
        "name": "开开实业",
        "pinyin": "kksy",
        "market": "SH"
    },
    {
        "code": "600398",
        "name": "海澜之家",
        "pinyin": "hlzj",
        "market": "SH"
    },
    {
        "code": "600477",
        "name": "杭萧钢构",
        "pinyin": "hxgg",
        "market": "SH"
    },
    {
        "code": "600557",
        "name": "康缘药业",
        "pinyin": "kyyy",
        "market": "SH"
    },
    {
        "code": "600577",
        "name": "精达股份",
        "pinyin": "jdgf",
        "market": "SH"
    },
    {
        "code": "600725",
        "name": "云维股份",
        "pinyin": "ywgf",
        "market": "SH"
    },
    {
        "code": "600736",
        "name": "苏州高新",
        "pinyin": "szgx",
        "market": "SH"
    },
    {
        "code": "600797",
        "name": "浙大网新",
        "pinyin": "zdwx",
        "market": "SH"
    },
    {
        "code": "600906",
        "name": "财达证券",
        "pinyin": "cdzq",
        "market": "SH"
    },
    {
        "code": "601216",
        "name": "君正集团",
        "pinyin": "jzjt",
        "market": "SH"
    },
    {
        "code": "601377",
        "name": "兴业证券",
        "pinyin": "xyzq",
        "market": "SH"
    },
    {
        "code": "603077",
        "name": "和邦生物",
        "pinyin": "hbsw",
        "market": "SH"
    },
    {
        "code": "603229",
        "name": "奥翔药业",
        "pinyin": "axyy",
        "market": "SH"
    },
    {
        "code": "603458",
        "name": "勘设股份",
        "pinyin": "ksgf",
        "market": "SH"
    },
    {
        "code": "603477",
        "name": "巨星农牧",
        "pinyin": "jxnm",
        "market": "SH"
    },
    {
        "code": "603578",
        "name": "三星新材",
        "pinyin": "sxxc",
        "market": "SH"
    },
    {
        "code": "603876",
        "name": "鼎胜新材",
        "pinyin": "dsxc",
        "market": "SH"
    },
    {
        "code": "603878",
        "name": "武进不锈",
        "pinyin": "wjbx",
        "market": "SH"
    },
    {
        "code": "603895",
        "name": "天永智能",
        "pinyin": "tyzn",
        "market": "SH"
    },
    {
        "code": "605009",
        "name": "豪悦护理",
        "pinyin": "hyhl",
        "market": "SH"
    },
    {
        "code": "605388",
        "name": "均瑶健康",
        "pinyin": "jyjk",
        "market": "SH"
    },
    {
        "code": "000001",
        "name": "平安银行",
        "pinyin": "payh",
        "market": "SZ"
    },
    {
        "code": "000638",
        "name": "*ST万方",
        "pinyin": "*stwf",
        "market": "SZ"
    },
    {
        "code": "000810",
        "name": "创维数字",
        "pinyin": "cwsz",
        "market": "SZ"
    },
    {
        "code": "000985",
        "name": "大庆华科",
        "pinyin": "dqhk",
        "market": "SZ"
    },
    {
        "code": "001328",
        "name": "登康口腔",
        "pinyin": "dkkq",
        "market": "SZ"
    },
    {
        "code": "002063",
        "name": "远光软件",
        "pinyin": "ygrj",
        "market": "SZ"
    },
    {
        "code": "002233",
        "name": "塔牌集团",
        "pinyin": "tpjt",
        "market": "SZ"
    },
    {
        "code": "002235",
        "name": "安妮股份",
        "pinyin": "angf",
        "market": "SZ"
    },
    {
        "code": "002355",
        "name": "兴民智通",
        "pinyin": "xmzt",
        "market": "SZ"
    },
    {
        "code": "002474",
        "name": "榕基软件",
        "pinyin": "rjrj",
        "market": "SZ"
    },
    {
        "code": "002561",
        "name": "徐家汇",
        "pinyin": "xjh",
        "market": "SZ"
    },
    {
        "code": "002642",
        "name": "荣联科技",
        "pinyin": "rlkj",
        "market": "SZ"
    },
    {
        "code": "002797",
        "name": "第一创业",
        "pinyin": "dycy",
        "market": "SZ"
    },
    {
        "code": "002819",
        "name": "东方中科",
        "pinyin": "dfzk",
        "market": "SZ"
    },
    {
        "code": "002846",
        "name": "英联股份",
        "pinyin": "ylgf",
        "market": "SZ"
    },
    {
        "code": "003000",
        "name": "劲仔食品",
        "pinyin": "jzsp",
        "market": "SZ"
    },
    {
        "code": "300155",
        "name": "安居宝",
        "pinyin": "ajb",
        "market": "SZ"
    },
    {
        "code": "300198",
        "name": "ST纳川",
        "pinyin": "stnc",
        "market": "SZ"
    },
    {
        "code": "300225",
        "name": "*ST金泰",
        "pinyin": "*stjt",
        "market": "SZ"
    },
    {
        "code": "300299",
        "name": "富春股份",
        "pinyin": "fcgf",
        "market": "SZ"
    },
    {
        "code": "300382",
        "name": "斯莱克",
        "pinyin": "slk",
        "market": "SZ"
    },
    {
        "code": "300434",
        "name": "金石亚药",
        "pinyin": "jsyy",
        "market": "SZ"
    },
    {
        "code": "300559",
        "name": "佳发教育",
        "pinyin": "jfjy",
        "market": "SZ"
    },
    {
        "code": "300595",
        "name": "欧普康视",
        "pinyin": "opks",
        "market": "SZ"
    },
    {
        "code": "300891",
        "name": "惠云钛业",
        "pinyin": "hyty",
        "market": "SZ"
    },
    {
        "code": "301012",
        "name": "扬电科技",
        "pinyin": "ydkj",
        "market": "SZ"
    },
    {
        "code": "301036",
        "name": "双乐股份",
        "pinyin": "slgf",
        "market": "SZ"
    },
    {
        "code": "600078",
        "name": "澄星股份",
        "pinyin": "cxgf",
        "market": "SH"
    },
    {
        "code": "600237",
        "name": "铜峰电子",
        "pinyin": "tfdz",
        "market": "SH"
    },
    {
        "code": "600267",
        "name": "海正药业",
        "pinyin": "hzyy",
        "market": "SH"
    },
    {
        "code": "600624",
        "name": "ST复华",
        "pinyin": "stfh",
        "market": "SH"
    },
    {
        "code": "600933",
        "name": "爱柯迪",
        "pinyin": "akd",
        "market": "SH"
    },
    {
        "code": "601218",
        "name": "吉鑫科技",
        "pinyin": "jxkj",
        "market": "SH"
    },
    {
        "code": "601678",
        "name": "滨化股份",
        "pinyin": "bhgf",
        "market": "SH"
    },
    {
        "code": "601777",
        "name": "千里科技",
        "pinyin": "qlkj",
        "market": "SH"
    },
    {
        "code": "601929",
        "name": "吉视传媒",
        "pinyin": "jscm",
        "market": "SH"
    },
    {
        "code": "601990",
        "name": "南京证券",
        "pinyin": "njzq",
        "market": "SH"
    },
    {
        "code": "603087",
        "name": "甘李药业",
        "pinyin": "glyy",
        "market": "SH"
    },
    {
        "code": "603638",
        "name": "艾迪精密",
        "pinyin": "adjm",
        "market": "SH"
    },
    {
        "code": "603668",
        "name": "天马科技",
        "pinyin": "tmkj",
        "market": "SH"
    },
    {
        "code": "603706",
        "name": "东方环宇",
        "pinyin": "dfhy",
        "market": "SH"
    },
    {
        "code": "603858",
        "name": "步长制药",
        "pinyin": "bczy",
        "market": "SH"
    },
    {
        "code": "605108",
        "name": "同庆楼",
        "pinyin": "tql",
        "market": "SH"
    },
    {
        "code": "000006",
        "name": "深振业A",
        "pinyin": "szya",
        "market": "SZ"
    },
    {
        "code": "000415",
        "name": "渤海租赁",
        "pinyin": "bhzl",
        "market": "SZ"
    },
    {
        "code": "000516",
        "name": "国际医学",
        "pinyin": "gjyx",
        "market": "SZ"
    },
    {
        "code": "000545",
        "name": "金浦钛业",
        "pinyin": "jpty",
        "market": "SZ"
    },
    {
        "code": "000582",
        "name": "北部湾港",
        "pinyin": "bbwg",
        "market": "SZ"
    },
    {
        "code": "000668",
        "name": "*ST荣控",
        "pinyin": "*strk",
        "market": "SZ"
    },
    {
        "code": "000852",
        "name": "石化机械",
        "pinyin": "shjx",
        "market": "SZ"
    },
    {
        "code": "001212",
        "name": "中旗新材",
        "pinyin": "zqxc",
        "market": "SZ"
    },
    {
        "code": "001326",
        "name": "联域股份",
        "pinyin": "lygf",
        "market": "SZ"
    },
    {
        "code": "002011",
        "name": "盾安环境",
        "pinyin": "dahj",
        "market": "SZ"
    },
    {
        "code": "002076",
        "name": "*ST星光",
        "pinyin": "*stxg",
        "market": "SZ"
    },
    {
        "code": "002120",
        "name": "韵达股份",
        "pinyin": "ydgf",
        "market": "SZ"
    },
    {
        "code": "002420",
        "name": "毅昌科技",
        "pinyin": "yckj",
        "market": "SZ"
    },
    {
        "code": "002472",
        "name": "双环传动",
        "pinyin": "shcd",
        "market": "SZ"
    },
    {
        "code": "002599",
        "name": "盛通股份",
        "pinyin": "stgf",
        "market": "SZ"
    },
    {
        "code": "002647",
        "name": "*ST仁东",
        "pinyin": "*strd",
        "market": "SZ"
    },
    {
        "code": "300231",
        "name": "银信科技",
        "pinyin": "yxkj",
        "market": "SZ"
    },
    {
        "code": "300332",
        "name": "天壕能源",
        "pinyin": "thny",
        "market": "SZ"
    },
    {
        "code": "300359",
        "name": "全通教育",
        "pinyin": "qtjy",
        "market": "SZ"
    },
    {
        "code": "300506",
        "name": "ST名家汇",
        "pinyin": "stmjh",
        "market": "SZ"
    },
    {
        "code": "300961",
        "name": "深水海纳",
        "pinyin": "sshn",
        "market": "SZ"
    },
    {
        "code": "300992",
        "name": "泰福泵业",
        "pinyin": "tfby",
        "market": "SZ"
    },
    {
        "code": "301116",
        "name": "益客食品",
        "pinyin": "yksp",
        "market": "SZ"
    },
    {
        "code": "301185",
        "name": "鸥玛软件",
        "pinyin": "omrj",
        "market": "SZ"
    },
    {
        "code": "301218",
        "name": "华是科技",
        "pinyin": "hskj",
        "market": "SZ"
    },
    {
        "code": "301238",
        "name": "瑞泰新材",
        "pinyin": "rtxc",
        "market": "SZ"
    },
    {
        "code": "301289",
        "name": "国缆检测",
        "pinyin": "gljc",
        "market": "SZ"
    },
    {
        "code": "600067",
        "name": "冠城新材",
        "pinyin": "gcxc",
        "market": "SH"
    },
    {
        "code": "600256",
        "name": "广汇能源",
        "pinyin": "ghny",
        "market": "SH"
    },
    {
        "code": "600339",
        "name": "中油工程",
        "pinyin": "zygc",
        "market": "SH"
    },
    {
        "code": "601607",
        "name": "上海医药",
        "pinyin": "shyy",
        "market": "SH"
    },
    {
        "code": "601778",
        "name": "晶科科技",
        "pinyin": "jkkj",
        "market": "SH"
    },
    {
        "code": "603138",
        "name": "海量数据",
        "pinyin": "hlsj",
        "market": "SH"
    },
    {
        "code": "603626",
        "name": "科森科技",
        "pinyin": "kskj",
        "market": "SH"
    },
    {
        "code": "603708",
        "name": "家家悦",
        "pinyin": "jjy",
        "market": "SH"
    },
    {
        "code": "603896",
        "name": "寿仙谷",
        "pinyin": "sxg",
        "market": "SH"
    },
    {
        "code": "605399",
        "name": "晨光新材",
        "pinyin": "cgxc",
        "market": "SH"
    },
    {
        "code": "000078",
        "name": "海王生物",
        "pinyin": "hwsw",
        "market": "SZ"
    },
    {
        "code": "000721",
        "name": "西安饮食",
        "pinyin": "xays",
        "market": "SZ"
    },
    {
        "code": "000980",
        "name": "众泰汽车",
        "pinyin": "ztqc",
        "market": "SZ"
    },
    {
        "code": "001206",
        "name": "依依股份",
        "pinyin": "yygf",
        "market": "SZ"
    },
    {
        "code": "001289",
        "name": "龙源电力",
        "pinyin": "lydl",
        "market": "SZ"
    },
    {
        "code": "002104",
        "name": "恒宝股份",
        "pinyin": "hbgf",
        "market": "SZ"
    },
    {
        "code": "002142",
        "name": "宁波银行",
        "pinyin": "nbyh",
        "market": "SZ"
    },
    {
        "code": "002324",
        "name": "普利特",
        "pinyin": "plt",
        "market": "SZ"
    },
    {
        "code": "002388",
        "name": "新亚制程",
        "pinyin": "xyzc",
        "market": "SZ"
    },
    {
        "code": "002583",
        "name": "海能达",
        "pinyin": "hnd",
        "market": "SZ"
    },
    {
        "code": "002708",
        "name": "光洋股份",
        "pinyin": "gygf",
        "market": "SZ"
    },
    {
        "code": "002735",
        "name": "王子新材",
        "pinyin": "wzxc",
        "market": "SZ"
    },
    {
        "code": "002886",
        "name": "沃特股份",
        "pinyin": "wtgf",
        "market": "SZ"
    },
    {
        "code": "300098",
        "name": "高新兴",
        "pinyin": "gxx",
        "market": "SZ"
    },
    {
        "code": "300180",
        "name": "华峰超纤",
        "pinyin": "hfcx",
        "market": "SZ"
    },
    {
        "code": "300205",
        "name": "*ST天喻",
        "pinyin": "*stty",
        "market": "SZ"
    },
    {
        "code": "300286",
        "name": "安科瑞",
        "pinyin": "akr",
        "market": "SZ"
    },
    {
        "code": "300317",
        "name": "珈伟新能",
        "pinyin": "jwxn",
        "market": "SZ"
    },
    {
        "code": "300366",
        "name": "ST创意",
        "pinyin": "stcy",
        "market": "SZ"
    },
    {
        "code": "300587",
        "name": "天铁科技",
        "pinyin": "ttkj",
        "market": "SZ"
    },
    {
        "code": "300752",
        "name": "隆利科技",
        "pinyin": "llkj",
        "market": "SZ"
    },
    {
        "code": "300770",
        "name": "新媒股份",
        "pinyin": "xmgf",
        "market": "SZ"
    },
    {
        "code": "300878",
        "name": "维康药业",
        "pinyin": "wkyy",
        "market": "SZ"
    },
    {
        "code": "300890",
        "name": "翔丰华",
        "pinyin": "xfh",
        "market": "SZ"
    },
    {
        "code": "300998",
        "name": "宁波方正",
        "pinyin": "nbfz",
        "market": "SZ"
    },
    {
        "code": "600000",
        "name": "浦发银行",
        "pinyin": "pfyh",
        "market": "SH"
    },
    {
        "code": "600015",
        "name": "华夏银行",
        "pinyin": "hxyh",
        "market": "SH"
    },
    {
        "code": "600153",
        "name": "建发股份",
        "pinyin": "jfgf",
        "market": "SH"
    },
    {
        "code": "600163",
        "name": "中闽能源",
        "pinyin": "zmny",
        "market": "SH"
    },
    {
        "code": "600170",
        "name": "上海建工",
        "pinyin": "shjg",
        "market": "SH"
    },
    {
        "code": "600307",
        "name": "酒钢宏兴",
        "pinyin": "jghx",
        "market": "SH"
    },
    {
        "code": "600380",
        "name": "健康元",
        "pinyin": "jky",
        "market": "SH"
    },
    {
        "code": "600703",
        "name": "三安光电",
        "pinyin": "sagd",
        "market": "SH"
    },
    {
        "code": "600740",
        "name": "山西焦化",
        "pinyin": "sxjh",
        "market": "SH"
    },
    {
        "code": "600783",
        "name": "鲁信创投",
        "pinyin": "lxct",
        "market": "SH"
    },
    {
        "code": "600791",
        "name": "京能置业",
        "pinyin": "jnzy",
        "market": "SH"
    },
    {
        "code": "600824",
        "name": "益民集团",
        "pinyin": "ymjt",
        "market": "SH"
    },
    {
        "code": "600825",
        "name": "新华传媒",
        "pinyin": "xhcm",
        "market": "SH"
    },
    {
        "code": "600918",
        "name": "中泰证券",
        "pinyin": "ztzq",
        "market": "SH"
    },
    {
        "code": "600998",
        "name": "九州通",
        "pinyin": "jzt",
        "market": "SH"
    },
    {
        "code": "601098",
        "name": "中南传媒",
        "pinyin": "zncm",
        "market": "SH"
    },
    {
        "code": "601099",
        "name": "太平洋",
        "pinyin": "tpy",
        "market": "SH"
    },
    {
        "code": "601156",
        "name": "东航物流",
        "pinyin": "dhwl",
        "market": "SH"
    },
    {
        "code": "601512",
        "name": "中新集团",
        "pinyin": "zxjt",
        "market": "SH"
    },
    {
        "code": "601933",
        "name": "永辉超市",
        "pinyin": "yhcs",
        "market": "SH"
    },
    {
        "code": "603101",
        "name": "汇嘉时代",
        "pinyin": "hjsd",
        "market": "SH"
    },
    {
        "code": "603113",
        "name": "金能科技",
        "pinyin": "jnkj",
        "market": "SH"
    },
    {
        "code": "603300",
        "name": "海南华铁",
        "pinyin": "hnht",
        "market": "SH"
    },
    {
        "code": "603365",
        "name": "水星家纺",
        "pinyin": "sxjf",
        "market": "SH"
    },
    {
        "code": "603608",
        "name": "天创时尚",
        "pinyin": "tcss",
        "market": "SH"
    },
    {
        "code": "603738",
        "name": "泰晶科技",
        "pinyin": "tjkj",
        "market": "SH"
    },
    {
        "code": "605169",
        "name": "洪通燃气",
        "pinyin": "htrq",
        "market": "SH"
    },
    {
        "code": "000008",
        "name": "神州高铁",
        "pinyin": "szgt",
        "market": "SZ"
    },
    {
        "code": "000048",
        "name": "京基智农",
        "pinyin": "jjzn",
        "market": "SZ"
    },
    {
        "code": "000090",
        "name": "天健集团",
        "pinyin": "tjjt",
        "market": "SZ"
    },
    {
        "code": "000166",
        "name": "申万宏源",
        "pinyin": "swhy",
        "market": "SZ"
    },
    {
        "code": "000524",
        "name": "岭南控股",
        "pinyin": "lnkg",
        "market": "SZ"
    },
    {
        "code": "000665",
        "name": "湖北广电",
        "pinyin": "hbgd",
        "market": "SZ"
    },
    {
        "code": "000679",
        "name": "大连友谊",
        "pinyin": "dlyy",
        "market": "SZ"
    },
    {
        "code": "000686",
        "name": "东北证券",
        "pinyin": "dbzq",
        "market": "SZ"
    },
    {
        "code": "000703",
        "name": "恒逸石化",
        "pinyin": "hysh",
        "market": "SZ"
    },
    {
        "code": "000717",
        "name": "中南股份",
        "pinyin": "zngf",
        "market": "SZ"
    },
    {
        "code": "000785",
        "name": "居然智家",
        "pinyin": "jrzj",
        "market": "SZ"
    },
    {
        "code": "000812",
        "name": "陕西金叶",
        "pinyin": "sxjy",
        "market": "SZ"
    },
    {
        "code": "000935",
        "name": "四川双马",
        "pinyin": "scsm",
        "market": "SZ"
    },
    {
        "code": "000950",
        "name": "重药控股",
        "pinyin": "zykg",
        "market": "SZ"
    },
    {
        "code": "000977",
        "name": "浪潮信息",
        "pinyin": "lcxx",
        "market": "SZ"
    },
    {
        "code": "000993",
        "name": "闽东电力",
        "pinyin": "mddl",
        "market": "SZ"
    },
    {
        "code": "002073",
        "name": "软控股份",
        "pinyin": "rkgf",
        "market": "SZ"
    },
    {
        "code": "002090",
        "name": "金智科技",
        "pinyin": "jzkj",
        "market": "SZ"
    },
    {
        "code": "002109",
        "name": "兴化股份",
        "pinyin": "xhgf",
        "market": "SZ"
    },
    {
        "code": "002110",
        "name": "三钢闽光",
        "pinyin": "sgmg",
        "market": "SZ"
    },
    {
        "code": "002225",
        "name": "濮耐股份",
        "pinyin": "pngf",
        "market": "SZ"
    },
    {
        "code": "002380",
        "name": "科远智慧",
        "pinyin": "kyzh",
        "market": "SZ"
    },
    {
        "code": "002507",
        "name": "涪陵榨菜",
        "pinyin": "flzc",
        "market": "SZ"
    },
    {
        "code": "002514",
        "name": "宝馨科技",
        "pinyin": "bxkj",
        "market": "SZ"
    },
    {
        "code": "002515",
        "name": "金字火腿",
        "pinyin": "jzht",
        "market": "SZ"
    },
    {
        "code": "002607",
        "name": "中公教育",
        "pinyin": "zgjy",
        "market": "SZ"
    },
    {
        "code": "002651",
        "name": "利君股份",
        "pinyin": "ljgf",
        "market": "SZ"
    },
    {
        "code": "002836",
        "name": "新宏泽",
        "pinyin": "xhz",
        "market": "SZ"
    },
    {
        "code": "300218",
        "name": "安利股份",
        "pinyin": "algf",
        "market": "SZ"
    },
    {
        "code": "300242",
        "name": "佳云科技",
        "pinyin": "jykj",
        "market": "SZ"
    },
    {
        "code": "300406",
        "name": "九强生物",
        "pinyin": "jqsw",
        "market": "SZ"
    },
    {
        "code": "300439",
        "name": "美康生物",
        "pinyin": "mksw",
        "market": "SZ"
    },
    {
        "code": "300485",
        "name": "赛升药业",
        "pinyin": "ssyy",
        "market": "SZ"
    },
    {
        "code": "300508",
        "name": "维宏股份",
        "pinyin": "whgf",
        "market": "SZ"
    },
    {
        "code": "300509",
        "name": "新美星",
        "pinyin": "xmx",
        "market": "SZ"
    },
    {
        "code": "300562",
        "name": "乐心医疗",
        "pinyin": "lxyl",
        "market": "SZ"
    },
    {
        "code": "300563",
        "name": "神宇股份",
        "pinyin": "sygf",
        "market": "SZ"
    },
    {
        "code": "300580",
        "name": "贝斯特",
        "pinyin": "bst",
        "market": "SZ"
    },
    {
        "code": "300603",
        "name": "立昂技术",
        "pinyin": "lajs",
        "market": "SZ"
    },
    {
        "code": "300702",
        "name": "天宇股份",
        "pinyin": "tygf",
        "market": "SZ"
    },
    {
        "code": "300894",
        "name": "火星人",
        "pinyin": "hxr",
        "market": "SZ"
    },
    {
        "code": "301211",
        "name": "亨迪药业",
        "pinyin": "hdyy",
        "market": "SZ"
    },
    {
        "code": "301565",
        "name": "中仑新材",
        "pinyin": "zlxc",
        "market": "SZ"
    },
    {
        "code": "301581",
        "name": "黄山谷捷",
        "pinyin": "hsgj",
        "market": "SZ"
    },
    {
        "code": "301656",
        "name": "联合动力",
        "pinyin": "lhdl",
        "market": "SZ"
    },
    {
        "code": "600177",
        "name": "雅戈尔",
        "pinyin": "yge",
        "market": "SH"
    },
    {
        "code": "600355",
        "name": "*ST精伦",
        "pinyin": "*stjl",
        "market": "SH"
    },
    {
        "code": "600383",
        "name": "金地集团",
        "pinyin": "jdjt",
        "market": "SH"
    },
    {
        "code": "600397",
        "name": "江钨装备",
        "pinyin": "jwzb",
        "market": "SH"
    },
    {
        "code": "600439",
        "name": "瑞贝卡",
        "pinyin": "rbk",
        "market": "SH"
    },
    {
        "code": "600528",
        "name": "中铁工业",
        "pinyin": "ztgy",
        "market": "SH"
    },
    {
        "code": "600615",
        "name": "鑫源智造",
        "pinyin": "xyzz",
        "market": "SH"
    },
    {
        "code": "600622",
        "name": "光大嘉宝",
        "pinyin": "gdjb",
        "market": "SH"
    },
    {
        "code": "600661",
        "name": "昂立教育",
        "pinyin": "aljy",
        "market": "SH"
    },
    {
        "code": "600666",
        "name": "奥瑞德",
        "pinyin": "ard",
        "market": "SH"
    },
    {
        "code": "600864",
        "name": "哈投股份",
        "pinyin": "htgf",
        "market": "SH"
    },
    {
        "code": "600984",
        "name": "建设机械",
        "pinyin": "jsjx",
        "market": "SH"
    },
    {
        "code": "601019",
        "name": "山东出版",
        "pinyin": "sdcb",
        "market": "SH"
    },
    {
        "code": "601128",
        "name": "常熟银行",
        "pinyin": "csyh",
        "market": "SH"
    },
    {
        "code": "601921",
        "name": "浙版传媒",
        "pinyin": "zbcm",
        "market": "SH"
    },
    {
        "code": "603205",
        "name": "健尔康",
        "pinyin": "jek",
        "market": "SH"
    },
    {
        "code": "603528",
        "name": "多伦科技",
        "pinyin": "dlkj",
        "market": "SH"
    },
    {
        "code": "603718",
        "name": "海利生物",
        "pinyin": "hlsw",
        "market": "SH"
    },
    {
        "code": "603798",
        "name": "康普顿",
        "pinyin": "kpd",
        "market": "SH"
    },
    {
        "code": "603983",
        "name": "丸美生物",
        "pinyin": "wmsw",
        "market": "SH"
    },
    {
        "code": "605069",
        "name": "正和生态",
        "pinyin": "zhst",
        "market": "SH"
    },
    {
        "code": "000026",
        "name": "飞亚达",
        "pinyin": "fyd",
        "market": "SZ"
    },
    {
        "code": "000069",
        "name": "华侨城A",
        "pinyin": "hqca",
        "market": "SZ"
    },
    {
        "code": "000100",
        "name": "TCL科技",
        "pinyin": "tclkj",
        "market": "SZ"
    },
    {
        "code": "000402",
        "name": "金 融 街",
        "pinyin": "j r j",
        "market": "SZ"
    },
    {
        "code": "000420",
        "name": "吉林化纤",
        "pinyin": "jlhx",
        "market": "SZ"
    },
    {
        "code": "000797",
        "name": "中国武夷",
        "pinyin": "zgwy",
        "market": "SZ"
    },
    {
        "code": "000816",
        "name": "智慧农业",
        "pinyin": "zhny",
        "market": "SZ"
    },
    {
        "code": "000877",
        "name": "天山股份",
        "pinyin": "tsgf",
        "market": "SZ"
    },
    {
        "code": "000898",
        "name": "鞍钢股份",
        "pinyin": "aggf",
        "market": "SZ"
    },
    {
        "code": "000926",
        "name": "福星股份",
        "pinyin": "fxgf",
        "market": "SZ"
    },
    {
        "code": "000958",
        "name": "电投产融",
        "pinyin": "dtcr",
        "market": "SZ"
    },
    {
        "code": "002066",
        "name": "瑞泰科技",
        "pinyin": "rtkj",
        "market": "SZ"
    },
    {
        "code": "002127",
        "name": "南极电商",
        "pinyin": "njds",
        "market": "SZ"
    },
    {
        "code": "002134",
        "name": "天津普林",
        "pinyin": "tjpl",
        "market": "SZ"
    },
    {
        "code": "002166",
        "name": "莱茵生物",
        "pinyin": "lysw",
        "market": "SZ"
    },
    {
        "code": "002219",
        "name": "新里程",
        "pinyin": "xlc",
        "market": "SZ"
    },
    {
        "code": "002314",
        "name": "南山控股",
        "pinyin": "nskg",
        "market": "SZ"
    },
    {
        "code": "002398",
        "name": "垒知集团",
        "pinyin": "lzjt",
        "market": "SZ"
    },
    {
        "code": "002399",
        "name": "海普瑞",
        "pinyin": "hpr",
        "market": "SZ"
    },
    {
        "code": "002449",
        "name": "国星光电",
        "pinyin": "gxgd",
        "market": "SZ"
    },
    {
        "code": "002485",
        "name": "ST雪发",
        "pinyin": "stxf",
        "market": "SZ"
    },
    {
        "code": "002526",
        "name": "山东矿机",
        "pinyin": "sdkj",
        "market": "SZ"
    },
    {
        "code": "002574",
        "name": "明牌珠宝",
        "pinyin": "mpzb",
        "market": "SZ"
    },
    {
        "code": "002581",
        "name": "ST未名",
        "pinyin": "stwm",
        "market": "SZ"
    },
    {
        "code": "002606",
        "name": "大连电瓷",
        "pinyin": "dldc",
        "market": "SZ"
    },
    {
        "code": "002697",
        "name": "红旗连锁",
        "pinyin": "hqls",
        "market": "SZ"
    },
    {
        "code": "002932",
        "name": "明德生物",
        "pinyin": "mdsw",
        "market": "SZ"
    },
    {
        "code": "300296",
        "name": "利亚德",
        "pinyin": "lyd",
        "market": "SZ"
    },
    {
        "code": "300338",
        "name": "ST开元",
        "pinyin": "stky",
        "market": "SZ"
    },
    {
        "code": "300353",
        "name": "东土科技",
        "pinyin": "dtkj",
        "market": "SZ"
    },
    {
        "code": "300447",
        "name": "全信股份",
        "pinyin": "qxgf",
        "market": "SZ"
    },
    {
        "code": "300513",
        "name": "恒实科技",
        "pinyin": "hskj",
        "market": "SZ"
    },
    {
        "code": "300564",
        "name": "筑博设计",
        "pinyin": "zbsj",
        "market": "SZ"
    },
    {
        "code": "300582",
        "name": "英飞特",
        "pinyin": "yft",
        "market": "SZ"
    },
    {
        "code": "300650",
        "name": "太龙股份",
        "pinyin": "tlgf",
        "market": "SZ"
    },
    {
        "code": "300686",
        "name": "智动力",
        "pinyin": "zdl",
        "market": "SZ"
    },
    {
        "code": "300882",
        "name": "万胜智能",
        "pinyin": "wszn",
        "market": "SZ"
    },
    {
        "code": "600088",
        "name": "中视传媒",
        "pinyin": "zscm",
        "market": "SH"
    },
    {
        "code": "600117",
        "name": "西宁特钢",
        "pinyin": "xntg",
        "market": "SH"
    },
    {
        "code": "600155",
        "name": "华创云信",
        "pinyin": "hcyx",
        "market": "SH"
    },
    {
        "code": "600217",
        "name": "中再资环",
        "pinyin": "zzzh",
        "market": "SH"
    },
    {
        "code": "600282",
        "name": "南钢股份",
        "pinyin": "nggf",
        "market": "SH"
    },
    {
        "code": "600340",
        "name": "华夏幸福",
        "pinyin": "hxxf",
        "market": "SH"
    },
    {
        "code": "600348",
        "name": "华阳股份",
        "pinyin": "hygf",
        "market": "SH"
    },
    {
        "code": "600458",
        "name": "时代新材",
        "pinyin": "sdxc",
        "market": "SH"
    },
    {
        "code": "600635",
        "name": "大众公用",
        "pinyin": "dzgy",
        "market": "SH"
    },
    {
        "code": "600658",
        "name": "电子城",
        "pinyin": "dzc",
        "market": "SH"
    },
    {
        "code": "600720",
        "name": "中交设计",
        "pinyin": "zjsj",
        "market": "SH"
    },
    {
        "code": "601000",
        "name": "唐山港",
        "pinyin": "tsg",
        "market": "SH"
    },
    {
        "code": "601162",
        "name": "天风证券",
        "pinyin": "tfzq",
        "market": "SH"
    },
    {
        "code": "601236",
        "name": "红塔证券",
        "pinyin": "htzq",
        "market": "SH"
    },
    {
        "code": "601801",
        "name": "皖新传媒",
        "pinyin": "wxcm",
        "market": "SH"
    },
    {
        "code": "601919",
        "name": "中远海控",
        "pinyin": "zyhk",
        "market": "SH"
    },
    {
        "code": "603193",
        "name": "润本股份",
        "pinyin": "rbgf",
        "market": "SH"
    },
    {
        "code": "603248",
        "name": "锡华科技",
        "pinyin": "xhkj",
        "market": "SH"
    },
    {
        "code": "603348",
        "name": "文灿股份",
        "pinyin": "wcgf",
        "market": "SH"
    },
    {
        "code": "603517",
        "name": "ST绝味",
        "pinyin": "stjw",
        "market": "SH"
    },
    {
        "code": "603656",
        "name": "泰禾智能",
        "pinyin": "thzn",
        "market": "SH"
    },
    {
        "code": "603898",
        "name": "好莱客",
        "pinyin": "hlk",
        "market": "SH"
    },
    {
        "code": "603949",
        "name": "雪龙集团",
        "pinyin": "xljt",
        "market": "SH"
    },
    {
        "code": "605111",
        "name": "新洁能",
        "pinyin": "xjn",
        "market": "SH"
    },
    {
        "code": "000417",
        "name": "合百集团",
        "pinyin": "hbjt",
        "market": "SZ"
    },
    {
        "code": "000709",
        "name": "河钢股份",
        "pinyin": "hggf",
        "market": "SZ"
    },
    {
        "code": "000725",
        "name": "京东方A",
        "pinyin": "jdfa",
        "market": "SZ"
    },
    {
        "code": "000750",
        "name": "国海证券",
        "pinyin": "ghzq",
        "market": "SZ"
    },
    {
        "code": "000800",
        "name": "一汽解放",
        "pinyin": "yqjf",
        "market": "SZ"
    },
    {
        "code": "001236",
        "name": "弘业期货",
        "pinyin": "hyqh",
        "market": "SZ"
    },
    {
        "code": "001311",
        "name": "多利科技",
        "pinyin": "dlkj",
        "market": "SZ"
    },
    {
        "code": "002099",
        "name": "海翔药业",
        "pinyin": "hxyy",
        "market": "SZ"
    },
    {
        "code": "002103",
        "name": "广博股份",
        "pinyin": "gbgf",
        "market": "SZ"
    },
    {
        "code": "002141",
        "name": "贤丰控股",
        "pinyin": "xfkg",
        "market": "SZ"
    },
    {
        "code": "002289",
        "name": "*ST宇顺",
        "pinyin": "*stys",
        "market": "SZ"
    },
    {
        "code": "002564",
        "name": "天沃科技",
        "pinyin": "twkj",
        "market": "SZ"
    },
    {
        "code": "002570",
        "name": "贝因美",
        "pinyin": "bym",
        "market": "SZ"
    },
    {
        "code": "002717",
        "name": "ST岭南",
        "pinyin": "stln",
        "market": "SZ"
    },
    {
        "code": "002723",
        "name": "小崧股份",
        "pinyin": "xsgf",
        "market": "SZ"
    },
    {
        "code": "002766",
        "name": "索菱股份",
        "pinyin": "slgf",
        "market": "SZ"
    },
    {
        "code": "002891",
        "name": "中宠股份",
        "pinyin": "zcgf",
        "market": "SZ"
    },
    {
        "code": "003013",
        "name": "地铁设计",
        "pinyin": "dtsj",
        "market": "SZ"
    },
    {
        "code": "300070",
        "name": "碧水源",
        "pinyin": "bsy",
        "market": "SZ"
    },
    {
        "code": "300111",
        "name": "向日葵",
        "pinyin": "xrk",
        "market": "SZ"
    },
    {
        "code": "300121",
        "name": "阳谷华泰",
        "pinyin": "yght",
        "market": "SZ"
    },
    {
        "code": "300185",
        "name": "通裕重工",
        "pinyin": "tyzg",
        "market": "SZ"
    },
    {
        "code": "300319",
        "name": "麦捷科技",
        "pinyin": "mjkj",
        "market": "SZ"
    },
    {
        "code": "300323",
        "name": "华灿光电",
        "pinyin": "hcgd",
        "market": "SZ"
    },
    {
        "code": "300370",
        "name": "安控科技",
        "pinyin": "akkj",
        "market": "SZ"
    },
    {
        "code": "300532",
        "name": "今天国际",
        "pinyin": "jtgj",
        "market": "SZ"
    },
    {
        "code": "300555",
        "name": "ST路通",
        "pinyin": "stlt",
        "market": "SZ"
    },
    {
        "code": "300569",
        "name": "天能重工",
        "pinyin": "tnzg",
        "market": "SZ"
    },
    {
        "code": "300942",
        "name": "易瑞生物",
        "pinyin": "yrsw",
        "market": "SZ"
    },
    {
        "code": "301633",
        "name": "港迪技术",
        "pinyin": "gdjs",
        "market": "SZ"
    },
    {
        "code": "600063",
        "name": "皖维高新",
        "pinyin": "wwgx",
        "market": "SH"
    },
    {
        "code": "600158",
        "name": "中体产业",
        "pinyin": "ztcy",
        "market": "SH"
    },
    {
        "code": "600179",
        "name": "安通控股",
        "pinyin": "atkg",
        "market": "SH"
    },
    {
        "code": "600305",
        "name": "恒顺醋业",
        "pinyin": "hscy",
        "market": "SH"
    },
    {
        "code": "600365",
        "name": "ST通葡",
        "pinyin": "sttp",
        "market": "SH"
    },
    {
        "code": "600548",
        "name": "深高速",
        "pinyin": "sgs",
        "market": "SH"
    },
    {
        "code": "600581",
        "name": "八一钢铁",
        "pinyin": "bygt",
        "market": "SH"
    },
    {
        "code": "600589",
        "name": "大位科技",
        "pinyin": "dwkj",
        "market": "SH"
    },
    {
        "code": "600604",
        "name": "市北高新",
        "pinyin": "sbgx",
        "market": "SH"
    },
    {
        "code": "600606",
        "name": "绿地控股",
        "pinyin": "ldkg",
        "market": "SH"
    },
    {
        "code": "600657",
        "name": "信达地产",
        "pinyin": "xddc",
        "market": "SH"
    },
    {
        "code": "600807",
        "name": "济高发展",
        "pinyin": "jgfz",
        "market": "SH"
    },
    {
        "code": "600959",
        "name": "江苏有线",
        "pinyin": "jsyx",
        "market": "SH"
    },
    {
        "code": "600976",
        "name": "健民集团",
        "pinyin": "jmjt",
        "market": "SH"
    },
    {
        "code": "601187",
        "name": "厦门银行",
        "pinyin": "smyh",
        "market": "SH"
    },
    {
        "code": "601229",
        "name": "上海银行",
        "pinyin": "shyh",
        "market": "SH"
    },
    {
        "code": "601375",
        "name": "中原证券",
        "pinyin": "zyzq",
        "market": "SH"
    },
    {
        "code": "601718",
        "name": "际华集团",
        "pinyin": "jhjt",
        "market": "SH"
    },
    {
        "code": "601992",
        "name": "金隅集团",
        "pinyin": "jyjt",
        "market": "SH"
    },
    {
        "code": "603027",
        "name": "千禾味业",
        "pinyin": "qhwy",
        "market": "SH"
    },
    {
        "code": "603115",
        "name": "海星股份",
        "pinyin": "hxgf",
        "market": "SH"
    },
    {
        "code": "603320",
        "name": "迪贝电气",
        "pinyin": "dbdq",
        "market": "SH"
    },
    {
        "code": "603377",
        "name": "ST东时",
        "pinyin": "stds",
        "market": "SH"
    },
    {
        "code": "603577",
        "name": "汇金通",
        "pinyin": "hjt",
        "market": "SH"
    },
    {
        "code": "603659",
        "name": "璞泰来",
        "pinyin": "ptl",
        "market": "SH"
    },
    {
        "code": "603697",
        "name": "有友食品",
        "pinyin": "yysp",
        "market": "SH"
    },
    {
        "code": "000035",
        "name": "中国天楹",
        "pinyin": "zgty",
        "market": "SZ"
    },
    {
        "code": "000528",
        "name": "柳    工",
        "pinyin": "l    g",
        "market": "SZ"
    },
    {
        "code": "000610",
        "name": "西安旅游",
        "pinyin": "xaly",
        "market": "SZ"
    },
    {
        "code": "000718",
        "name": "苏宁环球",
        "pinyin": "snhq",
        "market": "SZ"
    },
    {
        "code": "000761",
        "name": "本钢板材",
        "pinyin": "bgbc",
        "market": "SZ"
    },
    {
        "code": "000897",
        "name": "津滨发展",
        "pinyin": "jbfz",
        "market": "SZ"
    },
    {
        "code": "002010",
        "name": "传化智联",
        "pinyin": "chzl",
        "market": "SZ"
    },
    {
        "code": "002146",
        "name": "荣盛发展",
        "pinyin": "rsfz",
        "market": "SZ"
    },
    {
        "code": "002226",
        "name": "江南化工",
        "pinyin": "jnhg",
        "market": "SZ"
    },
    {
        "code": "002329",
        "name": "皇氏集团",
        "pinyin": "hsjt",
        "market": "SZ"
    },
    {
        "code": "002366",
        "name": "融发核电",
        "pinyin": "rfhd",
        "market": "SZ"
    },
    {
        "code": "002437",
        "name": "誉衡药业",
        "pinyin": "yhyy",
        "market": "SZ"
    },
    {
        "code": "002500",
        "name": "山西证券",
        "pinyin": "sxzq",
        "market": "SZ"
    },
    {
        "code": "002761",
        "name": "浙江建投",
        "pinyin": "zjjt",
        "market": "SZ"
    },
    {
        "code": "002807",
        "name": "江阴银行",
        "pinyin": "jyyh",
        "market": "SZ"
    },
    {
        "code": "002858",
        "name": "力盛体育",
        "pinyin": "lsty",
        "market": "SZ"
    },
    {
        "code": "003040",
        "name": "楚天龙",
        "pinyin": "ctl",
        "market": "SZ"
    },
    {
        "code": "300058",
        "name": "蓝色光标",
        "pinyin": "lsgb",
        "market": "SZ"
    },
    {
        "code": "300078",
        "name": "思创智联",
        "pinyin": "sczl",
        "market": "SZ"
    },
    {
        "code": "300315",
        "name": "掌趣科技",
        "pinyin": "zqkj",
        "market": "SZ"
    },
    {
        "code": "300360",
        "name": "炬华科技",
        "pinyin": "jhkj",
        "market": "SZ"
    },
    {
        "code": "300491",
        "name": "通合科技",
        "pinyin": "thkj",
        "market": "SZ"
    },
    {
        "code": "300575",
        "name": "中旗股份",
        "pinyin": "zqgf",
        "market": "SZ"
    },
    {
        "code": "300586",
        "name": "美联新材",
        "pinyin": "mlxc",
        "market": "SZ"
    },
    {
        "code": "300797",
        "name": "钢研纳克",
        "pinyin": "gynk",
        "market": "SZ"
    },
    {
        "code": "301039",
        "name": "中集车辆",
        "pinyin": "zjcl",
        "market": "SZ"
    },
    {
        "code": "301108",
        "name": "洁雅股份",
        "pinyin": "jygf",
        "market": "SZ"
    },
    {
        "code": "301120",
        "name": "新特电气",
        "pinyin": "xtdq",
        "market": "SZ"
    },
    {
        "code": "301509",
        "name": "金凯生科",
        "pinyin": "jksk",
        "market": "SZ"
    },
    {
        "code": "600019",
        "name": "宝钢股份",
        "pinyin": "bggf",
        "market": "SH"
    },
    {
        "code": "600126",
        "name": "杭钢股份",
        "pinyin": "hggf",
        "market": "SH"
    },
    {
        "code": "600210",
        "name": "紫江企业",
        "pinyin": "zjqy",
        "market": "SH"
    },
    {
        "code": "600231",
        "name": "凌钢股份",
        "pinyin": "lggf",
        "market": "SH"
    },
    {
        "code": "600318",
        "name": "新力金融",
        "pinyin": "xljr",
        "market": "SH"
    },
    {
        "code": "600480",
        "name": "凌云股份",
        "pinyin": "lygf",
        "market": "SH"
    },
    {
        "code": "600533",
        "name": "栖霞建设",
        "pinyin": "qxjs",
        "market": "SH"
    },
    {
        "code": "600568",
        "name": "ST中珠",
        "pinyin": "stzz",
        "market": "SH"
    },
    {
        "code": "600609",
        "name": "金杯汽车",
        "pinyin": "jbqc",
        "market": "SH"
    },
    {
        "code": "600650",
        "name": "锦江在线",
        "pinyin": "jjzx",
        "market": "SH"
    },
    {
        "code": "600869",
        "name": "远东股份",
        "pinyin": "ydgf",
        "market": "SH"
    },
    {
        "code": "600880",
        "name": "博瑞传播",
        "pinyin": "brcb",
        "market": "SH"
    },
    {
        "code": "600965",
        "name": "福成股份",
        "pinyin": "fcgf",
        "market": "SH"
    },
    {
        "code": "600981",
        "name": "苏豪汇鸿",
        "pinyin": "shhh",
        "market": "SH"
    },
    {
        "code": "601010",
        "name": "文峰股份",
        "pinyin": "wfgf",
        "market": "SH"
    },
    {
        "code": "601016",
        "name": "节能风电",
        "pinyin": "jnfd",
        "market": "SH"
    },
    {
        "code": "601319",
        "name": "中国人保",
        "pinyin": "zgrb",
        "market": "SH"
    },
    {
        "code": "601399",
        "name": "国机重装",
        "pinyin": "gjzz",
        "market": "SH"
    },
    {
        "code": "601500",
        "name": "通用股份",
        "pinyin": "tygf",
        "market": "SH"
    },
    {
        "code": "601800",
        "name": "中国交建",
        "pinyin": "zgjj",
        "market": "SH"
    },
    {
        "code": "601997",
        "name": "贵阳银行",
        "pinyin": "gyyh",
        "market": "SH"
    },
    {
        "code": "603018",
        "name": "华设集团",
        "pinyin": "hsjt",
        "market": "SH"
    },
    {
        "code": "603344",
        "name": "星德胜",
        "pinyin": "xds",
        "market": "SH"
    },
    {
        "code": "603368",
        "name": "柳药集团",
        "pinyin": "lyjt",
        "market": "SH"
    },
    {
        "code": "603507",
        "name": "振江股份",
        "pinyin": "zjgf",
        "market": "SH"
    },
    {
        "code": "603595",
        "name": "ST东尼",
        "pinyin": "stdn",
        "market": "SH"
    },
    {
        "code": "603828",
        "name": "ST柯利达",
        "pinyin": "stkld",
        "market": "SH"
    },
    {
        "code": "605099",
        "name": "共创草坪",
        "pinyin": "gccp",
        "market": "SH"
    },
    {
        "code": "000012",
        "name": "南  玻A",
        "pinyin": "n  ba",
        "market": "SZ"
    },
    {
        "code": "000537",
        "name": "绿发电力",
        "pinyin": "lfdl",
        "market": "SZ"
    },
    {
        "code": "000563",
        "name": "陕国投A",
        "pinyin": "sgta",
        "market": "SZ"
    },
    {
        "code": "000567",
        "name": "海德股份",
        "pinyin": "hdgf",
        "market": "SZ"
    },
    {
        "code": "000615",
        "name": "*ST美谷",
        "pinyin": "*stmg",
        "market": "SZ"
    },
    {
        "code": "000650",
        "name": "仁和药业",
        "pinyin": "rhyy",
        "market": "SZ"
    },
    {
        "code": "000701",
        "name": "厦门信达",
        "pinyin": "smxd",
        "market": "SZ"
    },
    {
        "code": "000801",
        "name": "四川九洲",
        "pinyin": "scjz",
        "market": "SZ"
    },
    {
        "code": "000838",
        "name": "财信发展",
        "pinyin": "cxfz",
        "market": "SZ"
    },
    {
        "code": "000927",
        "name": "中国铁物",
        "pinyin": "zgtw",
        "market": "SZ"
    },
    {
        "code": "002045",
        "name": "国光电器",
        "pinyin": "ggdq",
        "market": "SZ"
    },
    {
        "code": "002047",
        "name": "*ST宝鹰",
        "pinyin": "*stby",
        "market": "SZ"
    },
    {
        "code": "002102",
        "name": "能特科技",
        "pinyin": "ntkj",
        "market": "SZ"
    },
    {
        "code": "002136",
        "name": "安 纳 达",
        "pinyin": "a n d",
        "market": "SZ"
    },
    {
        "code": "002207",
        "name": "准油股份",
        "pinyin": "zygf",
        "market": "SZ"
    },
    {
        "code": "002238",
        "name": "天威视讯",
        "pinyin": "twsx",
        "market": "SZ"
    },
    {
        "code": "002252",
        "name": "上海莱士",
        "pinyin": "shls",
        "market": "SZ"
    },
    {
        "code": "002302",
        "name": "西部建设",
        "pinyin": "xbjs",
        "market": "SZ"
    },
    {
        "code": "002323",
        "name": "雅博股份",
        "pinyin": "ybgf",
        "market": "SZ"
    },
    {
        "code": "002332",
        "name": "仙琚制药",
        "pinyin": "xjzy",
        "market": "SZ"
    },
    {
        "code": "002347",
        "name": "泰尔股份",
        "pinyin": "tegf",
        "market": "SZ"
    },
    {
        "code": "002372",
        "name": "伟星新材",
        "pinyin": "wxxc",
        "market": "SZ"
    },
    {
        "code": "002431",
        "name": "棕榈股份",
        "pinyin": "zlgf",
        "market": "SZ"
    },
    {
        "code": "002476",
        "name": "宝莫股份",
        "pinyin": "bmgf",
        "market": "SZ"
    },
    {
        "code": "002543",
        "name": "万和电气",
        "pinyin": "whdq",
        "market": "SZ"
    },
    {
        "code": "002555",
        "name": "三七互娱",
        "pinyin": "sqhy",
        "market": "SZ"
    },
    {
        "code": "002589",
        "name": "瑞康医药",
        "pinyin": "rkyy",
        "market": "SZ"
    },
    {
        "code": "002705",
        "name": "新宝股份",
        "pinyin": "xbgf",
        "market": "SZ"
    },
    {
        "code": "002724",
        "name": "海洋王",
        "pinyin": "hyw",
        "market": "SZ"
    },
    {
        "code": "002765",
        "name": "蓝黛科技",
        "pinyin": "ldkj",
        "market": "SZ"
    },
    {
        "code": "002786",
        "name": "银宝山新",
        "pinyin": "ybsx",
        "market": "SZ"
    },
    {
        "code": "002835",
        "name": "同为股份",
        "pinyin": "twgf",
        "market": "SZ"
    },
    {
        "code": "300011",
        "name": "鼎汉技术",
        "pinyin": "dhjs",
        "market": "SZ"
    },
    {
        "code": "300048",
        "name": "合康新能",
        "pinyin": "hkxn",
        "market": "SZ"
    },
    {
        "code": "300050",
        "name": "世纪鼎利",
        "pinyin": "sjdl",
        "market": "SZ"
    },
    {
        "code": "300106",
        "name": "西部牧业",
        "pinyin": "xbmy",
        "market": "SZ"
    },
    {
        "code": "300137",
        "name": "先河环保",
        "pinyin": "xhhb",
        "market": "SZ"
    },
    {
        "code": "300261",
        "name": "雅本化学",
        "pinyin": "ybhx",
        "market": "SZ"
    },
    {
        "code": "300457",
        "name": "赢合科技",
        "pinyin": "yhkj",
        "market": "SZ"
    },
    {
        "code": "300510",
        "name": "金冠股份",
        "pinyin": "jggf",
        "market": "SZ"
    },
    {
        "code": "300518",
        "name": "新迅达",
        "pinyin": "xxd",
        "market": "SZ"
    },
    {
        "code": "300746",
        "name": "汉嘉数智",
        "pinyin": "hjsz",
        "market": "SZ"
    },
    {
        "code": "300786",
        "name": "国林科技",
        "pinyin": "glkj",
        "market": "SZ"
    },
    {
        "code": "301339",
        "name": "通行宝",
        "pinyin": "thb",
        "market": "SZ"
    },
    {
        "code": "600006",
        "name": "东风股份",
        "pinyin": "dfgf",
        "market": "SH"
    },
    {
        "code": "600016",
        "name": "民生银行",
        "pinyin": "msyh",
        "market": "SH"
    },
    {
        "code": "600073",
        "name": "光明肉业",
        "pinyin": "gmry",
        "market": "SH"
    },
    {
        "code": "600143",
        "name": "金发科技",
        "pinyin": "jfkj",
        "market": "SH"
    },
    {
        "code": "600227",
        "name": "赤天化",
        "pinyin": "cth",
        "market": "SH"
    },
    {
        "code": "600369",
        "name": "西南证券",
        "pinyin": "xnzq",
        "market": "SH"
    },
    {
        "code": "600428",
        "name": "中远海特",
        "pinyin": "zyht",
        "market": "SH"
    },
    {
        "code": "600538",
        "name": "国发股份",
        "pinyin": "gfgf",
        "market": "SH"
    },
    {
        "code": "600569",
        "name": "安阳钢铁",
        "pinyin": "aygt",
        "market": "SH"
    },
    {
        "code": "600572",
        "name": "康恩贝",
        "pinyin": "keb",
        "market": "SH"
    },
    {
        "code": "600603",
        "name": "广汇物流",
        "pinyin": "ghwl",
        "market": "SH"
    },
    {
        "code": "600643",
        "name": "爱建集团",
        "pinyin": "ajjt",
        "market": "SH"
    },
    {
        "code": "600654",
        "name": "中安科",
        "pinyin": "zak",
        "market": "SH"
    },
    {
        "code": "600684",
        "name": "珠江股份",
        "pinyin": "zjgf",
        "market": "SH"
    },
    {
        "code": "600694",
        "name": "大商股份",
        "pinyin": "dsgf",
        "market": "SH"
    },
    {
        "code": "600751",
        "name": "海航科技",
        "pinyin": "hhkj",
        "market": "SH"
    },
    {
        "code": "600782",
        "name": "新钢股份",
        "pinyin": "xggf",
        "market": "SH"
    },
    {
        "code": "600802",
        "name": "福建水泥",
        "pinyin": "fjsn",
        "market": "SH"
    },
    {
        "code": "600816",
        "name": "建元信托",
        "pinyin": "jyxt",
        "market": "SH"
    },
    {
        "code": "600894",
        "name": "广日股份",
        "pinyin": "grgf",
        "market": "SH"
    },
    {
        "code": "600939",
        "name": "重庆建工",
        "pinyin": "zqjg",
        "market": "SH"
    },
    {
        "code": "601008",
        "name": "连云港",
        "pinyin": "lyg",
        "market": "SH"
    },
    {
        "code": "601009",
        "name": "南京银行",
        "pinyin": "njyh",
        "market": "SH"
    },
    {
        "code": "601163",
        "name": "三角轮胎",
        "pinyin": "sjlt",
        "market": "SH"
    },
    {
        "code": "601169",
        "name": "北京银行",
        "pinyin": "bjyh",
        "market": "SH"
    },
    {
        "code": "601186",
        "name": "中国铁建",
        "pinyin": "zgtj",
        "market": "SH"
    },
    {
        "code": "601198",
        "name": "东兴证券",
        "pinyin": "dxzq",
        "market": "SH"
    },
    {
        "code": "601288",
        "name": "农业银行",
        "pinyin": "nyyh",
        "market": "SH"
    },
    {
        "code": "601311",
        "name": "骆驼股份",
        "pinyin": "ltgf",
        "market": "SH"
    },
    {
        "code": "601616",
        "name": "广电电气",
        "pinyin": "gddq",
        "market": "SH"
    },
    {
        "code": "601928",
        "name": "凤凰传媒",
        "pinyin": "fhcm",
        "market": "SH"
    },
    {
        "code": "601949",
        "name": "中国出版",
        "pinyin": "zgcb",
        "market": "SH"
    },
    {
        "code": "601991",
        "name": "大唐发电",
        "pinyin": "dtfd",
        "market": "SH"
    },
    {
        "code": "603222",
        "name": "济民健康",
        "pinyin": "jmjk",
        "market": "SH"
    },
    {
        "code": "603315",
        "name": "福鞍股份",
        "pinyin": "fagf",
        "market": "SH"
    },
    {
        "code": "603382",
        "name": "海阳科技",
        "pinyin": "hykj",
        "market": "SH"
    },
    {
        "code": "603633",
        "name": "徕木股份",
        "pinyin": "lmgf",
        "market": "SH"
    },
    {
        "code": "603825",
        "name": "ST华扬",
        "pinyin": "sthy",
        "market": "SH"
    },
    {
        "code": "603867",
        "name": "新化股份",
        "pinyin": "xhgf",
        "market": "SH"
    },
    {
        "code": "603990",
        "name": "麦迪科技",
        "pinyin": "mdkj",
        "market": "SH"
    },
    {
        "code": "605266",
        "name": "健之佳",
        "pinyin": "jzj",
        "market": "SH"
    },
    {
        "code": "000156",
        "name": "华数传媒",
        "pinyin": "hscm",
        "market": "SZ"
    },
    {
        "code": "000520",
        "name": "凤凰航运",
        "pinyin": "fhhy",
        "market": "SZ"
    },
    {
        "code": "000626",
        "name": "远大控股",
        "pinyin": "ydkg",
        "market": "SZ"
    },
    {
        "code": "000727",
        "name": "冠捷科技",
        "pinyin": "gjkj",
        "market": "SZ"
    },
    {
        "code": "000848",
        "name": "承德露露",
        "pinyin": "cdll",
        "market": "SZ"
    },
    {
        "code": "002101",
        "name": "广东鸿图",
        "pinyin": "gdht",
        "market": "SZ"
    },
    {
        "code": "002121",
        "name": "科陆电子",
        "pinyin": "kldz",
        "market": "SZ"
    },
    {
        "code": "002133",
        "name": "广宇集团",
        "pinyin": "gyjt",
        "market": "SZ"
    },
    {
        "code": "002175",
        "name": "东方智造",
        "pinyin": "dfzz",
        "market": "SZ"
    },
    {
        "code": "002276",
        "name": "万马股份",
        "pinyin": "wmgf",
        "market": "SZ"
    },
    {
        "code": "002307",
        "name": "北新路桥",
        "pinyin": "bxlq",
        "market": "SZ"
    },
    {
        "code": "002346",
        "name": "柘中股份",
        "pinyin": "zzgf",
        "market": "SZ"
    },
    {
        "code": "002419",
        "name": "天虹股份",
        "pinyin": "thgf",
        "market": "SZ"
    },
    {
        "code": "002421",
        "name": "达实智能",
        "pinyin": "dszn",
        "market": "SZ"
    },
    {
        "code": "002550",
        "name": "千红制药",
        "pinyin": "qhzy",
        "market": "SZ"
    },
    {
        "code": "002630",
        "name": "ST华西",
        "pinyin": "sthx",
        "market": "SZ"
    },
    {
        "code": "002681",
        "name": "奋达科技",
        "pinyin": "fdkj",
        "market": "SZ"
    },
    {
        "code": "002742",
        "name": "*ST三圣",
        "pinyin": "*stss",
        "market": "SZ"
    },
    {
        "code": "002803",
        "name": "吉宏股份",
        "pinyin": "jhgf",
        "market": "SZ"
    },
    {
        "code": "002878",
        "name": "元隆雅图",
        "pinyin": "ylyt",
        "market": "SZ"
    },
    {
        "code": "002907",
        "name": "华森制药",
        "pinyin": "hszy",
        "market": "SZ"
    },
    {
        "code": "002912",
        "name": "中新赛克",
        "pinyin": "zxsk",
        "market": "SZ"
    },
    {
        "code": "002958",
        "name": "青农商行",
        "pinyin": "qnsh",
        "market": "SZ"
    },
    {
        "code": "002984",
        "name": "森麒麟",
        "pinyin": "sql",
        "market": "SZ"
    },
    {
        "code": "300026",
        "name": "红日药业",
        "pinyin": "hryy",
        "market": "SZ"
    },
    {
        "code": "300120",
        "name": "经纬辉开",
        "pinyin": "jwhk",
        "market": "SZ"
    },
    {
        "code": "300217",
        "name": "东方电热",
        "pinyin": "dfdr",
        "market": "SZ"
    },
    {
        "code": "300381",
        "name": "溢多利",
        "pinyin": "ydl",
        "market": "SZ"
    },
    {
        "code": "300421",
        "name": "力星股份",
        "pinyin": "lxgf",
        "market": "SZ"
    },
    {
        "code": "300441",
        "name": "鲍斯股份",
        "pinyin": "bsgf",
        "market": "SZ"
    },
    {
        "code": "300449",
        "name": "汉邦高科",
        "pinyin": "hbgk",
        "market": "SZ"
    },
    {
        "code": "300738",
        "name": "奥飞数据",
        "pinyin": "afsj",
        "market": "SZ"
    },
    {
        "code": "300790",
        "name": "宇瞳光学",
        "pinyin": "ytgx",
        "market": "SZ"
    },
    {
        "code": "301175",
        "name": "中科环保",
        "pinyin": "zkhb",
        "market": "SZ"
    },
    {
        "code": "301215",
        "name": "中汽股份",
        "pinyin": "zqgf",
        "market": "SZ"
    },
    {
        "code": "301268",
        "name": "铭利达",
        "pinyin": "mld",
        "market": "SZ"
    },
    {
        "code": "301311",
        "name": "昆船智能",
        "pinyin": "kczn",
        "market": "SZ"
    },
    {
        "code": "600012",
        "name": "皖通高速",
        "pinyin": "wtgs",
        "market": "SH"
    },
    {
        "code": "600022",
        "name": "山东钢铁",
        "pinyin": "sdgt",
        "market": "SH"
    },
    {
        "code": "600106",
        "name": "重庆路桥",
        "pinyin": "zqlq",
        "market": "SH"
    },
    {
        "code": "600162",
        "name": "香江控股",
        "pinyin": "xjkg",
        "market": "SH"
    },
    {
        "code": "600203",
        "name": "福日电子",
        "pinyin": "frdz",
        "market": "SH"
    },
    {
        "code": "600233",
        "name": "圆通速递",
        "pinyin": "ytsd",
        "market": "SH"
    },
    {
        "code": "600248",
        "name": "陕建股份",
        "pinyin": "sjgf",
        "market": "SH"
    },
    {
        "code": "600252",
        "name": "中恒集团",
        "pinyin": "zhjt",
        "market": "SH"
    },
    {
        "code": "600279",
        "name": "重庆港",
        "pinyin": "zqg",
        "market": "SH"
    },
    {
        "code": "600322",
        "name": "津投城开",
        "pinyin": "jtck",
        "market": "SH"
    },
    {
        "code": "600423",
        "name": "柳化股份",
        "pinyin": "lhgf",
        "market": "SH"
    },
    {
        "code": "600503",
        "name": "华丽家族",
        "pinyin": "hljz",
        "market": "SH"
    },
    {
        "code": "600551",
        "name": "时代出版",
        "pinyin": "sdcb",
        "market": "SH"
    },
    {
        "code": "600597",
        "name": "光明乳业",
        "pinyin": "gmry",
        "market": "SH"
    },
    {
        "code": "600642",
        "name": "申能股份",
        "pinyin": "sngf",
        "market": "SH"
    },
    {
        "code": "600675",
        "name": "中华企业",
        "pinyin": "zhqy",
        "market": "SH"
    },
    {
        "code": "600704",
        "name": "XD物产中",
        "pinyin": "xdwcz",
        "market": "SH"
    },
    {
        "code": "600733",
        "name": "北汽蓝谷",
        "pinyin": "bqlg",
        "market": "SH"
    },
    {
        "code": "600778",
        "name": "友好集团",
        "pinyin": "yhjt",
        "market": "SH"
    },
    {
        "code": "600798",
        "name": "宁波海运",
        "pinyin": "nbhy",
        "market": "SH"
    },
    {
        "code": "600815",
        "name": "厦工股份",
        "pinyin": "sggf",
        "market": "SH"
    },
    {
        "code": "600956",
        "name": "新天绿能",
        "pinyin": "xtln",
        "market": "SH"
    },
    {
        "code": "600969",
        "name": "郴电国际",
        "pinyin": "cdgj",
        "market": "SH"
    },
    {
        "code": "600995",
        "name": "南网储能",
        "pinyin": "nwcn",
        "market": "SH"
    },
    {
        "code": "601006",
        "name": "大秦铁路",
        "pinyin": "dqtl",
        "market": "SH"
    },
    {
        "code": "601727",
        "name": "上海电气",
        "pinyin": "shdq",
        "market": "SH"
    },
    {
        "code": "601766",
        "name": "中国中车",
        "pinyin": "zgzc",
        "market": "SH"
    },
    {
        "code": "601858",
        "name": "中国科传",
        "pinyin": "zgkc",
        "market": "SH"
    },
    {
        "code": "601939",
        "name": "建设银行",
        "pinyin": "jsyh",
        "market": "SH"
    },
    {
        "code": "601963",
        "name": "重庆银行",
        "pinyin": "zqyh",
        "market": "SH"
    },
    {
        "code": "603032",
        "name": "德新科技",
        "pinyin": "dxkj",
        "market": "SH"
    },
    {
        "code": "603269",
        "name": "海鸥股份",
        "pinyin": "hogf",
        "market": "SH"
    },
    {
        "code": "603387",
        "name": "基蛋生物",
        "pinyin": "jdsw",
        "market": "SH"
    },
    {
        "code": "603439",
        "name": "三力制药",
        "pinyin": "slzy",
        "market": "SH"
    },
    {
        "code": "603689",
        "name": "皖天然气",
        "pinyin": "wtrq",
        "market": "SH"
    },
    {
        "code": "603838",
        "name": "*ST四通",
        "pinyin": "*stst",
        "market": "SH"
    },
    {
        "code": "605081",
        "name": "*ST太和",
        "pinyin": "*stth",
        "market": "SH"
    },
    {
        "code": "000055",
        "name": "方大集团",
        "pinyin": "fdjt",
        "market": "SZ"
    },
    {
        "code": "000488",
        "name": "ST晨鸣",
        "pinyin": "stcm",
        "market": "SZ"
    },
    {
        "code": "000639",
        "name": "西王食品",
        "pinyin": "xwsp",
        "market": "SZ"
    },
    {
        "code": "000828",
        "name": "东莞控股",
        "pinyin": "dgkg",
        "market": "SZ"
    },
    {
        "code": "001308",
        "name": "康冠科技",
        "pinyin": "kgkj",
        "market": "SZ"
    },
    {
        "code": "001391",
        "name": "国货航",
        "pinyin": "ghh",
        "market": "SZ"
    },
    {
        "code": "002035",
        "name": "华帝股份",
        "pinyin": "hdgf",
        "market": "SZ"
    },
    {
        "code": "002239",
        "name": "奥特佳",
        "pinyin": "atj",
        "market": "SZ"
    },
    {
        "code": "002242",
        "name": "九阳股份",
        "pinyin": "jygf",
        "market": "SZ"
    },
    {
        "code": "002251",
        "name": "步步高",
        "pinyin": "bbg",
        "market": "SZ"
    },
    {
        "code": "002331",
        "name": "皖通科技",
        "pinyin": "wtkj",
        "market": "SZ"
    },
    {
        "code": "002408",
        "name": "齐翔腾达",
        "pinyin": "qxtd",
        "market": "SZ"
    },
    {
        "code": "002492",
        "name": "恒基达鑫",
        "pinyin": "hjdx",
        "market": "SZ"
    },
    {
        "code": "002520",
        "name": "日发精机",
        "pinyin": "rfjj",
        "market": "SZ"
    },
    {
        "code": "002567",
        "name": "唐人神",
        "pinyin": "trs",
        "market": "SZ"
    },
    {
        "code": "002611",
        "name": "东方精工",
        "pinyin": "dfjg",
        "market": "SZ"
    },
    {
        "code": "002771",
        "name": "真视通",
        "pinyin": "zst",
        "market": "SZ"
    },
    {
        "code": "002793",
        "name": "罗欣药业",
        "pinyin": "lxyy",
        "market": "SZ"
    },
    {
        "code": "002800",
        "name": "天顺股份",
        "pinyin": "tsgf",
        "market": "SZ"
    },
    {
        "code": "300018",
        "name": "中元股份",
        "pinyin": "zygf",
        "market": "SZ"
    },
    {
        "code": "300182",
        "name": "捷成股份",
        "pinyin": "jcgf",
        "market": "SZ"
    },
    {
        "code": "300311",
        "name": "ST任子行",
        "pinyin": "strzh",
        "market": "SZ"
    },
    {
        "code": "300343",
        "name": "ST联创",
        "pinyin": "stlc",
        "market": "SZ"
    },
    {
        "code": "300464",
        "name": "星徽股份",
        "pinyin": "xhgf",
        "market": "SZ"
    },
    {
        "code": "300536",
        "name": "农尚环境",
        "pinyin": "nshj",
        "market": "SZ"
    },
    {
        "code": "300647",
        "name": "超频三",
        "pinyin": "cps",
        "market": "SZ"
    },
    {
        "code": "300653",
        "name": "正海生物",
        "pinyin": "zhsw",
        "market": "SZ"
    },
    {
        "code": "300685",
        "name": "艾德生物",
        "pinyin": "adsw",
        "market": "SZ"
    },
    {
        "code": "300867",
        "name": "圣元环保",
        "pinyin": "syhb",
        "market": "SZ"
    },
    {
        "code": "300965",
        "name": "恒宇信通",
        "pinyin": "hyxt",
        "market": "SZ"
    },
    {
        "code": "301118",
        "name": "恒光股份",
        "pinyin": "hggf",
        "market": "SZ"
    },
    {
        "code": "301121",
        "name": "紫建电子",
        "pinyin": "zjdz",
        "market": "SZ"
    },
    {
        "code": "301179",
        "name": "泽宇智能",
        "pinyin": "zyzn",
        "market": "SZ"
    },
    {
        "code": "600023",
        "name": "浙能电力",
        "pinyin": "zndl",
        "market": "SH"
    },
    {
        "code": "600050",
        "name": "中国联通",
        "pinyin": "zglt",
        "market": "SH"
    },
    {
        "code": "600114",
        "name": "东睦股份",
        "pinyin": "dmgf",
        "market": "SH"
    },
    {
        "code": "600152",
        "name": "维科技术",
        "pinyin": "wkjs",
        "market": "SH"
    },
    {
        "code": "600167",
        "name": "联美控股",
        "pinyin": "lmkg",
        "market": "SH"
    },
    {
        "code": "600188",
        "name": "兖矿能源",
        "pinyin": "ykny",
        "market": "SH"
    },
    {
        "code": "600223",
        "name": "福瑞达",
        "pinyin": "frd",
        "market": "SH"
    },
    {
        "code": "600280",
        "name": "中央商场",
        "pinyin": "zysc",
        "market": "SH"
    },
    {
        "code": "600299",
        "name": "安迪苏",
        "pinyin": "ads",
        "market": "SH"
    },
    {
        "code": "600515",
        "name": "海南机场",
        "pinyin": "hnjc",
        "market": "SH"
    },
    {
        "code": "600545",
        "name": "卓郎智能",
        "pinyin": "zlzn",
        "market": "SH"
    },
    {
        "code": "600546",
        "name": "山煤国际",
        "pinyin": "smgj",
        "market": "SH"
    },
    {
        "code": "600575",
        "name": "淮河能源",
        "pinyin": "hhny",
        "market": "SH"
    },
    {
        "code": "600611",
        "name": "大众交通",
        "pinyin": "dzjt",
        "market": "SH"
    },
    {
        "code": "600812",
        "name": "华北制药",
        "pinyin": "hbzy",
        "market": "SH"
    },
    {
        "code": "600833",
        "name": "第一医药",
        "pinyin": "dyyy",
        "market": "SH"
    },
    {
        "code": "600866",
        "name": "星湖科技",
        "pinyin": "xhkj",
        "market": "SH"
    },
    {
        "code": "600892",
        "name": "*ST大晟",
        "pinyin": "*stds",
        "market": "SH"
    },
    {
        "code": "600903",
        "name": "贵州燃气",
        "pinyin": "gzrq",
        "market": "SH"
    },
    {
        "code": "601005",
        "name": "重庆钢铁",
        "pinyin": "zqgt",
        "market": "SH"
    },
    {
        "code": "601222",
        "name": "林洋能源",
        "pinyin": "lyny",
        "market": "SH"
    },
    {
        "code": "601228",
        "name": "广州港",
        "pinyin": "gzg",
        "market": "SH"
    },
    {
        "code": "601555",
        "name": "东吴证券",
        "pinyin": "dwzq",
        "market": "SH"
    },
    {
        "code": "601816",
        "name": "京沪高铁",
        "pinyin": "jhgt",
        "market": "SH"
    },
    {
        "code": "601827",
        "name": "三峰环境",
        "pinyin": "sfhj",
        "market": "SH"
    },
    {
        "code": "601966",
        "name": "玲珑轮胎",
        "pinyin": "lllt",
        "market": "SH"
    },
    {
        "code": "603007",
        "name": "*ST花王",
        "pinyin": "*sthw",
        "market": "SH"
    },
    {
        "code": "603028",
        "name": "赛福天",
        "pinyin": "sft",
        "market": "SH"
    },
    {
        "code": "603318",
        "name": "水发燃气",
        "pinyin": "sfrq",
        "market": "SH"
    },
    {
        "code": "603323",
        "name": "苏农银行",
        "pinyin": "snyh",
        "market": "SH"
    },
    {
        "code": "603466",
        "name": "风语筑",
        "pinyin": "fyz",
        "market": "SH"
    },
    {
        "code": "603669",
        "name": "灵康药业",
        "pinyin": "lkyy",
        "market": "SH"
    },
    {
        "code": "603801",
        "name": "志邦家居",
        "pinyin": "zbjj",
        "market": "SH"
    },
    {
        "code": "603885",
        "name": "吉祥航空",
        "pinyin": "jxhk",
        "market": "SH"
    },
    {
        "code": "605303",
        "name": "园林股份",
        "pinyin": "ylgf",
        "market": "SH"
    },
    {
        "code": "000010",
        "name": "美丽生态",
        "pinyin": "mlst",
        "market": "SZ"
    },
    {
        "code": "000016",
        "name": "深康佳A",
        "pinyin": "skja",
        "market": "SZ"
    },
    {
        "code": "000088",
        "name": "盐 田 港",
        "pinyin": "y t g",
        "market": "SZ"
    },
    {
        "code": "000553",
        "name": "安道麦A",
        "pinyin": "adma",
        "market": "SZ"
    },
    {
        "code": "000632",
        "name": "三木集团",
        "pinyin": "smjt",
        "market": "SZ"
    },
    {
        "code": "000719",
        "name": "中原传媒",
        "pinyin": "zycm",
        "market": "SZ"
    },
    {
        "code": "000799",
        "name": "酒鬼酒",
        "pinyin": "jgj",
        "market": "SZ"
    },
    {
        "code": "000882",
        "name": "华联股份",
        "pinyin": "hlgf",
        "market": "SZ"
    },
    {
        "code": "000885",
        "name": "城发环境",
        "pinyin": "cfhj",
        "market": "SZ"
    },
    {
        "code": "000886",
        "name": "海南高速",
        "pinyin": "hngs",
        "market": "SZ"
    },
    {
        "code": "000937",
        "name": "冀中能源",
        "pinyin": "jzny",
        "market": "SZ"
    },
    {
        "code": "002015",
        "name": "协鑫能科",
        "pinyin": "xxnk",
        "market": "SZ"
    },
    {
        "code": "002122",
        "name": "ST汇洲",
        "pinyin": "sthz",
        "market": "SZ"
    },
    {
        "code": "002154",
        "name": "报 喜 鸟",
        "pinyin": "b x n",
        "market": "SZ"
    },
    {
        "code": "002157",
        "name": "正邦科技",
        "pinyin": "zbkj",
        "market": "SZ"
    },
    {
        "code": "002172",
        "name": "澳洋健康",
        "pinyin": "ayjk",
        "market": "SZ"
    },
    {
        "code": "002178",
        "name": "延华智能",
        "pinyin": "yhzn",
        "market": "SZ"
    },
    {
        "code": "002208",
        "name": "合肥城建",
        "pinyin": "hfcj",
        "market": "SZ"
    },
    {
        "code": "002216",
        "name": "三全食品",
        "pinyin": "sqsp",
        "market": "SZ"
    },
    {
        "code": "002262",
        "name": "恩华药业",
        "pinyin": "ehyy",
        "market": "SZ"
    },
    {
        "code": "002333",
        "name": "罗普斯金",
        "pinyin": "lpsj",
        "market": "SZ"
    },
    {
        "code": "002334",
        "name": "英威腾",
        "pinyin": "ywt",
        "market": "SZ"
    },
    {
        "code": "002344",
        "name": "海宁皮城",
        "pinyin": "hnpc",
        "market": "SZ"
    },
    {
        "code": "002356",
        "name": "赫美集团",
        "pinyin": "hmjt",
        "market": "SZ"
    },
    {
        "code": "002375",
        "name": "亚厦股份",
        "pinyin": "ysgf",
        "market": "SZ"
    },
    {
        "code": "002425",
        "name": "凯撒文化",
        "pinyin": "kswh",
        "market": "SZ"
    },
    {
        "code": "002445",
        "name": "中南文化",
        "pinyin": "znwh",
        "market": "SZ"
    },
    {
        "code": "002452",
        "name": "长高电新",
        "pinyin": "cgdx",
        "market": "SZ"
    },
    {
        "code": "002542",
        "name": "中化岩土",
        "pinyin": "zhyt",
        "market": "SZ"
    },
    {
        "code": "002547",
        "name": "春兴精工",
        "pinyin": "cxjg",
        "market": "SZ"
    },
    {
        "code": "002626",
        "name": "金达威",
        "pinyin": "jdw",
        "market": "SZ"
    },
    {
        "code": "002650",
        "name": "ST加加",
        "pinyin": "stjj",
        "market": "SZ"
    },
    {
        "code": "002694",
        "name": "顾地科技",
        "pinyin": "gdkj",
        "market": "SZ"
    },
    {
        "code": "002727",
        "name": "一心堂",
        "pinyin": "yxt",
        "market": "SZ"
    },
    {
        "code": "002839",
        "name": "张家港行",
        "pinyin": "zjgh",
        "market": "SZ"
    },
    {
        "code": "002861",
        "name": "瀛通通讯",
        "pinyin": "yttx",
        "market": "SZ"
    },
    {
        "code": "300027",
        "name": "华谊兄弟",
        "pinyin": "hyxd",
        "market": "SZ"
    },
    {
        "code": "300082",
        "name": "奥克股份",
        "pinyin": "akgf",
        "market": "SZ"
    },
    {
        "code": "300119",
        "name": "瑞普生物",
        "pinyin": "rpsw",
        "market": "SZ"
    },
    {
        "code": "300160",
        "name": "秀强股份",
        "pinyin": "xqgf",
        "market": "SZ"
    },
    {
        "code": "300173",
        "name": "ST福能",
        "pinyin": "stfn",
        "market": "SZ"
    },
    {
        "code": "300194",
        "name": "福安药业",
        "pinyin": "fayy",
        "market": "SZ"
    },
    {
        "code": "300256",
        "name": "星星科技",
        "pinyin": "xxkj",
        "market": "SZ"
    },
    {
        "code": "300303",
        "name": "聚飞光电",
        "pinyin": "jfgd",
        "market": "SZ"
    },
    {
        "code": "300490",
        "name": "华自科技",
        "pinyin": "hzkj",
        "market": "SZ"
    },
    {
        "code": "300605",
        "name": "恒锋信息",
        "pinyin": "hfxx",
        "market": "SZ"
    },
    {
        "code": "301048",
        "name": "金鹰重工",
        "pinyin": "jyzg",
        "market": "SZ"
    },
    {
        "code": "301076",
        "name": "新瀚新材",
        "pinyin": "xhxc",
        "market": "SZ"
    },
    {
        "code": "301195",
        "name": "北路智控",
        "pinyin": "blzk",
        "market": "SZ"
    },
    {
        "code": "301335",
        "name": "天元宠物",
        "pinyin": "tycw",
        "market": "SZ"
    },
    {
        "code": "301370",
        "name": "国科恒泰",
        "pinyin": "gkht",
        "market": "SZ"
    },
    {
        "code": "600032",
        "name": "浙江新能",
        "pinyin": "zjxn",
        "market": "SH"
    },
    {
        "code": "600082",
        "name": "海泰发展",
        "pinyin": "htfz",
        "market": "SH"
    },
    {
        "code": "600136",
        "name": "ST明诚",
        "pinyin": "stmc",
        "market": "SH"
    },
    {
        "code": "600157",
        "name": "永泰能源",
        "pinyin": "ytny",
        "market": "SH"
    },
    {
        "code": "600198",
        "name": "大唐电信",
        "pinyin": "dtdx",
        "market": "SH"
    },
    {
        "code": "600222",
        "name": "太龙药业",
        "pinyin": "tlyy",
        "market": "SH"
    },
    {
        "code": "600239",
        "name": "云南城投",
        "pinyin": "ynct",
        "market": "SH"
    },
    {
        "code": "600320",
        "name": "振华重工",
        "pinyin": "zhzg",
        "market": "SH"
    },
    {
        "code": "600353",
        "name": "旭光电子",
        "pinyin": "xgdz",
        "market": "SH"
    },
    {
        "code": "600405",
        "name": "动力源",
        "pinyin": "dly",
        "market": "SH"
    },
    {
        "code": "600483",
        "name": "福能股份",
        "pinyin": "fngf",
        "market": "SH"
    },
    {
        "code": "600535",
        "name": "天士力",
        "pinyin": "tsl",
        "market": "SH"
    },
    {
        "code": "600582",
        "name": "天地科技",
        "pinyin": "tdkj",
        "market": "SH"
    },
    {
        "code": "600626",
        "name": "申达股份",
        "pinyin": "sdgf",
        "market": "SH"
    },
    {
        "code": "600688",
        "name": "上海石化",
        "pinyin": "shsh",
        "market": "SH"
    },
    {
        "code": "600743",
        "name": "华远控股",
        "pinyin": "hykg",
        "market": "SH"
    },
    {
        "code": "600794",
        "name": "保税科技",
        "pinyin": "bskj",
        "market": "SH"
    },
    {
        "code": "600873",
        "name": "梅花生物",
        "pinyin": "mhsw",
        "market": "SH"
    },
    {
        "code": "600928",
        "name": "西安银行",
        "pinyin": "xayh",
        "market": "SH"
    },
    {
        "code": "601003",
        "name": "柳钢股份",
        "pinyin": "lggf",
        "market": "SH"
    },
    {
        "code": "601139",
        "name": "深圳燃气",
        "pinyin": "szrq",
        "market": "SH"
    },
    {
        "code": "601177",
        "name": "杭齿前进",
        "pinyin": "hcqj",
        "market": "SH"
    },
    {
        "code": "601330",
        "name": "绿色动力",
        "pinyin": "lsdl",
        "market": "SH"
    },
    {
        "code": "601588",
        "name": "北辰实业",
        "pinyin": "bcsy",
        "market": "SH"
    },
    {
        "code": "601658",
        "name": "邮储银行",
        "pinyin": "ycyh",
        "market": "SH"
    },
    {
        "code": "601666",
        "name": "平煤股份",
        "pinyin": "pmgf",
        "market": "SH"
    },
    {
        "code": "601789",
        "name": "宁波建工",
        "pinyin": "nbjg",
        "market": "SH"
    },
    {
        "code": "601838",
        "name": "成都银行",
        "pinyin": "cdyh",
        "market": "SH"
    },
    {
        "code": "601868",
        "name": "中国能建",
        "pinyin": "zgnj",
        "market": "SH"
    },
    {
        "code": "601880",
        "name": "辽港股份",
        "pinyin": "lggf",
        "market": "SH"
    },
    {
        "code": "603030",
        "name": "全筑股份",
        "pinyin": "qzgf",
        "market": "SH"
    },
    {
        "code": "603035",
        "name": "常熟汽饰",
        "pinyin": "csqs",
        "market": "SH"
    },
    {
        "code": "603218",
        "name": "日月股份",
        "pinyin": "rygf",
        "market": "SH"
    },
    {
        "code": "603225",
        "name": "新凤鸣",
        "pinyin": "xfm",
        "market": "SH"
    },
    {
        "code": "603311",
        "name": "金海高科",
        "pinyin": "jhgk",
        "market": "SH"
    },
    {
        "code": "603334",
        "name": "丰倍生物",
        "pinyin": "fbsw",
        "market": "SH"
    },
    {
        "code": "603535",
        "name": "嘉诚国际",
        "pinyin": "jcgj",
        "market": "SH"
    },
    {
        "code": "603701",
        "name": "德宏股份",
        "pinyin": "dhgf",
        "market": "SH"
    },
    {
        "code": "603809",
        "name": "豪能股份",
        "pinyin": "hngf",
        "market": "SH"
    },
    {
        "code": "605116",
        "name": "奥锐特",
        "pinyin": "art",
        "market": "SH"
    },
    {
        "code": "605199",
        "name": "ST葫芦娃",
        "pinyin": "sthlw",
        "market": "SH"
    },
    {
        "code": "000027",
        "name": "深圳能源",
        "pinyin": "szny",
        "market": "SZ"
    },
    {
        "code": "000030",
        "name": "富奥股份",
        "pinyin": "fagf",
        "market": "SZ"
    },
    {
        "code": "000059",
        "name": "华锦股份",
        "pinyin": "hjgf",
        "market": "SZ"
    },
    {
        "code": "000159",
        "name": "国际实业",
        "pinyin": "gjsy",
        "market": "SZ"
    },
    {
        "code": "000404",
        "name": "长虹华意",
        "pinyin": "chhy",
        "market": "SZ"
    },
    {
        "code": "000425",
        "name": "徐工机械",
        "pinyin": "xgjx",
        "market": "SZ"
    },
    {
        "code": "000517",
        "name": "荣安地产",
        "pinyin": "radc",
        "market": "SZ"
    },
    {
        "code": "000543",
        "name": "皖能电力",
        "pinyin": "wndl",
        "market": "SZ"
    },
    {
        "code": "000552",
        "name": "甘肃能化",
        "pinyin": "gsnh",
        "market": "SZ"
    },
    {
        "code": "000564",
        "name": "供销大集",
        "pinyin": "gxdj",
        "market": "SZ"
    },
    {
        "code": "000572",
        "name": "海马汽车",
        "pinyin": "hmqc",
        "market": "SZ"
    },
    {
        "code": "000590",
        "name": "古汉医药",
        "pinyin": "ghyy",
        "market": "SZ"
    },
    {
        "code": "000597",
        "name": "东北制药",
        "pinyin": "dbzy",
        "market": "SZ"
    },
    {
        "code": "000656",
        "name": "*ST金科",
        "pinyin": "*stjk",
        "market": "SZ"
    },
    {
        "code": "000788",
        "name": "北大医药",
        "pinyin": "bdyy",
        "market": "SZ"
    },
    {
        "code": "000802",
        "name": "北京文化",
        "pinyin": "bjwh",
        "market": "SZ"
    },
    {
        "code": "000931",
        "name": "中 关 村",
        "pinyin": "z g c",
        "market": "SZ"
    },
    {
        "code": "000959",
        "name": "首钢股份",
        "pinyin": "sggf",
        "market": "SZ"
    },
    {
        "code": "001896",
        "name": "豫能控股",
        "pinyin": "ynkg",
        "market": "SZ"
    },
    {
        "code": "002004",
        "name": "华邦健康",
        "pinyin": "hbjk",
        "market": "SZ"
    },
    {
        "code": "002078",
        "name": "太阳纸业",
        "pinyin": "tyzy",
        "market": "SZ"
    },
    {
        "code": "002081",
        "name": "金 螳 螂",
        "pinyin": "j t l",
        "market": "SZ"
    },
    {
        "code": "002100",
        "name": "天康生物",
        "pinyin": "tksw",
        "market": "SZ"
    },
    {
        "code": "002158",
        "name": "汉钟精机",
        "pinyin": "hzjj",
        "market": "SZ"
    },
    {
        "code": "002184",
        "name": "海得控制",
        "pinyin": "hdkz",
        "market": "SZ"
    },
    {
        "code": "002191",
        "name": "劲嘉股份",
        "pinyin": "jjgf",
        "market": "SZ"
    },
    {
        "code": "002229",
        "name": "鸿博股份",
        "pinyin": "hbgf",
        "market": "SZ"
    },
    {
        "code": "002267",
        "name": "陕天然气",
        "pinyin": "strq",
        "market": "SZ"
    },
    {
        "code": "002274",
        "name": "华昌化工",
        "pinyin": "hchg",
        "market": "SZ"
    },
    {
        "code": "002309",
        "name": "中利集团",
        "pinyin": "zljt",
        "market": "SZ"
    },
    {
        "code": "002363",
        "name": "隆基机械",
        "pinyin": "ljjx",
        "market": "SZ"
    },
    {
        "code": "002386",
        "name": "天原股份",
        "pinyin": "tygf",
        "market": "SZ"
    },
    {
        "code": "002390",
        "name": "信邦制药",
        "pinyin": "xbzy",
        "market": "SZ"
    },
    {
        "code": "002458",
        "name": "益生股份",
        "pinyin": "ysgf",
        "market": "SZ"
    },
    {
        "code": "002465",
        "name": "海格通信",
        "pinyin": "hgtx",
        "market": "SZ"
    },
    {
        "code": "002470",
        "name": "金正大",
        "pinyin": "jzd",
        "market": "SZ"
    },
    {
        "code": "002482",
        "name": "广田集团",
        "pinyin": "gtjt",
        "market": "SZ"
    },
    {
        "code": "002527",
        "name": "新时达",
        "pinyin": "xsd",
        "market": "SZ"
    },
    {
        "code": "002884",
        "name": "凌霄泵业",
        "pinyin": "lxby",
        "market": "SZ"
    },
    {
        "code": "002900",
        "name": "哈三联",
        "pinyin": "hsl",
        "market": "SZ"
    },
    {
        "code": "002967",
        "name": "广电计量",
        "pinyin": "gdjl",
        "market": "SZ"
    },
    {
        "code": "300039",
        "name": "上海凯宝",
        "pinyin": "shkb",
        "market": "SZ"
    },
    {
        "code": "300074",
        "name": "华平股份",
        "pinyin": "hpgf",
        "market": "SZ"
    },
    {
        "code": "300110",
        "name": "华仁药业",
        "pinyin": "hryy",
        "market": "SZ"
    },
    {
        "code": "300199",
        "name": "翰宇药业",
        "pinyin": "hyyy",
        "market": "SZ"
    },
    {
        "code": "300266",
        "name": "兴源环境",
        "pinyin": "xyhj",
        "market": "SZ"
    },
    {
        "code": "300420",
        "name": "五洋自控",
        "pinyin": "wyzk",
        "market": "SZ"
    },
    {
        "code": "300480",
        "name": "光力科技",
        "pinyin": "glkj",
        "market": "SZ"
    },
    {
        "code": "300556",
        "name": "丝路视觉",
        "pinyin": "slsj",
        "market": "SZ"
    },
    {
        "code": "300590",
        "name": "移为通信",
        "pinyin": "ywtx",
        "market": "SZ"
    },
    {
        "code": "300645",
        "name": "正元智慧",
        "pinyin": "zyzh",
        "market": "SZ"
    },
    {
        "code": "300832",
        "name": "新产业",
        "pinyin": "xcy",
        "market": "SZ"
    },
    {
        "code": "301395",
        "name": "仁信新材",
        "pinyin": "rxxc",
        "market": "SZ"
    },
    {
        "code": "600004",
        "name": "白云机场",
        "pinyin": "byjc",
        "market": "SH"
    },
    {
        "code": "600008",
        "name": "首创环保",
        "pinyin": "schb",
        "market": "SH"
    },
    {
        "code": "600027",
        "name": "华电国际",
        "pinyin": "hdgj",
        "market": "SH"
    },
    {
        "code": "600108",
        "name": "亚盛集团",
        "pinyin": "ysjt",
        "market": "SH"
    },
    {
        "code": "600125",
        "name": "铁龙物流",
        "pinyin": "tlwl",
        "market": "SH"
    },
    {
        "code": "600159",
        "name": "大龙地产",
        "pinyin": "dldc",
        "market": "SH"
    },
    {
        "code": "600189",
        "name": "泉阳泉",
        "pinyin": "qyq",
        "market": "SH"
    },
    {
        "code": "600218",
        "name": "全柴动力",
        "pinyin": "qcdl",
        "market": "SH"
    },
    {
        "code": "600257",
        "name": "大湖股份",
        "pinyin": "dhgf",
        "market": "SH"
    },
    {
        "code": "600284",
        "name": "浦东建设",
        "pinyin": "pdjs",
        "market": "SH"
    },
    {
        "code": "600328",
        "name": "中盐化工",
        "pinyin": "zyhg",
        "market": "SH"
    },
    {
        "code": "600420",
        "name": "国药现代",
        "pinyin": "gyxd",
        "market": "SH"
    },
    {
        "code": "600425",
        "name": "青松建化",
        "pinyin": "qsjh",
        "market": "SH"
    },
    {
        "code": "600518",
        "name": "康美药业",
        "pinyin": "kmyy",
        "market": "SH"
    },
    {
        "code": "600567",
        "name": "山鹰国际",
        "pinyin": "sygj",
        "market": "SH"
    },
    {
        "code": "600664",
        "name": "哈药股份",
        "pinyin": "hygf",
        "market": "SH"
    },
    {
        "code": "600758",
        "name": "辽宁能源",
        "pinyin": "lnny",
        "market": "SH"
    },
    {
        "code": "600821",
        "name": "金开新能",
        "pinyin": "jkxn",
        "market": "SH"
    },
    {
        "code": "600851",
        "name": "海欣股份",
        "pinyin": "hxgf",
        "market": "SH"
    },
    {
        "code": "600874",
        "name": "创业环保",
        "pinyin": "cyhb",
        "market": "SH"
    },
    {
        "code": "600930",
        "name": "华电新能",
        "pinyin": "hdxn",
        "market": "SH"
    },
    {
        "code": "600936",
        "name": "北投科技",
        "pinyin": "btkj",
        "market": "SH"
    },
    {
        "code": "601059",
        "name": "信达证券",
        "pinyin": "xdzq",
        "market": "SH"
    },
    {
        "code": "601669",
        "name": "中国电建",
        "pinyin": "zgdj",
        "market": "SH"
    },
    {
        "code": "601818",
        "name": "光大银行",
        "pinyin": "gdyh",
        "market": "SH"
    },
    {
        "code": "601828",
        "name": "美凯龙",
        "pinyin": "mkl",
        "market": "SH"
    },
    {
        "code": "601866",
        "name": "中远海发",
        "pinyin": "zyhf",
        "market": "SH"
    },
    {
        "code": "601916",
        "name": "浙商银行",
        "pinyin": "zsyh",
        "market": "SH"
    },
    {
        "code": "601998",
        "name": "中信银行",
        "pinyin": "zxyh",
        "market": "SH"
    },
    {
        "code": "603122",
        "name": "合富中国",
        "pinyin": "hfzg",
        "market": "SH"
    },
    {
        "code": "603170",
        "name": "宝立食品",
        "pinyin": "blsp",
        "market": "SH"
    },
    {
        "code": "603755",
        "name": "日辰股份",
        "pinyin": "rcgf",
        "market": "SH"
    },
    {
        "code": "603815",
        "name": "交建股份",
        "pinyin": "jjgf",
        "market": "SH"
    },
    {
        "code": "603956",
        "name": "威派格",
        "pinyin": "wpg",
        "market": "SH"
    },
    {
        "code": "603998",
        "name": "方盛制药",
        "pinyin": "fszy",
        "market": "SH"
    },
    {
        "code": "605098",
        "name": "行动教育",
        "pinyin": "hdjy",
        "market": "SH"
    },
    {
        "code": "000056",
        "name": "皇庭国际",
        "pinyin": "htgj",
        "market": "SZ"
    },
    {
        "code": "000157",
        "name": "中联重科",
        "pinyin": "zlzk",
        "market": "SZ"
    },
    {
        "code": "000501",
        "name": "武商集团",
        "pinyin": "wsjt",
        "market": "SZ"
    },
    {
        "code": "000507",
        "name": "珠海港",
        "pinyin": "zhg",
        "market": "SZ"
    },
    {
        "code": "000509",
        "name": "华塑控股",
        "pinyin": "hskg",
        "market": "SZ"
    },
    {
        "code": "000685",
        "name": "中山公用",
        "pinyin": "zsgy",
        "market": "SZ"
    },
    {
        "code": "000697",
        "name": "ST炼石",
        "pinyin": "stls",
        "market": "SZ"
    },
    {
        "code": "000868",
        "name": "安凯客车",
        "pinyin": "akkc",
        "market": "SZ"
    },
    {
        "code": "000875",
        "name": "吉电股份",
        "pinyin": "jdgf",
        "market": "SZ"
    },
    {
        "code": "000913",
        "name": "钱江摩托",
        "pinyin": "qjmt",
        "market": "SZ"
    },
    {
        "code": "000989",
        "name": "九芝堂",
        "pinyin": "jzt",
        "market": "SZ"
    },
    {
        "code": "001282",
        "name": "三联锻造",
        "pinyin": "sldz",
        "market": "SZ"
    },
    {
        "code": "001356",
        "name": "富岭股份",
        "pinyin": "flgf",
        "market": "SZ"
    },
    {
        "code": "002024",
        "name": "ST易购",
        "pinyin": "styg",
        "market": "SZ"
    },
    {
        "code": "002037",
        "name": "保利联合",
        "pinyin": "bllh",
        "market": "SZ"
    },
    {
        "code": "002051",
        "name": "中工国际",
        "pinyin": "zggj",
        "market": "SZ"
    },
    {
        "code": "002085",
        "name": "万丰奥威",
        "pinyin": "wfaw",
        "market": "SZ"
    },
    {
        "code": "002107",
        "name": "沃华医药",
        "pinyin": "whyy",
        "market": "SZ"
    },
    {
        "code": "002174",
        "name": "游族网络",
        "pinyin": "yzwl",
        "market": "SZ"
    },
    {
        "code": "002263",
        "name": "大东南",
        "pinyin": "ddn",
        "market": "SZ"
    },
    {
        "code": "002269",
        "name": "美邦服饰",
        "pinyin": "mbfs",
        "market": "SZ"
    },
    {
        "code": "002330",
        "name": "得利斯",
        "pinyin": "dls",
        "market": "SZ"
    },
    {
        "code": "002426",
        "name": "胜利精密",
        "pinyin": "sljm",
        "market": "SZ"
    },
    {
        "code": "002479",
        "name": "富春环保",
        "pinyin": "fchb",
        "market": "SZ"
    },
    {
        "code": "002484",
        "name": "江海股份",
        "pinyin": "jhgf",
        "market": "SZ"
    },
    {
        "code": "002545",
        "name": "东方铁塔",
        "pinyin": "dftt",
        "market": "SZ"
    },
    {
        "code": "002551",
        "name": "尚荣医疗",
        "pinyin": "sryl",
        "market": "SZ"
    },
    {
        "code": "002556",
        "name": "辉隆股份",
        "pinyin": "hlgf",
        "market": "SZ"
    },
    {
        "code": "002596",
        "name": "海南瑞泽",
        "pinyin": "hnrz",
        "market": "SZ"
    },
    {
        "code": "002608",
        "name": "江苏国信",
        "pinyin": "jsgx",
        "market": "SZ"
    },
    {
        "code": "002620",
        "name": "ST瑞和",
        "pinyin": "strh",
        "market": "SZ"
    },
    {
        "code": "002631",
        "name": "德尔未来",
        "pinyin": "dewl",
        "market": "SZ"
    },
    {
        "code": "002640",
        "name": "跨境通",
        "pinyin": "kjt",
        "market": "SZ"
    },
    {
        "code": "002663",
        "name": "普邦股份",
        "pinyin": "pbgf",
        "market": "SZ"
    },
    {
        "code": "002668",
        "name": "TCL智家",
        "pinyin": "tclzj",
        "market": "SZ"
    },
    {
        "code": "002682",
        "name": "龙洲股份",
        "pinyin": "lzgf",
        "market": "SZ"
    },
    {
        "code": "002726",
        "name": "龙大美食",
        "pinyin": "ldms",
        "market": "SZ"
    },
    {
        "code": "002936",
        "name": "郑州银行",
        "pinyin": "zzyh",
        "market": "SZ"
    },
    {
        "code": "002966",
        "name": "苏州银行",
        "pinyin": "szyh",
        "market": "SZ"
    },
    {
        "code": "300147",
        "name": "ST香雪",
        "pinyin": "stxx",
        "market": "SZ"
    },
    {
        "code": "300197",
        "name": "节能铁汉",
        "pinyin": "jnth",
        "market": "SZ"
    },
    {
        "code": "300577",
        "name": "开润股份",
        "pinyin": "krgf",
        "market": "SZ"
    },
    {
        "code": "300918",
        "name": "南山智尚",
        "pinyin": "nszs",
        "market": "SZ"
    },
    {
        "code": "301216",
        "name": "万凯新材",
        "pinyin": "wkxc",
        "market": "SZ"
    },
    {
        "code": "301678",
        "name": "新恒汇",
        "pinyin": "xhh",
        "market": "SZ"
    },
    {
        "code": "600011",
        "name": "华能国际",
        "pinyin": "hngj",
        "market": "SH"
    },
    {
        "code": "600165",
        "name": "ST宁科",
        "pinyin": "stnk",
        "market": "SH"
    },
    {
        "code": "600169",
        "name": "ST太重",
        "pinyin": "sttz",
        "market": "SH"
    },
    {
        "code": "600269",
        "name": "赣粤高速",
        "pinyin": "gygs",
        "market": "SH"
    },
    {
        "code": "600368",
        "name": "五洲交通",
        "pinyin": "wzjt",
        "market": "SH"
    },
    {
        "code": "600382",
        "name": "广东明珠",
        "pinyin": "gdmz",
        "market": "SH"
    },
    {
        "code": "600400",
        "name": "红豆股份",
        "pinyin": "hdgf",
        "market": "SH"
    },
    {
        "code": "600449",
        "name": "宁夏建材",
        "pinyin": "nxjc",
        "market": "SH"
    },
    {
        "code": "600527",
        "name": "江南高纤",
        "pinyin": "jngx",
        "market": "SH"
    },
    {
        "code": "600537",
        "name": "亿晶光电",
        "pinyin": "yjgd",
        "market": "SH"
    },
    {
        "code": "600617",
        "name": "国新能源",
        "pinyin": "gxny",
        "market": "SH"
    },
    {
        "code": "600653",
        "name": "申华控股",
        "pinyin": "shkg",
        "market": "SH"
    },
    {
        "code": "600673",
        "name": "东阳光",
        "pinyin": "dyg",
        "market": "SH"
    },
    {
        "code": "600691",
        "name": "潞化科技",
        "pinyin": "lhkj",
        "market": "SH"
    },
    {
        "code": "600716",
        "name": "凤凰股份",
        "pinyin": "fhgf",
        "market": "SH"
    },
    {
        "code": "600738",
        "name": "丽尚国潮",
        "pinyin": "lsgc",
        "market": "SH"
    },
    {
        "code": "600795",
        "name": "国电电力",
        "pinyin": "gddl",
        "market": "SH"
    },
    {
        "code": "600881",
        "name": "亚泰集团",
        "pinyin": "ytjt",
        "market": "SH"
    },
    {
        "code": "600905",
        "name": "三峡能源",
        "pinyin": "sxny",
        "market": "SH"
    },
    {
        "code": "600979",
        "name": "广安爱众",
        "pinyin": "gaaz",
        "market": "SH"
    },
    {
        "code": "601086",
        "name": "国芳集团",
        "pinyin": "gfjt",
        "market": "SH"
    },
    {
        "code": "601101",
        "name": "昊华能源",
        "pinyin": "hhny",
        "market": "SH"
    },
    {
        "code": "601200",
        "name": "上海环境",
        "pinyin": "shhj",
        "market": "SH"
    },
    {
        "code": "601326",
        "name": "秦港股份",
        "pinyin": "qggf",
        "market": "SH"
    },
    {
        "code": "601398",
        "name": "工商银行",
        "pinyin": "gsyh",
        "market": "SH"
    },
    {
        "code": "601860",
        "name": "紫金银行",
        "pinyin": "zjyh",
        "market": "SH"
    },
    {
        "code": "603095",
        "name": "越剑智能",
        "pinyin": "yjzn",
        "market": "SH"
    },
    {
        "code": "603128",
        "name": "华贸物流",
        "pinyin": "hmwl",
        "market": "SH"
    },
    {
        "code": "603600",
        "name": "永艺股份",
        "pinyin": "yygf",
        "market": "SH"
    },
    {
        "code": "603789",
        "name": "*ST星农",
        "pinyin": "*stxn",
        "market": "SH"
    },
    {
        "code": "603866",
        "name": "桃李面包",
        "pinyin": "tlmb",
        "market": "SH"
    },
    {
        "code": "603871",
        "name": "嘉友国际",
        "pinyin": "jygj",
        "market": "SH"
    },
    {
        "code": "605300",
        "name": "佳禾食品",
        "pinyin": "jhsp",
        "market": "SH"
    },
    {
        "code": "000089",
        "name": "深圳机场",
        "pinyin": "szjc",
        "market": "SZ"
    },
    {
        "code": "000401",
        "name": "金隅冀东",
        "pinyin": "jyjd",
        "market": "SZ"
    },
    {
        "code": "000429",
        "name": "粤高速A",
        "pinyin": "ygsa",
        "market": "SZ"
    },
    {
        "code": "000536",
        "name": "华映科技",
        "pinyin": "hykj",
        "market": "SZ"
    },
    {
        "code": "000539",
        "name": "粤电力A",
        "pinyin": "ydla",
        "market": "SZ"
    },
    {
        "code": "000608",
        "name": "*ST阳光",
        "pinyin": "*styg",
        "market": "SZ"
    },
    {
        "code": "000659",
        "name": "珠海中富",
        "pinyin": "zhzf",
        "market": "SZ"
    },
    {
        "code": "000755",
        "name": "山西高速",
        "pinyin": "sxgs",
        "market": "SZ"
    },
    {
        "code": "000767",
        "name": "晋控电力",
        "pinyin": "jkdl",
        "market": "SZ"
    },
    {
        "code": "000779",
        "name": "甘咨询",
        "pinyin": "gzx",
        "market": "SZ"
    },
    {
        "code": "000793",
        "name": "ST华闻",
        "pinyin": "sthw",
        "market": "SZ"
    },
    {
        "code": "000919",
        "name": "金陵药业",
        "pinyin": "jlyy",
        "market": "SZ"
    },
    {
        "code": "000932",
        "name": "华菱钢铁",
        "pinyin": "hlgt",
        "market": "SZ"
    },
    {
        "code": "000999",
        "name": "华润三九",
        "pinyin": "hrsj",
        "market": "SZ"
    },
    {
        "code": "001213",
        "name": "中铁特货",
        "pinyin": "ztth",
        "market": "SZ"
    },
    {
        "code": "001872",
        "name": "招商港口",
        "pinyin": "zsgk",
        "market": "SZ"
    },
    {
        "code": "002042",
        "name": "华孚时尚",
        "pinyin": "hfss",
        "market": "SZ"
    },
    {
        "code": "002060",
        "name": "广东建工",
        "pinyin": "gdjg",
        "market": "SZ"
    },
    {
        "code": "002111",
        "name": "威海广泰",
        "pinyin": "whgt",
        "market": "SZ"
    },
    {
        "code": "002117",
        "name": "东港股份",
        "pinyin": "dggf",
        "market": "SZ"
    },
    {
        "code": "002138",
        "name": "顺络电子",
        "pinyin": "sldz",
        "market": "SZ"
    },
    {
        "code": "002211",
        "name": "ST宏达",
        "pinyin": "sthd",
        "market": "SZ"
    },
    {
        "code": "002217",
        "name": "合力泰",
        "pinyin": "hlt",
        "market": "SZ"
    },
    {
        "code": "002231",
        "name": "*ST奥维",
        "pinyin": "*staw",
        "market": "SZ"
    },
    {
        "code": "002248",
        "name": "华东数控",
        "pinyin": "hdsk",
        "market": "SZ"
    },
    {
        "code": "002249",
        "name": "大洋电机",
        "pinyin": "dydj",
        "market": "SZ"
    },
    {
        "code": "002250",
        "name": "联化科技",
        "pinyin": "lhkj",
        "market": "SZ"
    },
    {
        "code": "002292",
        "name": "奥飞娱乐",
        "pinyin": "afyl",
        "market": "SZ"
    },
    {
        "code": "002306",
        "name": "*ST云网",
        "pinyin": "*styw",
        "market": "SZ"
    },
    {
        "code": "002343",
        "name": "慈文传媒",
        "pinyin": "cwcm",
        "market": "SZ"
    },
    {
        "code": "002376",
        "name": "新北洋",
        "pinyin": "xby",
        "market": "SZ"
    },
    {
        "code": "002424",
        "name": "ST百灵",
        "pinyin": "stbl",
        "market": "SZ"
    },
    {
        "code": "002462",
        "name": "嘉事堂",
        "pinyin": "jst",
        "market": "SZ"
    },
    {
        "code": "002480",
        "name": "新筑股份",
        "pinyin": "xzgf",
        "market": "SZ"
    },
    {
        "code": "002489",
        "name": "浙江永强",
        "pinyin": "zjyq",
        "market": "SZ"
    },
    {
        "code": "002538",
        "name": "司尔特",
        "pinyin": "set",
        "market": "SZ"
    },
    {
        "code": "002613",
        "name": "北玻股份",
        "pinyin": "bbgf",
        "market": "SZ"
    },
    {
        "code": "002656",
        "name": "*ST摩登",
        "pinyin": "*stmd",
        "market": "SZ"
    },
    {
        "code": "002695",
        "name": "煌上煌",
        "pinyin": "hsh",
        "market": "SZ"
    },
    {
        "code": "002698",
        "name": "博实股份",
        "pinyin": "bsgf",
        "market": "SZ"
    },
    {
        "code": "002700",
        "name": "万憬能源",
        "pinyin": "wjny",
        "market": "SZ"
    },
    {
        "code": "002701",
        "name": "奥瑞金",
        "pinyin": "arj",
        "market": "SZ"
    },
    {
        "code": "002743",
        "name": "富煌钢构",
        "pinyin": "fhgg",
        "market": "SZ"
    },
    {
        "code": "002798",
        "name": "帝欧水华",
        "pinyin": "dosh",
        "market": "SZ"
    },
    {
        "code": "002845",
        "name": "同兴达",
        "pinyin": "txd",
        "market": "SZ"
    },
    {
        "code": "002889",
        "name": "东方嘉盛",
        "pinyin": "dfjs",
        "market": "SZ"
    },
    {
        "code": "002921",
        "name": "联诚精密",
        "pinyin": "lcjm",
        "market": "SZ"
    },
    {
        "code": "002931",
        "name": "锋龙股份",
        "pinyin": "flgf",
        "market": "SZ"
    },
    {
        "code": "002968",
        "name": "新大正",
        "pinyin": "xdz",
        "market": "SZ"
    },
    {
        "code": "002969",
        "name": "嘉美包装",
        "pinyin": "jmbz",
        "market": "SZ"
    },
    {
        "code": "003816",
        "name": "中国广核",
        "pinyin": "zggh",
        "market": "SZ"
    },
    {
        "code": "300084",
        "name": "海默科技",
        "pinyin": "hmkj",
        "market": "SZ"
    },
    {
        "code": "300145",
        "name": "南方泵业",
        "pinyin": "nfby",
        "market": "SZ"
    },
    {
        "code": "300174",
        "name": "元力股份",
        "pinyin": "ylgf",
        "market": "SZ"
    },
    {
        "code": "300175",
        "name": "ST朗源",
        "pinyin": "stly",
        "market": "SZ"
    },
    {
        "code": "300289",
        "name": "利德曼",
        "pinyin": "ldm",
        "market": "SZ"
    },
    {
        "code": "300301",
        "name": "ST长方",
        "pinyin": "stcf",
        "market": "SZ"
    },
    {
        "code": "300344",
        "name": "*ST立方",
        "pinyin": "*stlf",
        "market": "SZ"
    },
    {
        "code": "300391",
        "name": "*ST长药",
        "pinyin": "*stcy",
        "market": "SZ"
    },
    {
        "code": "300542",
        "name": "新晨科技",
        "pinyin": "xckj",
        "market": "SZ"
    },
    {
        "code": "300546",
        "name": "雄帝科技",
        "pinyin": "xdkj",
        "market": "SZ"
    },
    {
        "code": "300666",
        "name": "江丰电子",
        "pinyin": "jfdz",
        "market": "SZ"
    },
    {
        "code": "300667",
        "name": "必创科技",
        "pinyin": "bckj",
        "market": "SZ"
    },
    {
        "code": "300912",
        "name": "凯龙高科",
        "pinyin": "klgk",
        "market": "SZ"
    },
    {
        "code": "300988",
        "name": "津荣天宇",
        "pinyin": "jrty",
        "market": "SZ"
    },
    {
        "code": "301015",
        "name": "百洋医药",
        "pinyin": "byyy",
        "market": "SZ"
    },
    {
        "code": "301057",
        "name": "汇隆新材",
        "pinyin": "hlxc",
        "market": "SZ"
    },
    {
        "code": "301126",
        "name": "达嘉维康",
        "pinyin": "djwk",
        "market": "SZ"
    },
    {
        "code": "301136",
        "name": "招标股份",
        "pinyin": "zbgf",
        "market": "SZ"
    },
    {
        "code": "301305",
        "name": "朗坤科技",
        "pinyin": "lkkj",
        "market": "SZ"
    },
    {
        "code": "301318",
        "name": "维海德",
        "pinyin": "whd",
        "market": "SZ"
    },
    {
        "code": "301362",
        "name": "民爆光电",
        "pinyin": "mbgd",
        "market": "SZ"
    },
    {
        "code": "600017",
        "name": "日照港",
        "pinyin": "rzg",
        "market": "SH"
    },
    {
        "code": "600020",
        "name": "中原高速",
        "pinyin": "zygs",
        "market": "SH"
    },
    {
        "code": "600037",
        "name": "歌华有线",
        "pinyin": "ghyx",
        "market": "SH"
    },
    {
        "code": "600055",
        "name": "万东医疗",
        "pinyin": "wdyl",
        "market": "SH"
    },
    {
        "code": "600080",
        "name": "金花股份",
        "pinyin": "jhgf",
        "market": "SH"
    },
    {
        "code": "600310",
        "name": "广西能源",
        "pinyin": "gxny",
        "market": "SH"
    },
    {
        "code": "600335",
        "name": "国机汽车",
        "pinyin": "gjqc",
        "market": "SH"
    },
    {
        "code": "600375",
        "name": "汉马科技",
        "pinyin": "hmkj",
        "market": "SH"
    },
    {
        "code": "600386",
        "name": "北巴传媒",
        "pinyin": "bbcm",
        "market": "SH"
    },
    {
        "code": "600495",
        "name": "晋西车轴",
        "pinyin": "jxcz",
        "market": "SH"
    },
    {
        "code": "600498",
        "name": "烽火通信",
        "pinyin": "fhtx",
        "market": "SH"
    },
    {
        "code": "600512",
        "name": "腾达建设",
        "pinyin": "tdjs",
        "market": "SH"
    },
    {
        "code": "600717",
        "name": "天津港",
        "pinyin": "tjg",
        "market": "SH"
    },
    {
        "code": "600721",
        "name": "百花医药",
        "pinyin": "bhyy",
        "market": "SH"
    },
    {
        "code": "600726",
        "name": "华电能源",
        "pinyin": "hdny",
        "market": "SH"
    },
    {
        "code": "600727",
        "name": "鲁北化工",
        "pinyin": "lbhg",
        "market": "SH"
    },
    {
        "code": "600814",
        "name": "杭州解百",
        "pinyin": "hzjb",
        "market": "SH"
    },
    {
        "code": "600908",
        "name": "无锡银行",
        "pinyin": "wxyh",
        "market": "SH"
    },
    {
        "code": "600917",
        "name": "重庆燃气",
        "pinyin": "zqrq",
        "market": "SH"
    },
    {
        "code": "600919",
        "name": "江苏银行",
        "pinyin": "jsyh",
        "market": "SH"
    },
    {
        "code": "600935",
        "name": "华塑股份",
        "pinyin": "hsgf",
        "market": "SH"
    },
    {
        "code": "600996",
        "name": "贵广网络",
        "pinyin": "ggwl",
        "market": "SH"
    },
    {
        "code": "601011",
        "name": "宝泰隆",
        "pinyin": "btl",
        "market": "SH"
    },
    {
        "code": "601111",
        "name": "中国国航",
        "pinyin": "zggh",
        "market": "SH"
    },
    {
        "code": "601113",
        "name": "华鼎股份",
        "pinyin": "hdgf",
        "market": "SH"
    },
    {
        "code": "601117",
        "name": "XD中国化",
        "pinyin": "xdzgh",
        "market": "SH"
    },
    {
        "code": "601158",
        "name": "重庆水务",
        "pinyin": "zqsw",
        "market": "SH"
    },
    {
        "code": "601188",
        "name": "龙江交通",
        "pinyin": "ljjt",
        "market": "SH"
    },
    {
        "code": "601333",
        "name": "广深铁路",
        "pinyin": "gstl",
        "market": "SH"
    },
    {
        "code": "601668",
        "name": "中国建筑",
        "pinyin": "zgjz",
        "market": "SH"
    },
    {
        "code": "601969",
        "name": "海南矿业",
        "pinyin": "hnky",
        "market": "SH"
    },
    {
        "code": "601975",
        "name": "招商南油",
        "pinyin": "zsny",
        "market": "SH"
    },
    {
        "code": "601985",
        "name": "中国核电",
        "pinyin": "zghd",
        "market": "SH"
    },
    {
        "code": "601988",
        "name": "中国银行",
        "pinyin": "zgyh",
        "market": "SH"
    },
    {
        "code": "603053",
        "name": "成都燃气",
        "pinyin": "cdrq",
        "market": "SH"
    },
    {
        "code": "603056",
        "name": "德邦股份",
        "pinyin": "dbgf",
        "market": "SH"
    },
    {
        "code": "603105",
        "name": "芯能科技",
        "pinyin": "xnkj",
        "market": "SH"
    },
    {
        "code": "603165",
        "name": "荣晟环保",
        "pinyin": "rshb",
        "market": "SH"
    },
    {
        "code": "603166",
        "name": "福达股份",
        "pinyin": "fdgf",
        "market": "SH"
    },
    {
        "code": "603406",
        "name": "天富龙",
        "pinyin": "tfl",
        "market": "SH"
    },
    {
        "code": "603565",
        "name": "中谷物流",
        "pinyin": "zgwl",
        "market": "SH"
    },
    {
        "code": "603616",
        "name": "韩建河山",
        "pinyin": "hjhs",
        "market": "SH"
    },
    {
        "code": "603729",
        "name": "龙韵股份",
        "pinyin": "lygf",
        "market": "SH"
    },
    {
        "code": "603982",
        "name": "泉峰汽车",
        "pinyin": "qfqc",
        "market": "SH"
    },
    {
        "code": "605208",
        "name": "永茂泰",
        "pinyin": "ymt",
        "market": "SH"
    },
    {
        "code": "000421",
        "name": "南京公用",
        "pinyin": "njgy",
        "market": "SZ"
    },
    {
        "code": "000541",
        "name": "佛山照明",
        "pinyin": "fszm",
        "market": "SZ"
    },
    {
        "code": "000560",
        "name": "我爱我家",
        "pinyin": "wawj",
        "market": "SZ"
    },
    {
        "code": "000705",
        "name": "浙江震元",
        "pinyin": "zjzy",
        "market": "SZ"
    },
    {
        "code": "000789",
        "name": "万年青",
        "pinyin": "wnq",
        "market": "SZ"
    },
    {
        "code": "000809",
        "name": "和展能源",
        "pinyin": "hzny",
        "market": "SZ"
    },
    {
        "code": "000839",
        "name": "国安股份",
        "pinyin": "gagf",
        "market": "SZ"
    },
    {
        "code": "000863",
        "name": "三湘印象",
        "pinyin": "sxyx",
        "market": "SZ"
    },
    {
        "code": "000883",
        "name": "湖北能源",
        "pinyin": "hbny",
        "market": "SZ"
    },
    {
        "code": "000928",
        "name": "中钢国际",
        "pinyin": "zggj",
        "market": "SZ"
    },
    {
        "code": "000957",
        "name": "中通客车",
        "pinyin": "ztkc",
        "market": "SZ"
    },
    {
        "code": "001227",
        "name": "兰州银行",
        "pinyin": "lzyh",
        "market": "SZ"
    },
    {
        "code": "002005",
        "name": "ST德豪",
        "pinyin": "stdh",
        "market": "SZ"
    },
    {
        "code": "002034",
        "name": "旺能环境",
        "pinyin": "wnhj",
        "market": "SZ"
    },
    {
        "code": "002061",
        "name": "浙江交科",
        "pinyin": "zjjk",
        "market": "SZ"
    },
    {
        "code": "002086",
        "name": "东方海洋",
        "pinyin": "dfhy",
        "market": "SZ"
    },
    {
        "code": "002199",
        "name": "*ST东晶",
        "pinyin": "*stdj",
        "market": "SZ"
    },
    {
        "code": "002305",
        "name": "*ST南置",
        "pinyin": "*stnz",
        "market": "SZ"
    },
    {
        "code": "002310",
        "name": "东方新能",
        "pinyin": "dfxn",
        "market": "SZ"
    },
    {
        "code": "002351",
        "name": "漫步者",
        "pinyin": "mbz",
        "market": "SZ"
    },
    {
        "code": "002436",
        "name": "兴森科技",
        "pinyin": "xskj",
        "market": "SZ"
    },
    {
        "code": "002483",
        "name": "润邦股份",
        "pinyin": "rbgf",
        "market": "SZ"
    },
    {
        "code": "002496",
        "name": "*ST辉丰",
        "pinyin": "*sthf",
        "market": "SZ"
    },
    {
        "code": "002628",
        "name": "成都路桥",
        "pinyin": "cdlq",
        "market": "SZ"
    },
    {
        "code": "002652",
        "name": "扬子新材",
        "pinyin": "yzxc",
        "market": "SZ"
    },
    {
        "code": "002658",
        "name": "雪迪龙",
        "pinyin": "xdl",
        "market": "SZ"
    },
    {
        "code": "002685",
        "name": "华东重机",
        "pinyin": "hdzj",
        "market": "SZ"
    },
    {
        "code": "002762",
        "name": "*ST金比",
        "pinyin": "*stjb",
        "market": "SZ"
    },
    {
        "code": "002811",
        "name": "郑中设计",
        "pinyin": "zzsj",
        "market": "SZ"
    },
    {
        "code": "002875",
        "name": "安奈儿",
        "pinyin": "ane",
        "market": "SZ"
    },
    {
        "code": "002947",
        "name": "恒铭达",
        "pinyin": "hmd",
        "market": "SZ"
    },
    {
        "code": "300030",
        "name": "阳普医疗",
        "pinyin": "ypyl",
        "market": "SZ"
    },
    {
        "code": "300150",
        "name": "世纪瑞尔",
        "pinyin": "sjre",
        "market": "SZ"
    },
    {
        "code": "300200",
        "name": "高盟新材",
        "pinyin": "gmxc",
        "market": "SZ"
    },
    {
        "code": "300213",
        "name": "佳讯飞鸿",
        "pinyin": "jxfh",
        "market": "SZ"
    },
    {
        "code": "300249",
        "name": "依米康",
        "pinyin": "ymk",
        "market": "SZ"
    },
    {
        "code": "300281",
        "name": "金明精机",
        "pinyin": "jmjj",
        "market": "SZ"
    },
    {
        "code": "300326",
        "name": "ST凯利",
        "pinyin": "stkl",
        "market": "SZ"
    },
    {
        "code": "300403",
        "name": "汉宇集团",
        "pinyin": "hyjt",
        "market": "SZ"
    },
    {
        "code": "300424",
        "name": "航新科技",
        "pinyin": "hxkj",
        "market": "SZ"
    },
    {
        "code": "300425",
        "name": "中建环能",
        "pinyin": "zjhn",
        "market": "SZ"
    },
    {
        "code": "300460",
        "name": "ST惠伦",
        "pinyin": "sthl",
        "market": "SZ"
    },
    {
        "code": "300522",
        "name": "世名科技",
        "pinyin": "smkj",
        "market": "SZ"
    },
    {
        "code": "300655",
        "name": "晶瑞电材",
        "pinyin": "jrdc",
        "market": "SZ"
    },
    {
        "code": "300664",
        "name": "鹏鹞环保",
        "pinyin": "pyhb",
        "market": "SZ"
    },
    {
        "code": "300701",
        "name": "森霸传感",
        "pinyin": "sbcg",
        "market": "SZ"
    },
    {
        "code": "300792",
        "name": "壹网壹创",
        "pinyin": "ywyc",
        "market": "SZ"
    },
    {
        "code": "301030",
        "name": "仕净科技",
        "pinyin": "sjkj",
        "market": "SZ"
    },
    {
        "code": "301051",
        "name": "信濠光电",
        "pinyin": "xhgd",
        "market": "SZ"
    },
    {
        "code": "600018",
        "name": "上港集团",
        "pinyin": "sgjt",
        "market": "SH"
    },
    {
        "code": "600029",
        "name": "南方航空",
        "pinyin": "nfhk",
        "market": "SH"
    },
    {
        "code": "600035",
        "name": "楚天高速",
        "pinyin": "ctgs",
        "market": "SH"
    },
    {
        "code": "600053",
        "name": "九鼎投资",
        "pinyin": "jdtz",
        "market": "SH"
    },
    {
        "code": "600123",
        "name": "兰花科创",
        "pinyin": "lhkc",
        "market": "SH"
    },
    {
        "code": "600151",
        "name": "航天机电",
        "pinyin": "htjd",
        "market": "SH"
    },
    {
        "code": "600221",
        "name": "海航控股",
        "pinyin": "hhkg",
        "market": "SH"
    },
    {
        "code": "600261",
        "name": "阳光照明",
        "pinyin": "ygzm",
        "market": "SH"
    },
    {
        "code": "600389",
        "name": "江山股份",
        "pinyin": "jsgf",
        "market": "SH"
    },
    {
        "code": "600396",
        "name": "华电辽能",
        "pinyin": "hdln",
        "market": "SH"
    },
    {
        "code": "600463",
        "name": "空港股份",
        "pinyin": "kggf",
        "market": "SH"
    },
    {
        "code": "600530",
        "name": "交大昂立",
        "pinyin": "jdal",
        "market": "SH"
    },
    {
        "code": "600578",
        "name": "京能电力",
        "pinyin": "jndl",
        "market": "SH"
    },
    {
        "code": "600628",
        "name": "新世界",
        "pinyin": "xsj",
        "market": "SH"
    },
    {
        "code": "600636",
        "name": "*ST国化",
        "pinyin": "*stgh",
        "market": "SH"
    },
    {
        "code": "600651",
        "name": "飞乐音响",
        "pinyin": "flyx",
        "market": "SH"
    },
    {
        "code": "600662",
        "name": "外服控股",
        "pinyin": "wfkg",
        "market": "SH"
    },
    {
        "code": "600665",
        "name": "天地源",
        "pinyin": "tdy",
        "market": "SH"
    },
    {
        "code": "600668",
        "name": "尖峰集团",
        "pinyin": "jfjt",
        "market": "SH"
    },
    {
        "code": "600682",
        "name": "南京新百",
        "pinyin": "njxb",
        "market": "SH"
    },
    {
        "code": "600698",
        "name": "湖南天雁",
        "pinyin": "hnty",
        "market": "SH"
    },
    {
        "code": "600780",
        "name": "通宝能源",
        "pinyin": "tbny",
        "market": "SH"
    },
    {
        "code": "600925",
        "name": "苏能股份",
        "pinyin": "sngf",
        "market": "SH"
    },
    {
        "code": "600929",
        "name": "雪天盐业",
        "pinyin": "xtyy",
        "market": "SH"
    },
    {
        "code": "600985",
        "name": "淮北矿业",
        "pinyin": "hbky",
        "market": "SH"
    },
    {
        "code": "601002",
        "name": "晋亿实业",
        "pinyin": "jysy",
        "market": "SH"
    },
    {
        "code": "601077",
        "name": "渝农商行",
        "pinyin": "ynsh",
        "market": "SH"
    },
    {
        "code": "601116",
        "name": "三江购物",
        "pinyin": "sjgw",
        "market": "SH"
    },
    {
        "code": "601518",
        "name": "吉林高速",
        "pinyin": "jlgs",
        "market": "SH"
    },
    {
        "code": "601528",
        "name": "瑞丰银行",
        "pinyin": "rfyh",
        "market": "SH"
    },
    {
        "code": "601686",
        "name": "友发集团",
        "pinyin": "yfjt",
        "market": "SH"
    },
    {
        "code": "601918",
        "name": "新集能源",
        "pinyin": "xjny",
        "market": "SH"
    },
    {
        "code": "603076",
        "name": "乐惠国际",
        "pinyin": "lhgj",
        "market": "SH"
    },
    {
        "code": "603080",
        "name": "新疆火炬",
        "pinyin": "xjhj",
        "market": "SH"
    },
    {
        "code": "603177",
        "name": "德创环保",
        "pinyin": "dchb",
        "market": "SH"
    },
    {
        "code": "603227",
        "name": "雪峰科技",
        "pinyin": "xfkj",
        "market": "SH"
    },
    {
        "code": "603357",
        "name": "设计总院",
        "pinyin": "sjzy",
        "market": "SH"
    },
    {
        "code": "603663",
        "name": "三祥新材",
        "pinyin": "sxxc",
        "market": "SH"
    },
    {
        "code": "603818",
        "name": "曲美家居",
        "pinyin": "qmjj",
        "market": "SH"
    },
    {
        "code": "603855",
        "name": "华荣股份",
        "pinyin": "hrgf",
        "market": "SH"
    },
    {
        "code": "603890",
        "name": "春秋电子",
        "pinyin": "cqdz",
        "market": "SH"
    },
    {
        "code": "603893",
        "name": "瑞芯微",
        "pinyin": "rxw",
        "market": "SH"
    },
    {
        "code": "605369",
        "name": "拱东医疗",
        "pinyin": "gdyl",
        "market": "SH"
    },
    {
        "code": "000045",
        "name": "深纺织A",
        "pinyin": "sfza",
        "market": "SZ"
    },
    {
        "code": "000068",
        "name": "华控赛格",
        "pinyin": "hksg",
        "market": "SZ"
    },
    {
        "code": "000430",
        "name": "*ST张股",
        "pinyin": "*stzg",
        "market": "SZ"
    },
    {
        "code": "000498",
        "name": "山东路桥",
        "pinyin": "sdlq",
        "market": "SZ"
    },
    {
        "code": "000521",
        "name": "长虹美菱",
        "pinyin": "chml",
        "market": "SZ"
    },
    {
        "code": "000525",
        "name": "红太阳",
        "pinyin": "hty",
        "market": "SZ"
    },
    {
        "code": "000566",
        "name": "海南海药",
        "pinyin": "hnhy",
        "market": "SZ"
    },
    {
        "code": "000690",
        "name": "宝新能源",
        "pinyin": "bxny",
        "market": "SZ"
    },
    {
        "code": "000720",
        "name": "新能泰山",
        "pinyin": "xnts",
        "market": "SZ"
    },
    {
        "code": "000811",
        "name": "冰轮环境",
        "pinyin": "blhj",
        "market": "SZ"
    },
    {
        "code": "000900",
        "name": "现代投资",
        "pinyin": "xdtz",
        "market": "SZ"
    },
    {
        "code": "000903",
        "name": "ST云动",
        "pinyin": "styd",
        "market": "SZ"
    },
    {
        "code": "000906",
        "name": "浙商中拓",
        "pinyin": "zszt",
        "market": "SZ"
    },
    {
        "code": "000910",
        "name": "大亚圣象",
        "pinyin": "dysx",
        "market": "SZ"
    },
    {
        "code": "001373",
        "name": "翔腾新材",
        "pinyin": "xtxc",
        "market": "SZ"
    },
    {
        "code": "002038",
        "name": "双鹭药业",
        "pinyin": "slyy",
        "market": "SZ"
    },
    {
        "code": "002067",
        "name": "景兴纸业",
        "pinyin": "jxzy",
        "market": "SZ"
    },
    {
        "code": "002124",
        "name": "天邦食品",
        "pinyin": "tbsp",
        "market": "SZ"
    },
    {
        "code": "002228",
        "name": "合兴包装",
        "pinyin": "hxbz",
        "market": "SZ"
    },
    {
        "code": "002303",
        "name": "美盈森",
        "pinyin": "mys",
        "market": "SZ"
    },
    {
        "code": "002370",
        "name": "亚太药业",
        "pinyin": "ytyy",
        "market": "SZ"
    },
    {
        "code": "002377",
        "name": "国创高新",
        "pinyin": "gcgx",
        "market": "SZ"
    },
    {
        "code": "002488",
        "name": "金固股份",
        "pinyin": "jggf",
        "market": "SZ"
    },
    {
        "code": "002523",
        "name": "天桥起重",
        "pinyin": "tqqz",
        "market": "SZ"
    },
    {
        "code": "002546",
        "name": "新联电子",
        "pinyin": "xldz",
        "market": "SZ"
    },
    {
        "code": "002638",
        "name": "勤上股份",
        "pinyin": "qsgf",
        "market": "SZ"
    },
    {
        "code": "002689",
        "name": "ST远智",
        "pinyin": "styz",
        "market": "SZ"
    },
    {
        "code": "002783",
        "name": "凯龙股份",
        "pinyin": "klgf",
        "market": "SZ"
    },
    {
        "code": "003012",
        "name": "东鹏控股",
        "pinyin": "dpkg",
        "market": "SZ"
    },
    {
        "code": "300067",
        "name": "安诺其",
        "pinyin": "anq",
        "market": "SZ"
    },
    {
        "code": "300091",
        "name": "*ST金灵",
        "pinyin": "*stjl",
        "market": "SZ"
    },
    {
        "code": "300159",
        "name": "*ST新研",
        "pinyin": "*stxy",
        "market": "SZ"
    },
    {
        "code": "300169",
        "name": "天晟新材",
        "pinyin": "tsxc",
        "market": "SZ"
    },
    {
        "code": "300234",
        "name": "开尔新材",
        "pinyin": "kexc",
        "market": "SZ"
    },
    {
        "code": "300247",
        "name": "融捷健康",
        "pinyin": "rjjk",
        "market": "SZ"
    },
    {
        "code": "300279",
        "name": "和晶科技",
        "pinyin": "hjkj",
        "market": "SZ"
    },
    {
        "code": "300422",
        "name": "博世科",
        "pinyin": "bsk",
        "market": "SZ"
    },
    {
        "code": "300560",
        "name": "中富通",
        "pinyin": "zft",
        "market": "SZ"
    },
    {
        "code": "300616",
        "name": "尚品宅配",
        "pinyin": "spzp",
        "market": "SZ"
    },
    {
        "code": "300733",
        "name": "西菱动力",
        "pinyin": "xldl",
        "market": "SZ"
    },
    {
        "code": "300777",
        "name": "中简科技",
        "pinyin": "zjkj",
        "market": "SZ"
    },
    {
        "code": "300782",
        "name": "卓胜微",
        "pinyin": "zsw",
        "market": "SZ"
    },
    {
        "code": "300801",
        "name": "泰和科技",
        "pinyin": "thkj",
        "market": "SZ"
    },
    {
        "code": "301038",
        "name": "深水规院",
        "pinyin": "ssgy",
        "market": "SZ"
    },
    {
        "code": "301068",
        "name": "大地海洋",
        "pinyin": "ddhy",
        "market": "SZ"
    },
    {
        "code": "301371",
        "name": "敷尔佳",
        "pinyin": "fej",
        "market": "SZ"
    },
    {
        "code": "301383",
        "name": "天键股份",
        "pinyin": "tjgf",
        "market": "SZ"
    },
    {
        "code": "301577",
        "name": "美信科技",
        "pinyin": "mxkj",
        "market": "SZ"
    },
    {
        "code": "301587",
        "name": "中瑞股份",
        "pinyin": "zrgf",
        "market": "SZ"
    },
    {
        "code": "600098",
        "name": "广州发展",
        "pinyin": "gzfz",
        "market": "SH"
    },
    {
        "code": "600178",
        "name": "东安动力",
        "pinyin": "dadl",
        "market": "SH"
    },
    {
        "code": "600229",
        "name": "城市传媒",
        "pinyin": "cscm",
        "market": "SH"
    },
    {
        "code": "600234",
        "name": "科新发展",
        "pinyin": "kxfz",
        "market": "SH"
    },
    {
        "code": "600300",
        "name": "维维股份",
        "pinyin": "wwgf",
        "market": "SH"
    },
    {
        "code": "600461",
        "name": "洪城环境",
        "pinyin": "hchj",
        "market": "SH"
    },
    {
        "code": "600502",
        "name": "安徽建工",
        "pinyin": "ahjg",
        "market": "SH"
    },
    {
        "code": "600513",
        "name": "联环药业",
        "pinyin": "lhyy",
        "market": "SH"
    },
    {
        "code": "600629",
        "name": "华建集团",
        "pinyin": "hjjt",
        "market": "SH"
    },
    {
        "code": "600756",
        "name": "浪潮软件",
        "pinyin": "lcrj",
        "market": "SH"
    },
    {
        "code": "600757",
        "name": "长江传媒",
        "pinyin": "cjcm",
        "market": "SH"
    },
    {
        "code": "600777",
        "name": "*ST新潮",
        "pinyin": "*stxc",
        "market": "SH"
    },
    {
        "code": "600805",
        "name": "悦达投资",
        "pinyin": "ydtz",
        "market": "SH"
    },
    {
        "code": "600831",
        "name": "广电网络",
        "pinyin": "gdwl",
        "market": "SH"
    },
    {
        "code": "600853",
        "name": "龙建股份",
        "pinyin": "ljgf",
        "market": "SH"
    },
    {
        "code": "600960",
        "name": "渤海汽车",
        "pinyin": "bhqc",
        "market": "SH"
    },
    {
        "code": "601328",
        "name": "交通银行",
        "pinyin": "jtyh",
        "market": "SH"
    },
    {
        "code": "601568",
        "name": "北元集团",
        "pinyin": "byjt",
        "market": "SH"
    },
    {
        "code": "603012",
        "name": "创力集团",
        "pinyin": "cljt",
        "market": "SH"
    },
    {
        "code": "603023",
        "name": "威帝股份",
        "pinyin": "wdgf",
        "market": "SH"
    },
    {
        "code": "603088",
        "name": "宁波精达",
        "pinyin": "nbjd",
        "market": "SH"
    },
    {
        "code": "603117",
        "name": "万林物流",
        "pinyin": "wlwl",
        "market": "SH"
    },
    {
        "code": "603130",
        "name": "云中马",
        "pinyin": "yzm",
        "market": "SH"
    },
    {
        "code": "603153",
        "name": "上海建科",
        "pinyin": "shjk",
        "market": "SH"
    },
    {
        "code": "603161",
        "name": "科华控股",
        "pinyin": "khkg",
        "market": "SH"
    },
    {
        "code": "603180",
        "name": "金牌家居",
        "pinyin": "jpjj",
        "market": "SH"
    },
    {
        "code": "603213",
        "name": "镇洋发展",
        "pinyin": "zyfz",
        "market": "SH"
    },
    {
        "code": "603324",
        "name": "盛剑科技",
        "pinyin": "sjkj",
        "market": "SH"
    },
    {
        "code": "603330",
        "name": "天洋新材",
        "pinyin": "tyxc",
        "market": "SH"
    },
    {
        "code": "603333",
        "name": "尚纬股份",
        "pinyin": "swgf",
        "market": "SH"
    },
    {
        "code": "603538",
        "name": "美诺华",
        "pinyin": "mnh",
        "market": "SH"
    },
    {
        "code": "603879",
        "name": "永悦科技",
        "pinyin": "yykj",
        "market": "SH"
    },
    {
        "code": "603917",
        "name": "合力科技",
        "pinyin": "hlkj",
        "market": "SH"
    },
    {
        "code": "605066",
        "name": "天正电气",
        "pinyin": "tzdq",
        "market": "SH"
    },
    {
        "code": "605158",
        "name": "华达新材",
        "pinyin": "hdxc",
        "market": "SH"
    },
    {
        "code": "000530",
        "name": "冰山冷热",
        "pinyin": "bslr",
        "market": "SZ"
    },
    {
        "code": "000559",
        "name": "万向钱潮",
        "pinyin": "wxqc",
        "market": "SZ"
    },
    {
        "code": "000677",
        "name": "恒天海龙",
        "pinyin": "hthl",
        "market": "SZ"
    },
    {
        "code": "000702",
        "name": "正虹科技",
        "pinyin": "zhkj",
        "market": "SZ"
    },
    {
        "code": "000967",
        "name": "盈峰环境",
        "pinyin": "yfhj",
        "market": "SZ"
    },
    {
        "code": "000972",
        "name": "*ST中基",
        "pinyin": "*stzj",
        "market": "SZ"
    },
    {
        "code": "001299",
        "name": "美能能源",
        "pinyin": "mnny",
        "market": "SZ"
    },
    {
        "code": "001390",
        "name": "古麒绒材",
        "pinyin": "gqrc",
        "market": "SZ"
    },
    {
        "code": "002327",
        "name": "富安娜",
        "pinyin": "fan",
        "market": "SZ"
    },
    {
        "code": "002349",
        "name": "精华制药",
        "pinyin": "jhzy",
        "market": "SZ"
    },
    {
        "code": "002382",
        "name": "蓝帆医疗",
        "pinyin": "lfyl",
        "market": "SZ"
    },
    {
        "code": "002406",
        "name": "远东传动",
        "pinyin": "ydcd",
        "market": "SZ"
    },
    {
        "code": "002412",
        "name": "汉森制药",
        "pinyin": "hszy",
        "market": "SZ"
    },
    {
        "code": "002446",
        "name": "盛路通信",
        "pinyin": "sltx",
        "market": "SZ"
    },
    {
        "code": "002481",
        "name": "双塔食品",
        "pinyin": "stsp",
        "market": "SZ"
    },
    {
        "code": "002486",
        "name": "嘉麟杰",
        "pinyin": "jlj",
        "market": "SZ"
    },
    {
        "code": "002495",
        "name": "佳隆股份",
        "pinyin": "jlgf",
        "market": "SZ"
    },
    {
        "code": "002641",
        "name": "公元股份",
        "pinyin": "gygf",
        "market": "SZ"
    },
    {
        "code": "002702",
        "name": "海欣食品",
        "pinyin": "hxsp",
        "market": "SZ"
    },
    {
        "code": "002730",
        "name": "电光科技",
        "pinyin": "dgkj",
        "market": "SZ"
    },
    {
        "code": "002752",
        "name": "昇兴股份",
        "pinyin": "sxgf",
        "market": "SZ"
    },
    {
        "code": "002753",
        "name": "永东股份",
        "pinyin": "ydgf",
        "market": "SZ"
    },
    {
        "code": "002826",
        "name": "易明医药",
        "pinyin": "ymyy",
        "market": "SZ"
    },
    {
        "code": "002872",
        "name": "ST天圣",
        "pinyin": "stts",
        "market": "SZ"
    },
    {
        "code": "002910",
        "name": "庄园牧场",
        "pinyin": "zymc",
        "market": "SZ"
    },
    {
        "code": "003029",
        "name": "吉大正元",
        "pinyin": "jdzy",
        "market": "SZ"
    },
    {
        "code": "300020",
        "name": "ST银江",
        "pinyin": "styj",
        "market": "SZ"
    },
    {
        "code": "300040",
        "name": "九洲集团",
        "pinyin": "jzjt",
        "market": "SZ"
    },
    {
        "code": "300099",
        "name": "尤洛卡",
        "pinyin": "ylk",
        "market": "SZ"
    },
    {
        "code": "300105",
        "name": "龙源技术",
        "pinyin": "lyjs",
        "market": "SZ"
    },
    {
        "code": "300152",
        "name": "ST新动力",
        "pinyin": "stxdl",
        "market": "SZ"
    },
    {
        "code": "300228",
        "name": "富瑞特装",
        "pinyin": "frtz",
        "market": "SZ"
    },
    {
        "code": "300237",
        "name": "ST美晨",
        "pinyin": "stmc",
        "market": "SZ"
    },
    {
        "code": "300276",
        "name": "三丰智能",
        "pinyin": "sfzn",
        "market": "SZ"
    },
    {
        "code": "300376",
        "name": "易事特",
        "pinyin": "yst",
        "market": "SZ"
    },
    {
        "code": "300404",
        "name": "博济医药",
        "pinyin": "bjyy",
        "market": "SZ"
    },
    {
        "code": "300636",
        "name": "同和药业",
        "pinyin": "thyy",
        "market": "SZ"
    },
    {
        "code": "300692",
        "name": "中赋科技",
        "pinyin": "zfkj",
        "market": "SZ"
    },
    {
        "code": "300815",
        "name": "玉禾田",
        "pinyin": "yht",
        "market": "SZ"
    },
    {
        "code": "300889",
        "name": "爱克股份",
        "pinyin": "akgf",
        "market": "SZ"
    },
    {
        "code": "300968",
        "name": "格林精密",
        "pinyin": "gljm",
        "market": "SZ"
    },
    {
        "code": "301011",
        "name": "华立科技",
        "pinyin": "hlkj",
        "market": "SZ"
    },
    {
        "code": "301105",
        "name": "鸿铭股份",
        "pinyin": "hmgf",
        "market": "SZ"
    },
    {
        "code": "301538",
        "name": "骏鼎达",
        "pinyin": "jdd",
        "market": "SZ"
    },
    {
        "code": "600212",
        "name": "绿能慧充",
        "pinyin": "lnhc",
        "market": "SH"
    },
    {
        "code": "600249",
        "name": "两面针",
        "pinyin": "lmz",
        "market": "SH"
    },
    {
        "code": "600288",
        "name": "大恒科技",
        "pinyin": "dhkj",
        "market": "SH"
    },
    {
        "code": "600303",
        "name": "曙光股份",
        "pinyin": "sggf",
        "market": "SH"
    },
    {
        "code": "600422",
        "name": "昆药集团",
        "pinyin": "kyjt",
        "market": "SH"
    },
    {
        "code": "600488",
        "name": "津药药业",
        "pinyin": "jyyy",
        "market": "SH"
    },
    {
        "code": "600579",
        "name": "中化装备",
        "pinyin": "zhzb",
        "market": "SH"
    },
    {
        "code": "600594",
        "name": "益佰制药",
        "pinyin": "ybzy",
        "market": "SH"
    },
    {
        "code": "600613",
        "name": "神奇制药",
        "pinyin": "sqzy",
        "market": "SH"
    },
    {
        "code": "600623",
        "name": "华谊集团",
        "pinyin": "hyjt",
        "market": "SH"
    },
    {
        "code": "600901",
        "name": "江苏金租",
        "pinyin": "jsjz",
        "market": "SH"
    },
    {
        "code": "600982",
        "name": "宁波能源",
        "pinyin": "nbny",
        "market": "SH"
    },
    {
        "code": "601018",
        "name": "宁波港",
        "pinyin": "nbg",
        "market": "SH"
    },
    {
        "code": "601211",
        "name": "国泰海通",
        "pinyin": "gtht",
        "market": "SH"
    },
    {
        "code": "601279",
        "name": "英利汽车",
        "pinyin": "ylqc",
        "market": "SH"
    },
    {
        "code": "601298",
        "name": "青岛港",
        "pinyin": "qdg",
        "market": "SH"
    },
    {
        "code": "601619",
        "name": "嘉泽新能",
        "pinyin": "jzxn",
        "market": "SH"
    },
    {
        "code": "601665",
        "name": "齐鲁银行",
        "pinyin": "qlyh",
        "market": "SH"
    },
    {
        "code": "603015",
        "name": "弘讯科技",
        "pinyin": "hxkj",
        "market": "SH"
    },
    {
        "code": "603051",
        "name": "鹿山新材",
        "pinyin": "lsxc",
        "market": "SH"
    },
    {
        "code": "603098",
        "name": "森特股份",
        "pinyin": "stgf",
        "market": "SH"
    },
    {
        "code": "603106",
        "name": "恒银科技",
        "pinyin": "hykj",
        "market": "SH"
    },
    {
        "code": "603328",
        "name": "依顿电子",
        "pinyin": "yddz",
        "market": "SH"
    },
    {
        "code": "603356",
        "name": "华菱精工",
        "pinyin": "hljg",
        "market": "SH"
    },
    {
        "code": "603359",
        "name": "东珠生态",
        "pinyin": "dzst",
        "market": "SH"
    },
    {
        "code": "603389",
        "name": "*ST亚振",
        "pinyin": "*styz",
        "market": "SH"
    },
    {
        "code": "603811",
        "name": "诚意药业",
        "pinyin": "cyyy",
        "market": "SH"
    },
    {
        "code": "605177",
        "name": "东亚药业",
        "pinyin": "dyyy",
        "market": "SH"
    },
    {
        "code": "000065",
        "name": "北方国际",
        "pinyin": "bfgj",
        "market": "SZ"
    },
    {
        "code": "000153",
        "name": "丰原药业",
        "pinyin": "fyyy",
        "market": "SZ"
    },
    {
        "code": "000428",
        "name": "华天酒店",
        "pinyin": "htjd",
        "market": "SZ"
    },
    {
        "code": "000589",
        "name": "贵州轮胎",
        "pinyin": "gzlt",
        "market": "SZ"
    },
    {
        "code": "000619",
        "name": "海螺新材",
        "pinyin": "hlxc",
        "market": "SZ"
    },
    {
        "code": "000652",
        "name": "泰达股份",
        "pinyin": "tdgf",
        "market": "SZ"
    },
    {
        "code": "000698",
        "name": "ST沈化",
        "pinyin": "stsh",
        "market": "SZ"
    },
    {
        "code": "000711",
        "name": "ST京蓝",
        "pinyin": "stjl",
        "market": "SZ"
    },
    {
        "code": "000723",
        "name": "美锦能源",
        "pinyin": "mjny",
        "market": "SZ"
    },
    {
        "code": "000753",
        "name": "漳州发展",
        "pinyin": "zzfz",
        "market": "SZ"
    },
    {
        "code": "000759",
        "name": "中百集团",
        "pinyin": "zbjt",
        "market": "SZ"
    },
    {
        "code": "000791",
        "name": "甘肃能源",
        "pinyin": "gsny",
        "market": "SZ"
    },
    {
        "code": "000955",
        "name": "欣龙控股",
        "pinyin": "xlkg",
        "market": "SZ"
    },
    {
        "code": "002020",
        "name": "京新药业",
        "pinyin": "jxyy",
        "market": "SZ"
    },
    {
        "code": "002084",
        "name": "海鸥住工",
        "pinyin": "hozg",
        "market": "SZ"
    },
    {
        "code": "002198",
        "name": "嘉应制药",
        "pinyin": "jyzy",
        "market": "SZ"
    },
    {
        "code": "002210",
        "name": "飞马国际",
        "pinyin": "fmgj",
        "market": "SZ"
    },
    {
        "code": "002275",
        "name": "桂林三金",
        "pinyin": "glsj",
        "market": "SZ"
    },
    {
        "code": "002322",
        "name": "理工能科",
        "pinyin": "lgnk",
        "market": "SZ"
    },
    {
        "code": "002328",
        "name": "新朋股份",
        "pinyin": "xpgf",
        "market": "SZ"
    },
    {
        "code": "002397",
        "name": "梦洁股份",
        "pinyin": "mjgf",
        "market": "SZ"
    },
    {
        "code": "002441",
        "name": "众业达",
        "pinyin": "zyd",
        "market": "SZ"
    },
    {
        "code": "002580",
        "name": "圣阳股份",
        "pinyin": "sygf",
        "market": "SZ"
    },
    {
        "code": "002622",
        "name": "皓宸医疗",
        "pinyin": "hcyl",
        "market": "SZ"
    },
    {
        "code": "002662",
        "name": "峰璟股份",
        "pinyin": "fjgf",
        "market": "SZ"
    },
    {
        "code": "002671",
        "name": "龙泉股份",
        "pinyin": "lqgf",
        "market": "SZ"
    },
    {
        "code": "002712",
        "name": "思美传媒",
        "pinyin": "smcm",
        "market": "SZ"
    },
    {
        "code": "002755",
        "name": "奥赛康",
        "pinyin": "ask",
        "market": "SZ"
    },
    {
        "code": "002827",
        "name": "高争民爆",
        "pinyin": "gzmb",
        "market": "SZ"
    },
    {
        "code": "002928",
        "name": "华夏航空",
        "pinyin": "hxhk",
        "market": "SZ"
    },
    {
        "code": "003037",
        "name": "三和管桩",
        "pinyin": "shgz",
        "market": "SZ"
    },
    {
        "code": "300219",
        "name": "鸿利智汇",
        "pinyin": "hlzh",
        "market": "SZ"
    },
    {
        "code": "300355",
        "name": "蒙草生态",
        "pinyin": "mcst",
        "market": "SZ"
    },
    {
        "code": "300437",
        "name": "清水源",
        "pinyin": "qsy",
        "market": "SZ"
    },
    {
        "code": "300507",
        "name": "苏奥传感",
        "pinyin": "sacg",
        "market": "SZ"
    },
    {
        "code": "300591",
        "name": "万里马",
        "pinyin": "wlm",
        "market": "SZ"
    },
    {
        "code": "300901",
        "name": "中胤时尚",
        "pinyin": "zyss",
        "market": "SZ"
    },
    {
        "code": "600033",
        "name": "福建高速",
        "pinyin": "fjgs",
        "market": "SH"
    },
    {
        "code": "600039",
        "name": "四川路桥",
        "pinyin": "sclq",
        "market": "SH"
    },
    {
        "code": "600052",
        "name": "东望时代",
        "pinyin": "dwsd",
        "market": "SH"
    },
    {
        "code": "600115",
        "name": "中国东航",
        "pinyin": "zgdh",
        "market": "SH"
    },
    {
        "code": "600130",
        "name": "*ST波导",
        "pinyin": "*stbd",
        "market": "SH"
    },
    {
        "code": "600138",
        "name": "中青旅",
        "pinyin": "zql",
        "market": "SH"
    },
    {
        "code": "600232",
        "name": "金鹰股份",
        "pinyin": "jygf",
        "market": "SH"
    },
    {
        "code": "600250",
        "name": "南京商旅",
        "pinyin": "njsl",
        "market": "SH"
    },
    {
        "code": "600429",
        "name": "三元股份",
        "pinyin": "sygf",
        "market": "SH"
    },
    {
        "code": "600681",
        "name": "百川能源",
        "pinyin": "bcny",
        "market": "SH"
    },
    {
        "code": "600715",
        "name": "文投控股",
        "pinyin": "wtkg",
        "market": "SH"
    },
    {
        "code": "600803",
        "name": "新奥股份",
        "pinyin": "xagf",
        "market": "SH"
    },
    {
        "code": "600844",
        "name": "金煤科技",
        "pinyin": "jmkj",
        "market": "SH"
    },
    {
        "code": "600863",
        "name": "内蒙华电",
        "pinyin": "nmhd",
        "market": "SH"
    },
    {
        "code": "601022",
        "name": "宁波远洋",
        "pinyin": "nbyy",
        "market": "SH"
    },
    {
        "code": "601368",
        "name": "绿城水务",
        "pinyin": "lcsw",
        "market": "SH"
    },
    {
        "code": "601577",
        "name": "长沙银行",
        "pinyin": "csyh",
        "market": "SH"
    },
    {
        "code": "601996",
        "name": "丰林集团",
        "pinyin": "fljt",
        "market": "SH"
    },
    {
        "code": "603045",
        "name": "福达合金",
        "pinyin": "fdhj",
        "market": "SH"
    },
    {
        "code": "603055",
        "name": "台华新材",
        "pinyin": "thxc",
        "market": "SH"
    },
    {
        "code": "603158",
        "name": "腾龙股份",
        "pinyin": "tlgf",
        "market": "SH"
    },
    {
        "code": "603194",
        "name": "中力股份",
        "pinyin": "zlgf",
        "market": "SH"
    },
    {
        "code": "603303",
        "name": "得邦照明",
        "pinyin": "dbzm",
        "market": "SH"
    },
    {
        "code": "603335",
        "name": "迪生力",
        "pinyin": "dsl",
        "market": "SH"
    },
    {
        "code": "603518",
        "name": "锦泓集团",
        "pinyin": "jhjt",
        "market": "SH"
    },
    {
        "code": "603519",
        "name": "立霸股份",
        "pinyin": "lbgf",
        "market": "SH"
    },
    {
        "code": "603551",
        "name": "奥普科技",
        "pinyin": "apkj",
        "market": "SH"
    },
    {
        "code": "603557",
        "name": "ST起步",
        "pinyin": "stqb",
        "market": "SH"
    },
    {
        "code": "603859",
        "name": "能科科技",
        "pinyin": "nkkj",
        "market": "SH"
    },
    {
        "code": "603987",
        "name": "康德莱",
        "pinyin": "kdl",
        "market": "SH"
    },
    {
        "code": "000039",
        "name": "中集集团",
        "pinyin": "zjjt",
        "market": "SZ"
    },
    {
        "code": "000151",
        "name": "中成股份",
        "pinyin": "zcgf",
        "market": "SZ"
    },
    {
        "code": "000544",
        "name": "中原环保",
        "pinyin": "zyhb",
        "market": "SZ"
    },
    {
        "code": "000669",
        "name": "ST金鸿",
        "pinyin": "stjh",
        "market": "SZ"
    },
    {
        "code": "000691",
        "name": "*ST亚太",
        "pinyin": "*styt",
        "market": "SZ"
    },
    {
        "code": "000715",
        "name": "中兴商业",
        "pinyin": "zxsy",
        "market": "SZ"
    },
    {
        "code": "000790",
        "name": "华神科技",
        "pinyin": "hskj",
        "market": "SZ"
    },
    {
        "code": "000829",
        "name": "天音控股",
        "pinyin": "tykg",
        "market": "SZ"
    },
    {
        "code": "000862",
        "name": "银星能源",
        "pinyin": "yxny",
        "market": "SZ"
    },
    {
        "code": "000889",
        "name": "中嘉博创",
        "pinyin": "zjbc",
        "market": "SZ"
    },
    {
        "code": "000930",
        "name": "中粮科技",
        "pinyin": "zlkj",
        "market": "SZ"
    },
    {
        "code": "002098",
        "name": "浔兴股份",
        "pinyin": "xxgf",
        "market": "SZ"
    },
    {
        "code": "002247",
        "name": "聚力文化",
        "pinyin": "jlwh",
        "market": "SZ"
    },
    {
        "code": "002258",
        "name": "利尔化学",
        "pinyin": "lehx",
        "market": "SZ"
    },
    {
        "code": "002272",
        "name": "川润股份",
        "pinyin": "crgf",
        "market": "SZ"
    },
    {
        "code": "002320",
        "name": "海峡股份",
        "pinyin": "hxgf",
        "market": "SZ"
    },
    {
        "code": "002348",
        "name": "高乐股份",
        "pinyin": "glgf",
        "market": "SZ"
    },
    {
        "code": "002443",
        "name": "金洲管道",
        "pinyin": "jzgd",
        "market": "SZ"
    },
    {
        "code": "002587",
        "name": "奥拓电子",
        "pinyin": "atdz",
        "market": "SZ"
    },
    {
        "code": "002592",
        "name": "ST八菱",
        "pinyin": "stbl",
        "market": "SZ"
    },
    {
        "code": "002715",
        "name": "登云股份",
        "pinyin": "dygf",
        "market": "SZ"
    },
    {
        "code": "002832",
        "name": "比音勒芬",
        "pinyin": "bylf",
        "market": "SZ"
    },
    {
        "code": "300013",
        "name": "新宁物流",
        "pinyin": "xnwl",
        "market": "SZ"
    },
    {
        "code": "300056",
        "name": "中创环保",
        "pinyin": "zchb",
        "market": "SZ"
    },
    {
        "code": "300125",
        "name": "*ST聆达",
        "pinyin": "*stld",
        "market": "SZ"
    },
    {
        "code": "300239",
        "name": "东宝生物",
        "pinyin": "dbsw",
        "market": "SZ"
    },
    {
        "code": "300470",
        "name": "中密控股",
        "pinyin": "zmkg",
        "market": "SZ"
    },
    {
        "code": "300472",
        "name": "*ST新元",
        "pinyin": "*stxy",
        "market": "SZ"
    },
    {
        "code": "300498",
        "name": "温氏股份",
        "pinyin": "wsgf",
        "market": "SZ"
    },
    {
        "code": "300856",
        "name": "科思股份",
        "pinyin": "ksgf",
        "market": "SZ"
    },
    {
        "code": "300902",
        "name": "国安达",
        "pinyin": "gad",
        "market": "SZ"
    },
    {
        "code": "300916",
        "name": "朗特智能",
        "pinyin": "ltzn",
        "market": "SZ"
    },
    {
        "code": "301090",
        "name": "华润材料",
        "pinyin": "hrcl",
        "market": "SZ"
    },
    {
        "code": "600121",
        "name": "郑州煤电",
        "pinyin": "zzmd",
        "market": "SH"
    },
    {
        "code": "600168",
        "name": "武汉控股",
        "pinyin": "whkg",
        "market": "SH"
    },
    {
        "code": "600276",
        "name": "恒瑞医药",
        "pinyin": "hryy",
        "market": "SH"
    },
    {
        "code": "600308",
        "name": "华泰股份",
        "pinyin": "htgf",
        "market": "SH"
    },
    {
        "code": "600370",
        "name": "三房巷",
        "pinyin": "sfx",
        "market": "SH"
    },
    {
        "code": "600419",
        "name": "天润乳业",
        "pinyin": "trry",
        "market": "SH"
    },
    {
        "code": "600433",
        "name": "冠豪高新",
        "pinyin": "ghgx",
        "market": "SH"
    },
    {
        "code": "600468",
        "name": "百利电气",
        "pinyin": "bldq",
        "market": "SH"
    },
    {
        "code": "600479",
        "name": "千金药业",
        "pinyin": "qjyy",
        "market": "SH"
    },
    {
        "code": "600508",
        "name": "上海能源",
        "pinyin": "shny",
        "market": "SH"
    },
    {
        "code": "600576",
        "name": "祥源文旅",
        "pinyin": "xywl",
        "market": "SH"
    },
    {
        "code": "600620",
        "name": "天宸股份",
        "pinyin": "tcgf",
        "market": "SH"
    },
    {
        "code": "600630",
        "name": "龙头股份",
        "pinyin": "ltgf",
        "market": "SH"
    },
    {
        "code": "600674",
        "name": "川投能源",
        "pinyin": "ctny",
        "market": "SH"
    },
    {
        "code": "600787",
        "name": "中储股份",
        "pinyin": "zcgf",
        "market": "SH"
    },
    {
        "code": "600854",
        "name": "春兰股份",
        "pinyin": "clgf",
        "market": "SH"
    },
    {
        "code": "601107",
        "name": "四川成渝",
        "pinyin": "sccy",
        "market": "SH"
    },
    {
        "code": "601199",
        "name": "江南水务",
        "pinyin": "jnsw",
        "market": "SH"
    },
    {
        "code": "601366",
        "name": "利群股份",
        "pinyin": "lqgf",
        "market": "SH"
    },
    {
        "code": "601798",
        "name": "蓝科高新",
        "pinyin": "lkgx",
        "market": "SH"
    },
    {
        "code": "603078",
        "name": "江化微",
        "pinyin": "jhw",
        "market": "SH"
    },
    {
        "code": "603235",
        "name": "天新药业",
        "pinyin": "txyy",
        "market": "SH"
    },
    {
        "code": "603277",
        "name": "银都股份",
        "pinyin": "ydgf",
        "market": "SH"
    },
    {
        "code": "603278",
        "name": "大业股份",
        "pinyin": "dygf",
        "market": "SH"
    },
    {
        "code": "603351",
        "name": "威尔药业",
        "pinyin": "weyy",
        "market": "SH"
    },
    {
        "code": "603378",
        "name": "亚士创能",
        "pinyin": "yscn",
        "market": "SH"
    },
    {
        "code": "603536",
        "name": "惠发食品",
        "pinyin": "hfsp",
        "market": "SH"
    },
    {
        "code": "603569",
        "name": "长久物流",
        "pinyin": "cjwl",
        "market": "SH"
    },
    {
        "code": "603609",
        "name": "禾丰股份",
        "pinyin": "hfgf",
        "market": "SH"
    },
    {
        "code": "603617",
        "name": "君禾股份",
        "pinyin": "jhgf",
        "market": "SH"
    },
    {
        "code": "603959",
        "name": "百利科技",
        "pinyin": "blkj",
        "market": "SH"
    },
    {
        "code": "605339",
        "name": "南侨食品",
        "pinyin": "nqsp",
        "market": "SH"
    },
    {
        "code": "605577",
        "name": "龙版传媒",
        "pinyin": "lbcm",
        "market": "SH"
    },
    {
        "code": "000504",
        "name": "*ST生物",
        "pinyin": "*stsw",
        "market": "SZ"
    },
    {
        "code": "000565",
        "name": "渝三峡A",
        "pinyin": "ysxa",
        "market": "SZ"
    },
    {
        "code": "000601",
        "name": "韶能股份",
        "pinyin": "sngf",
        "market": "SZ"
    },
    {
        "code": "000631",
        "name": "顺发恒能",
        "pinyin": "sfhn",
        "market": "SZ"
    },
    {
        "code": "000716",
        "name": "黑芝麻",
        "pinyin": "hzm",
        "market": "SZ"
    },
    {
        "code": "000820",
        "name": "*ST节能",
        "pinyin": "*stjn",
        "market": "SZ"
    },
    {
        "code": "000876",
        "name": "新 希 望",
        "pinyin": "x x w",
        "market": "SZ"
    },
    {
        "code": "000890",
        "name": "法尔胜",
        "pinyin": "fes",
        "market": "SZ"
    },
    {
        "code": "000909",
        "name": "ST数源",
        "pinyin": "stsy",
        "market": "SZ"
    },
    {
        "code": "000990",
        "name": "诚志股份",
        "pinyin": "czgf",
        "market": "SZ"
    },
    {
        "code": "001219",
        "name": "青岛食品",
        "pinyin": "qdsp",
        "market": "SZ"
    },
    {
        "code": "001306",
        "name": "夏厦精密",
        "pinyin": "xsjm",
        "market": "SZ"
    },
    {
        "code": "001382",
        "name": "新亚电缆",
        "pinyin": "xydl",
        "market": "SZ"
    },
    {
        "code": "002116",
        "name": "中国海诚",
        "pinyin": "zghc",
        "market": "SZ"
    },
    {
        "code": "002168",
        "name": "*ST惠程",
        "pinyin": "*sthc",
        "market": "SZ"
    },
    {
        "code": "002255",
        "name": "海陆重工",
        "pinyin": "hlzg",
        "market": "SZ"
    },
    {
        "code": "002286",
        "name": "保龄宝",
        "pinyin": "blb",
        "market": "SZ"
    },
    {
        "code": "002313",
        "name": "日海智能",
        "pinyin": "rhzn",
        "market": "SZ"
    },
    {
        "code": "002316",
        "name": "亚联发展",
        "pinyin": "ylfz",
        "market": "SZ"
    },
    {
        "code": "002358",
        "name": "森源电气",
        "pinyin": "sydq",
        "market": "SZ"
    },
    {
        "code": "002404",
        "name": "嘉欣丝绸",
        "pinyin": "jxsc",
        "market": "SZ"
    },
    {
        "code": "002528",
        "name": "ST英飞拓",
        "pinyin": "styft",
        "market": "SZ"
    },
    {
        "code": "002529",
        "name": "*ST海源",
        "pinyin": "*sthy",
        "market": "SZ"
    },
    {
        "code": "002563",
        "name": "森马服饰",
        "pinyin": "smfs",
        "market": "SZ"
    },
    {
        "code": "002691",
        "name": "冀凯股份",
        "pinyin": "jkgf",
        "market": "SZ"
    },
    {
        "code": "002692",
        "name": "远程股份",
        "pinyin": "ycgf",
        "market": "SZ"
    },
    {
        "code": "002863",
        "name": "今飞凯达",
        "pinyin": "jfkd",
        "market": "SZ"
    },
    {
        "code": "002892",
        "name": "科力尔",
        "pinyin": "kle",
        "market": "SZ"
    },
    {
        "code": "002929",
        "name": "润建股份",
        "pinyin": "rjgf",
        "market": "SZ"
    },
    {
        "code": "003020",
        "name": "立方制药",
        "pinyin": "lfzy",
        "market": "SZ"
    },
    {
        "code": "300006",
        "name": "莱美药业",
        "pinyin": "lmyy",
        "market": "SZ"
    },
    {
        "code": "300076",
        "name": "GQY视讯",
        "pinyin": "gqysx",
        "market": "SZ"
    },
    {
        "code": "300079",
        "name": "数码视讯",
        "pinyin": "smsx",
        "market": "SZ"
    },
    {
        "code": "300132",
        "name": "青松股份",
        "pinyin": "qsgf",
        "market": "SZ"
    },
    {
        "code": "300292",
        "name": "吴通控股",
        "pinyin": "wtkg",
        "market": "SZ"
    },
    {
        "code": "300300",
        "name": "海峡创新",
        "pinyin": "hxcx",
        "market": "SZ"
    },
    {
        "code": "300305",
        "name": "裕兴股份",
        "pinyin": "yxgf",
        "market": "SZ"
    },
    {
        "code": "300320",
        "name": "海达股份",
        "pinyin": "hdgf",
        "market": "SZ"
    },
    {
        "code": "300484",
        "name": "蓝海华腾",
        "pinyin": "lhht",
        "market": "SZ"
    },
    {
        "code": "300527",
        "name": "ST应急",
        "pinyin": "styj",
        "market": "SZ"
    },
    {
        "code": "300552",
        "name": "万集科技",
        "pinyin": "wjkj",
        "market": "SZ"
    },
    {
        "code": "300732",
        "name": "设研院",
        "pinyin": "syy",
        "market": "SZ"
    },
    {
        "code": "301049",
        "name": "超越科技",
        "pinyin": "cykj",
        "market": "SZ"
    },
    {
        "code": "301081",
        "name": "严牌股份",
        "pinyin": "ypgf",
        "market": "SZ"
    },
    {
        "code": "301162",
        "name": "国能日新",
        "pinyin": "gnrx",
        "market": "SZ"
    },
    {
        "code": "301166",
        "name": "优宁维",
        "pinyin": "ynw",
        "market": "SZ"
    },
    {
        "code": "301187",
        "name": "欧圣电气",
        "pinyin": "osdq",
        "market": "SZ"
    },
    {
        "code": "600025",
        "name": "华能水电",
        "pinyin": "hnsd",
        "market": "SH"
    },
    {
        "code": "600116",
        "name": "三峡水利",
        "pinyin": "sxsl",
        "market": "SH"
    },
    {
        "code": "600186",
        "name": "莲花控股",
        "pinyin": "lhkg",
        "market": "SH"
    },
    {
        "code": "600195",
        "name": "中牧股份",
        "pinyin": "zmgf",
        "market": "SH"
    },
    {
        "code": "600216",
        "name": "浙江医药",
        "pinyin": "zjyy",
        "market": "SH"
    },
    {
        "code": "600283",
        "name": "钱江水利",
        "pinyin": "qjsl",
        "market": "SH"
    },
    {
        "code": "600287",
        "name": "苏豪时尚",
        "pinyin": "shss",
        "market": "SH"
    },
    {
        "code": "600448",
        "name": "华纺股份",
        "pinyin": "hfgf",
        "market": "SH"
    },
    {
        "code": "600540",
        "name": "新赛股份",
        "pinyin": "xsgf",
        "market": "SH"
    },
    {
        "code": "600676",
        "name": "交运股份",
        "pinyin": "jygf",
        "market": "SH"
    },
    {
        "code": "600706",
        "name": "曲江文旅",
        "pinyin": "qjwl",
        "market": "SH"
    },
    {
        "code": "600712",
        "name": "南宁百货",
        "pinyin": "nnbh",
        "market": "SH"
    },
    {
        "code": "600770",
        "name": "综艺股份",
        "pinyin": "zygf",
        "market": "SH"
    },
    {
        "code": "600973",
        "name": "宝胜股份",
        "pinyin": "bsgf",
        "market": "SH"
    },
    {
        "code": "601728",
        "name": "中国电信",
        "pinyin": "zgdx",
        "market": "SH"
    },
    {
        "code": "603021",
        "name": "ST华鹏",
        "pinyin": "sthp",
        "market": "SH"
    },
    {
        "code": "603060",
        "name": "国检集团",
        "pinyin": "gjjt",
        "market": "SH"
    },
    {
        "code": "603116",
        "name": "红蜻蜓",
        "pinyin": "hqt",
        "market": "SH"
    },
    {
        "code": "603886",
        "name": "元祖股份",
        "pinyin": "yzgf",
        "market": "SH"
    },
    {
        "code": "605006",
        "name": "山东玻纤",
        "pinyin": "sdbx",
        "market": "SH"
    },
    {
        "code": "000518",
        "name": "*ST四环",
        "pinyin": "*stsh",
        "market": "SZ"
    },
    {
        "code": "000529",
        "name": "广弘控股",
        "pinyin": "ghkg",
        "market": "SZ"
    },
    {
        "code": "000548",
        "name": "湖南投资",
        "pinyin": "hntz",
        "market": "SZ"
    },
    {
        "code": "000558",
        "name": "天府文旅",
        "pinyin": "tfwl",
        "market": "SZ"
    },
    {
        "code": "000757",
        "name": "浩物股份",
        "pinyin": "hwgf",
        "market": "SZ"
    },
    {
        "code": "000822",
        "name": "山东海化",
        "pinyin": "sdhh",
        "market": "SZ"
    },
    {
        "code": "000823",
        "name": "超声电子",
        "pinyin": "csdz",
        "market": "SZ"
    },
    {
        "code": "000902",
        "name": "新洋丰",
        "pinyin": "xyf",
        "market": "SZ"
    },
    {
        "code": "000966",
        "name": "长源电力",
        "pinyin": "cydl",
        "market": "SZ"
    },
    {
        "code": "000983",
        "name": "山西焦煤",
        "pinyin": "sxjm",
        "market": "SZ"
    },
    {
        "code": "002321",
        "name": "华英农业",
        "pinyin": "hyny",
        "market": "SZ"
    },
    {
        "code": "002451",
        "name": "摩恩电气",
        "pinyin": "medq",
        "market": "SZ"
    },
    {
        "code": "002478",
        "name": "常宝股份",
        "pinyin": "cbgf",
        "market": "SZ"
    },
    {
        "code": "002516",
        "name": "旷达科技",
        "pinyin": "kdkj",
        "market": "SZ"
    },
    {
        "code": "002566",
        "name": "益盛药业",
        "pinyin": "ysyy",
        "market": "SZ"
    },
    {
        "code": "002624",
        "name": "完美世界",
        "pinyin": "wmsj",
        "market": "SZ"
    },
    {
        "code": "002746",
        "name": "仙坛股份",
        "pinyin": "xtgf",
        "market": "SZ"
    },
    {
        "code": "002775",
        "name": "文科股份",
        "pinyin": "wkgf",
        "market": "SZ"
    },
    {
        "code": "002818",
        "name": "富森美",
        "pinyin": "fsm",
        "market": "SZ"
    },
    {
        "code": "002820",
        "name": "桂发祥",
        "pinyin": "gfx",
        "market": "SZ"
    },
    {
        "code": "002822",
        "name": "ST中装",
        "pinyin": "stzz",
        "market": "SZ"
    },
    {
        "code": "002843",
        "name": "泰嘉股份",
        "pinyin": "tjgf",
        "market": "SZ"
    },
    {
        "code": "002973",
        "name": "侨银股份",
        "pinyin": "qygf",
        "market": "SZ"
    },
    {
        "code": "002979",
        "name": "雷赛智能",
        "pinyin": "lszn",
        "market": "SZ"
    },
    {
        "code": "300032",
        "name": "金龙机电",
        "pinyin": "jljd",
        "market": "SZ"
    },
    {
        "code": "300100",
        "name": "双林股份",
        "pinyin": "slgf",
        "market": "SZ"
    },
    {
        "code": "300140",
        "name": "节能环境",
        "pinyin": "jnhj",
        "market": "SZ"
    },
    {
        "code": "300172",
        "name": "中电环保",
        "pinyin": "zdhb",
        "market": "SZ"
    },
    {
        "code": "300187",
        "name": "永清环保",
        "pinyin": "yqhb",
        "market": "SZ"
    },
    {
        "code": "300190",
        "name": "维尔利",
        "pinyin": "wel",
        "market": "SZ"
    },
    {
        "code": "300335",
        "name": "迪森股份",
        "pinyin": "dsgf",
        "market": "SZ"
    },
    {
        "code": "300412",
        "name": "迦南科技",
        "pinyin": "jnkj",
        "market": "SZ"
    },
    {
        "code": "300543",
        "name": "朗科智能",
        "pinyin": "lkzn",
        "market": "SZ"
    },
    {
        "code": "300675",
        "name": "建科院",
        "pinyin": "jky",
        "market": "SZ"
    },
    {
        "code": "300881",
        "name": "盛德鑫泰",
        "pinyin": "sdxt",
        "market": "SZ"
    },
    {
        "code": "300993",
        "name": "玉马科技",
        "pinyin": "ymkj",
        "market": "SZ"
    },
    {
        "code": "301069",
        "name": "凯盛新材",
        "pinyin": "ksxc",
        "market": "SZ"
    },
    {
        "code": "600028",
        "name": "中国石化",
        "pinyin": "zgsh",
        "market": "SH"
    },
    {
        "code": "600072",
        "name": "中船科技",
        "pinyin": "zckj",
        "market": "SH"
    },
    {
        "code": "600103",
        "name": "青山纸业",
        "pinyin": "qszy",
        "market": "SH"
    },
    {
        "code": "600176",
        "name": "中国巨石",
        "pinyin": "zgjs",
        "market": "SH"
    },
    {
        "code": "600180",
        "name": "瑞茂通",
        "pinyin": "rmt",
        "market": "SH"
    },
    {
        "code": "600236",
        "name": "桂冠电力",
        "pinyin": "ggdl",
        "market": "SH"
    },
    {
        "code": "600238",
        "name": "*ST椰岛",
        "pinyin": "*styd",
        "market": "SH"
    },
    {
        "code": "600289",
        "name": "ST信通",
        "pinyin": "stxt",
        "market": "SH"
    },
    {
        "code": "600351",
        "name": "亚宝药业",
        "pinyin": "ybyy",
        "market": "SH"
    },
    {
        "code": "600507",
        "name": "方大特钢",
        "pinyin": "fdtg",
        "market": "SH"
    },
    {
        "code": "600525",
        "name": "ST长园",
        "pinyin": "stcy",
        "market": "SH"
    },
    {
        "code": "600719",
        "name": "大连热电",
        "pinyin": "dlrd",
        "market": "SH"
    },
    {
        "code": "600755",
        "name": "厦门国贸",
        "pinyin": "smgm",
        "market": "SH"
    },
    {
        "code": "600784",
        "name": "鲁银投资",
        "pinyin": "lytz",
        "market": "SH"
    },
    {
        "code": "600822",
        "name": "上海物贸",
        "pinyin": "shwm",
        "market": "SH"
    },
    {
        "code": "600861",
        "name": "北京人力",
        "pinyin": "bjrl",
        "market": "SH"
    },
    {
        "code": "601007",
        "name": "金陵饭店",
        "pinyin": "jlfd",
        "market": "SH"
    },
    {
        "code": "601083",
        "name": "锦江航运",
        "pinyin": "jjhy",
        "market": "SH"
    },
    {
        "code": "601968",
        "name": "宝钢包装",
        "pinyin": "bgbz",
        "market": "SH"
    },
    {
        "code": "603085",
        "name": "天成自控",
        "pinyin": "tczk",
        "market": "SH"
    },
    {
        "code": "603111",
        "name": "康尼机电",
        "pinyin": "knjd",
        "market": "SH"
    },
    {
        "code": "603169",
        "name": "兰石重装",
        "pinyin": "lszz",
        "market": "SH"
    },
    {
        "code": "603237",
        "name": "五芳斋",
        "pinyin": "wfz",
        "market": "SH"
    },
    {
        "code": "603310",
        "name": "巍华新材",
        "pinyin": "whxc",
        "market": "SH"
    },
    {
        "code": "603693",
        "name": "江苏新能",
        "pinyin": "jsxn",
        "market": "SH"
    },
    {
        "code": "605008",
        "name": "长鸿高科",
        "pinyin": "chgk",
        "market": "SH"
    },
    {
        "code": "605162",
        "name": "新中港",
        "pinyin": "xzg",
        "market": "SH"
    },
    {
        "code": "605299",
        "name": "舒华体育",
        "pinyin": "shty",
        "market": "SH"
    },
    {
        "code": "605366",
        "name": "宏柏新材",
        "pinyin": "hbxc",
        "market": "SH"
    },
    {
        "code": "000600",
        "name": "建投能源",
        "pinyin": "jtny",
        "market": "SZ"
    },
    {
        "code": "000752",
        "name": "ST西发",
        "pinyin": "stxf",
        "market": "SZ"
    },
    {
        "code": "000953",
        "name": "河化股份",
        "pinyin": "hhgf",
        "market": "SZ"
    },
    {
        "code": "001287",
        "name": "中电港",
        "pinyin": "zdg",
        "market": "SZ"
    },
    {
        "code": "002029",
        "name": "七 匹 狼",
        "pinyin": "q p l",
        "market": "SZ"
    },
    {
        "code": "002162",
        "name": "悦心健康",
        "pinyin": "yxjk",
        "market": "SZ"
    },
    {
        "code": "002190",
        "name": "成飞集成",
        "pinyin": "cfjc",
        "market": "SZ"
    },
    {
        "code": "002300",
        "name": "太阳电缆",
        "pinyin": "tydl",
        "market": "SZ"
    },
    {
        "code": "002558",
        "name": "巨人网络",
        "pinyin": "jrwl",
        "market": "SZ"
    },
    {
        "code": "002644",
        "name": "佛慈制药",
        "pinyin": "fczy",
        "market": "SZ"
    },
    {
        "code": "002666",
        "name": "德联集团",
        "pinyin": "dljt",
        "market": "SZ"
    },
    {
        "code": "002693",
        "name": "*ST双成",
        "pinyin": "*stsc",
        "market": "SZ"
    },
    {
        "code": "002808",
        "name": "*ST恒久",
        "pinyin": "*sthj",
        "market": "SZ"
    },
    {
        "code": "002855",
        "name": "捷荣技术",
        "pinyin": "jrjs",
        "market": "SZ"
    },
    {
        "code": "002876",
        "name": "三利谱",
        "pinyin": "slp",
        "market": "SZ"
    },
    {
        "code": "002902",
        "name": "铭普光磁",
        "pinyin": "mpgc",
        "market": "SZ"
    },
    {
        "code": "300148",
        "name": "天舟文化",
        "pinyin": "tzwh",
        "market": "SZ"
    },
    {
        "code": "300201",
        "name": "海伦哲",
        "pinyin": "hlz",
        "market": "SZ"
    },
    {
        "code": "300824",
        "name": "北鼎股份",
        "pinyin": "bdgf",
        "market": "SZ"
    },
    {
        "code": "301499",
        "name": "维科精密",
        "pinyin": "wkjm",
        "market": "SZ"
    },
    {
        "code": "301526",
        "name": "国际复材",
        "pinyin": "gjfc",
        "market": "SZ"
    },
    {
        "code": "600026",
        "name": "中远海能",
        "pinyin": "zyhn",
        "market": "SH"
    },
    {
        "code": "600081",
        "name": "东风科技",
        "pinyin": "dfkj",
        "market": "SH"
    },
    {
        "code": "600278",
        "name": "东方创业",
        "pinyin": "dfcy",
        "market": "SH"
    },
    {
        "code": "600406",
        "name": "国电南瑞",
        "pinyin": "gdnr",
        "market": "SH"
    },
    {
        "code": "600467",
        "name": "好当家",
        "pinyin": "hdj",
        "market": "SH"
    },
    {
        "code": "600496",
        "name": "精工钢构",
        "pinyin": "jggg",
        "market": "SH"
    },
    {
        "code": "600500",
        "name": "中化国际",
        "pinyin": "zhgj",
        "market": "SH"
    },
    {
        "code": "600683",
        "name": "京投发展",
        "pinyin": "jtfz",
        "market": "SH"
    },
    {
        "code": "600697",
        "name": "欧亚集团",
        "pinyin": "oyjt",
        "market": "SH"
    },
    {
        "code": "600713",
        "name": "南京医药",
        "pinyin": "njyy",
        "market": "SH"
    },
    {
        "code": "600734",
        "name": "实达集团",
        "pinyin": "sdjt",
        "market": "SH"
    },
    {
        "code": "600735",
        "name": "ST新华锦",
        "pinyin": "stxhj",
        "market": "SH"
    },
    {
        "code": "600742",
        "name": "富维股份",
        "pinyin": "fwgf",
        "market": "SH"
    },
    {
        "code": "600843",
        "name": "上工申贝",
        "pinyin": "sgsb",
        "market": "SH"
    },
    {
        "code": "600858",
        "name": "银座股份",
        "pinyin": "yzgf",
        "market": "SH"
    },
    {
        "code": "600997",
        "name": "开滦股份",
        "pinyin": "klgf",
        "market": "SH"
    },
    {
        "code": "601225",
        "name": "陕西煤业",
        "pinyin": "sxmy",
        "market": "SH"
    },
    {
        "code": "601339",
        "name": "百隆东方",
        "pinyin": "bldf",
        "market": "SH"
    },
    {
        "code": "601515",
        "name": "衢州东峰",
        "pinyin": "qzdf",
        "market": "SH"
    },
    {
        "code": "601825",
        "name": "沪农商行",
        "pinyin": "hnsh",
        "market": "SH"
    },
    {
        "code": "603014",
        "name": "威高血净",
        "pinyin": "wgxj",
        "market": "SH"
    },
    {
        "code": "603206",
        "name": "嘉环科技",
        "pinyin": "jhkj",
        "market": "SH"
    },
    {
        "code": "603336",
        "name": "宏辉果蔬",
        "pinyin": "hhgs",
        "market": "SH"
    },
    {
        "code": "603390",
        "name": "通达电气",
        "pinyin": "tddq",
        "market": "SH"
    },
    {
        "code": "603408",
        "name": "建霖家居",
        "pinyin": "jljj",
        "market": "SH"
    },
    {
        "code": "603580",
        "name": "*ST艾艾",
        "pinyin": "*staa",
        "market": "SH"
    },
    {
        "code": "603901",
        "name": "永创智能",
        "pinyin": "yczn",
        "market": "SH"
    },
    {
        "code": "603989",
        "name": "艾华集团",
        "pinyin": "ahjt",
        "market": "SH"
    },
    {
        "code": "605001",
        "name": "威奥股份",
        "pinyin": "wagf",
        "market": "SH"
    },
    {
        "code": "605500",
        "name": "森林包装",
        "pinyin": "slbz",
        "market": "SH"
    },
    {
        "code": "000598",
        "name": "兴蓉环境",
        "pinyin": "xrhj",
        "market": "SZ"
    },
    {
        "code": "000726",
        "name": "鲁  泰A",
        "pinyin": "l  ta",
        "market": "SZ"
    },
    {
        "code": "000850",
        "name": "华茂股份",
        "pinyin": "hmgf",
        "market": "SZ"
    },
    {
        "code": "000912",
        "name": "泸天化",
        "pinyin": "lth",
        "market": "SZ"
    },
    {
        "code": "000936",
        "name": "华西股份",
        "pinyin": "hxgf",
        "market": "SZ"
    },
    {
        "code": "000981",
        "name": "山子高科",
        "pinyin": "szgk",
        "market": "SZ"
    },
    {
        "code": "001258",
        "name": "立新能源",
        "pinyin": "lxny",
        "market": "SZ"
    },
    {
        "code": "002055",
        "name": "ST得润",
        "pinyin": "stdr",
        "market": "SZ"
    },
    {
        "code": "002069",
        "name": "獐子岛",
        "pinyin": "zzd",
        "market": "SZ"
    },
    {
        "code": "002072",
        "name": "凯瑞德",
        "pinyin": "krd",
        "market": "SZ"
    },
    {
        "code": "002560",
        "name": "通达股份",
        "pinyin": "tdgf",
        "market": "SZ"
    },
    {
        "code": "002655",
        "name": "共达电声",
        "pinyin": "gdds",
        "market": "SZ"
    },
    {
        "code": "002660",
        "name": "茂硕电源",
        "pinyin": "msdy",
        "market": "SZ"
    },
    {
        "code": "002661",
        "name": "克明食品",
        "pinyin": "kmsp",
        "market": "SZ"
    },
    {
        "code": "002686",
        "name": "亿利达",
        "pinyin": "yld",
        "market": "SZ"
    },
    {
        "code": "002911",
        "name": "佛燃能源",
        "pinyin": "frny",
        "market": "SZ"
    },
    {
        "code": "300019",
        "name": "硅宝科技",
        "pinyin": "gbkj",
        "market": "SZ"
    },
    {
        "code": "300193",
        "name": "佳士科技",
        "pinyin": "jskj",
        "market": "SZ"
    },
    {
        "code": "300227",
        "name": "光韵达",
        "pinyin": "gyd",
        "market": "SZ"
    },
    {
        "code": "300230",
        "name": "永利股份",
        "pinyin": "ylgf",
        "market": "SZ"
    },
    {
        "code": "300254",
        "name": "仟源医药",
        "pinyin": "qyyy",
        "market": "SZ"
    },
    {
        "code": "300405",
        "name": "科隆股份",
        "pinyin": "klgf",
        "market": "SZ"
    },
    {
        "code": "300426",
        "name": "华智数媒",
        "pinyin": "hzsm",
        "market": "SZ"
    },
    {
        "code": "300640",
        "name": "德艺文创",
        "pinyin": "dywc",
        "market": "SZ"
    },
    {
        "code": "300643",
        "name": "万通智控",
        "pinyin": "wtzk",
        "market": "SZ"
    },
    {
        "code": "300935",
        "name": "盈建科",
        "pinyin": "yjk",
        "market": "SZ"
    },
    {
        "code": "301053",
        "name": "远信工业",
        "pinyin": "yxgy",
        "market": "SZ"
    },
    {
        "code": "301355",
        "name": "南王科技",
        "pinyin": "nwkj",
        "market": "SZ"
    },
    {
        "code": "301559",
        "name": "中集环科",
        "pinyin": "zjhk",
        "market": "SZ"
    },
    {
        "code": "301628",
        "name": "强达电路",
        "pinyin": "qddl",
        "market": "SZ"
    },
    {
        "code": "301687",
        "name": "新广益",
        "pinyin": "xgy",
        "market": "SZ"
    },
    {
        "code": "600149",
        "name": "廊坊发展",
        "pinyin": "lffz",
        "market": "SH"
    },
    {
        "code": "600539",
        "name": "狮头股份",
        "pinyin": "stgf",
        "market": "SH"
    },
    {
        "code": "600679",
        "name": "上海凤凰",
        "pinyin": "shfh",
        "market": "SH"
    },
    {
        "code": "600820",
        "name": "隧道股份",
        "pinyin": "sdgf",
        "market": "SH"
    },
    {
        "code": "600846",
        "name": "同济科技",
        "pinyin": "tjkj",
        "market": "SH"
    },
    {
        "code": "600857",
        "name": "宁波中百",
        "pinyin": "nbzb",
        "market": "SH"
    },
    {
        "code": "600975",
        "name": "新五丰",
        "pinyin": "xwf",
        "market": "SH"
    },
    {
        "code": "601898",
        "name": "中煤能源",
        "pinyin": "zmny",
        "market": "SH"
    },
    {
        "code": "603520",
        "name": "司太立",
        "pinyin": "stl",
        "market": "SH"
    },
    {
        "code": "603566",
        "name": "普莱柯",
        "pinyin": "plk",
        "market": "SH"
    },
    {
        "code": "000635",
        "name": "英 力 特",
        "pinyin": "y l t",
        "market": "SZ"
    },
    {
        "code": "000637",
        "name": "茂化实华",
        "pinyin": "mhsh",
        "market": "SZ"
    },
    {
        "code": "000722",
        "name": "湖南发展",
        "pinyin": "hnfz",
        "market": "SZ"
    },
    {
        "code": "000803",
        "name": "山高环能",
        "pinyin": "sghn",
        "market": "SZ"
    },
    {
        "code": "000929",
        "name": "*ST兰黄",
        "pinyin": "*stlh",
        "market": "SZ"
    },
    {
        "code": "001286",
        "name": "陕西能源",
        "pinyin": "sxny",
        "market": "SZ"
    },
    {
        "code": "001313",
        "name": "粤海饲料",
        "pinyin": "yhsl",
        "market": "SZ"
    },
    {
        "code": "001367",
        "name": "海森药业",
        "pinyin": "hsyy",
        "market": "SZ"
    },
    {
        "code": "001379",
        "name": "腾达科技",
        "pinyin": "tdkj",
        "market": "SZ"
    },
    {
        "code": "002059",
        "name": "云南旅游",
        "pinyin": "ynly",
        "market": "SZ"
    },
    {
        "code": "002096",
        "name": "易普力",
        "pinyin": "ypl",
        "market": "SZ"
    },
    {
        "code": "002105",
        "name": "信隆健康",
        "pinyin": "xljk",
        "market": "SZ"
    },
    {
        "code": "002144",
        "name": "宏达高科",
        "pinyin": "hdgk",
        "market": "SZ"
    },
    {
        "code": "002164",
        "name": "宁波东力",
        "pinyin": "nbdl",
        "market": "SZ"
    },
    {
        "code": "002360",
        "name": "同德化工",
        "pinyin": "tdhg",
        "market": "SZ"
    },
    {
        "code": "002394",
        "name": "联发股份",
        "pinyin": "lfgf",
        "market": "SZ"
    },
    {
        "code": "002418",
        "name": "康盛股份",
        "pinyin": "ksgf",
        "market": "SZ"
    },
    {
        "code": "002442",
        "name": "龙星科技",
        "pinyin": "lxkj",
        "market": "SZ"
    },
    {
        "code": "002522",
        "name": "浙江众成",
        "pinyin": "zjzc",
        "market": "SZ"
    },
    {
        "code": "002616",
        "name": "长青集团",
        "pinyin": "cqjt",
        "market": "SZ"
    },
    {
        "code": "002696",
        "name": "百洋股份",
        "pinyin": "bygf",
        "market": "SZ"
    },
    {
        "code": "002789",
        "name": "*ST建艺",
        "pinyin": "*stjy",
        "market": "SZ"
    },
    {
        "code": "300021",
        "name": "大禹节水",
        "pinyin": "dyjs",
        "market": "SZ"
    },
    {
        "code": "300165",
        "name": "ST天瑞",
        "pinyin": "sttr",
        "market": "SZ"
    },
    {
        "code": "300167",
        "name": "ST迪威迅",
        "pinyin": "stdwx",
        "market": "SZ"
    },
    {
        "code": "300440",
        "name": "运达科技",
        "pinyin": "ydkj",
        "market": "SZ"
    },
    {
        "code": "300599",
        "name": "雄塑科技",
        "pinyin": "xskj",
        "market": "SZ"
    },
    {
        "code": "300883",
        "name": "龙利得",
        "pinyin": "lld",
        "market": "SZ"
    },
    {
        "code": "301070",
        "name": "开勒股份",
        "pinyin": "klgf",
        "market": "SZ"
    },
    {
        "code": "600007",
        "name": "中国国贸",
        "pinyin": "zggm",
        "market": "SH"
    },
    {
        "code": "600346",
        "name": "恒力石化",
        "pinyin": "hlsh",
        "market": "SH"
    },
    {
        "code": "600408",
        "name": "安泰集团",
        "pinyin": "atjt",
        "market": "SH"
    },
    {
        "code": "600491",
        "name": "龙元建设",
        "pinyin": "lyjs",
        "market": "SH"
    },
    {
        "code": "600696",
        "name": "*ST岩石",
        "pinyin": "*stys",
        "market": "SH"
    },
    {
        "code": "600724",
        "name": "宁波富达",
        "pinyin": "nbfd",
        "market": "SH"
    },
    {
        "code": "600834",
        "name": "申通地铁",
        "pinyin": "stdt",
        "market": "SH"
    },
    {
        "code": "601138",
        "name": "工业富联",
        "pinyin": "gyfl",
        "market": "SH"
    },
    {
        "code": "601566",
        "name": "九牧王",
        "pinyin": "jmw",
        "market": "SH"
    },
    {
        "code": "601628",
        "name": "中国人寿",
        "pinyin": "zgrs",
        "market": "SH"
    },
    {
        "code": "603183",
        "name": "建研院",
        "pinyin": "jyy",
        "market": "SH"
    },
    {
        "code": "603508",
        "name": "思维列控",
        "pinyin": "swlk",
        "market": "SH"
    },
    {
        "code": "603676",
        "name": "卫信康",
        "pinyin": "wxk",
        "market": "SH"
    },
    {
        "code": "603682",
        "name": "锦和商管",
        "pinyin": "jhsg",
        "market": "SH"
    },
    {
        "code": "603797",
        "name": "联泰环保",
        "pinyin": "lthb",
        "market": "SH"
    },
    {
        "code": "603889",
        "name": "新澳股份",
        "pinyin": "xagf",
        "market": "SH"
    },
    {
        "code": "000029",
        "name": "深深房A",
        "pinyin": "ssfa",
        "market": "SZ"
    },
    {
        "code": "000419",
        "name": "通程控股",
        "pinyin": "tckg",
        "market": "SZ"
    },
    {
        "code": "000605",
        "name": "渤海股份",
        "pinyin": "bhgf",
        "market": "SZ"
    },
    {
        "code": "000899",
        "name": "赣能股份",
        "pinyin": "gngf",
        "market": "SZ"
    },
    {
        "code": "001201",
        "name": "东瑞股份",
        "pinyin": "drgf",
        "market": "SZ"
    },
    {
        "code": "002003",
        "name": "伟星股份",
        "pinyin": "wxgf",
        "market": "SZ"
    },
    {
        "code": "002188",
        "name": "中天服务",
        "pinyin": "ztfw",
        "market": "SZ"
    },
    {
        "code": "002205",
        "name": "国统股份",
        "pinyin": "gtgf",
        "market": "SZ"
    },
    {
        "code": "002391",
        "name": "长青股份",
        "pinyin": "cqgf",
        "market": "SZ"
    },
    {
        "code": "002393",
        "name": "力生制药",
        "pinyin": "lszy",
        "market": "SZ"
    },
    {
        "code": "002648",
        "name": "卫星化学",
        "pinyin": "wxhx",
        "market": "SZ"
    },
    {
        "code": "002719",
        "name": "麦趣尔",
        "pinyin": "mqe",
        "market": "SZ"
    },
    {
        "code": "002853",
        "name": "皮阿诺",
        "pinyin": "pan",
        "market": "SZ"
    },
    {
        "code": "002856",
        "name": "美芝股份",
        "pinyin": "mzgf",
        "market": "SZ"
    },
    {
        "code": "002877",
        "name": "智能自控",
        "pinyin": "znzk",
        "market": "SZ"
    },
    {
        "code": "002940",
        "name": "昂利康",
        "pinyin": "alk",
        "market": "SZ"
    },
    {
        "code": "300103",
        "name": "达刚控股",
        "pinyin": "dgkg",
        "market": "SZ"
    },
    {
        "code": "300134",
        "name": "大富科技",
        "pinyin": "dfkj",
        "market": "SZ"
    },
    {
        "code": "300138",
        "name": "晨光生物",
        "pinyin": "cgsw",
        "market": "SZ"
    },
    {
        "code": "300195",
        "name": "长荣股份",
        "pinyin": "crgf",
        "market": "SZ"
    },
    {
        "code": "300322",
        "name": "硕贝德",
        "pinyin": "sbd",
        "market": "SZ"
    },
    {
        "code": "300583",
        "name": "赛托生物",
        "pinyin": "stsw",
        "market": "SZ"
    },
    {
        "code": "300813",
        "name": "泰林生物",
        "pinyin": "tlsw",
        "market": "SZ"
    },
    {
        "code": "300823",
        "name": "建科智能",
        "pinyin": "jkzn",
        "market": "SZ"
    },
    {
        "code": "300826",
        "name": "测绘股份",
        "pinyin": "chgf",
        "market": "SZ"
    },
    {
        "code": "300880",
        "name": "迦南智能",
        "pinyin": "jnzn",
        "market": "SZ"
    },
    {
        "code": "300995",
        "name": "奇德新材",
        "pinyin": "qdxc",
        "market": "SZ"
    },
    {
        "code": "301061",
        "name": "匠心家居",
        "pinyin": "jxjj",
        "market": "SZ"
    },
    {
        "code": "301088",
        "name": "戎美股份",
        "pinyin": "rmgf",
        "market": "SZ"
    },
    {
        "code": "301098",
        "name": "金埔园林",
        "pinyin": "jpyl",
        "market": "SZ"
    },
    {
        "code": "301112",
        "name": "信邦智能",
        "pinyin": "xbzn",
        "market": "SZ"
    },
    {
        "code": "301115",
        "name": "联检科技",
        "pinyin": "ljkj",
        "market": "SZ"
    },
    {
        "code": "301138",
        "name": "华研精机",
        "pinyin": "hyjj",
        "market": "SZ"
    },
    {
        "code": "301282",
        "name": "金禄电子",
        "pinyin": "jldz",
        "market": "SZ"
    },
    {
        "code": "301439",
        "name": "泓淋电力",
        "pinyin": "hldl",
        "market": "SZ"
    },
    {
        "code": "301507",
        "name": "民生健康",
        "pinyin": "msjk",
        "market": "SZ"
    },
    {
        "code": "600051",
        "name": "宁波联合",
        "pinyin": "nblh",
        "market": "SH"
    },
    {
        "code": "600101",
        "name": "明星电力",
        "pinyin": "mxdl",
        "market": "SH"
    },
    {
        "code": "600358",
        "name": "ST联合",
        "pinyin": "stlh",
        "market": "SH"
    },
    {
        "code": "600470",
        "name": "六国化工",
        "pinyin": "lghg",
        "market": "SH"
    },
    {
        "code": "600731",
        "name": "湖南海利",
        "pinyin": "hnhl",
        "market": "SH"
    },
    {
        "code": "600753",
        "name": "*ST海钦",
        "pinyin": "*sthq",
        "market": "SH"
    },
    {
        "code": "601026",
        "name": "道生天合",
        "pinyin": "dsth",
        "market": "SH"
    },
    {
        "code": "601689",
        "name": "拓普集团",
        "pinyin": "tpjt",
        "market": "SH"
    },
    {
        "code": "601956",
        "name": "东贝集团",
        "pinyin": "dbjt",
        "market": "SH"
    },
    {
        "code": "603065",
        "name": "宿迁联盛",
        "pinyin": "sqls",
        "market": "SH"
    },
    {
        "code": "603109",
        "name": "神驰机电",
        "pinyin": "scjd",
        "market": "SH"
    },
    {
        "code": "603124",
        "name": "江南新材",
        "pinyin": "jnxc",
        "market": "SH"
    },
    {
        "code": "603208",
        "name": "江山欧派",
        "pinyin": "jsop",
        "market": "SH"
    },
    {
        "code": "603429",
        "name": "集友股份",
        "pinyin": "jygf",
        "market": "SH"
    },
    {
        "code": "603587",
        "name": "地素时尚",
        "pinyin": "dsss",
        "market": "SH"
    },
    {
        "code": "603637",
        "name": "镇海股份",
        "pinyin": "zhgf",
        "market": "SH"
    },
    {
        "code": "603699",
        "name": "纽威股份",
        "pinyin": "nwgf",
        "market": "SH"
    },
    {
        "code": "603730",
        "name": "岱美股份",
        "pinyin": "dmgf",
        "market": "SH"
    },
    {
        "code": "603758",
        "name": "秦安股份",
        "pinyin": "qagf",
        "market": "SH"
    },
    {
        "code": "603877",
        "name": "太平鸟",
        "pinyin": "tpn",
        "market": "SH"
    },
    {
        "code": "603980",
        "name": "吉华集团",
        "pinyin": "jhjt",
        "market": "SH"
    },
    {
        "code": "605138",
        "name": "盛泰集团",
        "pinyin": "stjt",
        "market": "SH"
    },
    {
        "code": "000570",
        "name": "苏常柴A",
        "pinyin": "scca",
        "market": "SZ"
    },
    {
        "code": "000707",
        "name": "双环科技",
        "pinyin": "shkj",
        "market": "SZ"
    },
    {
        "code": "002077",
        "name": "大港股份",
        "pinyin": "dggf",
        "market": "SZ"
    },
    {
        "code": "002224",
        "name": "三 力 士",
        "pinyin": "s l s",
        "market": "SZ"
    },
    {
        "code": "002282",
        "name": "博深股份",
        "pinyin": "bsgf",
        "market": "SZ"
    },
    {
        "code": "002367",
        "name": "康力电梯",
        "pinyin": "kldt",
        "market": "SZ"
    },
    {
        "code": "002381",
        "name": "双箭股份",
        "pinyin": "sjgf",
        "market": "SZ"
    },
    {
        "code": "002521",
        "name": "齐峰新材",
        "pinyin": "qfxc",
        "market": "SZ"
    },
    {
        "code": "002593",
        "name": "日上集团",
        "pinyin": "rsjt",
        "market": "SZ"
    },
    {
        "code": "002634",
        "name": "棒杰股份",
        "pinyin": "bjgf",
        "market": "SZ"
    },
    {
        "code": "002790",
        "name": "瑞尔特",
        "pinyin": "ret",
        "market": "SZ"
    },
    {
        "code": "002817",
        "name": "黄山胶囊",
        "pinyin": "hsjn",
        "market": "SZ"
    },
    {
        "code": "002879",
        "name": "长缆科技",
        "pinyin": "clkj",
        "market": "SZ"
    },
    {
        "code": "002887",
        "name": "绿茵生态",
        "pinyin": "lyst",
        "market": "SZ"
    },
    {
        "code": "002972",
        "name": "科安达",
        "pinyin": "kad",
        "market": "SZ"
    },
    {
        "code": "002993",
        "name": "奥海科技",
        "pinyin": "ahkj",
        "market": "SZ"
    },
    {
        "code": "300133",
        "name": "华策影视",
        "pinyin": "hcys",
        "market": "SZ"
    },
    {
        "code": "300241",
        "name": "瑞丰光电",
        "pinyin": "rfgd",
        "market": "SZ"
    },
    {
        "code": "300265",
        "name": "通光线缆",
        "pinyin": "tgxl",
        "market": "SZ"
    },
    {
        "code": "300283",
        "name": "温州宏丰",
        "pinyin": "wzhf",
        "market": "SZ"
    },
    {
        "code": "300375",
        "name": "鹏翎股份",
        "pinyin": "plgf",
        "market": "SZ"
    },
    {
        "code": "300453",
        "name": "三鑫医疗",
        "pinyin": "sxyl",
        "market": "SZ"
    },
    {
        "code": "300708",
        "name": "聚灿光电",
        "pinyin": "jcgd",
        "market": "SZ"
    },
    {
        "code": "300712",
        "name": "永福股份",
        "pinyin": "yfgf",
        "market": "SZ"
    },
    {
        "code": "300771",
        "name": "智莱科技",
        "pinyin": "zlkj",
        "market": "SZ"
    },
    {
        "code": "300956",
        "name": "英力股份",
        "pinyin": "ylgf",
        "market": "SZ"
    },
    {
        "code": "300964",
        "name": "本川智能",
        "pinyin": "bczn",
        "market": "SZ"
    },
    {
        "code": "301332",
        "name": "德尔玛",
        "pinyin": "dem",
        "market": "SZ"
    },
    {
        "code": "600127",
        "name": "金健米业",
        "pinyin": "jjmy",
        "market": "SH"
    },
    {
        "code": "600202",
        "name": "哈空调",
        "pinyin": "hkt",
        "market": "SH"
    },
    {
        "code": "600526",
        "name": "菲达环保",
        "pinyin": "fdhb",
        "market": "SH"
    },
    {
        "code": "600558",
        "name": "大西洋",
        "pinyin": "dxy",
        "market": "SH"
    },
    {
        "code": "600722",
        "name": "金牛化工",
        "pinyin": "jnhg",
        "market": "SH"
    },
    {
        "code": "600744",
        "name": "华银电力",
        "pinyin": "hydl",
        "market": "SH"
    },
    {
        "code": "600769",
        "name": "祥龙电业",
        "pinyin": "xldy",
        "market": "SH"
    },
    {
        "code": "601065",
        "name": "江盐集团",
        "pinyin": "jyjt",
        "market": "SH"
    },
    {
        "code": "603066",
        "name": "音飞储存",
        "pinyin": "yfcc",
        "market": "SH"
    },
    {
        "code": "603071",
        "name": "XD物产环",
        "pinyin": "xdwch",
        "market": "SH"
    },
    {
        "code": "603126",
        "name": "中材节能",
        "pinyin": "zcjn",
        "market": "SH"
    },
    {
        "code": "603188",
        "name": "亚邦股份",
        "pinyin": "ybgf",
        "market": "SH"
    },
    {
        "code": "603238",
        "name": "诺邦股份",
        "pinyin": "nbgf",
        "market": "SH"
    },
    {
        "code": "603500",
        "name": "祥和实业",
        "pinyin": "xhsy",
        "market": "SH"
    },
    {
        "code": "603590",
        "name": "康辰药业",
        "pinyin": "kcyy",
        "market": "SH"
    },
    {
        "code": "603776",
        "name": "永安行",
        "pinyin": "yah",
        "market": "SH"
    },
    {
        "code": "603817",
        "name": "海峡环保",
        "pinyin": "hxhb",
        "market": "SH"
    },
    {
        "code": "603880",
        "name": "南卫股份",
        "pinyin": "nwgf",
        "market": "SH"
    },
    {
        "code": "603888",
        "name": "新华网",
        "pinyin": "xhw",
        "market": "SH"
    },
    {
        "code": "603937",
        "name": "丽岛新材",
        "pinyin": "ldxc",
        "market": "SH"
    },
    {
        "code": "603970",
        "name": "中农立华",
        "pinyin": "znlh",
        "market": "SH"
    },
    {
        "code": "605365",
        "name": "立达信",
        "pinyin": "ldx",
        "market": "SH"
    },
    {
        "code": "000609",
        "name": "ST中迪",
        "pinyin": "stzd",
        "market": "SZ"
    },
    {
        "code": "000692",
        "name": "惠天热电",
        "pinyin": "htrd",
        "market": "SZ"
    },
    {
        "code": "000731",
        "name": "四川美丰",
        "pinyin": "scmf",
        "market": "SZ"
    },
    {
        "code": "000856",
        "name": "冀东装备",
        "pinyin": "jdzb",
        "market": "SZ"
    },
    {
        "code": "000901",
        "name": "航天科技",
        "pinyin": "htkj",
        "market": "SZ"
    },
    {
        "code": "001396",
        "name": "誉帆科技",
        "pinyin": "yfkj",
        "market": "SZ"
    },
    {
        "code": "002031",
        "name": "巨轮智能",
        "pinyin": "jlzn",
        "market": "SZ"
    },
    {
        "code": "002246",
        "name": "北化股份",
        "pinyin": "bhgf",
        "market": "SZ"
    },
    {
        "code": "002299",
        "name": "圣农发展",
        "pinyin": "snfz",
        "market": "SZ"
    },
    {
        "code": "002677",
        "name": "浙江美大",
        "pinyin": "zjmd",
        "market": "SZ"
    },
    {
        "code": "002763",
        "name": "汇洁股份",
        "pinyin": "hjgf",
        "market": "SZ"
    },
    {
        "code": "002795",
        "name": "永和智控",
        "pinyin": "yhzk",
        "market": "SZ"
    },
    {
        "code": "002799",
        "name": "环球印务",
        "pinyin": "hqyw",
        "market": "SZ"
    },
    {
        "code": "002873",
        "name": "新天药业",
        "pinyin": "xtyy",
        "market": "SZ"
    },
    {
        "code": "002948",
        "name": "青岛银行",
        "pinyin": "qdyh",
        "market": "SZ"
    },
    {
        "code": "002951",
        "name": "金时科技",
        "pinyin": "jskj",
        "market": "SZ"
    },
    {
        "code": "003035",
        "name": "南网能源",
        "pinyin": "nwny",
        "market": "SZ"
    },
    {
        "code": "300041",
        "name": "回天新材",
        "pinyin": "htxc",
        "market": "SZ"
    },
    {
        "code": "300094",
        "name": "国联水产",
        "pinyin": "glsc",
        "market": "SZ"
    },
    {
        "code": "300154",
        "name": "瑞凌股份",
        "pinyin": "rlgf",
        "market": "SZ"
    },
    {
        "code": "300184",
        "name": "力源信息",
        "pinyin": "lyxx",
        "market": "SZ"
    },
    {
        "code": "300414",
        "name": "中光防雷",
        "pinyin": "zgfl",
        "market": "SZ"
    },
    {
        "code": "300511",
        "name": "雪榕生物",
        "pinyin": "xrsw",
        "market": "SZ"
    },
    {
        "code": "300517",
        "name": "海波重科",
        "pinyin": "hbzk",
        "market": "SZ"
    },
    {
        "code": "300565",
        "name": "科信技术",
        "pinyin": "kxjs",
        "market": "SZ"
    },
    {
        "code": "300637",
        "name": "扬帆新材",
        "pinyin": "yfxc",
        "market": "SZ"
    },
    {
        "code": "300729",
        "name": "乐歌股份",
        "pinyin": "lggf",
        "market": "SZ"
    },
    {
        "code": "300822",
        "name": "贝仕达克",
        "pinyin": "bsdk",
        "market": "SZ"
    },
    {
        "code": "301032",
        "name": "新柴股份",
        "pinyin": "xcgf",
        "market": "SZ"
    },
    {
        "code": "301508",
        "name": "中机认检",
        "pinyin": "zjrj",
        "market": "SZ"
    },
    {
        "code": "600601",
        "name": "方正科技",
        "pinyin": "fzkj",
        "market": "SH"
    },
    {
        "code": "600749",
        "name": "西藏旅游",
        "pinyin": "xcly",
        "market": "SH"
    },
    {
        "code": "600926",
        "name": "杭州银行",
        "pinyin": "hzyh",
        "market": "SH"
    },
    {
        "code": "601698",
        "name": "中国卫通",
        "pinyin": "zgwt",
        "market": "SH"
    },
    {
        "code": "601857",
        "name": "中国石油",
        "pinyin": "zgsy",
        "market": "SH"
    },
    {
        "code": "603107",
        "name": "上海汽配",
        "pinyin": "shqp",
        "market": "SH"
    },
    {
        "code": "603167",
        "name": "渤海轮渡",
        "pinyin": "bhld",
        "market": "SH"
    },
    {
        "code": "603223",
        "name": "恒通股份",
        "pinyin": "htgf",
        "market": "SH"
    },
    {
        "code": "603309",
        "name": "维力医疗",
        "pinyin": "wlyl",
        "market": "SH"
    },
    {
        "code": "603317",
        "name": "天味食品",
        "pinyin": "twsp",
        "market": "SH"
    },
    {
        "code": "603326",
        "name": "我乐家居",
        "pinyin": "wljj",
        "market": "SH"
    },
    {
        "code": "603648",
        "name": "畅联股份",
        "pinyin": "clgf",
        "market": "SH"
    },
    {
        "code": "603839",
        "name": "安正时尚",
        "pinyin": "azss",
        "market": "SH"
    },
    {
        "code": "605218",
        "name": "伟时电子",
        "pinyin": "wsdz",
        "market": "SH"
    },
    {
        "code": "605268",
        "name": "王力安防",
        "pinyin": "wlaf",
        "market": "SH"
    },
    {
        "code": "000019",
        "name": "深粮控股",
        "pinyin": "slkg",
        "market": "SZ"
    },
    {
        "code": "000813",
        "name": "德展健康",
        "pinyin": "dzjk",
        "market": "SZ"
    },
    {
        "code": "000888",
        "name": "峨眉山A",
        "pinyin": "emsa",
        "market": "SZ"
    },
    {
        "code": "001202",
        "name": "炬申股份",
        "pinyin": "jsgf",
        "market": "SZ"
    },
    {
        "code": "001205",
        "name": "盛航股份",
        "pinyin": "shgf",
        "market": "SZ"
    },
    {
        "code": "001298",
        "name": "好上好",
        "pinyin": "hsh",
        "market": "SZ"
    },
    {
        "code": "001322",
        "name": "箭牌家居",
        "pinyin": "jpjj",
        "market": "SZ"
    },
    {
        "code": "002163",
        "name": "海南发展",
        "pinyin": "hnfz",
        "market": "SZ"
    },
    {
        "code": "002193",
        "name": "如意集团",
        "pinyin": "ryjt",
        "market": "SZ"
    },
    {
        "code": "002206",
        "name": "海 利 得",
        "pinyin": "h l d",
        "market": "SZ"
    },
    {
        "code": "002407",
        "name": "多氟多",
        "pinyin": "dfd",
        "market": "SZ"
    },
    {
        "code": "002598",
        "name": "山东章鼓",
        "pinyin": "sdzg",
        "market": "SZ"
    },
    {
        "code": "002707",
        "name": "众信旅游",
        "pinyin": "zxly",
        "market": "SZ"
    },
    {
        "code": "002824",
        "name": "和胜股份",
        "pinyin": "hsgf",
        "market": "SZ"
    },
    {
        "code": "002960",
        "name": "青鸟消防",
        "pinyin": "qnxf",
        "market": "SZ"
    },
    {
        "code": "003016",
        "name": "欣贺股份",
        "pinyin": "xhgf",
        "market": "SZ"
    },
    {
        "code": "300112",
        "name": "万讯自控",
        "pinyin": "wxzk",
        "market": "SZ"
    },
    {
        "code": "300314",
        "name": "戴维医疗",
        "pinyin": "dwyl",
        "market": "SZ"
    },
    {
        "code": "300795",
        "name": "米奥会展",
        "pinyin": "mahz",
        "market": "SZ"
    },
    {
        "code": "300838",
        "name": "浙江力诺",
        "pinyin": "zjln",
        "market": "SZ"
    },
    {
        "code": "300971",
        "name": "博亚精工",
        "pinyin": "byjg",
        "market": "SZ"
    },
    {
        "code": "600036",
        "name": "招商银行",
        "pinyin": "zsyh",
        "market": "SH"
    },
    {
        "code": "600057",
        "name": "厦门象屿",
        "pinyin": "smxy",
        "market": "SH"
    },
    {
        "code": "600148",
        "name": "长春一东",
        "pinyin": "ccyd",
        "market": "SH"
    },
    {
        "code": "600199",
        "name": "金种子酒",
        "pinyin": "jzzj",
        "market": "SH"
    },
    {
        "code": "600509",
        "name": "天富能源",
        "pinyin": "tfny",
        "market": "SH"
    },
    {
        "code": "600818",
        "name": "中路股份",
        "pinyin": "zlgf",
        "market": "SH"
    },
    {
        "code": "601999",
        "name": "出版传媒",
        "pinyin": "cbcm",
        "market": "SH"
    },
    {
        "code": "603058",
        "name": "永吉股份",
        "pinyin": "yjgf",
        "market": "SH"
    },
    {
        "code": "603178",
        "name": "圣龙股份",
        "pinyin": "slgf",
        "market": "SH"
    },
    {
        "code": "603299",
        "name": "苏盐井神",
        "pinyin": "syjs",
        "market": "SH"
    },
    {
        "code": "603313",
        "name": "梦百合",
        "pinyin": "mbh",
        "market": "SH"
    },
    {
        "code": "603329",
        "name": "上海雅仕",
        "pinyin": "shys",
        "market": "SH"
    },
    {
        "code": "603385",
        "name": "惠达卫浴",
        "pinyin": "hdwy",
        "market": "SH"
    },
    {
        "code": "603567",
        "name": "珍宝岛",
        "pinyin": "zbd",
        "market": "SH"
    },
    {
        "code": "603686",
        "name": "福龙马",
        "pinyin": "flm",
        "market": "SH"
    },
    {
        "code": "603816",
        "name": "顾家家居",
        "pinyin": "gjjj",
        "market": "SH"
    },
    {
        "code": "001300",
        "name": "三柏硕",
        "pinyin": "sbs",
        "market": "SZ"
    },
    {
        "code": "002021",
        "name": "中捷资源",
        "pinyin": "zjzy",
        "market": "SZ"
    },
    {
        "code": "002296",
        "name": "辉煌科技",
        "pinyin": "hhkj",
        "market": "SZ"
    },
    {
        "code": "002553",
        "name": "南方精工",
        "pinyin": "nfjg",
        "market": "SZ"
    },
    {
        "code": "002670",
        "name": "国盛证券",
        "pinyin": "gszq",
        "market": "SZ"
    },
    {
        "code": "002674",
        "name": "兴业科技",
        "pinyin": "xykj",
        "market": "SZ"
    },
    {
        "code": "002687",
        "name": "乔治白",
        "pinyin": "qzb",
        "market": "SZ"
    },
    {
        "code": "002774",
        "name": "快意电梯",
        "pinyin": "kydt",
        "market": "SZ"
    },
    {
        "code": "002882",
        "name": "金龙羽",
        "pinyin": "jly",
        "market": "SZ"
    },
    {
        "code": "002909",
        "name": "集泰股份",
        "pinyin": "jtgf",
        "market": "SZ"
    },
    {
        "code": "002981",
        "name": "朝阳科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "300369",
        "name": "绿盟科技",
        "pinyin": "lmkj",
        "market": "SZ"
    },
    {
        "code": "300407",
        "name": "凯发电气",
        "pinyin": "kfdq",
        "market": "SZ"
    },
    {
        "code": "300473",
        "name": "德尔股份",
        "pinyin": "degf",
        "market": "SZ"
    },
    {
        "code": "300504",
        "name": "天邑股份",
        "pinyin": "tygf",
        "market": "SZ"
    },
    {
        "code": "300621",
        "name": "维业股份",
        "pinyin": "wygf",
        "market": "SZ"
    },
    {
        "code": "300694",
        "name": "蠡湖股份",
        "pinyin": "lhgf",
        "market": "SZ"
    },
    {
        "code": "300955",
        "name": "嘉亨家化",
        "pinyin": "jhjh",
        "market": "SZ"
    },
    {
        "code": "301365",
        "name": "矩阵股份",
        "pinyin": "jzgf",
        "market": "SZ"
    },
    {
        "code": "600235",
        "name": "民丰特纸",
        "pinyin": "mftz",
        "market": "SH"
    },
    {
        "code": "600560",
        "name": "金自天正",
        "pinyin": "jztz",
        "market": "SH"
    },
    {
        "code": "600561",
        "name": "江西长运",
        "pinyin": "jxcy",
        "market": "SH"
    },
    {
        "code": "600970",
        "name": "中材国际",
        "pinyin": "zcgj",
        "market": "SH"
    },
    {
        "code": "601015",
        "name": "陕西黑猫",
        "pinyin": "sxhm",
        "market": "SH"
    },
    {
        "code": "601033",
        "name": "永兴股份",
        "pinyin": "yxgf",
        "market": "SH"
    },
    {
        "code": "601599",
        "name": "浙文影业",
        "pinyin": "zwyy",
        "market": "SH"
    },
    {
        "code": "603057",
        "name": "紫燕食品",
        "pinyin": "zysp",
        "market": "SH"
    },
    {
        "code": "603270",
        "name": "金帝股份",
        "pinyin": "jdgf",
        "market": "SH"
    },
    {
        "code": "603375",
        "name": "盛景微",
        "pinyin": "sjw",
        "market": "SH"
    },
    {
        "code": "603768",
        "name": "常青股份",
        "pinyin": "cqgf",
        "market": "SH"
    },
    {
        "code": "605018",
        "name": "长华集团",
        "pinyin": "chjt",
        "market": "SH"
    },
    {
        "code": "605180",
        "name": "华生科技",
        "pinyin": "hskj",
        "market": "SH"
    },
    {
        "code": "000007",
        "name": "全新好",
        "pinyin": "qxh",
        "market": "SZ"
    },
    {
        "code": "000042",
        "name": "中洲控股",
        "pinyin": "zzkg",
        "market": "SZ"
    },
    {
        "code": "000819",
        "name": "岳阳兴长",
        "pinyin": "yyxc",
        "market": "SZ"
    },
    {
        "code": "000920",
        "name": "沃顿科技",
        "pinyin": "wdkj",
        "market": "SZ"
    },
    {
        "code": "001239",
        "name": "永达股份",
        "pinyin": "ydgf",
        "market": "SZ"
    },
    {
        "code": "001366",
        "name": "播恩集团",
        "pinyin": "bejt",
        "market": "SZ"
    },
    {
        "code": "002234",
        "name": "民和股份",
        "pinyin": "mhgf",
        "market": "SZ"
    },
    {
        "code": "002493",
        "name": "荣盛石化",
        "pinyin": "rssh",
        "market": "SZ"
    },
    {
        "code": "002669",
        "name": "康达新材",
        "pinyin": "kdxc",
        "market": "SZ"
    },
    {
        "code": "002787",
        "name": "华源控股",
        "pinyin": "hykg",
        "market": "SZ"
    },
    {
        "code": "002893",
        "name": "京能热力",
        "pinyin": "jnrl",
        "market": "SZ"
    },
    {
        "code": "002927",
        "name": "泰永长征",
        "pinyin": "tycz",
        "market": "SZ"
    },
    {
        "code": "003036",
        "name": "泰坦股份",
        "pinyin": "ttgf",
        "market": "SZ"
    },
    {
        "code": "003039",
        "name": "顺控发展",
        "pinyin": "skfz",
        "market": "SZ"
    },
    {
        "code": "300204",
        "name": "舒泰神",
        "pinyin": "sts",
        "market": "SZ"
    },
    {
        "code": "300306",
        "name": "远方信息",
        "pinyin": "yfxx",
        "market": "SZ"
    },
    {
        "code": "300313",
        "name": "*ST天山",
        "pinyin": "*stts",
        "market": "SZ"
    },
    {
        "code": "300321",
        "name": "同大股份",
        "pinyin": "tdgf",
        "market": "SZ"
    },
    {
        "code": "300334",
        "name": "津膜科技",
        "pinyin": "jmkj",
        "market": "SZ"
    },
    {
        "code": "300494",
        "name": "盛天网络",
        "pinyin": "stwl",
        "market": "SZ"
    },
    {
        "code": "300515",
        "name": "三德科技",
        "pinyin": "sdkj",
        "market": "SZ"
    },
    {
        "code": "300539",
        "name": "横河精密",
        "pinyin": "hhjm",
        "market": "SZ"
    },
    {
        "code": "300796",
        "name": "贝斯美",
        "pinyin": "bsm",
        "market": "SZ"
    },
    {
        "code": "300853",
        "name": "申昊科技",
        "pinyin": "shkj",
        "market": "SZ"
    },
    {
        "code": "300879",
        "name": "大叶股份",
        "pinyin": "dygf",
        "market": "SZ"
    },
    {
        "code": "301009",
        "name": "可靠股份",
        "pinyin": "kkgf",
        "market": "SZ"
    },
    {
        "code": "301059",
        "name": "金三江",
        "pinyin": "jsj",
        "market": "SZ"
    },
    {
        "code": "301229",
        "name": "纽泰格",
        "pinyin": "ntg",
        "market": "SZ"
    },
    {
        "code": "301277",
        "name": "新天地",
        "pinyin": "xtd",
        "market": "SZ"
    },
    {
        "code": "600379",
        "name": "宝光股份",
        "pinyin": "bggf",
        "market": "SH"
    },
    {
        "code": "600729",
        "name": "重庆百货",
        "pinyin": "zqbh",
        "market": "SH"
    },
    {
        "code": "600827",
        "name": "百联股份",
        "pinyin": "blgf",
        "market": "SH"
    },
    {
        "code": "600860",
        "name": "京城股份",
        "pinyin": "jcgf",
        "market": "SH"
    },
    {
        "code": "600989",
        "name": "宝丰能源",
        "pinyin": "bfny",
        "market": "SH"
    },
    {
        "code": "603017",
        "name": "中衡设计",
        "pinyin": "zhsj",
        "market": "SH"
    },
    {
        "code": "603019",
        "name": "中科曙光",
        "pinyin": "zksg",
        "market": "SH"
    },
    {
        "code": "603214",
        "name": "爱婴室",
        "pinyin": "ays",
        "market": "SH"
    },
    {
        "code": "603266",
        "name": "天龙股份",
        "pinyin": "tlgf",
        "market": "SH"
    },
    {
        "code": "603289",
        "name": "泰瑞机器",
        "pinyin": "trjq",
        "market": "SH"
    },
    {
        "code": "603319",
        "name": "美湖股份",
        "pinyin": "mhgf",
        "market": "SH"
    },
    {
        "code": "603602",
        "name": "纵横通信",
        "pinyin": "zhtx",
        "market": "SH"
    },
    {
        "code": "603681",
        "name": "永冠新材",
        "pinyin": "ygxc",
        "market": "SH"
    },
    {
        "code": "603739",
        "name": "蔚蓝生物",
        "pinyin": "wlsw",
        "market": "SH"
    },
    {
        "code": "603868",
        "name": "飞科电器",
        "pinyin": "fkdq",
        "market": "SH"
    },
    {
        "code": "603869",
        "name": "ST智知",
        "pinyin": "stzz",
        "market": "SH"
    },
    {
        "code": "605222",
        "name": "起帆电缆",
        "pinyin": "qfdl",
        "market": "SH"
    },
    {
        "code": "605507",
        "name": "国邦医药",
        "pinyin": "gbyy",
        "market": "SH"
    },
    {
        "code": "000911",
        "name": "广农糖业",
        "pinyin": "gnty",
        "market": "SZ"
    },
    {
        "code": "002012",
        "name": "凯恩股份",
        "pinyin": "kegf",
        "market": "SZ"
    },
    {
        "code": "002033",
        "name": "丽江股份",
        "pinyin": "ljgf",
        "market": "SZ"
    },
    {
        "code": "002106",
        "name": "莱宝高科",
        "pinyin": "lbgk",
        "market": "SZ"
    },
    {
        "code": "002277",
        "name": "友阿股份",
        "pinyin": "yagf",
        "market": "SZ"
    },
    {
        "code": "002283",
        "name": "天润工业",
        "pinyin": "trgy",
        "market": "SZ"
    },
    {
        "code": "002385",
        "name": "大北农",
        "pinyin": "dbn",
        "market": "SZ"
    },
    {
        "code": "002840",
        "name": "华统股份",
        "pinyin": "htgf",
        "market": "SZ"
    },
    {
        "code": "002986",
        "name": "宇新股份",
        "pinyin": "yxgf",
        "market": "SZ"
    },
    {
        "code": "002998",
        "name": "优彩资源",
        "pinyin": "yczy",
        "market": "SZ"
    },
    {
        "code": "300240",
        "name": "飞力达",
        "pinyin": "fld",
        "market": "SZ"
    },
    {
        "code": "300259",
        "name": "新天科技",
        "pinyin": "xtkj",
        "market": "SZ"
    },
    {
        "code": "300519",
        "name": "新光药业",
        "pinyin": "xgyy",
        "market": "SZ"
    },
    {
        "code": "300568",
        "name": "星源材质",
        "pinyin": "xycz",
        "market": "SZ"
    },
    {
        "code": "300715",
        "name": "凯伦股份",
        "pinyin": "klgf",
        "market": "SZ"
    },
    {
        "code": "300859",
        "name": "西域旅游",
        "pinyin": "xyly",
        "market": "SZ"
    },
    {
        "code": "300931",
        "name": "通用电梯",
        "pinyin": "tydt",
        "market": "SZ"
    },
    {
        "code": "300994",
        "name": "久祺股份",
        "pinyin": "jqgf",
        "market": "SZ"
    },
    {
        "code": "301046",
        "name": "能辉科技",
        "pinyin": "nhkj",
        "market": "SZ"
    },
    {
        "code": "301319",
        "name": "唯特偶",
        "pinyin": "wto",
        "market": "SZ"
    },
    {
        "code": "301586",
        "name": "佳力奇",
        "pinyin": "jlq",
        "market": "SZ"
    },
    {
        "code": "600505",
        "name": "西昌电力",
        "pinyin": "xcdl",
        "market": "SH"
    },
    {
        "code": "600693",
        "name": "东百集团",
        "pinyin": "dbjt",
        "market": "SH"
    },
    {
        "code": "600830",
        "name": "香溢融通",
        "pinyin": "xyrt",
        "market": "SH"
    },
    {
        "code": "600841",
        "name": "动力新科",
        "pinyin": "dlxk",
        "market": "SH"
    },
    {
        "code": "600971",
        "name": "恒源煤电",
        "pinyin": "hymd",
        "market": "SH"
    },
    {
        "code": "603155",
        "name": "新亚强",
        "pinyin": "xyq",
        "market": "SH"
    },
    {
        "code": "603376",
        "name": "大明电子",
        "pinyin": "dmdz",
        "market": "SH"
    },
    {
        "code": "603489",
        "name": "八方股份",
        "pinyin": "bfgf",
        "market": "SH"
    },
    {
        "code": "603787",
        "name": "新日股份",
        "pinyin": "xrgf",
        "market": "SH"
    },
    {
        "code": "603788",
        "name": "宁波高发",
        "pinyin": "nbgf",
        "market": "SH"
    },
    {
        "code": "603967",
        "name": "中创物流",
        "pinyin": "zcwl",
        "market": "SH"
    },
    {
        "code": "000031",
        "name": "大悦城",
        "pinyin": "dyc",
        "market": "SZ"
    },
    {
        "code": "000551",
        "name": "创元科技",
        "pinyin": "cykj",
        "market": "SZ"
    },
    {
        "code": "000557",
        "name": "西部创业",
        "pinyin": "xbcy",
        "market": "SZ"
    },
    {
        "code": "000599",
        "name": "青岛双星",
        "pinyin": "qdsx",
        "market": "SZ"
    },
    {
        "code": "000778",
        "name": "新兴铸管",
        "pinyin": "xxzg",
        "market": "SZ"
    },
    {
        "code": "001209",
        "name": "洪兴股份",
        "pinyin": "hxgf",
        "market": "SZ"
    },
    {
        "code": "001324",
        "name": "长青科技",
        "pinyin": "cqkj",
        "market": "SZ"
    },
    {
        "code": "002039",
        "name": "黔源电力",
        "pinyin": "qydl",
        "market": "SZ"
    },
    {
        "code": "002068",
        "name": "黑猫股份",
        "pinyin": "hmgf",
        "market": "SZ"
    },
    {
        "code": "002082",
        "name": "万邦德",
        "pinyin": "wbd",
        "market": "SZ"
    },
    {
        "code": "002494",
        "name": "华斯股份",
        "pinyin": "hsgf",
        "market": "SZ"
    },
    {
        "code": "300176",
        "name": "鸿特科技",
        "pinyin": "htkj",
        "market": "SZ"
    },
    {
        "code": "300221",
        "name": "银禧科技",
        "pinyin": "yxkj",
        "market": "SZ"
    },
    {
        "code": "300400",
        "name": "劲拓股份",
        "pinyin": "jtgf",
        "market": "SZ"
    },
    {
        "code": "300492",
        "name": "华图山鼎",
        "pinyin": "htsd",
        "market": "SZ"
    },
    {
        "code": "300566",
        "name": "激智科技",
        "pinyin": "jzkj",
        "market": "SZ"
    },
    {
        "code": "300633",
        "name": "开立医疗",
        "pinyin": "klyl",
        "market": "SZ"
    },
    {
        "code": "300665",
        "name": "飞鹿股份",
        "pinyin": "flgf",
        "market": "SZ"
    },
    {
        "code": "300787",
        "name": "海能实业",
        "pinyin": "hnsy",
        "market": "SZ"
    },
    {
        "code": "300788",
        "name": "中信出版",
        "pinyin": "zxcb",
        "market": "SZ"
    },
    {
        "code": "300865",
        "name": "大宏立",
        "pinyin": "dhl",
        "market": "SZ"
    },
    {
        "code": "301296",
        "name": "新巨丰",
        "pinyin": "xjf",
        "market": "SZ"
    },
    {
        "code": "600241",
        "name": "时代万恒",
        "pinyin": "sdwh",
        "market": "SH"
    },
    {
        "code": "600336",
        "name": "澳柯玛",
        "pinyin": "akm",
        "market": "SH"
    },
    {
        "code": "600376",
        "name": "首开股份",
        "pinyin": "skgf",
        "market": "SH"
    },
    {
        "code": "600741",
        "name": "华域汽车",
        "pinyin": "hyqc",
        "market": "SH"
    },
    {
        "code": "600810",
        "name": "神马股份",
        "pinyin": "smgf",
        "market": "SH"
    },
    {
        "code": "600871",
        "name": "石化油服",
        "pinyin": "shyf",
        "market": "SH"
    },
    {
        "code": "601598",
        "name": "中国外运",
        "pinyin": "zgwy",
        "market": "SH"
    },
    {
        "code": "603043",
        "name": "广州酒家",
        "pinyin": "gzjj",
        "market": "SH"
    },
    {
        "code": "603110",
        "name": "东方材料",
        "pinyin": "dfcl",
        "market": "SH"
    },
    {
        "code": "603352",
        "name": "至信股份",
        "pinyin": "zxgf",
        "market": "SH"
    },
    {
        "code": "603386",
        "name": "骏亚科技",
        "pinyin": "jykj",
        "market": "SH"
    },
    {
        "code": "603803",
        "name": "瑞斯康达",
        "pinyin": "rskd",
        "market": "SH"
    },
    {
        "code": "603909",
        "name": "建发合诚",
        "pinyin": "jfhc",
        "market": "SH"
    },
    {
        "code": "603912",
        "name": "佳力图",
        "pinyin": "jlt",
        "market": "SH"
    },
    {
        "code": "605133",
        "name": "嵘泰股份",
        "pinyin": "rtgf",
        "market": "SH"
    },
    {
        "code": "001277",
        "name": "速达股份",
        "pinyin": "sdgf",
        "market": "SZ"
    },
    {
        "code": "001388",
        "name": "信通电子",
        "pinyin": "xtdz",
        "market": "SZ"
    },
    {
        "code": "002088",
        "name": "鲁阳节能",
        "pinyin": "lyjn",
        "market": "SZ"
    },
    {
        "code": "002469",
        "name": "三维化学",
        "pinyin": "swhx",
        "market": "SZ"
    },
    {
        "code": "002722",
        "name": "物产金轮",
        "pinyin": "wcjl",
        "market": "SZ"
    },
    {
        "code": "002823",
        "name": "凯中精密",
        "pinyin": "kzjm",
        "market": "SZ"
    },
    {
        "code": "002999",
        "name": "天禾股份",
        "pinyin": "thgf",
        "market": "SZ"
    },
    {
        "code": "300107",
        "name": "建新股份",
        "pinyin": "jxgf",
        "market": "SZ"
    },
    {
        "code": "300329",
        "name": "海伦钢琴",
        "pinyin": "hlgq",
        "market": "SZ"
    },
    {
        "code": "300741",
        "name": "华宝股份",
        "pinyin": "hbgf",
        "market": "SZ"
    },
    {
        "code": "300845",
        "name": "捷安高科",
        "pinyin": "jagk",
        "market": "SZ"
    },
    {
        "code": "300932",
        "name": "三友联众",
        "pinyin": "sylz",
        "market": "SZ"
    },
    {
        "code": "300983",
        "name": "尤安设计",
        "pinyin": "yasj",
        "market": "SZ"
    },
    {
        "code": "301040",
        "name": "中环海陆",
        "pinyin": "zhhl",
        "market": "SZ"
    },
    {
        "code": "301173",
        "name": "毓恬冠佳",
        "pinyin": "ytgj",
        "market": "SZ"
    },
    {
        "code": "301192",
        "name": "泰祥股份",
        "pinyin": "txgf",
        "market": "SZ"
    },
    {
        "code": "301515",
        "name": "港通医疗",
        "pinyin": "gtyl",
        "market": "SZ"
    },
    {
        "code": "301516",
        "name": "中远通",
        "pinyin": "zyt",
        "market": "SZ"
    },
    {
        "code": "301558",
        "name": "三态股份",
        "pinyin": "stgf",
        "market": "SZ"
    },
    {
        "code": "600133",
        "name": "东湖高新",
        "pinyin": "dhgx",
        "market": "SH"
    },
    {
        "code": "600285",
        "name": "羚锐制药",
        "pinyin": "lrzy",
        "market": "SH"
    },
    {
        "code": "600319",
        "name": "亚星化学",
        "pinyin": "yxhx",
        "market": "SH"
    },
    {
        "code": "600608",
        "name": "*ST沪科",
        "pinyin": "*sthk",
        "market": "SH"
    },
    {
        "code": "600638",
        "name": "新黄浦",
        "pinyin": "xhp",
        "market": "SH"
    },
    {
        "code": "603511",
        "name": "爱慕股份",
        "pinyin": "amgf",
        "market": "SH"
    },
    {
        "code": "603721",
        "name": "*ST天择",
        "pinyin": "*sttz",
        "market": "SH"
    },
    {
        "code": "603856",
        "name": "东宏股份",
        "pinyin": "dhgf",
        "market": "SH"
    },
    {
        "code": "603968",
        "name": "醋化股份",
        "pinyin": "chgf",
        "market": "SH"
    },
    {
        "code": "605055",
        "name": "迎丰股份",
        "pinyin": "yfgf",
        "market": "SH"
    },
    {
        "code": "000037",
        "name": "深南电A",
        "pinyin": "snda",
        "market": "SZ"
    },
    {
        "code": "002140",
        "name": "东华科技",
        "pinyin": "dhkj",
        "market": "SZ"
    },
    {
        "code": "002293",
        "name": "罗莱生活",
        "pinyin": "llsh",
        "market": "SZ"
    },
    {
        "code": "002350",
        "name": "北京科锐",
        "pinyin": "bjkr",
        "market": "SZ"
    },
    {
        "code": "002559",
        "name": "亚威股份",
        "pinyin": "ywgf",
        "market": "SZ"
    },
    {
        "code": "002565",
        "name": "顺灏股份",
        "pinyin": "shgf",
        "market": "SZ"
    },
    {
        "code": "002676",
        "name": "顺威股份",
        "pinyin": "swgf",
        "market": "SZ"
    },
    {
        "code": "002825",
        "name": "纳尔股份",
        "pinyin": "negf",
        "market": "SZ"
    },
    {
        "code": "002965",
        "name": "祥鑫科技",
        "pinyin": "xxkj",
        "market": "SZ"
    },
    {
        "code": "300126",
        "name": "锐奇股份",
        "pinyin": "rqgf",
        "market": "SZ"
    },
    {
        "code": "300388",
        "name": "节能国祯",
        "pinyin": "jngz",
        "market": "SZ"
    },
    {
        "code": "300597",
        "name": "吉大通信",
        "pinyin": "jdtx",
        "market": "SZ"
    },
    {
        "code": "300627",
        "name": "华测导航",
        "pinyin": "hcdh",
        "market": "SZ"
    },
    {
        "code": "300670",
        "name": "大烨智能",
        "pinyin": "dyzn",
        "market": "SZ"
    },
    {
        "code": "300749",
        "name": "顶固集创",
        "pinyin": "dgjc",
        "market": "SZ"
    },
    {
        "code": "300960",
        "name": "通业科技",
        "pinyin": "tykj",
        "market": "SZ"
    },
    {
        "code": "301298",
        "name": "东利机械",
        "pinyin": "dljx",
        "market": "SZ"
    },
    {
        "code": "301331",
        "name": "恩威医药",
        "pinyin": "ewyy",
        "market": "SZ"
    },
    {
        "code": "600079",
        "name": "ST人福",
        "pinyin": "strf",
        "market": "SH"
    },
    {
        "code": "600469",
        "name": "风神股份",
        "pinyin": "fsgf",
        "market": "SH"
    },
    {
        "code": "600476",
        "name": "湘邮科技",
        "pinyin": "xykj",
        "market": "SH"
    },
    {
        "code": "600746",
        "name": "江苏索普",
        "pinyin": "jssp",
        "market": "SH"
    },
    {
        "code": "603020",
        "name": "爱普股份",
        "pinyin": "apgf",
        "market": "SH"
    },
    {
        "code": "603215",
        "name": "比依股份",
        "pinyin": "bygf",
        "market": "SH"
    },
    {
        "code": "603843",
        "name": "*ST正平",
        "pinyin": "*stzp",
        "market": "SH"
    },
    {
        "code": "603933",
        "name": "睿能科技",
        "pinyin": "rnkj",
        "market": "SH"
    },
    {
        "code": "605011",
        "name": "杭州热电",
        "pinyin": "hzrd",
        "market": "SH"
    },
    {
        "code": "000505",
        "name": "京粮控股",
        "pinyin": "jlkg",
        "market": "SZ"
    },
    {
        "code": "001323",
        "name": "慕思股份",
        "pinyin": "msgf",
        "market": "SZ"
    },
    {
        "code": "001387",
        "name": "雪祺电气",
        "pinyin": "xqdq",
        "market": "SZ"
    },
    {
        "code": "002053",
        "name": "云南能投",
        "pinyin": "ynnt",
        "market": "SZ"
    },
    {
        "code": "002215",
        "name": "诺 普 信",
        "pinyin": "n p x",
        "market": "SZ"
    },
    {
        "code": "002739",
        "name": "万达电影",
        "pinyin": "wddy",
        "market": "SZ"
    },
    {
        "code": "002758",
        "name": "浙农股份",
        "pinyin": "zngf",
        "market": "SZ"
    },
    {
        "code": "002917",
        "name": "金奥博",
        "pinyin": "jab",
        "market": "SZ"
    },
    {
        "code": "003015",
        "name": "日久光电",
        "pinyin": "rjgd",
        "market": "SZ"
    },
    {
        "code": "003025",
        "name": "思进智能",
        "pinyin": "sjzn",
        "market": "SZ"
    },
    {
        "code": "300635",
        "name": "中达安",
        "pinyin": "zda",
        "market": "SZ"
    },
    {
        "code": "300657",
        "name": "弘信电子",
        "pinyin": "hxdz",
        "market": "SZ"
    },
    {
        "code": "300743",
        "name": "天地数码",
        "pinyin": "tdsm",
        "market": "SZ"
    },
    {
        "code": "300809",
        "name": "华辰装备",
        "pinyin": "hczb",
        "market": "SZ"
    },
    {
        "code": "300884",
        "name": "狄耐克",
        "pinyin": "dnk",
        "market": "SZ"
    },
    {
        "code": "301028",
        "name": "鼎熔岩",
        "pinyin": "dry",
        "market": "SZ"
    },
    {
        "code": "301356",
        "name": "天振股份",
        "pinyin": "tzgf",
        "market": "SZ"
    },
    {
        "code": "600128",
        "name": "苏豪弘业",
        "pinyin": "shhy",
        "market": "SH"
    },
    {
        "code": "603096",
        "name": "新经典",
        "pinyin": "xjd",
        "market": "SH"
    },
    {
        "code": "603176",
        "name": "汇通集团",
        "pinyin": "htjt",
        "market": "SH"
    },
    {
        "code": "603179",
        "name": "新泉股份",
        "pinyin": "xqgf",
        "market": "SH"
    },
    {
        "code": "603363",
        "name": "傲农生物",
        "pinyin": "answ",
        "market": "SH"
    },
    {
        "code": "603421",
        "name": "鼎信通讯",
        "pinyin": "dxtx",
        "market": "SH"
    },
    {
        "code": "603759",
        "name": "海天股份",
        "pinyin": "htgf",
        "market": "SH"
    },
    {
        "code": "603819",
        "name": "神力股份",
        "pinyin": "slgf",
        "market": "SH"
    },
    {
        "code": "000571",
        "name": "新大洲A",
        "pinyin": "xdza",
        "market": "SZ"
    },
    {
        "code": "000978",
        "name": "桂林旅游",
        "pinyin": "glly",
        "market": "SZ"
    },
    {
        "code": "002135",
        "name": "东南网架",
        "pinyin": "dnwj",
        "market": "SZ"
    },
    {
        "code": "002748",
        "name": "世龙实业",
        "pinyin": "slsy",
        "market": "SZ"
    },
    {
        "code": "002829",
        "name": "星网宇达",
        "pinyin": "xwyd",
        "market": "SZ"
    },
    {
        "code": "002915",
        "name": "中欣氟材",
        "pinyin": "zxfc",
        "market": "SZ"
    },
    {
        "code": "002933",
        "name": "新兴装备",
        "pinyin": "xxzb",
        "market": "SZ"
    },
    {
        "code": "002962",
        "name": "五方光电",
        "pinyin": "wfgd",
        "market": "SZ"
    },
    {
        "code": "002980",
        "name": "华盛昌",
        "pinyin": "hsc",
        "market": "SZ"
    },
    {
        "code": "300086",
        "name": "康芝药业",
        "pinyin": "kzyy",
        "market": "SZ"
    },
    {
        "code": "300243",
        "name": "瑞丰高材",
        "pinyin": "rfgc",
        "market": "SZ"
    },
    {
        "code": "300354",
        "name": "东华测试",
        "pinyin": "dhcs",
        "market": "SZ"
    },
    {
        "code": "300499",
        "name": "高澜股份",
        "pinyin": "glgf",
        "market": "SZ"
    },
    {
        "code": "300514",
        "name": "友讯达",
        "pinyin": "yxd",
        "market": "SZ"
    },
    {
        "code": "300829",
        "name": "金丹科技",
        "pinyin": "jdkj",
        "market": "SZ"
    },
    {
        "code": "300897",
        "name": "山科智能",
        "pinyin": "skzn",
        "market": "SZ"
    },
    {
        "code": "300966",
        "name": "共同药业",
        "pinyin": "gtyy",
        "market": "SZ"
    },
    {
        "code": "301016",
        "name": "雷尔伟",
        "pinyin": "lew",
        "market": "SZ"
    },
    {
        "code": "301161",
        "name": "唯万密封",
        "pinyin": "wwmf",
        "market": "SZ"
    },
    {
        "code": "301255",
        "name": "通力科技",
        "pinyin": "tlkj",
        "market": "SZ"
    },
    {
        "code": "301501",
        "name": "恒鑫生活",
        "pinyin": "hxsh",
        "market": "SZ"
    },
    {
        "code": "600193",
        "name": "*ST创兴",
        "pinyin": "*stcx",
        "market": "SH"
    },
    {
        "code": "600592",
        "name": "龙溪股份",
        "pinyin": "lxgf",
        "market": "SH"
    },
    {
        "code": "603070",
        "name": "万控智造",
        "pinyin": "wkzz",
        "market": "SH"
    },
    {
        "code": "603112",
        "name": "华翔股份",
        "pinyin": "hxgf",
        "market": "SH"
    },
    {
        "code": "603137",
        "name": "恒尚节能",
        "pinyin": "hsjn",
        "market": "SH"
    },
    {
        "code": "603209",
        "name": "兴通股份",
        "pinyin": "xtgf",
        "market": "SH"
    },
    {
        "code": "603258",
        "name": "电魂网络",
        "pinyin": "dhwl",
        "market": "SH"
    },
    {
        "code": "603332",
        "name": "苏州龙杰",
        "pinyin": "szlj",
        "market": "SH"
    },
    {
        "code": "603398",
        "name": "*ST沐邦",
        "pinyin": "*stmb",
        "market": "SH"
    },
    {
        "code": "000061",
        "name": "农 产 品",
        "pinyin": "n c p",
        "market": "SZ"
    },
    {
        "code": "002183",
        "name": "怡 亚 通",
        "pinyin": "y y t",
        "market": "SZ"
    },
    {
        "code": "002259",
        "name": "升达林业",
        "pinyin": "sdly",
        "market": "SZ"
    },
    {
        "code": "002586",
        "name": "ST围海",
        "pinyin": "stwh",
        "market": "SZ"
    },
    {
        "code": "002679",
        "name": "福建金森",
        "pinyin": "fjjs",
        "market": "SZ"
    },
    {
        "code": "002778",
        "name": "中晟高科",
        "pinyin": "zsgk",
        "market": "SZ"
    },
    {
        "code": "003019",
        "name": "宸展光电",
        "pinyin": "czgd",
        "market": "SZ"
    },
    {
        "code": "300115",
        "name": "长盈精密",
        "pinyin": "cyjm",
        "market": "SZ"
    },
    {
        "code": "300144",
        "name": "宋城演艺",
        "pinyin": "scyy",
        "market": "SZ"
    },
    {
        "code": "300817",
        "name": "双飞集团",
        "pinyin": "sfjt",
        "market": "SZ"
    },
    {
        "code": "301045",
        "name": "天禄科技",
        "pinyin": "tlkj",
        "market": "SZ"
    },
    {
        "code": "301139",
        "name": "元道通信",
        "pinyin": "ydtx",
        "market": "SZ"
    },
    {
        "code": "600060",
        "name": "海信视像",
        "pinyin": "hxsx",
        "market": "SH"
    },
    {
        "code": "600099",
        "name": "林海股份",
        "pinyin": "lhgf",
        "market": "SH"
    },
    {
        "code": "600228",
        "name": "*ST返利",
        "pinyin": "*stfl",
        "market": "SH"
    },
    {
        "code": "600792",
        "name": "云煤能源",
        "pinyin": "ymny",
        "market": "SH"
    },
    {
        "code": "600796",
        "name": "钱江生化",
        "pinyin": "qjsh",
        "market": "SH"
    },
    {
        "code": "600867",
        "name": "通化东宝",
        "pinyin": "thdb",
        "market": "SH"
    },
    {
        "code": "601952",
        "name": "苏垦农发",
        "pinyin": "sknf",
        "market": "SH"
    },
    {
        "code": "603013",
        "name": "亚普股份",
        "pinyin": "ypgf",
        "market": "SH"
    },
    {
        "code": "603192",
        "name": "汇得科技",
        "pinyin": "hdkj",
        "market": "SH"
    },
    {
        "code": "603230",
        "name": "内蒙新华",
        "pinyin": "nmxh",
        "market": "SH"
    },
    {
        "code": "603291",
        "name": "联合水务",
        "pinyin": "lhsw",
        "market": "SH"
    },
    {
        "code": "603908",
        "name": "牧高笛",
        "pinyin": "mgd",
        "market": "SH"
    },
    {
        "code": "603976",
        "name": "正川股份",
        "pinyin": "zcgf",
        "market": "SH"
    },
    {
        "code": "605077",
        "name": "华康股份",
        "pinyin": "hkgf",
        "market": "SH"
    },
    {
        "code": "605122",
        "name": "四方新材",
        "pinyin": "sfxc",
        "market": "SH"
    },
    {
        "code": "605298",
        "name": "必得科技",
        "pinyin": "bdkj",
        "market": "SH"
    },
    {
        "code": "605567",
        "name": "春雪食品",
        "pinyin": "cxsp",
        "market": "SH"
    },
    {
        "code": "000049",
        "name": "德赛电池",
        "pinyin": "dsdc",
        "market": "SZ"
    },
    {
        "code": "000782",
        "name": "恒申新材",
        "pinyin": "hsxc",
        "market": "SZ"
    },
    {
        "code": "001380",
        "name": "华纬科技",
        "pinyin": "hwkj",
        "market": "SZ"
    },
    {
        "code": "002513",
        "name": "蓝丰生化",
        "pinyin": "lfsh",
        "market": "SZ"
    },
    {
        "code": "002571",
        "name": "德力股份",
        "pinyin": "dlgf",
        "market": "SZ"
    },
    {
        "code": "002810",
        "name": "山东赫达",
        "pinyin": "sdhd",
        "market": "SZ"
    },
    {
        "code": "301278",
        "name": "快可电子",
        "pinyin": "kkdz",
        "market": "SZ"
    },
    {
        "code": "600865",
        "name": "百大集团",
        "pinyin": "bdjt",
        "market": "SH"
    },
    {
        "code": "601388",
        "name": "怡球资源",
        "pinyin": "yqzy",
        "market": "SH"
    },
    {
        "code": "603006",
        "name": "联明股份",
        "pinyin": "lmgf",
        "market": "SH"
    },
    {
        "code": "603118",
        "name": "共进股份",
        "pinyin": "gjgf",
        "market": "SH"
    },
    {
        "code": "603280",
        "name": "南方路机",
        "pinyin": "nflj",
        "market": "SH"
    },
    {
        "code": "603583",
        "name": "捷昌驱动",
        "pinyin": "jcqd",
        "market": "SH"
    },
    {
        "code": "603655",
        "name": "朗博科技",
        "pinyin": "lbkj",
        "market": "SH"
    },
    {
        "code": "603999",
        "name": "读者传媒",
        "pinyin": "dzcm",
        "market": "SH"
    },
    {
        "code": "002852",
        "name": "道道全",
        "pinyin": "ddq",
        "market": "SZ"
    },
    {
        "code": "003001",
        "name": "中岩大地",
        "pinyin": "zydd",
        "market": "SZ"
    },
    {
        "code": "300373",
        "name": "扬杰科技",
        "pinyin": "yjkj",
        "market": "SZ"
    },
    {
        "code": "300500",
        "name": "启迪设计",
        "pinyin": "qdsj",
        "market": "SZ"
    },
    {
        "code": "300512",
        "name": "中亚股份",
        "pinyin": "zygf",
        "market": "SZ"
    },
    {
        "code": "300727",
        "name": "润禾材料",
        "pinyin": "rhcl",
        "market": "SZ"
    },
    {
        "code": "301130",
        "name": "西点药业",
        "pinyin": "xdyy",
        "market": "SZ"
    },
    {
        "code": "301199",
        "name": "迈赫股份",
        "pinyin": "mhgf",
        "market": "SZ"
    },
    {
        "code": "600444",
        "name": "国机通用",
        "pinyin": "gjty",
        "market": "SH"
    },
    {
        "code": "603016",
        "name": "新宏泰",
        "pinyin": "xht",
        "market": "SH"
    },
    {
        "code": "603036",
        "name": "如通股份",
        "pinyin": "rtgf",
        "market": "SH"
    },
    {
        "code": "603221",
        "name": "爱丽家居",
        "pinyin": "aljj",
        "market": "SH"
    },
    {
        "code": "603717",
        "name": "天域生物",
        "pinyin": "tysw",
        "market": "SH"
    },
    {
        "code": "605377",
        "name": "华旺科技",
        "pinyin": "hwkj",
        "market": "SH"
    },
    {
        "code": "002092",
        "name": "中泰化学",
        "pinyin": "zthx",
        "market": "SZ"
    },
    {
        "code": "002159",
        "name": "三特索道",
        "pinyin": "stsd",
        "market": "SZ"
    },
    {
        "code": "002780",
        "name": "三夫户外",
        "pinyin": "sfhw",
        "market": "SZ"
    },
    {
        "code": "002813",
        "name": "路畅科技",
        "pinyin": "lckj",
        "market": "SZ"
    },
    {
        "code": "002833",
        "name": "弘亚数控",
        "pinyin": "hysk",
        "market": "SZ"
    },
    {
        "code": "002883",
        "name": "中设股份",
        "pinyin": "zsgf",
        "market": "SZ"
    },
    {
        "code": "002977",
        "name": "天箭科技",
        "pinyin": "tjkj",
        "market": "SZ"
    },
    {
        "code": "300043",
        "name": "星辉娱乐",
        "pinyin": "xhyl",
        "market": "SZ"
    },
    {
        "code": "300220",
        "name": "金运激光",
        "pinyin": "jyjg",
        "market": "SZ"
    },
    {
        "code": "300534",
        "name": "陇神戎发",
        "pinyin": "lsrf",
        "market": "SZ"
    },
    {
        "code": "300625",
        "name": "三雄极光",
        "pinyin": "sxjg",
        "market": "SZ"
    },
    {
        "code": "300736",
        "name": "百邦科技",
        "pinyin": "bbkj",
        "market": "SZ"
    },
    {
        "code": "300820",
        "name": "英杰电气",
        "pinyin": "yjdq",
        "market": "SZ"
    },
    {
        "code": "300907",
        "name": "康平科技",
        "pinyin": "kpkj",
        "market": "SZ"
    },
    {
        "code": "301058",
        "name": "中粮科工",
        "pinyin": "zlkg",
        "market": "SZ"
    },
    {
        "code": "301226",
        "name": "祥明智能",
        "pinyin": "xmzn",
        "market": "SZ"
    },
    {
        "code": "301376",
        "name": "致欧科技",
        "pinyin": "zokj",
        "market": "SZ"
    },
    {
        "code": "301381",
        "name": "赛维时代",
        "pinyin": "swsd",
        "market": "SZ"
    },
    {
        "code": "603000",
        "name": "人民网",
        "pinyin": "rmw",
        "market": "SH"
    },
    {
        "code": "603069",
        "name": "海汽集团",
        "pinyin": "hqjt",
        "market": "SH"
    },
    {
        "code": "603125",
        "name": "常青科技",
        "pinyin": "cqkj",
        "market": "SH"
    },
    {
        "code": "603836",
        "name": "海程邦达",
        "pinyin": "hcbd",
        "market": "SH"
    },
    {
        "code": "603919",
        "name": "金徽酒",
        "pinyin": "jhj",
        "market": "SH"
    },
    {
        "code": "605086",
        "name": "龙高股份",
        "pinyin": "lggf",
        "market": "SH"
    },
    {
        "code": "605189",
        "name": "富春染织",
        "pinyin": "fcrz",
        "market": "SH"
    },
    {
        "code": "000663",
        "name": "永安林业",
        "pinyin": "yaly",
        "market": "SZ"
    },
    {
        "code": "002588",
        "name": "史丹利",
        "pinyin": "sdl",
        "market": "SZ"
    },
    {
        "code": "002725",
        "name": "跃岭股份",
        "pinyin": "ylgf",
        "market": "SZ"
    },
    {
        "code": "003028",
        "name": "振邦智能",
        "pinyin": "zbzn",
        "market": "SZ"
    },
    {
        "code": "003030",
        "name": "祖名股份",
        "pinyin": "zmgf",
        "market": "SZ"
    },
    {
        "code": "300268",
        "name": "*ST佳沃",
        "pinyin": "*stjw",
        "market": "SZ"
    },
    {
        "code": "300538",
        "name": "同益股份",
        "pinyin": "tygf",
        "market": "SZ"
    },
    {
        "code": "300849",
        "name": "锦盛新材",
        "pinyin": "jsxc",
        "market": "SZ"
    },
    {
        "code": "300951",
        "name": "博硕科技",
        "pinyin": "bskj",
        "market": "SZ"
    },
    {
        "code": "300958",
        "name": "建工修复",
        "pinyin": "jgxf",
        "market": "SZ"
    },
    {
        "code": "301027",
        "name": "华蓝集团",
        "pinyin": "hljt",
        "market": "SZ"
    },
    {
        "code": "301295",
        "name": "美硕科技",
        "pinyin": "mskj",
        "market": "SZ"
    },
    {
        "code": "301602",
        "name": "超研股份",
        "pinyin": "cygf",
        "market": "SZ"
    },
    {
        "code": "600258",
        "name": "首旅酒店",
        "pinyin": "sljd",
        "market": "SH"
    },
    {
        "code": "603041",
        "name": "美思德",
        "pinyin": "msd",
        "market": "SH"
    },
    {
        "code": "603187",
        "name": "海容冷链",
        "pinyin": "hrll",
        "market": "SH"
    },
    {
        "code": "603678",
        "name": "火炬电子",
        "pinyin": "hjdz",
        "market": "SH"
    },
    {
        "code": "603685",
        "name": "晨丰科技",
        "pinyin": "cfkj",
        "market": "SH"
    },
    {
        "code": "000713",
        "name": "国投丰乐",
        "pinyin": "gtfl",
        "market": "SZ"
    },
    {
        "code": "002653",
        "name": "海思科",
        "pinyin": "hsk",
        "market": "SZ"
    },
    {
        "code": "002732",
        "name": "燕塘乳业",
        "pinyin": "ytry",
        "market": "SZ"
    },
    {
        "code": "002791",
        "name": "坚朗五金",
        "pinyin": "jlwj",
        "market": "SZ"
    },
    {
        "code": "002801",
        "name": "微光股份",
        "pinyin": "wggf",
        "market": "SZ"
    },
    {
        "code": "002901",
        "name": "大博医疗",
        "pinyin": "dbyl",
        "market": "SZ"
    },
    {
        "code": "002982",
        "name": "湘佳股份",
        "pinyin": "xjgf",
        "market": "SZ"
    },
    {
        "code": "300052",
        "name": "ST中青宝",
        "pinyin": "stzqb",
        "market": "SZ"
    },
    {
        "code": "300615",
        "name": "欣天科技",
        "pinyin": "xtkj",
        "market": "SZ"
    },
    {
        "code": "300624",
        "name": "万兴科技",
        "pinyin": "wxkj",
        "market": "SZ"
    },
    {
        "code": "300649",
        "name": "杭州园林",
        "pinyin": "hzyl",
        "market": "SZ"
    },
    {
        "code": "300987",
        "name": "川网传媒",
        "pinyin": "cwcm",
        "market": "SZ"
    },
    {
        "code": "301083",
        "name": "百胜智能",
        "pinyin": "bszn",
        "market": "SZ"
    },
    {
        "code": "301210",
        "name": "金杨精密",
        "pinyin": "jyjm",
        "market": "SZ"
    },
    {
        "code": "301337",
        "name": "亚华电子",
        "pinyin": "yhdz",
        "market": "SZ"
    },
    {
        "code": "301519",
        "name": "舜禹股份",
        "pinyin": "sygf",
        "market": "SZ"
    },
    {
        "code": "301539",
        "name": "宏鑫科技",
        "pinyin": "hxkj",
        "market": "SZ"
    },
    {
        "code": "600493",
        "name": "凤竹纺织",
        "pinyin": "fzfz",
        "market": "SH"
    },
    {
        "code": "600847",
        "name": "万里股份",
        "pinyin": "wlgf",
        "market": "SH"
    },
    {
        "code": "600883",
        "name": "博闻科技",
        "pinyin": "bwkj",
        "market": "SH"
    },
    {
        "code": "600889",
        "name": "南京化纤",
        "pinyin": "njhx",
        "market": "SH"
    },
    {
        "code": "600962",
        "name": "国投中鲁",
        "pinyin": "gtzl",
        "market": "SH"
    },
    {
        "code": "601021",
        "name": "春秋航空",
        "pinyin": "cqhk",
        "market": "SH"
    },
    {
        "code": "603079",
        "name": "圣达生物",
        "pinyin": "sdsw",
        "market": "SH"
    },
    {
        "code": "603370",
        "name": "华新精科",
        "pinyin": "hxjk",
        "market": "SH"
    },
    {
        "code": "603585",
        "name": "苏利股份",
        "pinyin": "slgf",
        "market": "SH"
    },
    {
        "code": "603700",
        "name": "宁水集团",
        "pinyin": "nsjt",
        "market": "SH"
    },
    {
        "code": "603722",
        "name": "阿科力",
        "pinyin": "akl",
        "market": "SH"
    },
    {
        "code": "603790",
        "name": "雅运股份",
        "pinyin": "yygf",
        "market": "SH"
    },
    {
        "code": "605050",
        "name": "福然德",
        "pinyin": "frd",
        "market": "SH"
    },
    {
        "code": "605183",
        "name": "确成股份",
        "pinyin": "qcgf",
        "market": "SH"
    },
    {
        "code": "002657",
        "name": "中科金财",
        "pinyin": "zkjc",
        "market": "SZ"
    },
    {
        "code": "002802",
        "name": "洪汇新材",
        "pinyin": "hhxc",
        "market": "SZ"
    },
    {
        "code": "002870",
        "name": "香山股份",
        "pinyin": "xsgf",
        "market": "SZ"
    },
    {
        "code": "300022",
        "name": "吉峰科技",
        "pinyin": "jfkj",
        "market": "SZ"
    },
    {
        "code": "300044",
        "name": "ST赛为",
        "pinyin": "stsw",
        "market": "SZ"
    },
    {
        "code": "300557",
        "name": "理工光科",
        "pinyin": "lggk",
        "market": "SZ"
    },
    {
        "code": "300610",
        "name": "晨化股份",
        "pinyin": "chgf",
        "market": "SZ"
    },
    {
        "code": "301186",
        "name": "超达装备",
        "pinyin": "cdzb",
        "market": "SZ"
    },
    {
        "code": "600107",
        "name": "ST尔雅",
        "pinyin": "stey",
        "market": "SH"
    },
    {
        "code": "605007",
        "name": "五洲特纸",
        "pinyin": "wztz",
        "market": "SH"
    },
    {
        "code": "001217",
        "name": "华尔泰",
        "pinyin": "het",
        "market": "SZ"
    },
    {
        "code": "002074",
        "name": "国轩高科",
        "pinyin": "gxgk",
        "market": "SZ"
    },
    {
        "code": "002196",
        "name": "方正电机",
        "pinyin": "fzdj",
        "market": "SZ"
    },
    {
        "code": "002337",
        "name": "赛象科技",
        "pinyin": "sxkj",
        "market": "SZ"
    },
    {
        "code": "002997",
        "name": "瑞鹄模具",
        "pinyin": "rhmj",
        "market": "SZ"
    },
    {
        "code": "300141",
        "name": "和顺电气",
        "pinyin": "hsdq",
        "market": "SZ"
    },
    {
        "code": "300163",
        "name": "先锋新材",
        "pinyin": "xfxc",
        "market": "SZ"
    },
    {
        "code": "300209",
        "name": "有棵树",
        "pinyin": "yks",
        "market": "SZ"
    },
    {
        "code": "300387",
        "name": "富邦科技",
        "pinyin": "fbkj",
        "market": "SZ"
    },
    {
        "code": "300585",
        "name": "奥联电子",
        "pinyin": "aldz",
        "market": "SZ"
    },
    {
        "code": "300596",
        "name": "利安隆",
        "pinyin": "lal",
        "market": "SZ"
    },
    {
        "code": "300613",
        "name": "富瀚微",
        "pinyin": "fhw",
        "market": "SZ"
    },
    {
        "code": "300678",
        "name": "中科信息",
        "pinyin": "zkxx",
        "market": "SZ"
    },
    {
        "code": "300873",
        "name": "海晨股份",
        "pinyin": "hcgf",
        "market": "SZ"
    },
    {
        "code": "301041",
        "name": "金百泽",
        "pinyin": "jbz",
        "market": "SZ"
    },
    {
        "code": "301320",
        "name": "豪江智能",
        "pinyin": "hjzn",
        "market": "SZ"
    },
    {
        "code": "600137",
        "name": "浪莎股份",
        "pinyin": "lsgf",
        "market": "SH"
    },
    {
        "code": "600302",
        "name": "标准股份",
        "pinyin": "bzgf",
        "market": "SH"
    },
    {
        "code": "600359",
        "name": "新农开发",
        "pinyin": "xnkf",
        "market": "SH"
    },
    {
        "code": "600475",
        "name": "华光环能",
        "pinyin": "hghn",
        "market": "SH"
    },
    {
        "code": "603610",
        "name": "麒盛科技",
        "pinyin": "qskj",
        "market": "SH"
    },
    {
        "code": "603726",
        "name": "朗迪集团",
        "pinyin": "ldjt",
        "market": "SH"
    },
    {
        "code": "603767",
        "name": "中马传动",
        "pinyin": "zmcd",
        "market": "SH"
    },
    {
        "code": "002209",
        "name": "达 意 隆",
        "pinyin": "d y l",
        "market": "SZ"
    },
    {
        "code": "002734",
        "name": "利民股份",
        "pinyin": "lmgf",
        "market": "SZ"
    },
    {
        "code": "002769",
        "name": "普路通",
        "pinyin": "plt",
        "market": "SZ"
    },
    {
        "code": "300035",
        "name": "中科电气",
        "pinyin": "zkdq",
        "market": "SZ"
    },
    {
        "code": "300069",
        "name": "金利华电",
        "pinyin": "jlhd",
        "market": "SZ"
    },
    {
        "code": "300553",
        "name": "集智股份",
        "pinyin": "jzgf",
        "market": "SZ"
    },
    {
        "code": "300609",
        "name": "汇纳科技",
        "pinyin": "hnkj",
        "market": "SZ"
    },
    {
        "code": "301167",
        "name": "建研设计",
        "pinyin": "jysj",
        "market": "SZ"
    },
    {
        "code": "301193",
        "name": "家联科技",
        "pinyin": "jlkj",
        "market": "SZ"
    },
    {
        "code": "301595",
        "name": "太力科技",
        "pinyin": "tlkj",
        "market": "SZ"
    },
    {
        "code": "603022",
        "name": "新通联",
        "pinyin": "xtl",
        "market": "SH"
    },
    {
        "code": "603075",
        "name": "热威股份",
        "pinyin": "rwgf",
        "market": "SH"
    },
    {
        "code": "603089",
        "name": "正裕工业",
        "pinyin": "zygy",
        "market": "SH"
    },
    {
        "code": "603136",
        "name": "天目湖",
        "pinyin": "tmh",
        "market": "SH"
    },
    {
        "code": "603217",
        "name": "元利科技",
        "pinyin": "ylkj",
        "market": "SH"
    },
    {
        "code": "603922",
        "name": "金鸿顺",
        "pinyin": "jhs",
        "market": "SH"
    },
    {
        "code": "605166",
        "name": "聚合顺",
        "pinyin": "jhs",
        "market": "SH"
    },
    {
        "code": "605188",
        "name": "国光连锁",
        "pinyin": "ggls",
        "market": "SH"
    },
    {
        "code": "605566",
        "name": "福莱蒽特",
        "pinyin": "flet",
        "market": "SH"
    },
    {
        "code": "605588",
        "name": "冠石科技",
        "pinyin": "gskj",
        "market": "SH"
    },
    {
        "code": "000735",
        "name": "罗 牛 山",
        "pinyin": "l n s",
        "market": "SZ"
    },
    {
        "code": "001285",
        "name": "瑞立科密",
        "pinyin": "rlkm",
        "market": "SZ"
    },
    {
        "code": "002733",
        "name": "雄韬股份",
        "pinyin": "xtgf",
        "market": "SZ"
    },
    {
        "code": "002949",
        "name": "华阳国际",
        "pinyin": "hygj",
        "market": "SZ"
    },
    {
        "code": "003003",
        "name": "天元股份",
        "pinyin": "tygf",
        "market": "SZ"
    },
    {
        "code": "300651",
        "name": "金陵体育",
        "pinyin": "jlty",
        "market": "SZ"
    },
    {
        "code": "300800",
        "name": "力合科技",
        "pinyin": "lhkj",
        "market": "SZ"
    },
    {
        "code": "301023",
        "name": "奕帆传动",
        "pinyin": "yfcd",
        "market": "SZ"
    },
    {
        "code": "301309",
        "name": "万得凯",
        "pinyin": "wdk",
        "market": "SZ"
    },
    {
        "code": "600191",
        "name": "华资实业",
        "pinyin": "hzsy",
        "market": "SH"
    },
    {
        "code": "600226",
        "name": "亨通股份",
        "pinyin": "htgf",
        "market": "SH"
    },
    {
        "code": "600640",
        "name": "国脉文化",
        "pinyin": "gmwh",
        "market": "SH"
    },
    {
        "code": "603100",
        "name": "川仪股份",
        "pinyin": "cygf",
        "market": "SH"
    },
    {
        "code": "603201",
        "name": "常润股份",
        "pinyin": "crgf",
        "market": "SH"
    },
    {
        "code": "603709",
        "name": "中源家居",
        "pinyin": "zyjj",
        "market": "SH"
    },
    {
        "code": "000020",
        "name": "深华发A",
        "pinyin": "shfa",
        "market": "SZ"
    },
    {
        "code": "001283",
        "name": "豪鹏科技",
        "pinyin": "hpkj",
        "market": "SZ"
    },
    {
        "code": "002569",
        "name": "*ST步森",
        "pinyin": "*stbs",
        "market": "SZ"
    },
    {
        "code": "002591",
        "name": "恒大高新",
        "pinyin": "hdgx",
        "market": "SZ"
    },
    {
        "code": "002643",
        "name": "万润股份",
        "pinyin": "wrgf",
        "market": "SZ"
    },
    {
        "code": "002971",
        "name": "和远气体",
        "pinyin": "hyqt",
        "market": "SZ"
    },
    {
        "code": "002989",
        "name": "中天精装",
        "pinyin": "ztjz",
        "market": "SZ"
    },
    {
        "code": "003005",
        "name": "竞业达",
        "pinyin": "jyd",
        "market": "SZ"
    },
    {
        "code": "300417",
        "name": "南华仪器",
        "pinyin": "nhyq",
        "market": "SZ"
    },
    {
        "code": "300530",
        "name": "领湃科技",
        "pinyin": "lpkj",
        "market": "SZ"
    },
    {
        "code": "300679",
        "name": "电连技术",
        "pinyin": "dljs",
        "market": "SZ"
    },
    {
        "code": "300761",
        "name": "立华股份",
        "pinyin": "lhgf",
        "market": "SZ"
    },
    {
        "code": "300906",
        "name": "日月明",
        "pinyin": "rym",
        "market": "SZ"
    },
    {
        "code": "600388",
        "name": "龙净环保",
        "pinyin": "ljhb",
        "market": "SH"
    },
    {
        "code": "600644",
        "name": "乐山电力",
        "pinyin": "lsdl",
        "market": "SH"
    },
    {
        "code": "600900",
        "name": "长江电力",
        "pinyin": "cjdl",
        "market": "SH"
    },
    {
        "code": "600983",
        "name": "惠而浦",
        "pinyin": "hep",
        "market": "SH"
    },
    {
        "code": "601369",
        "name": "陕鼓动力",
        "pinyin": "sgdl",
        "market": "SH"
    },
    {
        "code": "601872",
        "name": "招商轮船",
        "pinyin": "zslc",
        "market": "SH"
    },
    {
        "code": "603181",
        "name": "皇马科技",
        "pinyin": "hmkj",
        "market": "SH"
    },
    {
        "code": "603182",
        "name": "嘉华股份",
        "pinyin": "jhgf",
        "market": "SH"
    },
    {
        "code": "000821",
        "name": "ST京机",
        "pinyin": "stjj",
        "market": "SZ"
    },
    {
        "code": "002014",
        "name": "永新股份",
        "pinyin": "yxgf",
        "market": "SZ"
    },
    {
        "code": "002633",
        "name": "申科股份",
        "pinyin": "skgf",
        "market": "SZ"
    },
    {
        "code": "002937",
        "name": "兴瑞科技",
        "pinyin": "xrkj",
        "market": "SZ"
    },
    {
        "code": "300061",
        "name": "旗天科技",
        "pinyin": "qtkj",
        "market": "SZ"
    },
    {
        "code": "300097",
        "name": "ST智云",
        "pinyin": "stzy",
        "market": "SZ"
    },
    {
        "code": "300371",
        "name": "汇中股份",
        "pinyin": "hzgf",
        "market": "SZ"
    },
    {
        "code": "301007",
        "name": "德迈仕",
        "pinyin": "dms",
        "market": "SZ"
    },
    {
        "code": "301019",
        "name": "宁波色母",
        "pinyin": "nbsm",
        "market": "SZ"
    },
    {
        "code": "301329",
        "name": "信音电子",
        "pinyin": "xydz",
        "market": "SZ"
    },
    {
        "code": "301511",
        "name": "德福科技",
        "pinyin": "dfkj",
        "market": "SZ"
    },
    {
        "code": "301617",
        "name": "博苑股份",
        "pinyin": "bygf",
        "market": "SZ"
    },
    {
        "code": "600966",
        "name": "博汇纸业",
        "pinyin": "bhzy",
        "market": "SH"
    },
    {
        "code": "603086",
        "name": "先达股份",
        "pinyin": "xdgf",
        "market": "SH"
    },
    {
        "code": "603273",
        "name": "XD天元智",
        "pinyin": "xdtyz",
        "market": "SH"
    },
    {
        "code": "603607",
        "name": "京华激光",
        "pinyin": "jhjg",
        "market": "SH"
    },
    {
        "code": "001256",
        "name": "炜冈科技",
        "pinyin": "wgkj",
        "market": "SZ"
    },
    {
        "code": "001260",
        "name": "坤泰股份",
        "pinyin": "ktgf",
        "market": "SZ"
    },
    {
        "code": "002094",
        "name": "青岛金王",
        "pinyin": "qdjw",
        "market": "SZ"
    },
    {
        "code": "300592",
        "name": "华凯易佰",
        "pinyin": "hkyb",
        "market": "SZ"
    },
    {
        "code": "300673",
        "name": "佩蒂股份",
        "pinyin": "pdgf",
        "market": "SZ"
    },
    {
        "code": "300802",
        "name": "矩子科技",
        "pinyin": "jzkj",
        "market": "SZ"
    },
    {
        "code": "300929",
        "name": "华骐环保",
        "pinyin": "hqhb",
        "market": "SZ"
    },
    {
        "code": "300930",
        "name": "屹通新材",
        "pinyin": "ytxc",
        "market": "SZ"
    },
    {
        "code": "301102",
        "name": "兆讯传媒",
        "pinyin": "zxcm",
        "market": "SZ"
    },
    {
        "code": "301566",
        "name": "达利凯普",
        "pinyin": "dlkp",
        "market": "SZ"
    },
    {
        "code": "600692",
        "name": "亚通股份",
        "pinyin": "ytgf",
        "market": "SH"
    },
    {
        "code": "600737",
        "name": "中粮糖业",
        "pinyin": "zlty",
        "market": "SH"
    },
    {
        "code": "601606",
        "name": "长城军工",
        "pinyin": "ccjg",
        "market": "SH"
    },
    {
        "code": "603725",
        "name": "天安新材",
        "pinyin": "taxc",
        "market": "SH"
    },
    {
        "code": "603903",
        "name": "中持股份",
        "pinyin": "zcgf",
        "market": "SH"
    },
    {
        "code": "603915",
        "name": "国茂股份",
        "pinyin": "gmgf",
        "market": "SH"
    },
    {
        "code": "605056",
        "name": "咸亨国际",
        "pinyin": "xhgj",
        "market": "SH"
    },
    {
        "code": "001230",
        "name": "劲旅环境",
        "pinyin": "jlhj",
        "market": "SZ"
    },
    {
        "code": "001266",
        "name": "宏英智能",
        "pinyin": "hyzn",
        "market": "SZ"
    },
    {
        "code": "002430",
        "name": "杭氧股份",
        "pinyin": "hygf",
        "market": "SZ"
    },
    {
        "code": "002518",
        "name": "科士达",
        "pinyin": "ksd",
        "market": "SZ"
    },
    {
        "code": "002976",
        "name": "瑞玛精密",
        "pinyin": "rmjm",
        "market": "SZ"
    },
    {
        "code": "300541",
        "name": "先进数通",
        "pinyin": "xjst",
        "market": "SZ"
    },
    {
        "code": "300549",
        "name": "优德精密",
        "pinyin": "ydjm",
        "market": "SZ"
    },
    {
        "code": "300858",
        "name": "科拓生物",
        "pinyin": "ktsw",
        "market": "SZ"
    },
    {
        "code": "301065",
        "name": "本立科技",
        "pinyin": "blkj",
        "market": "SZ"
    },
    {
        "code": "301197",
        "name": "工大科雅",
        "pinyin": "gdky",
        "market": "SZ"
    },
    {
        "code": "301252",
        "name": "同星科技",
        "pinyin": "txkj",
        "market": "SZ"
    },
    {
        "code": "600599",
        "name": "*ST熊猫",
        "pinyin": "*stxm",
        "market": "SH"
    },
    {
        "code": "603506",
        "name": "南都物业",
        "pinyin": "ndwy",
        "market": "SH"
    },
    {
        "code": "603586",
        "name": "金麒麟",
        "pinyin": "jql",
        "market": "SH"
    },
    {
        "code": "603928",
        "name": "兴业股份",
        "pinyin": "xygf",
        "market": "SH"
    },
    {
        "code": "605005",
        "name": "合兴股份",
        "pinyin": "hxgf",
        "market": "SH"
    },
    {
        "code": "605580",
        "name": "恒盛能源",
        "pinyin": "hsny",
        "market": "SH"
    },
    {
        "code": "001229",
        "name": "魅视科技",
        "pinyin": "mskj",
        "market": "SZ"
    },
    {
        "code": "002185",
        "name": "华天科技",
        "pinyin": "htkj",
        "market": "SZ"
    },
    {
        "code": "002531",
        "name": "天顺风能",
        "pinyin": "tsfn",
        "market": "SZ"
    },
    {
        "code": "002938",
        "name": "鹏鼎控股",
        "pinyin": "pdkg",
        "market": "SZ"
    },
    {
        "code": "300831",
        "name": "派瑞股份",
        "pinyin": "prgf",
        "market": "SZ"
    },
    {
        "code": "300834",
        "name": "星辉环材",
        "pinyin": "xhhc",
        "market": "SZ"
    },
    {
        "code": "301004",
        "name": "嘉益股份",
        "pinyin": "jygf",
        "market": "SZ"
    },
    {
        "code": "301008",
        "name": "宏昌科技",
        "pinyin": "hckj",
        "market": "SZ"
    },
    {
        "code": "301151",
        "name": "冠龙节能",
        "pinyin": "gljn",
        "market": "SZ"
    },
    {
        "code": "301180",
        "name": "万祥科技",
        "pinyin": "wxkj",
        "market": "SZ"
    },
    {
        "code": "301391",
        "name": "卡莱特",
        "pinyin": "klt",
        "market": "SZ"
    },
    {
        "code": "301535",
        "name": "浙江华远",
        "pinyin": "zjhy",
        "market": "SZ"
    },
    {
        "code": "600309",
        "name": "万华化学",
        "pinyin": "whhx",
        "market": "SH"
    },
    {
        "code": "600421",
        "name": "*ST华嵘",
        "pinyin": "*sthr",
        "market": "SH"
    },
    {
        "code": "603002",
        "name": "宏昌电子",
        "pinyin": "hcdz",
        "market": "SH"
    },
    {
        "code": "603639",
        "name": "海利尔",
        "pinyin": "hle",
        "market": "SH"
    },
    {
        "code": "603687",
        "name": "大胜达",
        "pinyin": "dsd",
        "market": "SH"
    },
    {
        "code": "605118",
        "name": "力鼎光电",
        "pinyin": "ldgd",
        "market": "SH"
    },
    {
        "code": "605286",
        "name": "同力天启",
        "pinyin": "tltq",
        "market": "SH"
    },
    {
        "code": "605333",
        "name": "沪光股份",
        "pinyin": "hggf",
        "market": "SH"
    },
    {
        "code": "000678",
        "name": "襄阳轴承",
        "pinyin": "xyzc",
        "market": "SZ"
    },
    {
        "code": "001395",
        "name": "亚联机械",
        "pinyin": "yljx",
        "market": "SZ"
    },
    {
        "code": "002169",
        "name": "智光电气",
        "pinyin": "zgdq",
        "market": "SZ"
    },
    {
        "code": "002615",
        "name": "哈尔斯",
        "pinyin": "hes",
        "market": "SZ"
    },
    {
        "code": "002625",
        "name": "光启技术",
        "pinyin": "gqjs",
        "market": "SZ"
    },
    {
        "code": "002627",
        "name": "三峡旅游",
        "pinyin": "sxly",
        "market": "SZ"
    },
    {
        "code": "301198",
        "name": "喜悦智行",
        "pinyin": "xyzh",
        "market": "SZ"
    },
    {
        "code": "301575",
        "name": "艾芬达",
        "pinyin": "afd",
        "market": "SZ"
    },
    {
        "code": "600182",
        "name": "S佳通",
        "pinyin": "sjt",
        "market": "SH"
    },
    {
        "code": "600689",
        "name": "上海三毛",
        "pinyin": "shsm",
        "market": "SH"
    },
    {
        "code": "603810",
        "name": "丰山集团",
        "pinyin": "fsjt",
        "market": "SH"
    },
    {
        "code": "000301",
        "name": "东方盛虹",
        "pinyin": "dfsh",
        "market": "SZ"
    },
    {
        "code": "001215",
        "name": "千味央厨",
        "pinyin": "qwyc",
        "market": "SZ"
    },
    {
        "code": "002541",
        "name": "鸿路钢构",
        "pinyin": "hlgg",
        "market": "SZ"
    },
    {
        "code": "300478",
        "name": "杭州高新",
        "pinyin": "hzgx",
        "market": "SZ"
    },
    {
        "code": "301063",
        "name": "海锅股份",
        "pinyin": "hggf",
        "market": "SZ"
    },
    {
        "code": "600316",
        "name": "洪都航空",
        "pinyin": "hdhk",
        "market": "SH"
    },
    {
        "code": "600403",
        "name": "大有能源",
        "pinyin": "dyny",
        "market": "SH"
    },
    {
        "code": "603004",
        "name": "鼎龙科技",
        "pinyin": "dlkj",
        "market": "SH"
    },
    {
        "code": "603050",
        "name": "科林电气",
        "pinyin": "kldq",
        "market": "SH"
    },
    {
        "code": "603073",
        "name": "彩蝶实业",
        "pinyin": "cdsy",
        "market": "SH"
    },
    {
        "code": "603262",
        "name": "技源集团",
        "pinyin": "jyjt",
        "market": "SH"
    },
    {
        "code": "002888",
        "name": "惠威科技",
        "pinyin": "hwkj",
        "market": "SZ"
    },
    {
        "code": "300073",
        "name": "当升科技",
        "pinyin": "dskj",
        "market": "SZ"
    },
    {
        "code": "300644",
        "name": "南京聚隆",
        "pinyin": "njjl",
        "market": "SZ"
    },
    {
        "code": "603307",
        "name": "扬州金泉",
        "pinyin": "yzjq",
        "market": "SH"
    },
    {
        "code": "300183",
        "name": "东软载波",
        "pinyin": "drzb",
        "market": "SZ"
    },
    {
        "code": "300540",
        "name": "蜀道装备",
        "pinyin": "sdzb",
        "market": "SZ"
    },
    {
        "code": "300860",
        "name": "锋尚文化",
        "pinyin": "fswh",
        "market": "SZ"
    },
    {
        "code": "301006",
        "name": "迈拓股份",
        "pinyin": "mtgf",
        "market": "SZ"
    },
    {
        "code": "301557",
        "name": "常友科技",
        "pinyin": "cykj",
        "market": "SZ"
    },
    {
        "code": "301571",
        "name": "国科天成",
        "pinyin": "gktc",
        "market": "SZ"
    },
    {
        "code": "600750",
        "name": "华润江中",
        "pinyin": "hrjz",
        "market": "SH"
    },
    {
        "code": "603228",
        "name": "景旺电子",
        "pinyin": "jwdz",
        "market": "SH"
    },
    {
        "code": "603282",
        "name": "亚光股份",
        "pinyin": "yggf",
        "market": "SH"
    },
    {
        "code": "605068",
        "name": "明新旭腾",
        "pinyin": "mxxt",
        "market": "SH"
    },
    {
        "code": "000796",
        "name": "凯撒旅业",
        "pinyin": "ksly",
        "market": "SZ"
    },
    {
        "code": "001330",
        "name": "博纳影业",
        "pinyin": "bnyy",
        "market": "SZ"
    },
    {
        "code": "002319",
        "name": "乐通股份",
        "pinyin": "ltgf",
        "market": "SZ"
    },
    {
        "code": "002713",
        "name": "*ST东易",
        "pinyin": "*stdy",
        "market": "SZ"
    },
    {
        "code": "301095",
        "name": "广立微",
        "pinyin": "glw",
        "market": "SZ"
    },
    {
        "code": "301129",
        "name": "瑞纳智能",
        "pinyin": "rnzn",
        "market": "SZ"
    },
    {
        "code": "301353",
        "name": "普莱得",
        "pinyin": "pld",
        "market": "SZ"
    },
    {
        "code": "603276",
        "name": "恒兴新材",
        "pinyin": "hxxc",
        "market": "SH"
    },
    {
        "code": "603657",
        "name": "春光科技",
        "pinyin": "cgkj",
        "market": "SH"
    },
    {
        "code": "002576",
        "name": "通达动力",
        "pinyin": "tddl",
        "market": "SZ"
    },
    {
        "code": "002956",
        "name": "西麦食品",
        "pinyin": "xmsp",
        "market": "SZ"
    },
    {
        "code": "300087",
        "name": "荃银高科",
        "pinyin": "qygk",
        "market": "SZ"
    },
    {
        "code": "300093",
        "name": "*ST金刚",
        "pinyin": "*stjg",
        "market": "SZ"
    },
    {
        "code": "301359",
        "name": "东南电子",
        "pinyin": "dndz",
        "market": "SZ"
    },
    {
        "code": "603733",
        "name": "仙鹤股份",
        "pinyin": "xhgf",
        "market": "SH"
    },
    {
        "code": "001222",
        "name": "源飞宠物",
        "pinyin": "yfcw",
        "market": "SZ"
    },
    {
        "code": "003023",
        "name": "彩虹集团",
        "pinyin": "chjt",
        "market": "SZ"
    },
    {
        "code": "300196",
        "name": "长海股份",
        "pinyin": "chgf",
        "market": "SZ"
    },
    {
        "code": "301037",
        "name": "保立佳",
        "pinyin": "blj",
        "market": "SZ"
    },
    {
        "code": "301399",
        "name": "英特科技",
        "pinyin": "ytkj",
        "market": "SZ"
    },
    {
        "code": "301456",
        "name": "盘古智能",
        "pinyin": "pgzn",
        "market": "SZ"
    },
    {
        "code": "301589",
        "name": "诺瓦星云",
        "pinyin": "nwxy",
        "market": "SZ"
    },
    {
        "code": "600754",
        "name": "锦江酒店",
        "pinyin": "jjjd",
        "market": "SH"
    },
    {
        "code": "603190",
        "name": "亚通精工",
        "pinyin": "ytjg",
        "market": "SH"
    },
    {
        "code": "603207",
        "name": "小方制药",
        "pinyin": "xfzy",
        "market": "SH"
    },
    {
        "code": "603231",
        "name": "索宝蛋白",
        "pinyin": "sbdb",
        "market": "SH"
    },
    {
        "code": "603322",
        "name": "超讯通信",
        "pinyin": "cxtx",
        "market": "SH"
    },
    {
        "code": "603808",
        "name": "歌力思",
        "pinyin": "gls",
        "market": "SH"
    },
    {
        "code": "605060",
        "name": "联德股份",
        "pinyin": "ldgf",
        "market": "SH"
    },
    {
        "code": "605319",
        "name": "无锡振华",
        "pinyin": "wxzh",
        "market": "SH"
    },
    {
        "code": "002869",
        "name": "金溢科技",
        "pinyin": "jykj",
        "market": "SZ"
    },
    {
        "code": "301286",
        "name": "侨源股份",
        "pinyin": "qygf",
        "market": "SZ"
    },
    {
        "code": "600097",
        "name": "开创国际",
        "pinyin": "kcgj",
        "market": "SH"
    },
    {
        "code": "600510",
        "name": "黑牡丹",
        "pinyin": "hmd",
        "market": "SH"
    },
    {
        "code": "600826",
        "name": "兰生股份",
        "pinyin": "lsgf",
        "market": "SH"
    },
    {
        "code": "605599",
        "name": "菜百股份",
        "pinyin": "cbgf",
        "market": "SH"
    },
    {
        "code": "001210",
        "name": "金房能源",
        "pinyin": "jfny",
        "market": "SZ"
    },
    {
        "code": "001358",
        "name": "兴欣新材",
        "pinyin": "xxxc",
        "market": "SZ"
    },
    {
        "code": "002181",
        "name": "粤 传 媒",
        "pinyin": "y c m",
        "market": "SZ"
    },
    {
        "code": "002749",
        "name": "国光股份",
        "pinyin": "gggf",
        "market": "SZ"
    },
    {
        "code": "300691",
        "name": "联合光电",
        "pinyin": "lhgd",
        "market": "SZ"
    },
    {
        "code": "300864",
        "name": "南大环境",
        "pinyin": "ndhj",
        "market": "SZ"
    },
    {
        "code": "301020",
        "name": "密封科技",
        "pinyin": "mfkj",
        "market": "SZ"
    },
    {
        "code": "301100",
        "name": "风光股份",
        "pinyin": "fggf",
        "market": "SZ"
    },
    {
        "code": "301560",
        "name": "众捷汽车",
        "pinyin": "zjqc",
        "market": "SZ"
    },
    {
        "code": "600156",
        "name": "华升股份",
        "pinyin": "hsgf",
        "market": "SH"
    },
    {
        "code": "600793",
        "name": "宜宾纸业",
        "pinyin": "ybzy",
        "market": "SH"
    },
    {
        "code": "600963",
        "name": "岳阳林纸",
        "pinyin": "yylz",
        "market": "SH"
    },
    {
        "code": "603048",
        "name": "浙江黎明",
        "pinyin": "zjlm",
        "market": "SH"
    },
    {
        "code": "603081",
        "name": "大丰实业",
        "pinyin": "dfsy",
        "market": "SH"
    },
    {
        "code": "603082",
        "name": "北自科技",
        "pinyin": "bzkj",
        "market": "SH"
    },
    {
        "code": "603558",
        "name": "健盛集团",
        "pinyin": "jsjt",
        "market": "SH"
    },
    {
        "code": "603698",
        "name": "航天工程",
        "pinyin": "htgc",
        "market": "SH"
    },
    {
        "code": "603757",
        "name": "大元泵业",
        "pinyin": "dyby",
        "market": "SH"
    },
    {
        "code": "603955",
        "name": "大千生态",
        "pinyin": "dqst",
        "market": "SH"
    },
    {
        "code": "605589",
        "name": "圣泉集团",
        "pinyin": "sqjt",
        "market": "SH"
    },
    {
        "code": "000815",
        "name": "美利云",
        "pinyin": "mly",
        "market": "SZ"
    },
    {
        "code": "300520",
        "name": "科大国创",
        "pinyin": "kdgc",
        "market": "SZ"
    },
    {
        "code": "300717",
        "name": "华信新材",
        "pinyin": "hxxc",
        "market": "SZ"
    },
    {
        "code": "300839",
        "name": "博汇股份",
        "pinyin": "bhgf",
        "market": "SZ"
    },
    {
        "code": "300851",
        "name": "交大思诺",
        "pinyin": "jdsn",
        "market": "SZ"
    },
    {
        "code": "300984",
        "name": "金沃股份",
        "pinyin": "jwgf",
        "market": "SZ"
    },
    {
        "code": "301288",
        "name": "*ST清研",
        "pinyin": "*stqy",
        "market": "SZ"
    },
    {
        "code": "301418",
        "name": "协昌科技",
        "pinyin": "xckj",
        "market": "SZ"
    },
    {
        "code": "603219",
        "name": "富佳股份",
        "pinyin": "fjgf",
        "market": "SH"
    },
    {
        "code": "002957",
        "name": "科瑞技术",
        "pinyin": "krjs",
        "market": "SZ"
    },
    {
        "code": "300928",
        "name": "华安鑫创",
        "pinyin": "haxc",
        "market": "SZ"
    },
    {
        "code": "301072",
        "name": "中捷精工",
        "pinyin": "zjjg",
        "market": "SZ"
    },
    {
        "code": "301156",
        "name": "美农生物",
        "pinyin": "mnsw",
        "market": "SZ"
    },
    {
        "code": "301223",
        "name": "中荣股份",
        "pinyin": "zrgf",
        "market": "SZ"
    },
    {
        "code": "301552",
        "name": "科力装备",
        "pinyin": "klzb",
        "market": "SZ"
    },
    {
        "code": "301578",
        "name": "辰奕智能",
        "pinyin": "cyzn",
        "market": "SZ"
    },
    {
        "code": "603008",
        "name": "喜临门",
        "pinyin": "xlm",
        "market": "SH"
    },
    {
        "code": "603950",
        "name": "长源东谷",
        "pinyin": "cydg",
        "market": "SH"
    },
    {
        "code": "001223",
        "name": "欧克科技",
        "pinyin": "okkj",
        "market": "SZ"
    },
    {
        "code": "002161",
        "name": "远 望 谷",
        "pinyin": "y w g",
        "market": "SZ"
    },
    {
        "code": "002963",
        "name": "豪尔赛",
        "pinyin": "hes",
        "market": "SZ"
    },
    {
        "code": "003027",
        "name": "同兴科技",
        "pinyin": "txkj",
        "market": "SZ"
    },
    {
        "code": "300781",
        "name": "因赛集团",
        "pinyin": "ysjt",
        "market": "SZ"
    },
    {
        "code": "301099",
        "name": "雅创电子",
        "pinyin": "ycdz",
        "market": "SZ"
    },
    {
        "code": "600054",
        "name": "黄山旅游",
        "pinyin": "hsly",
        "market": "SH"
    },
    {
        "code": "601038",
        "name": "一拖股份",
        "pinyin": "ytgf",
        "market": "SH"
    },
    {
        "code": "000915",
        "name": "华特达因",
        "pinyin": "htdy",
        "market": "SZ"
    },
    {
        "code": "001255",
        "name": "博菲电气",
        "pinyin": "bfdq",
        "market": "SZ"
    },
    {
        "code": "002582",
        "name": "好想你",
        "pinyin": "hxn",
        "market": "SZ"
    },
    {
        "code": "002930",
        "name": "宏川智慧",
        "pinyin": "hczh",
        "market": "SZ"
    },
    {
        "code": "301188",
        "name": "力诺药包",
        "pinyin": "lnyb",
        "market": "SZ"
    },
    {
        "code": "301310",
        "name": "鑫宏业",
        "pinyin": "xhy",
        "market": "SZ"
    },
    {
        "code": "301520",
        "name": "万邦医药",
        "pinyin": "wbyy",
        "market": "SZ"
    },
    {
        "code": "600395",
        "name": "盘江股份",
        "pinyin": "pjgf",
        "market": "SH"
    },
    {
        "code": "600584",
        "name": "长电科技",
        "pinyin": "cdkj",
        "market": "SH"
    },
    {
        "code": "603599",
        "name": "广信股份",
        "pinyin": "gxgf",
        "market": "SH"
    },
    {
        "code": "603677",
        "name": "奇精机械",
        "pinyin": "qjjx",
        "market": "SH"
    },
    {
        "code": "000338",
        "name": "潍柴动力",
        "pinyin": "wcdl",
        "market": "SZ"
    },
    {
        "code": "300572",
        "name": "安车检测",
        "pinyin": "acjc",
        "market": "SZ"
    },
    {
        "code": "300848",
        "name": "美瑞新材",
        "pinyin": "mrxc",
        "market": "SZ"
    },
    {
        "code": "300949",
        "name": "奥雅股份",
        "pinyin": "aygf",
        "market": "SZ"
    },
    {
        "code": "301262",
        "name": "海看股份",
        "pinyin": "hkgf",
        "market": "SZ"
    },
    {
        "code": "000672",
        "name": "上峰水泥",
        "pinyin": "sfsn",
        "market": "SZ"
    },
    {
        "code": "000708",
        "name": "中信特钢",
        "pinyin": "zxtg",
        "market": "SZ"
    },
    {
        "code": "001378",
        "name": "德冠新材",
        "pinyin": "dgxc",
        "market": "SZ"
    },
    {
        "code": "300989",
        "name": "蕾奥规划",
        "pinyin": "lagh",
        "market": "SZ"
    },
    {
        "code": "301025",
        "name": "读客文化",
        "pinyin": "dkwh",
        "market": "SZ"
    },
    {
        "code": "301322",
        "name": "绿通科技",
        "pinyin": "ltkj",
        "market": "SZ"
    },
    {
        "code": "301607",
        "name": "富特科技",
        "pinyin": "ftkj",
        "market": "SZ"
    },
    {
        "code": "300876",
        "name": "蒙泰高新",
        "pinyin": "mtgx",
        "market": "SZ"
    },
    {
        "code": "300975",
        "name": "商络电子",
        "pinyin": "sldz",
        "market": "SZ"
    },
    {
        "code": "301503",
        "name": "智迪科技",
        "pinyin": "zdkj",
        "market": "SZ"
    },
    {
        "code": "600409",
        "name": "三友化工",
        "pinyin": "syhg",
        "market": "SH"
    },
    {
        "code": "600710",
        "name": "苏美达",
        "pinyin": "smd",
        "market": "SH"
    },
    {
        "code": "603860",
        "name": "中公高科",
        "pinyin": "zggk",
        "market": "SH"
    },
    {
        "code": "605089",
        "name": "味知香",
        "pinyin": "wzx",
        "market": "SH"
    },
    {
        "code": "000998",
        "name": "隆平高科",
        "pinyin": "lpgk",
        "market": "SZ"
    },
    {
        "code": "002457",
        "name": "青龙管业",
        "pinyin": "qlgy",
        "market": "SZ"
    },
    {
        "code": "003011",
        "name": "海象新材",
        "pinyin": "hxxc",
        "market": "SZ"
    },
    {
        "code": "300739",
        "name": "明阳电路",
        "pinyin": "mydl",
        "market": "SZ"
    },
    {
        "code": "301227",
        "name": "森鹰窗业",
        "pinyin": "sycy",
        "market": "SZ"
    },
    {
        "code": "001207",
        "name": "联科科技",
        "pinyin": "lkkj",
        "market": "SZ"
    },
    {
        "code": "301212",
        "name": "联盛化学",
        "pinyin": "lshx",
        "market": "SZ"
    },
    {
        "code": "601088",
        "name": "中国神华",
        "pinyin": "zgsh",
        "market": "SH"
    },
    {
        "code": "603296",
        "name": "华勤技术",
        "pinyin": "hqjs",
        "market": "SH"
    },
    {
        "code": "002062",
        "name": "宏润建设",
        "pinyin": "hrjs",
        "market": "SZ"
    },
    {
        "code": "002342",
        "name": "巨力索具",
        "pinyin": "jlsj",
        "market": "SZ"
    },
    {
        "code": "002597",
        "name": "金禾实业",
        "pinyin": "jhsy",
        "market": "SZ"
    },
    {
        "code": "002654",
        "name": "万润科技",
        "pinyin": "wrkj",
        "market": "SZ"
    },
    {
        "code": "300153",
        "name": "科泰电源",
        "pinyin": "ktdy",
        "market": "SZ"
    },
    {
        "code": "301172",
        "name": "君逸数码",
        "pinyin": "jysm",
        "market": "SZ"
    },
    {
        "code": "301222",
        "name": "浙江恒威",
        "pinyin": "zjhw",
        "market": "SZ"
    },
    {
        "code": "301388",
        "name": "欣灵电气",
        "pinyin": "xldq",
        "market": "SZ"
    },
    {
        "code": "301429",
        "name": "森泰股份",
        "pinyin": "stgf",
        "market": "SZ"
    },
    {
        "code": "600455",
        "name": "博通股份",
        "pinyin": "btgf",
        "market": "SH"
    },
    {
        "code": "603029",
        "name": "天鹅股份",
        "pinyin": "tegf",
        "market": "SH"
    },
    {
        "code": "603286",
        "name": "日盈电子",
        "pinyin": "rydz",
        "market": "SH"
    },
    {
        "code": "300669",
        "name": "沪宁股份",
        "pinyin": "hngf",
        "market": "SZ"
    },
    {
        "code": "301163",
        "name": "宏德股份",
        "pinyin": "hdgf",
        "market": "SZ"
    },
    {
        "code": "301220",
        "name": "亚香股份",
        "pinyin": "yxgf",
        "market": "SZ"
    },
    {
        "code": "301290",
        "name": "东星医疗",
        "pinyin": "dxyl",
        "market": "SZ"
    },
    {
        "code": "600343",
        "name": "航天动力",
        "pinyin": "htdl",
        "market": "SH"
    },
    {
        "code": "600580",
        "name": "卧龙电驱",
        "pinyin": "wldq",
        "market": "SH"
    },
    {
        "code": "605033",
        "name": "美邦股份",
        "pinyin": "mbgf",
        "market": "SH"
    },
    {
        "code": "605296",
        "name": "神农集团",
        "pinyin": "snjt",
        "market": "SH"
    },
    {
        "code": "000070",
        "name": "特发信息",
        "pinyin": "tfxx",
        "market": "SZ"
    },
    {
        "code": "000628",
        "name": "高新发展",
        "pinyin": "gxfz",
        "market": "SZ"
    },
    {
        "code": "000818",
        "name": "航锦科技",
        "pinyin": "hjkj",
        "market": "SZ"
    },
    {
        "code": "300535",
        "name": "达威股份",
        "pinyin": "dwgf",
        "market": "SZ"
    },
    {
        "code": "300660",
        "name": "江苏雷利",
        "pinyin": "jsll",
        "market": "SZ"
    },
    {
        "code": "600671",
        "name": "天目药业",
        "pinyin": "tmyy",
        "market": "SH"
    },
    {
        "code": "600977",
        "name": "中国电影",
        "pinyin": "zgdy",
        "market": "SH"
    },
    {
        "code": "603515",
        "name": "欧普照明",
        "pinyin": "opzm",
        "market": "SH"
    },
    {
        "code": "001234",
        "name": "泰慕士",
        "pinyin": "tms",
        "market": "SZ"
    },
    {
        "code": "001259",
        "name": "利仁科技",
        "pinyin": "lrkj",
        "market": "SZ"
    },
    {
        "code": "001333",
        "name": "光华股份",
        "pinyin": "ghgf",
        "market": "SZ"
    },
    {
        "code": "002156",
        "name": "通富微电",
        "pinyin": "tfwd",
        "market": "SZ"
    },
    {
        "code": "002871",
        "name": "伟隆股份",
        "pinyin": "wlgf",
        "market": "SZ"
    },
    {
        "code": "002905",
        "name": "金逸影视",
        "pinyin": "jyys",
        "market": "SZ"
    },
    {
        "code": "300584",
        "name": "海辰药业",
        "pinyin": "hcyy",
        "market": "SZ"
    },
    {
        "code": "300915",
        "name": "海融科技",
        "pinyin": "hrkj",
        "market": "SZ"
    },
    {
        "code": "000004",
        "name": "*ST国华",
        "pinyin": "*stgh",
        "market": "SZ"
    },
    {
        "code": "002463",
        "name": "沪电股份",
        "pinyin": "hdgf",
        "market": "SZ"
    },
    {
        "code": "002970",
        "name": "锐明技术",
        "pinyin": "rmjs",
        "market": "SZ"
    },
    {
        "code": "300623",
        "name": "捷捷微电",
        "pinyin": "jjwd",
        "market": "SZ"
    },
    {
        "code": "301203",
        "name": "国泰环保",
        "pinyin": "gthb",
        "market": "SZ"
    },
    {
        "code": "600828",
        "name": "茂业商业",
        "pinyin": "mysy",
        "market": "SH"
    },
    {
        "code": "603127",
        "name": "昭衍新药",
        "pinyin": "zyxy",
        "market": "SH"
    },
    {
        "code": "603416",
        "name": "信捷电气",
        "pinyin": "xjdq",
        "market": "SH"
    },
    {
        "code": "603661",
        "name": "恒林股份",
        "pinyin": "hlgf",
        "market": "SH"
    },
    {
        "code": "002859",
        "name": "洁美科技",
        "pinyin": "jmkj",
        "market": "SZ"
    },
    {
        "code": "003004",
        "name": "*ST声迅",
        "pinyin": "*stsx",
        "market": "SZ"
    },
    {
        "code": "301133",
        "name": "金钟股份",
        "pinyin": "jzgf",
        "market": "SZ"
    },
    {
        "code": "301190",
        "name": "善水科技",
        "pinyin": "sskj",
        "market": "SZ"
    },
    {
        "code": "301373",
        "name": "凌玮科技",
        "pinyin": "lwkj",
        "market": "SZ"
    },
    {
        "code": "601595",
        "name": "上海电影",
        "pinyin": "shdy",
        "market": "SH"
    },
    {
        "code": "603272",
        "name": "联翔股份",
        "pinyin": "lxgf",
        "market": "SH"
    },
    {
        "code": "603350",
        "name": "安乃达",
        "pinyin": "and",
        "market": "SH"
    },
    {
        "code": "605259",
        "name": "绿田机械",
        "pinyin": "ltjx",
        "market": "SH"
    },
    {
        "code": "603033",
        "name": "三维股份",
        "pinyin": "swgf",
        "market": "SH"
    },
    {
        "code": "603773",
        "name": "沃格光电",
        "pinyin": "wggd",
        "market": "SH"
    },
    {
        "code": "301024",
        "name": "霍普股份",
        "pinyin": "hpgf",
        "market": "SZ"
    },
    {
        "code": "301125",
        "name": "腾亚精工",
        "pinyin": "tyjg",
        "market": "SZ"
    },
    {
        "code": "301598",
        "name": "博科测试",
        "pinyin": "bkcs",
        "market": "SZ"
    },
    {
        "code": "600452",
        "name": "涪陵电力",
        "pinyin": "fldl",
        "market": "SH"
    },
    {
        "code": "600590",
        "name": "泰豪科技",
        "pinyin": "thkj",
        "market": "SH"
    },
    {
        "code": "600598",
        "name": "北大荒",
        "pinyin": "bdh",
        "market": "SH"
    },
    {
        "code": "605058",
        "name": "澳弘电子",
        "pinyin": "ahdz",
        "market": "SH"
    },
    {
        "code": "605128",
        "name": "上海沿浦",
        "pinyin": "shyp",
        "market": "SH"
    },
    {
        "code": "605167",
        "name": "利柏特",
        "pinyin": "lbt",
        "market": "SH"
    },
    {
        "code": "001336",
        "name": "楚环科技",
        "pinyin": "chkj",
        "market": "SZ"
    },
    {
        "code": "003008",
        "name": "开普检测",
        "pinyin": "kpjc",
        "market": "SZ"
    },
    {
        "code": "300991",
        "name": "创益通",
        "pinyin": "cyt",
        "market": "SZ"
    },
    {
        "code": "603062",
        "name": "麦加芯彩",
        "pinyin": "mjxc",
        "market": "SH"
    },
    {
        "code": "603220",
        "name": "中贝通信",
        "pinyin": "zbtx",
        "market": "SH"
    },
    {
        "code": "603239",
        "name": "浙江仙通",
        "pinyin": "zjxt",
        "market": "SH"
    },
    {
        "code": "605155",
        "name": "西大门",
        "pinyin": "xdm",
        "market": "SH"
    },
    {
        "code": "000973",
        "name": "佛塑科技",
        "pinyin": "fskj",
        "market": "SZ"
    },
    {
        "code": "001279",
        "name": "强邦新材",
        "pinyin": "qbxc",
        "market": "SZ"
    },
    {
        "code": "002942",
        "name": "新农股份",
        "pinyin": "xngf",
        "market": "SZ"
    },
    {
        "code": "003033",
        "name": "征和工业",
        "pinyin": "zhgy",
        "market": "SZ"
    },
    {
        "code": "300923",
        "name": "研奥股份",
        "pinyin": "yagf",
        "market": "SZ"
    },
    {
        "code": "300936",
        "name": "中英科技",
        "pinyin": "zykj",
        "market": "SZ"
    },
    {
        "code": "301300",
        "name": "远翔新材",
        "pinyin": "yxxc",
        "market": "SZ"
    },
    {
        "code": "600329",
        "name": "达仁堂",
        "pinyin": "drt",
        "market": "SH"
    },
    {
        "code": "001335",
        "name": "信凯科技",
        "pinyin": "xkkj",
        "market": "SZ"
    },
    {
        "code": "002080",
        "name": "中材科技",
        "pinyin": "zckj",
        "market": "SZ"
    },
    {
        "code": "301458",
        "name": "钧崴电子",
        "pinyin": "jwdz",
        "market": "SZ"
    },
    {
        "code": "600084",
        "name": "中信尼雅",
        "pinyin": "zxny",
        "market": "SH"
    },
    {
        "code": "603848",
        "name": "好太太",
        "pinyin": "htt",
        "market": "SH"
    },
    {
        "code": "002772",
        "name": "众兴菌业",
        "pinyin": "zxjy",
        "market": "SZ"
    },
    {
        "code": "002922",
        "name": "伊戈尔",
        "pinyin": "yge",
        "market": "SZ"
    },
    {
        "code": "300976",
        "name": "达瑞电子",
        "pinyin": "drdz",
        "market": "SZ"
    },
    {
        "code": "301206",
        "name": "三元生物",
        "pinyin": "sysw",
        "market": "SZ"
    },
    {
        "code": "603360",
        "name": "百傲化学",
        "pinyin": "bahx",
        "market": "SH"
    },
    {
        "code": "603960",
        "name": "克来机电",
        "pinyin": "kljd",
        "market": "SH"
    },
    {
        "code": "002562",
        "name": "兄弟科技",
        "pinyin": "xdkj",
        "market": "SZ"
    },
    {
        "code": "300486",
        "name": "东杰智能",
        "pinyin": "djzn",
        "market": "SZ"
    },
    {
        "code": "603042",
        "name": "华脉科技",
        "pinyin": "hmkj",
        "market": "SH"
    },
    {
        "code": "002868",
        "name": "*ST绿康",
        "pinyin": "*stlk",
        "market": "SZ"
    },
    {
        "code": "002890",
        "name": "弘宇股份",
        "pinyin": "hygf",
        "market": "SZ"
    },
    {
        "code": "300661",
        "name": "圣邦股份",
        "pinyin": "sbgf",
        "market": "SZ"
    },
    {
        "code": "300920",
        "name": "润阳科技",
        "pinyin": "rykj",
        "market": "SZ"
    },
    {
        "code": "600897",
        "name": "厦门空港",
        "pinyin": "smkg",
        "market": "SH"
    },
    {
        "code": "002831",
        "name": "裕同科技",
        "pinyin": "ytkj",
        "market": "SZ"
    },
    {
        "code": "300812",
        "name": "易天股份",
        "pinyin": "ytgf",
        "market": "SZ"
    },
    {
        "code": "301170",
        "name": "锡南科技",
        "pinyin": "xnkj",
        "market": "SZ"
    },
    {
        "code": "301361",
        "name": "众智科技",
        "pinyin": "zzkj",
        "market": "SZ"
    },
    {
        "code": "001296",
        "name": "长江材料",
        "pinyin": "cjcl",
        "market": "SZ"
    },
    {
        "code": "002119",
        "name": "康强电子",
        "pinyin": "kqdz",
        "market": "SZ"
    },
    {
        "code": "002491",
        "name": "通鼎互联",
        "pinyin": "tdhl",
        "market": "SZ"
    },
    {
        "code": "300854",
        "name": "中兰环保",
        "pinyin": "zlhb",
        "market": "SZ"
    },
    {
        "code": "301397",
        "name": "溯联股份",
        "pinyin": "slgf",
        "market": "SZ"
    },
    {
        "code": "603151",
        "name": "邦基科技",
        "pinyin": "bjkj",
        "market": "SH"
    },
    {
        "code": "000586",
        "name": "汇源通信",
        "pinyin": "hytx",
        "market": "SZ"
    },
    {
        "code": "000700",
        "name": "模塑科技",
        "pinyin": "mskj",
        "market": "SZ"
    },
    {
        "code": "001211",
        "name": "双枪科技",
        "pinyin": "sqkj",
        "market": "SZ"
    },
    {
        "code": "300016",
        "name": "北陆药业",
        "pinyin": "blyy",
        "market": "SZ"
    },
    {
        "code": "300827",
        "name": "上能电气",
        "pinyin": "sndq",
        "market": "SZ"
    },
    {
        "code": "300980",
        "name": "祥源新材",
        "pinyin": "xyxc",
        "market": "SZ"
    },
    {
        "code": "301033",
        "name": "迈普医学",
        "pinyin": "mpyx",
        "market": "SZ"
    },
    {
        "code": "301132",
        "name": "满坤科技",
        "pinyin": "mkkj",
        "market": "SZ"
    },
    {
        "code": "301372",
        "name": "科净源",
        "pinyin": "kjy",
        "market": "SZ"
    },
    {
        "code": "600354",
        "name": "敦煌种业",
        "pinyin": "dhzy",
        "market": "SH"
    },
    {
        "code": "600610",
        "name": "中毅达",
        "pinyin": "zyd",
        "market": "SH"
    },
    {
        "code": "601226",
        "name": "华电科工",
        "pinyin": "hdkg",
        "market": "SH"
    },
    {
        "code": "605277",
        "name": "新亚电子",
        "pinyin": "xydz",
        "market": "SH"
    },
    {
        "code": "001225",
        "name": "和泰机电",
        "pinyin": "htjd",
        "market": "SZ"
    },
    {
        "code": "002438",
        "name": "江苏神通",
        "pinyin": "jsst",
        "market": "SZ"
    },
    {
        "code": "002849",
        "name": "威星智能",
        "pinyin": "wxzn",
        "market": "SZ"
    },
    {
        "code": "002923",
        "name": "润都股份",
        "pinyin": "rdgf",
        "market": "SZ"
    },
    {
        "code": "300054",
        "name": "鼎龙股份",
        "pinyin": "dlgf",
        "market": "SZ"
    },
    {
        "code": "300886",
        "name": "华业香料",
        "pinyin": "hyxl",
        "market": "SZ"
    },
    {
        "code": "301022",
        "name": "海泰科",
        "pinyin": "htk",
        "market": "SZ"
    },
    {
        "code": "603135",
        "name": "中重科技",
        "pinyin": "zzkj",
        "market": "SH"
    },
    {
        "code": "002866",
        "name": "传艺科技",
        "pinyin": "cykj",
        "market": "SZ"
    },
    {
        "code": "300614",
        "name": "百川畅银",
        "pinyin": "bccy",
        "market": "SZ"
    },
    {
        "code": "300710",
        "name": "万隆光电",
        "pinyin": "wlgd",
        "market": "SZ"
    },
    {
        "code": "300939",
        "name": "秋田微",
        "pinyin": "qtw",
        "market": "SZ"
    },
    {
        "code": "301010",
        "name": "晶雪节能",
        "pinyin": "jxjn",
        "market": "SZ"
    },
    {
        "code": "301512",
        "name": "智信精密",
        "pinyin": "zxjm",
        "market": "SZ"
    },
    {
        "code": "301668",
        "name": "昊创瑞通",
        "pinyin": "hcrt",
        "market": "SZ"
    },
    {
        "code": "300807",
        "name": "天迈科技",
        "pinyin": "tmkj",
        "market": "SZ"
    },
    {
        "code": "300893",
        "name": "松原安全",
        "pinyin": "syaq",
        "market": "SZ"
    },
    {
        "code": "301107",
        "name": "瑜欣电子",
        "pinyin": "yxdz",
        "market": "SZ"
    },
    {
        "code": "600356",
        "name": "恒丰纸业",
        "pinyin": "hfzy",
        "market": "SH"
    },
    {
        "code": "603102",
        "name": "百合股份",
        "pinyin": "bhgf",
        "market": "SH"
    },
    {
        "code": "603881",
        "name": "数据港",
        "pinyin": "sjg",
        "market": "SH"
    },
    {
        "code": "605028",
        "name": "世茂能源",
        "pinyin": "smny",
        "market": "SH"
    },
    {
        "code": "001238",
        "name": "浙江正特",
        "pinyin": "zjzt",
        "market": "SZ"
    },
    {
        "code": "002440",
        "name": "闰土股份",
        "pinyin": "rtgf",
        "market": "SZ"
    },
    {
        "code": "002806",
        "name": "华锋股份",
        "pinyin": "hfgf",
        "market": "SZ"
    },
    {
        "code": "300547",
        "name": "川环科技",
        "pinyin": "chkj",
        "market": "SZ"
    },
    {
        "code": "300684",
        "name": "中石科技",
        "pinyin": "zskj",
        "market": "SZ"
    },
    {
        "code": "300843",
        "name": "胜蓝股份",
        "pinyin": "slgf",
        "market": "SZ"
    },
    {
        "code": "301273",
        "name": "瑞晨环保",
        "pinyin": "rchb",
        "market": "SZ"
    },
    {
        "code": "301390",
        "name": "经纬股份",
        "pinyin": "jwgf",
        "market": "SZ"
    },
    {
        "code": "601233",
        "name": "桐昆股份",
        "pinyin": "tkgf",
        "market": "SH"
    },
    {
        "code": "301379",
        "name": "天山电子",
        "pinyin": "tsdz",
        "market": "SZ"
    },
    {
        "code": "301386",
        "name": "未来电器",
        "pinyin": "wldq",
        "market": "SZ"
    },
    {
        "code": "301601",
        "name": "惠通科技",
        "pinyin": "htkj",
        "market": "SZ"
    },
    {
        "code": "603159",
        "name": "上海亚虹",
        "pinyin": "shyh",
        "market": "SH"
    },
    {
        "code": "603261",
        "name": "*ST立航",
        "pinyin": "*stlh",
        "market": "SH"
    },
    {
        "code": "300641",
        "name": "正丹股份",
        "pinyin": "zdgf",
        "market": "SZ"
    },
    {
        "code": "301122",
        "name": "采纳股份",
        "pinyin": "cngf",
        "market": "SZ"
    },
    {
        "code": "301148",
        "name": "嘉戎技术",
        "pinyin": "jrjs",
        "market": "SZ"
    },
    {
        "code": "603005",
        "name": "晶方科技",
        "pinyin": "jfkj",
        "market": "SH"
    },
    {
        "code": "001301",
        "name": "尚太科技",
        "pinyin": "stkj",
        "market": "SZ"
    },
    {
        "code": "300516",
        "name": "久之洋",
        "pinyin": "jzy",
        "market": "SZ"
    },
    {
        "code": "300718",
        "name": "长盛轴承",
        "pinyin": "cszc",
        "market": "SZ"
    },
    {
        "code": "300804",
        "name": "广康生化",
        "pinyin": "gksh",
        "market": "SZ"
    },
    {
        "code": "300877",
        "name": "金春股份",
        "pinyin": "jcgf",
        "market": "SZ"
    },
    {
        "code": "603316",
        "name": "诚邦股份",
        "pinyin": "cbgf",
        "market": "SH"
    },
    {
        "code": "001317",
        "name": "三羊马",
        "pinyin": "sym",
        "market": "SZ"
    },
    {
        "code": "001332",
        "name": "锡装股份",
        "pinyin": "xzgf",
        "market": "SZ"
    },
    {
        "code": "002919",
        "name": "名臣健康",
        "pinyin": "mcjk",
        "market": "SZ"
    },
    {
        "code": "300977",
        "name": "深圳瑞捷",
        "pinyin": "szrj",
        "market": "SZ"
    },
    {
        "code": "301085",
        "name": "亚康股份",
        "pinyin": "ykgf",
        "market": "SZ"
    },
    {
        "code": "301367",
        "name": "瑞迈特",
        "pinyin": "rmt",
        "market": "SZ"
    },
    {
        "code": "600313",
        "name": "农发种业",
        "pinyin": "nfzy",
        "market": "SH"
    },
    {
        "code": "300401",
        "name": "花园生物",
        "pinyin": "hysw",
        "market": "SZ"
    },
    {
        "code": "300695",
        "name": "兆丰股份",
        "pinyin": "zfgf",
        "market": "SZ"
    },
    {
        "code": "301328",
        "name": "维峰电子",
        "pinyin": "wfdz",
        "market": "SZ"
    },
    {
        "code": "603373",
        "name": "安邦护卫",
        "pinyin": "abhw",
        "market": "SH"
    },
    {
        "code": "002357",
        "name": "富临运业",
        "pinyin": "flyy",
        "market": "SZ"
    },
    {
        "code": "002895",
        "name": "川恒股份",
        "pinyin": "chgf",
        "market": "SZ"
    },
    {
        "code": "300720",
        "name": "海川智能",
        "pinyin": "hczn",
        "market": "SZ"
    },
    {
        "code": "603615",
        "name": "茶花股份",
        "pinyin": "chgf",
        "market": "SH"
    },
    {
        "code": "603618",
        "name": "杭电股份",
        "pinyin": "hdgf",
        "market": "SH"
    },
    {
        "code": "002395",
        "name": "双象股份",
        "pinyin": "sxgf",
        "market": "SZ"
    },
    {
        "code": "300611",
        "name": "美力科技",
        "pinyin": "mlkj",
        "market": "SZ"
    },
    {
        "code": "002636",
        "name": "金安国纪",
        "pinyin": "jagj",
        "market": "SZ"
    },
    {
        "code": "002026",
        "name": "山东威达",
        "pinyin": "sdwd",
        "market": "SZ"
    },
    {
        "code": "300389",
        "name": "艾比森",
        "pinyin": "abs",
        "market": "SZ"
    },
    {
        "code": "300808",
        "name": "久量股份",
        "pinyin": "jlgf",
        "market": "SZ"
    },
    {
        "code": "301035",
        "name": "润丰股份",
        "pinyin": "rfgf",
        "market": "SZ"
    },
    {
        "code": "001228",
        "name": "永泰运",
        "pinyin": "yty",
        "market": "SZ"
    },
    {
        "code": "300967",
        "name": "晓鸣股份",
        "pinyin": "xmgf",
        "market": "SZ"
    },
    {
        "code": "301237",
        "name": "和顺科技",
        "pinyin": "hskj",
        "market": "SZ"
    },
    {
        "code": "605198",
        "name": "安德利",
        "pinyin": "adl",
        "market": "SH"
    },
    {
        "code": "002050",
        "name": "三花智控",
        "pinyin": "shzk",
        "market": "SZ"
    },
    {
        "code": "002455",
        "name": "百川股份",
        "pinyin": "bcgf",
        "market": "SZ"
    },
    {
        "code": "300833",
        "name": "浩洋股份",
        "pinyin": "hygf",
        "market": "SZ"
    },
    {
        "code": "301272",
        "name": "英华特",
        "pinyin": "yht",
        "market": "SZ"
    },
    {
        "code": "603662",
        "name": "柯力传感",
        "pinyin": "klcg",
        "market": "SH"
    },
    {
        "code": "603966",
        "name": "法兰泰克",
        "pinyin": "fltk",
        "market": "SH"
    },
    {
        "code": "605100",
        "name": "华丰股份",
        "pinyin": "hfgf",
        "market": "SH"
    },
    {
        "code": "001331",
        "name": "胜通能源",
        "pinyin": "stny",
        "market": "SZ"
    },
    {
        "code": "300537",
        "name": "广信材料",
        "pinyin": "gxcl",
        "market": "SZ"
    },
    {
        "code": "301202",
        "name": "朗威股份",
        "pinyin": "lwgf",
        "market": "SZ"
    },
    {
        "code": "301357",
        "name": "北方长龙",
        "pinyin": "bfcl",
        "market": "SZ"
    },
    {
        "code": "603530",
        "name": "神马电力",
        "pinyin": "smdl",
        "market": "SH"
    },
    {
        "code": "301280",
        "name": "珠城科技",
        "pinyin": "zckj",
        "market": "SZ"
    },
    {
        "code": "002602",
        "name": "世纪华通",
        "pinyin": "sjht",
        "market": "SZ"
    },
    {
        "code": "301113",
        "name": "雅艺科技",
        "pinyin": "yykj",
        "market": "SZ"
    },
    {
        "code": "301287",
        "name": "康力源",
        "pinyin": "kly",
        "market": "SZ"
    },
    {
        "code": "301608",
        "name": "博实结",
        "pinyin": "bsj",
        "market": "SZ"
    },
    {
        "code": "600131",
        "name": "国网信通",
        "pinyin": "gwxt",
        "market": "SH"
    },
    {
        "code": "600768",
        "name": "宁波富邦",
        "pinyin": "nbfb",
        "market": "SH"
    },
    {
        "code": "300302",
        "name": "同有科技",
        "pinyin": "tykj",
        "market": "SZ"
    },
    {
        "code": "603156",
        "name": "养元饮品",
        "pinyin": "yyyp",
        "market": "SH"
    },
    {
        "code": "603938",
        "name": "三孚股份",
        "pinyin": "sfgf",
        "market": "SH"
    },
    {
        "code": "002137",
        "name": "实益达",
        "pinyin": "syd",
        "market": "SZ"
    },
    {
        "code": "300007",
        "name": "汉威科技",
        "pinyin": "hwkj",
        "market": "SZ"
    },
    {
        "code": "003017",
        "name": "大洋生物",
        "pinyin": "dysw",
        "market": "SZ"
    },
    {
        "code": "603186",
        "name": "华正新材",
        "pinyin": "hzxc",
        "market": "SH"
    },
    {
        "code": "300668",
        "name": "杰恩设计",
        "pinyin": "jesj",
        "market": "SZ"
    },
    {
        "code": "600371",
        "name": "万向德农",
        "pinyin": "wxdn",
        "market": "SH"
    },
    {
        "code": "605258",
        "name": "协和电子",
        "pinyin": "xhdz",
        "market": "SH"
    },
    {
        "code": "300626",
        "name": "华瑞股份",
        "pinyin": "hrgf",
        "market": "SZ"
    },
    {
        "code": "301312",
        "name": "智立方",
        "pinyin": "zlf",
        "market": "SZ"
    },
    {
        "code": "600323",
        "name": "瀚蓝环境",
        "pinyin": "hlhj",
        "market": "SH"
    },
    {
        "code": "603091",
        "name": "众鑫股份",
        "pinyin": "zxgf",
        "market": "SH"
    },
    {
        "code": "603099",
        "name": "长白山",
        "pinyin": "cbs",
        "market": "SH"
    },
    {
        "code": "603822",
        "name": "ST嘉澳",
        "pinyin": "stja",
        "market": "SH"
    },
    {
        "code": "600230",
        "name": "沧州大化",
        "pinyin": "czdh",
        "market": "SH"
    },
    {
        "code": "605338",
        "name": "巴比食品",
        "pinyin": "bbsp",
        "market": "SH"
    },
    {
        "code": "002149",
        "name": "西部材料",
        "pinyin": "xbcl",
        "market": "SZ"
    },
    {
        "code": "002759",
        "name": "天际股份",
        "pinyin": "tjgf",
        "market": "SZ"
    },
    {
        "code": "300594",
        "name": "朗进科技",
        "pinyin": "ljkj",
        "market": "SZ"
    },
    {
        "code": "600486",
        "name": "扬农化工",
        "pinyin": "ynhg",
        "market": "SH"
    },
    {
        "code": "603283",
        "name": "赛腾股份",
        "pinyin": "stgf",
        "market": "SH"
    },
    {
        "code": "605337",
        "name": "李子园",
        "pinyin": "lzy",
        "market": "SH"
    },
    {
        "code": "301505",
        "name": "苏州规划",
        "pinyin": "szgh",
        "market": "SZ"
    },
    {
        "code": "600618",
        "name": "氯碱化工",
        "pinyin": "ljhg",
        "market": "SH"
    },
    {
        "code": "300189",
        "name": "神农种业",
        "pinyin": "snzy",
        "market": "SZ"
    },
    {
        "code": "301056",
        "name": "森赫股份",
        "pinyin": "shgf",
        "market": "SZ"
    },
    {
        "code": "301321",
        "name": "翰博高新",
        "pinyin": "hbgx",
        "market": "SZ"
    },
    {
        "code": "300871",
        "name": "回盛生物",
        "pinyin": "hssw",
        "market": "SZ"
    },
    {
        "code": "301062",
        "name": "上海艾录",
        "pinyin": "shal",
        "market": "SZ"
    },
    {
        "code": "301550",
        "name": "斯菱智驱",
        "pinyin": "slzq",
        "market": "SZ"
    },
    {
        "code": "603162",
        "name": "海通发展",
        "pinyin": "htfz",
        "market": "SH"
    },
    {
        "code": "605488",
        "name": "福莱新材",
        "pinyin": "flxc",
        "market": "SH"
    },
    {
        "code": "301502",
        "name": "华阳智能",
        "pinyin": "hyzn",
        "market": "SZ"
    },
    {
        "code": "300700",
        "name": "岱勒新材",
        "pinyin": "dlxc",
        "market": "SZ"
    },
    {
        "code": "301003",
        "name": "江苏博云",
        "pinyin": "jsby",
        "market": "SZ"
    },
    {
        "code": "301106",
        "name": "骏成科技",
        "pinyin": "jckj",
        "market": "SZ"
    },
    {
        "code": "301491",
        "name": "汉桑科技",
        "pinyin": "hskj",
        "market": "SZ"
    },
    {
        "code": "600667",
        "name": "太极实业",
        "pinyin": "tjsy",
        "market": "SH"
    },
    {
        "code": "001278",
        "name": "一彬科技",
        "pinyin": "ybkj",
        "market": "SZ"
    },
    {
        "code": "002041",
        "name": "登海种业",
        "pinyin": "dhzy",
        "market": "SZ"
    },
    {
        "code": "300471",
        "name": "厚普股份",
        "pinyin": "hpgf",
        "market": "SZ"
    },
    {
        "code": "300946",
        "name": "恒而达",
        "pinyin": "hed",
        "market": "SZ"
    },
    {
        "code": "301616",
        "name": "浙江华业",
        "pinyin": "zjhy",
        "market": "SZ"
    },
    {
        "code": "000798",
        "name": "中水渔业",
        "pinyin": "zsyy",
        "market": "SZ"
    },
    {
        "code": "001267",
        "name": "汇绿生态",
        "pinyin": "hlst",
        "market": "SZ"
    },
    {
        "code": "300677",
        "name": "英科医疗",
        "pinyin": "ykyl",
        "market": "SZ"
    },
    {
        "code": "300716",
        "name": "ST泉为",
        "pinyin": "stqw",
        "market": "SZ"
    },
    {
        "code": "301585",
        "name": "蓝宇股份",
        "pinyin": "lygf",
        "market": "SZ"
    },
    {
        "code": "003026",
        "name": "中晶科技",
        "pinyin": "zjkj",
        "market": "SZ"
    },
    {
        "code": "300911",
        "name": "亿田智能",
        "pinyin": "ytzn",
        "market": "SZ"
    },
    {
        "code": "002809",
        "name": "红墙股份",
        "pinyin": "hqgf",
        "market": "SZ"
    },
    {
        "code": "300561",
        "name": "*ST汇科",
        "pinyin": "*sthk",
        "market": "SZ"
    },
    {
        "code": "603255",
        "name": "鼎际得",
        "pinyin": "djd",
        "market": "SH"
    },
    {
        "code": "300985",
        "name": "致远新能",
        "pinyin": "zyxn",
        "market": "SZ"
    },
    {
        "code": "603010",
        "name": "万盛股份",
        "pinyin": "wsgf",
        "market": "SH"
    },
    {
        "code": "001218",
        "name": "丽臣实业",
        "pinyin": "lcsy",
        "market": "SZ"
    },
    {
        "code": "001231",
        "name": "农心科技",
        "pinyin": "nxkj",
        "market": "SZ"
    },
    {
        "code": "600331",
        "name": "宏达股份",
        "pinyin": "hdgf",
        "market": "SH"
    },
    {
        "code": "301314",
        "name": "科瑞思",
        "pinyin": "krs",
        "market": "SZ"
    },
    {
        "code": "603203",
        "name": "快克智能",
        "pinyin": "kkzn",
        "market": "SH"
    },
    {
        "code": "603281",
        "name": "江瀚新材",
        "pinyin": "jhxc",
        "market": "SH"
    },
    {
        "code": "603948",
        "name": "建业股份",
        "pinyin": "jygf",
        "market": "SH"
    },
    {
        "code": "603958",
        "name": "哈森股份",
        "pinyin": "hsgf",
        "market": "SH"
    },
    {
        "code": "002896",
        "name": "中大力德",
        "pinyin": "zdld",
        "market": "SZ"
    },
    {
        "code": "301618",
        "name": "长联科技",
        "pinyin": "clkj",
        "market": "SZ"
    },
    {
        "code": "000062",
        "name": "深圳华强",
        "pinyin": "szhq",
        "market": "SZ"
    },
    {
        "code": "001268",
        "name": "联合精密",
        "pinyin": "lhjm",
        "market": "SZ"
    },
    {
        "code": "300065",
        "name": "海兰信",
        "pinyin": "hlx",
        "market": "SZ"
    },
    {
        "code": "301182",
        "name": "凯旺科技",
        "pinyin": "kwkj",
        "market": "SZ"
    },
    {
        "code": "603992",
        "name": "松霖科技",
        "pinyin": "slkj",
        "market": "SH"
    },
    {
        "code": "605016",
        "name": "百龙创园",
        "pinyin": "blcy",
        "market": "SH"
    },
    {
        "code": "002165",
        "name": "红 宝 丽",
        "pinyin": "h b l",
        "market": "SZ"
    },
    {
        "code": "301157",
        "name": "华塑科技",
        "pinyin": "hskj",
        "market": "SZ"
    },
    {
        "code": "603665",
        "name": "康隆达",
        "pinyin": "kld",
        "market": "SH"
    },
    {
        "code": "605088",
        "name": "冠盛股份",
        "pinyin": "gsgf",
        "market": "SH"
    },
    {
        "code": "300671",
        "name": "富满微",
        "pinyin": "fmw",
        "market": "SZ"
    },
    {
        "code": "301387",
        "name": "光大同创",
        "pinyin": "gdtc",
        "market": "SZ"
    },
    {
        "code": "600916",
        "name": "中国黄金",
        "pinyin": "zghj",
        "market": "SH"
    },
    {
        "code": "301131",
        "name": "聚赛龙",
        "pinyin": "jsl",
        "market": "SZ"
    },
    {
        "code": "300521",
        "name": "爱司凯",
        "pinyin": "ask",
        "market": "SZ"
    },
    {
        "code": "603683",
        "name": "晶华新材",
        "pinyin": "jhxc",
        "market": "SH"
    },
    {
        "code": "605287",
        "name": "德才股份",
        "pinyin": "dcgf",
        "market": "SH"
    },
    {
        "code": "600330",
        "name": "天通股份",
        "pinyin": "ttgf",
        "market": "SH"
    },
    {
        "code": "001359",
        "name": "平安电工",
        "pinyin": "padg",
        "market": "SZ"
    },
    {
        "code": "300870",
        "name": "欧陆通",
        "pinyin": "olt",
        "market": "SZ"
    },
    {
        "code": "300913",
        "name": "兆龙互连",
        "pinyin": "zlhl",
        "market": "SZ"
    },
    {
        "code": "603395",
        "name": "红四方",
        "pinyin": "hsf",
        "market": "SH"
    },
    {
        "code": "301389",
        "name": "隆扬电子",
        "pinyin": "lydz",
        "market": "SZ"
    },
    {
        "code": "301596",
        "name": "瑞迪智驱",
        "pinyin": "rdzq",
        "market": "SZ"
    },
    {
        "code": "002983",
        "name": "芯瑞达",
        "pinyin": "xrd",
        "market": "SZ"
    },
    {
        "code": "002992",
        "name": "宝明科技",
        "pinyin": "bmkj",
        "market": "SZ"
    },
    {
        "code": "301556",
        "name": "托普云农",
        "pinyin": "tpyn",
        "market": "SZ"
    },
    {
        "code": "600522",
        "name": "中天科技",
        "pinyin": "ztkj",
        "market": "SH"
    },
    {
        "code": "001325",
        "name": "元创股份",
        "pinyin": "ycgf",
        "market": "SZ"
    },
    {
        "code": "300899",
        "name": "*ST凯鑫",
        "pinyin": "*stkx",
        "market": "SZ"
    },
    {
        "code": "300905",
        "name": "宝丽迪",
        "pinyin": "bld",
        "market": "SZ"
    },
    {
        "code": "301171",
        "name": "易点天下",
        "pinyin": "ydtx",
        "market": "SZ"
    },
    {
        "code": "001339",
        "name": "智微智能",
        "pinyin": "zwzn",
        "market": "SZ"
    },
    {
        "code": "300438",
        "name": "鹏辉能源",
        "pinyin": "phny",
        "market": "SZ"
    },
    {
        "code": "000547",
        "name": "航天发展",
        "pinyin": "htfz",
        "market": "SZ"
    },
    {
        "code": "002664",
        "name": "信质集团",
        "pinyin": "xzjt",
        "market": "SZ"
    },
    {
        "code": "300251",
        "name": "光线传媒",
        "pinyin": "gxcm",
        "market": "SZ"
    },
    {
        "code": "301233",
        "name": "盛帮股份",
        "pinyin": "sbgf",
        "market": "SZ"
    },
    {
        "code": "300952",
        "name": "恒辉安防",
        "pinyin": "hhaf",
        "market": "SZ"
    },
    {
        "code": "301276",
        "name": "嘉曼服饰",
        "pinyin": "jmfs",
        "market": "SZ"
    },
    {
        "code": "002857",
        "name": "三晖电气",
        "pinyin": "shdq",
        "market": "SZ"
    },
    {
        "code": "300450",
        "name": "先导智能",
        "pinyin": "xdzn",
        "market": "SZ"
    },
    {
        "code": "300756",
        "name": "金马游乐",
        "pinyin": "jmyl",
        "market": "SZ"
    },
    {
        "code": "301568",
        "name": "思泰克",
        "pinyin": "stk",
        "market": "SZ"
    },
    {
        "code": "000021",
        "name": "深科技",
        "pinyin": "skj",
        "market": "SZ"
    },
    {
        "code": "300724",
        "name": "捷佳伟创",
        "pinyin": "jjwc",
        "market": "SZ"
    },
    {
        "code": "605376",
        "name": "博迁新材",
        "pinyin": "bqxc",
        "market": "SH"
    },
    {
        "code": "301283",
        "name": "聚胶股份",
        "pinyin": "jjgf",
        "market": "SZ"
    },
    {
        "code": "301297",
        "name": "富乐德",
        "pinyin": "fld",
        "market": "SZ"
    },
    {
        "code": "002864",
        "name": "盘龙药业",
        "pinyin": "plyy",
        "market": "SZ"
    },
    {
        "code": "300910",
        "name": "瑞丰新材",
        "pinyin": "rfxc",
        "market": "SZ"
    },
    {
        "code": "300990",
        "name": "同飞股份",
        "pinyin": "tfgf",
        "market": "SZ"
    },
    {
        "code": "301000",
        "name": "肇民科技",
        "pinyin": "zmkj",
        "market": "SZ"
    },
    {
        "code": "603331",
        "name": "百达精工",
        "pinyin": "bdjg",
        "market": "SH"
    },
    {
        "code": "603887",
        "name": "城地香江",
        "pinyin": "cdxj",
        "market": "SH"
    },
    {
        "code": "600499",
        "name": "科达制造",
        "pinyin": "kdzz",
        "market": "SH"
    },
    {
        "code": "603150",
        "name": "万朗磁塑",
        "pinyin": "wlcs",
        "market": "SH"
    },
    {
        "code": "000995",
        "name": "皇台酒业",
        "pinyin": "htjy",
        "market": "SZ"
    },
    {
        "code": "300903",
        "name": "科翔股份",
        "pinyin": "kxgf",
        "market": "SZ"
    },
    {
        "code": "603199",
        "name": "九华旅游",
        "pinyin": "jhly",
        "market": "SH"
    },
    {
        "code": "000880",
        "name": "潍柴重机",
        "pinyin": "wczj",
        "market": "SZ"
    },
    {
        "code": "301021",
        "name": "英诺激光",
        "pinyin": "ynjg",
        "market": "SZ"
    },
    {
        "code": "603268",
        "name": "*ST松发",
        "pinyin": "*stsf",
        "market": "SH"
    },
    {
        "code": "002897",
        "name": "意华股份",
        "pinyin": "yhgf",
        "market": "SZ"
    },
    {
        "code": "301419",
        "name": "阿莱德",
        "pinyin": "ald",
        "market": "SZ"
    },
    {
        "code": "300458",
        "name": "全志科技",
        "pinyin": "qzkj",
        "market": "SZ"
    },
    {
        "code": "300721",
        "name": "怡达股份",
        "pinyin": "ydgf",
        "market": "SZ"
    },
    {
        "code": "300900",
        "name": "广联航空",
        "pinyin": "glhk",
        "market": "SZ"
    },
    {
        "code": "301128",
        "name": "强瑞技术",
        "pinyin": "qrjs",
        "market": "SZ"
    },
    {
        "code": "603861",
        "name": "白云电器",
        "pinyin": "bydq",
        "market": "SH"
    },
    {
        "code": "300456",
        "name": "赛微电子",
        "pinyin": "swdz",
        "market": "SZ"
    },
    {
        "code": "300970",
        "name": "华绿生物",
        "pinyin": "hlsw",
        "market": "SZ"
    },
    {
        "code": "001319",
        "name": "铭科精技",
        "pinyin": "mkjj",
        "market": "SZ"
    },
    {
        "code": "301448",
        "name": "开创电气",
        "pinyin": "kcdq",
        "market": "SZ"
    },
    {
        "code": "001309",
        "name": "德明利",
        "pinyin": "dml",
        "market": "SZ"
    },
    {
        "code": "300250",
        "name": "初灵信息",
        "pinyin": "clxx",
        "market": "SZ"
    },
    {
        "code": "300385",
        "name": "雪浪环境",
        "pinyin": "xlhj",
        "market": "SZ"
    },
    {
        "code": "301533",
        "name": "威马农机",
        "pinyin": "wmnj",
        "market": "SZ"
    },
    {
        "code": "300113",
        "name": "顺网科技",
        "pinyin": "swkj",
        "market": "SZ"
    },
    {
        "code": "301551",
        "name": "无线传媒",
        "pinyin": "wxcm",
        "market": "SZ"
    },
    {
        "code": "002409",
        "name": "雅克科技",
        "pinyin": "ykkj",
        "market": "SZ"
    },
    {
        "code": "002536",
        "name": "飞龙股份",
        "pinyin": "flgf",
        "market": "SZ"
    },
    {
        "code": "300398",
        "name": "飞凯材料",
        "pinyin": "fkcl",
        "market": "SZ"
    },
    {
        "code": "603285",
        "name": "键邦股份",
        "pinyin": "jbgf",
        "market": "SH"
    },
    {
        "code": "301168",
        "name": "通灵股份",
        "pinyin": "tlgf",
        "market": "SZ"
    },
    {
        "code": "002916",
        "name": "深南电路",
        "pinyin": "sndl",
        "market": "SZ"
    },
    {
        "code": "300814",
        "name": "中富电路",
        "pinyin": "zfdl",
        "market": "SZ"
    },
    {
        "code": "002767",
        "name": "先锋电子",
        "pinyin": "xfdz",
        "market": "SZ"
    },
    {
        "code": "601089",
        "name": "福元医药",
        "pinyin": "fyyy",
        "market": "SH"
    },
    {
        "code": "603499",
        "name": "翔港科技",
        "pinyin": "xgkj",
        "market": "SH"
    },
    {
        "code": "300602",
        "name": "飞荣达",
        "pinyin": "frd",
        "market": "SZ"
    },
    {
        "code": "601133",
        "name": "柏诚股份",
        "pinyin": "bcgf",
        "market": "SH"
    },
    {
        "code": "605196",
        "name": "华通线缆",
        "pinyin": "htxl",
        "market": "SH"
    },
    {
        "code": "002048",
        "name": "宁波华翔",
        "pinyin": "nbhx",
        "market": "SZ"
    },
    {
        "code": "603216",
        "name": "梦天家居",
        "pinyin": "mtjj",
        "market": "SH"
    },
    {
        "code": "300819",
        "name": "聚杰微纤",
        "pinyin": "jjwx",
        "market": "SZ"
    },
    {
        "code": "603931",
        "name": "格林达",
        "pinyin": "gld",
        "market": "SH"
    },
    {
        "code": "301536",
        "name": "星宸科技",
        "pinyin": "xckj",
        "market": "SZ"
    },
    {
        "code": "300042",
        "name": "朗科科技",
        "pinyin": "lkkj",
        "market": "SZ"
    },
    {
        "code": "002779",
        "name": "中坚科技",
        "pinyin": "zjkj",
        "market": "SZ"
    },
    {
        "code": "300528",
        "name": "幸福蓝海",
        "pinyin": "xflh",
        "market": "SZ"
    },
    {
        "code": "301018",
        "name": "申菱环境",
        "pinyin": "slhj",
        "market": "SZ"
    },
    {
        "code": "603275",
        "name": "众辰科技",
        "pinyin": "zckj",
        "market": "SH"
    },
    {
        "code": "300442",
        "name": "润泽科技",
        "pinyin": "rzkj",
        "market": "SZ"
    },
    {
        "code": "001368",
        "name": "通达创智",
        "pinyin": "tdcz",
        "market": "SZ"
    },
    {
        "code": "301123",
        "name": "奕东电子",
        "pinyin": "yddz",
        "market": "SZ"
    },
    {
        "code": "301200",
        "name": "大族数控",
        "pinyin": "dzsk",
        "market": "SZ"
    },
    {
        "code": "300606",
        "name": "金太阳",
        "pinyin": "jty",
        "market": "SZ"
    },
    {
        "code": "301528",
        "name": "多浦乐",
        "pinyin": "dpl",
        "market": "SZ"
    },
    {
        "code": "603031",
        "name": "安孚科技",
        "pinyin": "afkj",
        "market": "SH"
    },
    {
        "code": "300604",
        "name": "长川科技",
        "pinyin": "cckj",
        "market": "SZ"
    },
    {
        "code": "300656",
        "name": "民德电子",
        "pinyin": "mddz",
        "market": "SZ"
    },
    {
        "code": "301469",
        "name": "恒达新材",
        "pinyin": "hdxc",
        "market": "SZ"
    },
    {
        "code": "603301",
        "name": "振德医疗",
        "pinyin": "zdyl",
        "market": "SH"
    },
    {
        "code": "301097",
        "name": "天益医疗",
        "pinyin": "tyyl",
        "market": "SZ"
    },
    {
        "code": "603926",
        "name": "铁流股份",
        "pinyin": "tlgf",
        "market": "SH"
    },
    {
        "code": "301191",
        "name": "菲菱科思",
        "pinyin": "flks",
        "market": "SZ"
    },
    {
        "code": "603863",
        "name": "松炀资源",
        "pinyin": "syzy",
        "market": "SH"
    },
    {
        "code": "300938",
        "name": "信测标准",
        "pinyin": "xcbz",
        "market": "SZ"
    },
    {
        "code": "301428",
        "name": "世纪恒通",
        "pinyin": "sjht",
        "market": "SZ"
    },
    {
        "code": "301525",
        "name": "儒竞科技",
        "pinyin": "rjkj",
        "market": "SZ"
    },
    {
        "code": "603813",
        "name": "*ST原尚",
        "pinyin": "*stys",
        "market": "SH"
    },
    {
        "code": "301178",
        "name": "天亿马",
        "pinyin": "tym",
        "market": "SZ"
    },
    {
        "code": "301189",
        "name": "奥尼电子",
        "pinyin": "andz",
        "market": "SZ"
    },
    {
        "code": "605151",
        "name": "西上海",
        "pinyin": "xsh",
        "market": "SH"
    },
    {
        "code": "300784",
        "name": "利安科技",
        "pinyin": "lakj",
        "market": "SZ"
    },
    {
        "code": "002830",
        "name": "名雕股份",
        "pinyin": "mdgf",
        "market": "SZ"
    },
    {
        "code": "002952",
        "name": "亚世光电",
        "pinyin": "ysgd",
        "market": "SZ"
    },
    {
        "code": "300828",
        "name": "锐新科技",
        "pinyin": "rxkj",
        "market": "SZ"
    },
    {
        "code": "000988",
        "name": "华工科技",
        "pinyin": "hgkj",
        "market": "SZ"
    },
    {
        "code": "002384",
        "name": "东山精密",
        "pinyin": "dsjm",
        "market": "SZ"
    },
    {
        "code": "300395",
        "name": "菲利华",
        "pinyin": "flh",
        "market": "SZ"
    },
    {
        "code": "603409",
        "name": "汇通控股",
        "pinyin": "htkg",
        "market": "SH"
    },
    {
        "code": "605178",
        "name": "时空科技",
        "pinyin": "skkj",
        "market": "SH"
    },
    {
        "code": "002985",
        "name": "北摩高科",
        "pinyin": "bmgk",
        "market": "SZ"
    },
    {
        "code": "300785",
        "name": "值得买",
        "pinyin": "zdm",
        "market": "SZ"
    },
    {
        "code": "603103",
        "name": "横店影视",
        "pinyin": "hdys",
        "market": "SH"
    },
    {
        "code": "002812",
        "name": "恩捷股份",
        "pinyin": "ejgf",
        "market": "SZ"
    },
    {
        "code": "301630",
        "name": "同宇新材",
        "pinyin": "tyxc",
        "market": "SZ"
    },
    {
        "code": "603172",
        "name": "万丰股份",
        "pinyin": "wfgf",
        "market": "SH"
    },
    {
        "code": "301369",
        "name": "联动科技",
        "pinyin": "ldkj",
        "market": "SZ"
    },
    {
        "code": "002281",
        "name": "光迅科技",
        "pinyin": "gxkj",
        "market": "SZ"
    },
    {
        "code": "300469",
        "name": "信息发展",
        "pinyin": "xxfz",
        "market": "SZ"
    },
    {
        "code": "002975",
        "name": "博杰股份",
        "pinyin": "bjgf",
        "market": "SZ"
    },
    {
        "code": "003031",
        "name": "中瓷电子",
        "pinyin": "zcdz",
        "market": "SZ"
    },
    {
        "code": "300689",
        "name": "澄天伟业",
        "pinyin": "ctwy",
        "market": "SZ"
    },
    {
        "code": "001400",
        "name": "江顺科技",
        "pinyin": "jskj",
        "market": "SZ"
    },
    {
        "code": "603052",
        "name": "可川科技",
        "pinyin": "kckj",
        "market": "SH"
    },
    {
        "code": "603173",
        "name": "福斯达",
        "pinyin": "fsd",
        "market": "SH"
    },
    {
        "code": "301031",
        "name": "中熔电气",
        "pinyin": "zrdq",
        "market": "SZ"
    },
    {
        "code": "002009",
        "name": "天奇股份",
        "pinyin": "tqgf",
        "market": "SZ"
    },
    {
        "code": "601208",
        "name": "东材科技",
        "pinyin": "dckj",
        "market": "SH"
    },
    {
        "code": "300805",
        "name": "电声股份",
        "pinyin": "dsgf",
        "market": "SZ"
    },
    {
        "code": "301043",
        "name": "绿岛风",
        "pinyin": "ldf",
        "market": "SZ"
    },
    {
        "code": "603598",
        "name": "引力传媒",
        "pinyin": "ylcm",
        "market": "SH"
    },
    {
        "code": "603991",
        "name": "至正股份",
        "pinyin": "zzgf",
        "market": "SH"
    },
    {
        "code": "300255",
        "name": "常山药业",
        "pinyin": "csyy",
        "market": "SZ"
    },
    {
        "code": "300969",
        "name": "恒帅股份",
        "pinyin": "hsgf",
        "market": "SZ"
    },
    {
        "code": "600113",
        "name": "浙江东日",
        "pinyin": "zjdr",
        "market": "SH"
    },
    {
        "code": "301600",
        "name": "慧翰股份",
        "pinyin": "hhgf",
        "market": "SZ"
    },
    {
        "code": "002290",
        "name": "禾盛新材",
        "pinyin": "hsxc",
        "market": "SZ"
    },
    {
        "code": "002768",
        "name": "国恩股份",
        "pinyin": "gegf",
        "market": "SZ"
    },
    {
        "code": "301165",
        "name": "锐捷网络",
        "pinyin": "rjwl",
        "market": "SZ"
    },
    {
        "code": "603256",
        "name": "宏和科技",
        "pinyin": "hhkj",
        "market": "SH"
    },
    {
        "code": "603009",
        "name": "北特科技",
        "pinyin": "btkj",
        "market": "SH"
    },
    {
        "code": "301468",
        "name": "博盈特焊",
        "pinyin": "byth",
        "market": "SZ"
    },
    {
        "code": "001226",
        "name": "拓山重工",
        "pinyin": "tszg",
        "market": "SZ"
    },
    {
        "code": "300014",
        "name": "亿纬锂能",
        "pinyin": "ywln",
        "market": "SZ"
    },
    {
        "code": "601231",
        "name": "环旭电子",
        "pinyin": "hxdz",
        "market": "SH"
    },
    {
        "code": "002995",
        "name": "天地在线",
        "pinyin": "tdzx",
        "market": "SZ"
    },
    {
        "code": "301333",
        "name": "诺思格",
        "pinyin": "nsg",
        "market": "SZ"
    },
    {
        "code": "600487",
        "name": "亨通光电",
        "pinyin": "htgd",
        "market": "SH"
    },
    {
        "code": "600345",
        "name": "长江通信",
        "pinyin": "cjtx",
        "market": "SH"
    },
    {
        "code": "002222",
        "name": "福晶科技",
        "pinyin": "fjkj",
        "market": "SZ"
    },
    {
        "code": "605003",
        "name": "众望布艺",
        "pinyin": "zwby",
        "market": "SH"
    },
    {
        "code": "002155",
        "name": "湖南黄金",
        "pinyin": "hnhj",
        "market": "SZ"
    },
    {
        "code": "603083",
        "name": "剑桥科技",
        "pinyin": "jqkj",
        "market": "SH"
    },
    {
        "code": "603059",
        "name": "倍加洁",
        "pinyin": "bjj",
        "market": "SH"
    },
    {
        "code": "603629",
        "name": "利通电子",
        "pinyin": "ltdz",
        "market": "SH"
    },
    {
        "code": "300672",
        "name": "国科微",
        "pinyin": "gkw",
        "market": "SZ"
    },
    {
        "code": "300835",
        "name": "龙磁科技",
        "pinyin": "lckj",
        "market": "SZ"
    },
    {
        "code": "003041",
        "name": "真爱美家",
        "pinyin": "zamj",
        "market": "SZ"
    },
    {
        "code": "301345",
        "name": "涛涛车业",
        "pinyin": "ttcy",
        "market": "SZ"
    },
    {
        "code": "603119",
        "name": "浙江荣泰",
        "pinyin": "zjrt",
        "market": "SH"
    },
    {
        "code": "300776",
        "name": "帝尔激光",
        "pinyin": "dejg",
        "market": "SZ"
    },
    {
        "code": "300347",
        "name": "泰格医药",
        "pinyin": "tgyy",
        "market": "SZ"
    },
    {
        "code": "301257",
        "name": "普蕊斯",
        "pinyin": "prs",
        "market": "SZ"
    },
    {
        "code": "603325",
        "name": "博隆技术",
        "pinyin": "bljs",
        "market": "SH"
    },
    {
        "code": "301086",
        "name": "鸿富瀚",
        "pinyin": "hfh",
        "market": "SZ"
    },
    {
        "code": "301488",
        "name": "豪恩汽电",
        "pinyin": "heqd",
        "market": "SZ"
    },
    {
        "code": "300274",
        "name": "阳光电源",
        "pinyin": "ygdy",
        "market": "SZ"
    },
    {
        "code": "603306",
        "name": "华懋科技",
        "pinyin": "hmkj",
        "market": "SH"
    },
    {
        "code": "605389",
        "name": "长龄液压",
        "pinyin": "clyy",
        "market": "SH"
    },
    {
        "code": "301336",
        "name": "趣睡科技",
        "pinyin": "qskj",
        "market": "SZ"
    },
    {
        "code": "301317",
        "name": "鑫磊股份",
        "pinyin": "xlgf",
        "market": "SZ"
    },
    {
        "code": "300863",
        "name": "卡倍亿",
        "pinyin": "kby",
        "market": "SZ"
    },
    {
        "code": "301377",
        "name": "鼎泰高科",
        "pinyin": "dtgk",
        "market": "SZ"
    },
    {
        "code": "301413",
        "name": "安培龙",
        "pinyin": "apl",
        "market": "SZ"
    },
    {
        "code": "301266",
        "name": "宇邦新材",
        "pinyin": "ybxc",
        "market": "SZ"
    },
    {
        "code": "301626",
        "name": "苏州天脉",
        "pinyin": "sztm",
        "market": "SZ"
    },
    {
        "code": "301489",
        "name": "思泉新材",
        "pinyin": "sqxc",
        "market": "SZ"
    },
    {
        "code": "300806",
        "name": "斯迪克",
        "pinyin": "sdk",
        "market": "SZ"
    },
    {
        "code": "301662",
        "name": "宏工科技",
        "pinyin": "hgkj",
        "market": "SZ"
    },
    {
        "code": "603391",
        "name": "力聚热能",
        "pinyin": "ljrn",
        "market": "SH"
    },
    {
        "code": "301611",
        "name": "珂玛科技",
        "pinyin": "kmkj",
        "market": "SZ"
    },
    {
        "code": "300223",
        "name": "北京君正",
        "pinyin": "bjjz",
        "market": "SZ"
    },
    {
        "code": "603929",
        "name": "亚翔集成",
        "pinyin": "yxjc",
        "market": "SH"
    },
    {
        "code": "301590",
        "name": "优优绿能",
        "pinyin": "yyln",
        "market": "SZ"
    },
    {
        "code": "300476",
        "name": "胜宏科技",
        "pinyin": "shkj",
        "market": "SZ"
    },
    {
        "code": "301235",
        "name": "华康洁净",
        "pinyin": "hkjj",
        "market": "SZ"
    },
    {
        "code": "605289",
        "name": "罗曼股份",
        "pinyin": "lmgf",
        "market": "SH"
    },
    {
        "code": "603986",
        "name": "兆易创新",
        "pinyin": "zycx",
        "market": "SH"
    },
    {
        "code": "001270",
        "name": "*ST铖昌",
        "pinyin": "*stcc",
        "market": "SZ"
    },
    {
        "code": "002837",
        "name": "英维克",
        "pinyin": "ywk",
        "market": "SZ"
    },
    {
        "code": "300548",
        "name": "长芯博创",
        "pinyin": "cxbc",
        "market": "SZ"
    },
    {
        "code": "605288",
        "name": "凯迪股份",
        "pinyin": "kdgf",
        "market": "SH"
    },
    {
        "code": "300750",
        "name": "宁德时代",
        "pinyin": "ndsd",
        "market": "SZ"
    },
    {
        "code": "300857",
        "name": "协创数据",
        "pinyin": "xcsj",
        "market": "SZ"
    },
    {
        "code": "603163",
        "name": "圣晖集成",
        "pinyin": "shjc",
        "market": "SH"
    },
    {
        "code": "301326",
        "name": "捷邦科技",
        "pinyin": "jbkj",
        "market": "SZ"
    },
    {
        "code": "300620",
        "name": "光库科技",
        "pinyin": "gkkj",
        "market": "SZ"
    },
    {
        "code": "301629",
        "name": "矽电股份",
        "pinyin": "xdgf",
        "market": "SZ"
    },
    {
        "code": "301396",
        "name": "宏景科技",
        "pinyin": "hjkj",
        "market": "SZ"
    },
    {
        "code": "603516",
        "name": "淳中科技",
        "pinyin": "czkj",
        "market": "SH"
    },
    {
        "code": "301183",
        "name": "东田微",
        "pinyin": "dtw",
        "market": "SZ"
    },
    {
        "code": "300731",
        "name": "科创新源",
        "pinyin": "kcxy",
        "market": "SZ"
    },
    {
        "code": "601869",
        "name": "长飞光纤",
        "pinyin": "cfgx",
        "market": "SH"
    },
    {
        "code": "300570",
        "name": "太辰光",
        "pinyin": "tcg",
        "market": "SZ"
    },
    {
        "code": "301205",
        "name": "联特科技",
        "pinyin": "ltkj",
        "market": "SZ"
    },
    {
        "code": "300394",
        "name": "天孚通信",
        "pinyin": "tftx",
        "market": "SZ"
    },
    {
        "code": "300502",
        "name": "新易盛",
        "pinyin": "xys",
        "market": "SZ"
    },
    {
        "code": "301486",
        "name": "致尚科技",
        "pinyin": "zskj",
        "market": "SZ"
    },
    {
        "code": "300308",
        "name": "中际旭创",
        "pinyin": "zjxc",
        "market": "SZ"
    },
    {
        "code": "300757",
        "name": "罗博特科",
        "pinyin": "lbtk",
        "market": "SZ"
    }
];
