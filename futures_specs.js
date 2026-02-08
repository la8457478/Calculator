// Futures products data
const futuresData = {
    // 贵金属
    'AU': { name: '黄金', code: 'AU', category: '贵金属', pointValue: 1000, tickSize: 0.02, unit: '元/克', multiplier: 1000 },
    'AG': { name: '白银', code: 'AG', category: '贵金属', pointValue: 15, tickSize: 1, unit: '元/千克', multiplier: 15 },
    'PT': { name: '铂', code: 'PT', category: '贵金属', pointValue: 1000, tickSize: 0.05, unit: '元/克', multiplier: 1000 },
    'PD': { name: '钯', code: 'PD', category: '贵金属', pointValue: 1000, tickSize: 0.05, unit: '元/克', multiplier: 1000 },

    // 有色金属
    'CU': { name: '铜', code: 'CU', category: '有色金属', pointValue: 5, tickSize: 10, unit: '元/吨', multiplier: 5 },
    'AL': { name: '铝', code: 'AL', category: '有色金属', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },
    'ZN': { name: '锌', code: 'ZN', category: '有色金属', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },
    'PB': { name: '铅', code: 'PB', category: '有色金属', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },
    'NI': { name: '镍', code: 'NI', category: '有色金属', pointValue: 1, tickSize: 10, unit: '元/吨', multiplier: 1 },
    'SN': { name: '锡', code: 'SN', category: '有色金属', pointValue: 1, tickSize: 10, unit: '元/吨', multiplier: 1 },
    'AO': { name: '氧化铝', code: 'AO', category: '有色金属', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'AD': { name: '铸造铝合金', code: 'AD', category: '有色金属', pointValue: 5, tickSize: 1, unit: '元/吨', multiplier: 5 },
    'BC': { name: '国际铜', code: 'BC', category: '有色金属', pointValue: 5, tickSize: 10, unit: '元/吨', multiplier: 5 },

    // 黑色系
    'RB': { name: '螺纹钢', code: 'RB', category: '黑色系', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'HC': { name: '热轧卷板', code: 'HC', category: '黑色系', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'SS': { name: '不锈钢', code: 'SS', category: '黑色系', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },
    'WR': { name: '线材', code: 'WR', category: '黑色系', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'I': { name: '铁矿石', code: 'I', category: '黑色系', pointValue: 100, tickSize: 0.5, unit: '元/吨', multiplier: 100 },
    'JM': { name: '焦煤', code: 'JM', category: '黑色系', pointValue: 60, tickSize: 0.5, unit: '元/吨', multiplier: 60 },
    'J': { name: '焦炭', code: 'J', category: '黑色系', pointValue: 100, tickSize: 1, unit: '元/吨', multiplier: 100 },
    'SF': { name: '硅铁', code: 'SF', category: '黑色系', pointValue: 5, tickSize: 2, unit: '元/吨', multiplier: 5 },
    'SM': { name: '锰硅', code: 'SM', category: '黑色系', pointValue: 5, tickSize: 2, unit: '元/吨', multiplier: 5 },

    // 化工
    'RU': { name: '天然橡胶', code: 'RU', category: '化工', pointValue: 10, tickSize: 5, unit: '元/吨', multiplier: 10 },
    'SP': { name: '纸浆', code: 'SP', category: '化工', pointValue: 10, tickSize: 2, unit: '元/吨', multiplier: 10 },
    'OP': { name: '双胶纸', code: 'OP', category: '化工', pointValue: 16, tickSize: 5, unit: '元/吨', multiplier: 16 },
    'BR': { name: '丁二烯橡胶', code: 'BR', category: '化工', pointValue: 10, tickSize: 5, unit: '元/吨', multiplier: 10 },
    'NR': { name: '20号胶', code: 'NR', category: '化工', pointValue: 10, tickSize: 5, unit: '元/吨', multiplier: 10 },
    'L': { name: '聚乙烯', code: 'L', category: '化工', pointValue: 5, tickSize: 1, unit: '元/吨', multiplier: 5 },
    'PP': { name: '聚丙烯', code: 'PP', category: '化工', pointValue: 5, tickSize: 1, unit: '元/吨', multiplier: 5 },
    'V': { name: '聚氯乙烯', code: 'V', category: '化工', pointValue: 5, tickSize: 1, unit: '元/吨', multiplier: 5 },
    'EG': { name: '乙二醇', code: 'EG', category: '化工', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'EB': { name: '苯乙烯', code: 'EB', category: '化工', pointValue: 5, tickSize: 1, unit: '元/吨', multiplier: 5 },
    'PG': { name: '液化石油气', code: 'PG', category: '化工', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'MA': { name: '甲醇', code: 'MA', category: '化工', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'TA': { name: 'PTA', code: 'TA', category: '化工', pointValue: 5, tickSize: 2, unit: '元/吨', multiplier: 5 },
    'PF': { name: '短纤', code: 'PF', category: '化工', pointValue: 5, tickSize: 2, unit: '元/吨', multiplier: 5 },
    'FG': { name: '玻璃', code: 'FG', category: '化工', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'SA': { name: '纯碱', code: 'SA', category: '化工', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'UR': { name: '尿素', code: 'UR', category: '化工', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'PX': { name: '对二甲苯', code: 'PX', category: '化工', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },

    // 能源
    'SC': { name: '原油', code: 'SC', category: '能源', pointValue: 1000, tickSize: 0.1, unit: '元/桶', multiplier: 1000 },
    'FU': { name: '燃料油', code: 'FU', category: '能源', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'BU': { name: '石油沥青', code: 'BU', category: '能源', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'LU': { name: '低硫燃料油', code: 'LU', category: '能源', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },

    // 农产品
    'A': { name: '黄大豆1号', code: 'A', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'B': { name: '黄大豆2号', code: 'B', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'C': { name: '玉米', code: 'C', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'CS': { name: '玉米淀粉', code: 'CS', category: '农产品', pointValue: 10, tickSize: 0.5, unit: '元/吨', multiplier: 10 },
    'M': { name: '豆粕', code: 'M', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'Y': { name: '豆油', code: 'Y', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'P': { name: '棕榈油', code: 'P', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'JD': { name: '鸡蛋', code: 'JD', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/500kg', multiplier: 10 },
    'LH': { name: '生猪', code: 'LH', category: '农产品', pointValue: 16, tickSize: 5, unit: '元/吨', multiplier: 16 },
    'SR': { name: '白糖', code: 'SR', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'CF': { name: '棉花', code: 'CF', category: '农产品', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },
    'CY': { name: '棉纱', code: 'CY', category: '农产品', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },
    'WH': { name: '强麦', code: 'WH', category: '农产品', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'PM': { name: '普麦', code: 'PM', category: '农产品', pointValue: 50, tickSize: 1, unit: '元/吨', multiplier: 50 },
    'RI': { name: '早籼稻', code: 'RI', category: '农产品', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'LR': { name: '晚籼稻', code: 'LR', category: '农产品', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'JR': { name: '粳稻', code: 'JR', category: '农产品', pointValue: 20, tickSize: 1, unit: '元/吨', multiplier: 20 },
    'PK': { name: '花生', code: 'PK', category: '农产品', pointValue: 5, tickSize: 2, unit: '元/吨', multiplier: 5 },
    'OI': { name: '菜籽油', code: 'OI', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'RS': { name: '菜籽', code: 'RS', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'RM': { name: '菜粕', code: 'RM', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'AP': { name: '苹果', code: 'AP', category: '农产品', pointValue: 10, tickSize: 1, unit: '元/吨', multiplier: 10 },
    'JZ': { name: '红枣', code: 'JZ', category: '农产品', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },

    // 新能源
    'SI': { name: '工业硅', code: 'SI', category: '新能源', pointValue: 5, tickSize: 5, unit: '元/吨', multiplier: 5 },
    'LC': { name: '碳酸锂', code: 'LC', category: '新能源', pointValue: 1, tickSize: 20, unit: '元/吨', multiplier: 1 },
    'PS': { name: '多晶硅', code: 'PS', category: '新能源', pointValue: 3, tickSize: 5, unit: '元/吨', multiplier: 3 },

    // 其他
    'EC': { name: '集运欧线', code: 'EC', category: '其他', pointValue: 100, tickSize: 0.5, unit: '点', multiplier: 100 }
};

const categoryOrder = ['贵金属', '黑色系', '有色金属', '化工', '能源', '农产品', '新能源', '其他'];
