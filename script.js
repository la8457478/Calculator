// Dictionary & Logic
const TRANSLATIONS = {
    zh: {
        appTitle: "股票/期货交易计算器",
        appSubtitle: "专业的仓位管理与止损止盈计算工具",
        tabCalc: "🖥️ 计算器",
        tabHistory: "📝 历史记录",
        tabPositions: "📊 持仓管理",
        resetBtn: "清空数据并重置",

        // Form Labels
        calcTitle: "交易计划计算器",
        modeFutures: "期货模式",
        modeStock: "股票模式",
        stockLabel: "股票代码",
        phStockSearch: "搜索股票代码/名称/拼音...",
        productLabel: "期货品种",
        phSearch: "搜索或选择期货品种...",
        entryLabel: "买入价格",
        stopLabel: "止损价格",
        lblRiskAmount: "最大风险金额",

        // List Headers
        sectHistory: "📜 计算历史",
        actClearAll: "清空全部",
        sectPositions: "📊 持仓管理",
        btnAddPosition: "+ 手动添加",

        // Dynamic Items (Used in Renderers)
        lblBuy: "买入",
        lblStop: "止损",
        lblRisk: "风险",
        lblTarget1: "1:1平衡",
        lblTarget3: "3:1止盈",
        lblShares: "建议股数",
        lblContracts: "建议手数",
        lblOpened: "持仓中",
        lblClosed: "已平仓",
        actClose: "平仓",
        actDelete: "删除",
        emptyHistory: "暂无计算记录",
        emptyPositions: "暂无持仓记录",
        emptyTip: "完成计算后点击\"保存为持仓\"按钮添加",

        // Errors & Messages
        errInput: "请输入数据以计算仓位",
        errProduct: "请选择期货品种",
        errPrice: "错误：开仓价格不能等于止损价格",
        msgFixInput: "请修正输入数据",

        // Results
        lblDirection: "方向",
        dirLong: "做多",
        dirShort: "做空",
        resPositionSize: "建议仓位",
        resContracts: "手",
        resShares: "股",
        resRiskAmount: "实际风险",
        resTarget1: "1:1 平衡点",
        resTarget3: "3:1 止盈点",
        resMargin: "预估保证金",
        btnSavePosition: "保存为持仓"
    },
    en: {
        appTitle: "Trading Calculator",
        appSubtitle: "Professional Position Sizing & Risk Management",
        tabCalc: "🖥️ Calculator",
        tabHistory: "📝 History",
        tabPositions: "📊 Positions",
        resetBtn: "Reset Data",

        // Form Labels
        calcTitle: "Trading Plan Calculator",
        modeFutures: "Futures Mode",
        modeStock: "Stock Mode",
        stockLabel: "Stock Symbol",
        phStockSearch: "Search Stock/Name...",
        productLabel: "Product",
        phSearch: "Search or select product...",
        entryLabel: "Entry Price",
        stopLabel: "Stop Loss",
        lblRiskAmount: "Max Risk Amount",

        // List Headers
        sectHistory: "📜 Calculation History",
        actClearAll: "Clear All",
        sectPositions: "📊 Position Management",
        btnAddPosition: "+ Add Manual",

        // Dynamic Items
        lblBuy: "Entry",
        lblStop: "Stop",
        lblRisk: "Risk",
        lblTarget1: "1:1 Target",
        lblTarget3: "3:1 Target",
        lblShares: "Shares",
        lblContracts: "Contracts",
        lblOpened: "Open",
        lblClosed: "Closed",
        actClose: "Close",
        actDelete: "Delete",
        emptyHistory: "No History Records",
        emptyPositions: "No Positions",
        emptyTip: "Calculate and click Save to add",

        // Errors & Messages
        errInput: "Enter data to calculate",
        errProduct: "Select Product",
        errPrice: "Entry cannot equal Stop Loss",
        msgFixInput: "Fix Input Data",

        // Results
        lblDirection: "Direction",
        dirLong: "Long",
        dirShort: "Short",
        resPositionSize: "Position Size",
        resContracts: "Contracts",
        resShares: "Shares",
        resRiskAmount: "Actual Risk",
        resTarget1: "1:1 Break-Even",
        resTarget3: "3:1 Target",
        resMargin: "Est. Margin",
        btnSavePosition: "Save Position"
    }
};

let currentLang = localStorage.getItem('appLang') || 'zh';

// Helper to get text
function t(key) {
    if (!TRANSLATIONS[currentLang]) return key;
    return TRANSLATIONS[currentLang][key] || key;
}

function updateContent() {
    const dict = TRANSLATIONS[currentLang];

    // Update static elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });


    // Re-render lists if they exist
    if (typeof renderHistoryList === 'function' && document.getElementById('historyList')) renderHistoryList();
    if (typeof renderPositionsList === 'function' && document.getElementById('positionsListMain')) renderPositionsList();

    // Re-calculate if on calculator page
    if (typeof calculatePosition === 'function' && document.getElementById('buyPrice1')) calculatePosition();
}

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

// Global State
let currentMode = 'stock';
let selectedFuturesProduct = null;
let selectedStock = null;
let lastCalculation = null;

// ===== LocalStorage Management =====
const STORAGE_KEYS = {
    HISTORY: 'calculator_history',
    POSITIONS: 'calculator_positions'
};
const MAX_HISTORY = 50;

function saveHistory(record) {
    try {
        let history = getHistory();
        history.unshift(record);
        if (history.length > MAX_HISTORY) {
            history = history.slice(0, MAX_HISTORY);
        }
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
        if (document.getElementById('historyList')) renderHistoryList();
    } catch (e) {
        console.error('Failed to save history:', e);
    }
}

function getHistory() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
        const parsed = data ? JSON.parse(data) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error('Failed to load history:', e);
        return [];
    }
}

function deleteHistory(id) {
    try {
        let history = getHistory();
        history = history.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
        renderHistoryList();
    } catch (e) {
        console.error('Failed to delete history:', e);
    }
}

function getPositions() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.POSITIONS);
        const parsed = data ? JSON.parse(data) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error('Failed to load positions:', e);
        return [];
    }
}

function updatePosition(id, updates) {
    try {
        let positions = getPositions();
        const index = positions.findIndex(p => p.id === id);
        if (index !== -1) {
            positions[index] = { ...positions[index], ...updates };
            localStorage.setItem(STORAGE_KEYS.POSITIONS, JSON.stringify(positions));
            renderPositionsList();
        }
    } catch (e) {
        console.error('Failed to update position:', e);
    }
}

// ===== Utility Functions =====
function formatNumber(num, maxDecimals = 2) {
    if (num === null || num === undefined || isNaN(num)) return '-';
    const val = parseFloat(num.toFixed(maxDecimals));
    return val.toLocaleString('en-US', { maximumFractionDigits: maxDecimals });
}

function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${month}-${day} ${hours}:${minutes}`;
}

// ===== History Rendering =====
function renderHistoryList() {
    const container = document.getElementById('historyList');
    if (!container) return;

    const history = getHistory();

    if (history.length === 0) {
        container.innerHTML = `
            <div class="empty-state-large">
                <div class="empty-state-large-icon">📭</div>
                <p>${t('emptyHistory')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = history.map(item => {
        try {
            const results = item.results || {};
            const modeLabel = item.mode === 'stock' ? t('modeStock') : t('modeFutures');
            const productLabel = item.productName ? ` · ${item.productName}` : '';
            const typeLabel = item.type === 'long' ? t('dirLong') : t('dirShort'); // Assuming long for now if not specified. Actual logic determines direction.
            // Wait, history item 'type' is 'position'. Calculation direction is dynamic.
            // Let's re-derive direction label if possible or just use Generic.
            // Better: use stored inputs.
            const isLong = item.inputs.buyPrice > item.inputs.stopLoss;
            const dirLabel = isLong ? t('dirLong') : t('dirShort');

            const buy = item.inputs.buyPrice;
            const stop = item.inputs.stopLoss;
            const risk = item.inputs.riskAmount;
            const target1 = results.profitTarget1_1 || item.profitTarget1_1 || results.breakEvenPrice || 0;
            const target3 = results.profitTarget || item.profitTarget || 0;

            let detailsHTML = `
                <div class="history-detail">${t('lblBuy')}: <strong>${formatNumber(buy)}</strong></div>
                <div class="history-detail">${t('lblStop')}: <strong>${formatNumber(stop)}</strong></div>
                <div class="history-detail">${t('lblRisk')}: <strong>${formatNumber(risk)}</strong></div>
                <div class="history-detail">${t('lblTarget1')}: <strong>${formatNumber(target1)}</strong></div>
                <div class="history-detail">${t('lblTarget3')}: <strong>${formatNumber(target3)}</strong></div>
                ${item.mode === 'stock' ?
                    `<div class="history-detail">${t('lblShares')}: <strong>${formatNumber(results.shares || item.shares, 0)}</strong></div>` :
                    `<div class="history-detail">${t('lblContracts')}: <strong>${formatNumber(results.contracts || item.contracts, 0)}</strong></div>`
                }
            `;

            return `
                <div class="history-item">
                    <div class="history-item-header">
                        <div class="history-item-title">${dirLabel} · ${modeLabel}${productLabel}</div>
                        <div style="display: flex; gap: 12px; align-items: center;">
                            <div class="history-item-time">${formatDateTime(item.timestamp)}</div>
                            <button class="delete-history-btn" onclick="deleteHistory(${item.id})">${t('actDelete')}</button>
                        </div>
                    </div>
                    <div class="history-item-details">
                        ${detailsHTML}
                    </div>
                </div>
            `;
        } catch (e) {
            console.error('Render error:', e);
            return '';
        }
    }).join('');
}

// ===== Position Rendering =====
function renderPositionsList() {
    const container = document.getElementById('positionsListMain');
    if (!container) return;

    const allPositions = getPositions();
    let positions = allPositions.filter(p => p && typeof p === 'object' && p.id);

    // Filter by User
    if (typeof currentFilterUser !== 'undefined' && currentFilterUser !== 'all') {
        positions = positions.filter(p => p.user === currentFilterUser);
    }

    container.innerHTML = '';

    if (positions.length === 0) {
        container.innerHTML = `
            <div class="empty-state-large">
                <div class="empty-state-large-icon">📈</div>
                <p>${t('emptyPositions')}</p>
                <p style="font-size: 0.875rem; margin-top: 8px;">For ${currentFilterUser === 'all' ? 'All Users' : (currentFilterUser === 'liuan' ? 'Liu An' : 'Kang Ge')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = positions.map(pos => {
        try {
            const isClosed = pos.status === 'closed';
            const profitClass = pos.profit > 0 ? 'positive' : pos.profit < 0 ? 'negative' : '';
            const targetPrice = pos.profitTarget || pos.targetPrice || 0;
            const statusLabel = isClosed ? t('lblClosed') : t('lblOpened');
            const unitSuffix = pos.mode === 'stock' ? (currentLang === 'zh' ? '股' : 'Shares') : (currentLang === 'zh' ? '手' : 'Lots');

            return `
                <div class="position-card ${isClosed ? 'closed' : ''}">
                    <div class="position-header">
                        <div class="position-product">${pos.productName || 'Unknown Product'}</div>
                        <div class="position-status ${pos.status}">${statusLabel}</div>
                    </div>
                    <div class="position-details">
                        <div class="position-detail-row">
                            <span class="position-detail-label">${t('lblBuy')}</span>
                            <span class="position-detail-value">${formatNumber(pos.buyPrice)}</span>
                        </div>
                        <div class="position-detail-row">
                            <span class="position-detail-label">${t('lblStop')}</span>
                            <span class="position-detail-value">${formatNumber(pos.stopLoss)}</span>
                        </div>
                        <div class="position-detail-row">
                            <span class="position-detail-label">${t('lblTarget3')}</span>
                            <span class="position-detail-value">${formatNumber(targetPrice)}</span>
                        </div>
                        <div class="position-detail-row">
                            <span class="position-detail-label">${t('lblQuantity')}</span>
                            <span class="position-detail-value">${pos.quantity} ${unitSuffix}</span>
                        </div>
                        ${isClosed ? `
                            <div class="position-detail-row">
                                <span class="position-detail-label">${t('lblClosePrice')}</span>
                                <span class="position-detail-value">${formatNumber(pos.closePrice)}</span>
                            </div>
                        ` : ''}
                    </div>
                    ${isClosed && pos.profit !== null ? `
                        <div class="position-profit ${profitClass}">
                            ${pos.profit > 0 ? '+' : ''}${formatNumber(pos.profit)}
                        </div>
                    ` : ''}
                    <div class="position-actions">
                        ${!isClosed ? `
                            <button class="position-btn close-position-btn" onclick="closePosition(${pos.id})">${t('actClose')}</button>
                        ` : ''}
                        <button class="position-btn delete-position-btn" onclick="deletePositionObj(${pos.id})">${t('actDelete')}</button>
                    </div>
                </div>
            `;
        } catch (e) {
            console.error('Render Error:', e);
            return `<div class="position-card error">
                <div class="position-header"><div class="position-product">⚠️ Data Error</div></div>
                <div class="position-details">Item ID: ${pos.id || 'Unknown'}</div>
            </div>`;
        }
    }).join('');
}

// Renaming deletePosition to deletePositionObj to avoid naming conflict with history deletion if any
// Actually, `deletePosition` was used in `script.js` before.
function deletePositionObj(id) {
    showModal(
        '⚠️',
        t('actDelete'),
        '<p style="color: var(--text-secondary);">Confirm Delete?</p>',
        [
            { label: t('actDelete'), primary: true, onclick: `confirmDeletePositionObj(${id})` },
            { label: 'Cancel', primary: false, onclick: 'hideModal()' }
        ]
    );
}

function confirmDeletePositionObj(id) {
    try {
        let positions = getPositions();
        positions = positions.filter(p => p.id !== id);
        localStorage.setItem(STORAGE_KEYS.POSITIONS, JSON.stringify(positions));
        renderPositionsList();
        hideModal();
    } catch (e) {
        console.error('Failed to delete position:', e);
    }
}


function closePosition(id) {
    const positions = getPositions();
    const position = positions.find(p => p.id === id);
    if (!position) return;

    showModal(
        t('actClose'),
        `${position.productName}`,
        `
            <div class="modal-input-group">
                <label class="modal-label">${t('lblClosePrice')}</label>
                <input type="number" id="closePrice" class="modal-input" placeholder="Price" step="0.01" autofocus>
            </div>
        `,
        [
            { label: 'Cancel', primary: false, onclick: 'hideModal()' },
            { label: 'Confirm', primary: true, onclick: `confirmClosePosition(${id})` }
        ]
    );
    setTimeout(() => {
        document.getElementById('closePrice')?.focus();
    }, 100);
}

function confirmClosePosition(id) {
    const closePriceInput = document.getElementById('closePrice');
    const price = parseFloat(closePriceInput.value);

    if (isNaN(price) || price <= 0) {
        showToast(t('msgFixInput'), 'error');
        return;
    }

    const positions = getPositions();
    const position = positions.find(p => p.id === id);
    if (!position) return;

    let profit = 0;
    if (position.mode === 'stock') {
        profit = (price - position.buyPrice) * position.quantity;
    } else {
        const product = futuresData[position.futuresProduct];
        if (product) {
            const priceDiff = price - position.buyPrice;
            // Long or Short? we need direction.
            // If we don't have direction stored, we assume long? 
            // Wait, `confirmSavePosition` stores `buyPrice` and `stopLoss`.
            const isLong = position.buyPrice > position.stopLoss;
            const directionM = isLong ? 1 : -1;

            // Profit = (Exit - Entry) * Direction * Quantity * Multiplier ?
            // If Long: (Price - Buy) 
            // If Short: (Buy - Price) -> which is -(Price - Buy)
            // So: (Price - Buy) * DirectionMultiplier

            const diff = (price - position.buyPrice) * directionM;
            const ticks = diff / product.tickSize;
            const tickValue = product.tickSize * product.multiplier;
            profit = ticks * tickValue * position.quantity;
        }
    }

    updatePosition(id, {
        status: 'closed',
        closeTime: new Date().toISOString(),
        closePrice: price,
        profit: profit
    });

    hideModal();
    showToast('Closed', 'success');
}


// ===== Calculation Logic =====
function calculatePosition() {
    const buyInput = document.getElementById('buyPrice1');
    const stopInput = document.getElementById('stopLoss1');
    const riskInput = document.getElementById('riskAmount');
    const result1 = document.getElementById('result1');
    const error1 = document.getElementById('error1');

    if (!buyInput || !stopInput || !riskInput) return; // Not on calculator page

    const buy = parseFloat(buyInput.value);
    const stop = parseFloat(stopInput.value);
    const risk = parseFloat(riskInput.value);

    error1.classList.remove('show');

    if (!buy || !stop || !risk) {
        result1.innerHTML = `<div class="empty-state"><p>${t('errInput')}</p></div>`;
        result1.classList.remove('has-result');
        return;
    }

    if (currentMode === 'futures' && !selectedFuturesProduct) {
        error1.textContent = t('errProduct');
        error1.classList.add('show');
        return;
    }

    if (buy === stop) {
        error1.textContent = t('errPrice');
        error1.classList.add('show');
        return;
    }

    const isLong = buy > stop;
    const directionMultiplier = isLong ? 1 : -1;
    const directionLabel = isLong ? t('dirLong') : t('dirShort');
    const priceDiff = Math.abs(buy - stop);

    // Calculation logic...
    // (Simulating exact logic from before)

    let contracts = 0;
    let shares = 0;
    let actualRisk = 0;
    let totalVal = 0; // Margin or Investment
    let projected = 0;
    let target1 = 0;
    let target3 = 0;

    if (currentMode === 'futures' && selectedFuturesProduct) {
        const riskPerPoint = priceDiff / selectedFuturesProduct.tickSize;
        const valuePerTick = selectedFuturesProduct.tickSize * selectedFuturesProduct.multiplier;
        const riskPerContract = riskPerPoint * valuePerTick;
        contracts = Math.floor(risk / riskPerContract);
        totalVal = contracts * buy * selectedFuturesProduct.multiplier * 0.1;
        actualRisk = contracts * riskPerContract;
        target1 = buy + (priceDiff * directionMultiplier);
        target3 = buy + (priceDiff * 3 * directionMultiplier);
        projected = contracts * (riskPerContract * 3);

        lastCalculation = {
            type: 'position', mode: 'futures', futuresProduct: selectedFuturesProduct.code,
            inputs: { buyPrice: buy, stopLoss: stop, riskAmount: risk },
            results: { contracts, totalMargin: totalVal, actualRisk, profitTarget: target3, profitTarget1_1: target1 }
        };

        result1.innerHTML = `
            <div class="result-item"><span class="result-label">${t('lblDirection')}</span><span class="result-value" style="color:${isLong ? '#22c55e' : '#ef4444'}">${directionLabel}</span></div>
            <div class="result-item"><span class="result-label">${t('resPositionSize')}</span><span class="result-value highlight">${contracts} ${t('resContracts')}</span></div>
            <div class="result-item"><span class="result-label">${t('resRiskAmount')}</span><span class="result-value">${formatNumber(actualRisk)}</span></div>
            <div style="border-top:1px solid #334; margin:8px 0"></div>
            <div class="result-item"><span class="result-label">${t('resTarget1')}</span><span class="result-value">${formatNumber(target1)}</span></div>
            <div class="result-item"><span class="result-label">${t('resTarget3')}</span><span class="result-value highlight">${formatNumber(target3)}</span></div>
            <div class="result-item"><span class="result-label">${t('resMargin')}</span><span class="result-value">${formatNumber(totalVal)}</span></div>
            <button class="save-position-btn" onclick="saveCalculationAsPosition()">💾 ${t('btnSavePosition')}</button>
        `;

    } else {
        const maxShares = Math.floor(risk / priceDiff);
        shares = Math.floor(maxShares / 100) * 100;
        totalVal = shares * buy;
        actualRisk = shares * priceDiff;
        target1 = buy + (priceDiff * directionMultiplier);
        target3 = buy + (priceDiff * 3 * directionMultiplier);

        lastCalculation = {
            type: 'position', mode: 'stock',
            inputs: { buyPrice: buy, stopLoss: stop, riskAmount: risk },
            results: { shares, totalInvestment: totalVal, actualRisk, profitTarget: target3, profitTarget1_1: target1 }
        };

        if (selectedStock) {
            lastCalculation.stockCode = selectedStock.code;
            lastCalculation.stockName = selectedStock.name;
        }

        result1.innerHTML = `
            <div class="result-item"><span class="result-label">${t('lblDirection')}</span><span class="result-value" style="color:${isLong ? '#22c55e' : '#ef4444'}">${directionLabel}</span></div>
            <div class="result-item"><span class="result-label">${t('resPositionSize')}</span><span class="result-value highlight">${shares} ${t('resShares')}</span></div>
            <div class="result-item"><span class="result-label">${t('resRiskAmount')}</span><span class="result-value">${formatNumber(actualRisk)}</span></div>
            <div style="border-top:1px solid #334; margin:8px 0"></div>
            <div class="result-item"><span class="result-label">${t('resTarget1')}</span><span class="result-value">${formatNumber(target1)}</span></div>
            <div class="result-item"><span class="result-label">${t('resTarget3')}</span><span class="result-value highlight">${formatNumber(target3)}</span></div>
             <div class="result-item"><span class="result-label">Total</span><span class="result-value">${formatNumber(totalVal)}</span></div>
            <button class="save-position-btn" onclick="saveCalculationAsPosition()">💾 ${t('btnSavePosition')}</button>
        `;
    }
    result1.classList.add('has-result');

    // Auto save history
    saveHistory({ id: Date.now(), ...lastCalculation, timestamp: Date.now() });
}

let currentFilterUser = 'all';

function filterPositions(user, btn) {
    currentFilterUser = user;
    // Update active tab UI
    if (btn) {
        document.querySelectorAll('.user-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    renderPositionsList();
}

function saveCalculationAsPosition() {
    if (!lastCalculation) return;
    const unit = lastCalculation.mode === 'stock' ? '股' : '手';
    let name = lastCalculation.futuresProduct;
    if (lastCalculation.mode === 'stock') {
        name = lastCalculation.stockName ? `${lastCalculation.stockName} (${lastCalculation.stockCode})` : 'Stock';
    } else {
        name = futuresData[lastCalculation.futuresProduct]?.name || lastCalculation.futuresProduct;
    }

    const results = lastCalculation.results || {};
    const defaultQty = lastCalculation.mode === 'stock' ? (results.shares || '') : (results.contracts || '');

    const userSelectHTML = `
        <div class="modal-input-group">
            <label class="modal-label">User</label>
            <div style="display: flex; gap: 15px; margin-top: 5px;">
                <label style="display: flex; align-items: center; gap: 5px;">
                    <input type="radio" name="posUser" value="liuan" checked> 刘安
                </label>
                <label style="display: flex; align-items: center; gap: 5px;">
                    <input type="radio" name="posUser" value="kangge"> 康哥
                </label>
            </div>
        </div>
    `;

    showModal(
        t('btnSavePosition'),
        `${name} @ ${lastCalculation.inputs.buyPrice}`,
        `
        <div class="modal-input-group"><label class="modal-label">${t('lblQuantity')}</label><input id="posQty" class="modal-input" type="number" placeholder="${unit}" value="${defaultQty}"></div>
        ${userSelectHTML}
        `,
        [
            { label: 'Cancel', onclick: 'hideModal()' },
            { label: 'Save', primary: true, onclick: 'confirmSavePosition()' }
        ]
    );
}

function confirmSavePosition() {
    if (!lastCalculation) return;
    const qtyInput = document.getElementById('posQty');
    const qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty <= 0) return;

    // Get selected user
    const userRadios = document.getElementsByName('posUser');
    let selectedUser = 'liuan'; // Default
    for (const radio of userRadios) {
        if (radio.checked) {
            selectedUser = radio.value;
            break;
        }
    }

    const pos = {
        id: Date.now(),
        // ... existing properties
        mode: lastCalculation.mode,
        futuresProduct: lastCalculation.futuresProduct,
        stockCode: lastCalculation.stockCode,
        stockName: lastCalculation.stockName,
        productName: lastCalculation.mode === 'stock' ? (lastCalculation.stockName || 'Stock') : (futuresData[lastCalculation.futuresProduct]?.name || lastCalculation.futuresProduct),
        buyPrice: lastCalculation.inputs.buyPrice,
        stopLoss: lastCalculation.inputs.stopLoss,
        targetPrice: lastCalculation.results.profitTarget,
        quantity: qty,
        status: 'open',
        user: selectedUser, // Save User
        openTime: new Date().toISOString(),
        closeTime: null, closePrice: null, profit: null
    };

    try {
        const list = getPositions();
        list.unshift(pos);
        localStorage.setItem(STORAGE_KEYS.POSITIONS, JSON.stringify(list));
        hideModal();
        showToast('Saved', 'success');
    } catch (e) { console.error(e); }
}

function switchMode(mode, btn) {
    currentMode = mode;
    document.querySelectorAll('.mode-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const futuresGroup = document.getElementById('futuresProductGroup');
    const stockGroup = document.getElementById('stockProductGroup');

    if (futuresGroup) futuresGroup.style.display = mode === 'futures' ? 'block' : 'none';
    if (stockGroup) stockGroup.style.display = mode === 'stock' ? 'block' : 'none';

    if (typeof calculatePosition === 'function') calculatePosition();
}

// ===== UI Logic =====
function showModal(title, subtitle, body, actions) {
    const overlay = document.getElementById('modalOverlay');
    if (!overlay) return;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSubtitle').textContent = subtitle;
    document.getElementById('modalBody').innerHTML = body;
    document.getElementById('modalActions').innerHTML = actions.map(a =>
        `<button class="modal-btn ${a.primary ? 'modal-btn-primary' : 'modal-btn-secondary'}" onclick="${a.onclick}">${a.label}</button>`
    ).join('');
    overlay.classList.add('show');
}
function hideModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.classList.remove('show');
}
function showToast(msg, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<div class="toast-message">${msg}</div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Global Reset
function globalReset() {
    if (confirm('Reset All Data?')) {
        localStorage.clear();
        location.reload();
    }
}

function initSearchableSelect(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    // ... Simplified init logic for futures select ...
    const input = wrapper.querySelector('.search-input');
    const dropdown = wrapper.querySelector('.options-dropdown');
    const hidden = wrapper.querySelector('input[type=hidden]');

    // Build options
    let html = '';
    Object.values(futuresData).forEach(item => {
        html += `<div class="option-item" onclick="selectFuture('${item.code}', '${wrapperId}')">${item.name} (${item.code})</div>`;
    });
    dropdown.innerHTML = html;

    input.addEventListener('focus', () => dropdown.classList.add('show'));
    input.addEventListener('blur', () => setTimeout(() => dropdown.classList.remove('show'), 200));
    input.addEventListener('input', (e) => {
        // simplified filtering check
    });
}

function selectFuture(code, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    const item = futuresData[code];
    wrapper.querySelector('.search-input').value = item.name;
    const hidden = wrapper.querySelector('input[type=hidden]');
    hidden.value = code;

    // Trigger logic
    selectedFuturesProduct = item;
    if (typeof calculatePosition === 'function') calculatePosition();
}

function initStockSelect(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;

    const input = wrapper.querySelector('.search-input');
    const dropdown = wrapper.querySelector('.options-dropdown');
    const hidden = wrapper.querySelector('input[type=hidden]');

    function renderOptions(data) {
        if (data.length === 0) {
            dropdown.innerHTML = '<div class="no-result">No results</div>';
            return;
        }
        let html = '';
        // Limit to 50 results for performance
        data.slice(0, 50).forEach(item => {
            html += `<div class="option-item" onclick="selectStock('${item.code}')">
                <span class="stock-name">${item.name}</span>
                <span class="stock-code">${item.code}</span>
            </div>`;
        });
        dropdown.innerHTML = html;
    }

    renderOptions(stockList); // Initial render (full list or partial)

    input.addEventListener('focus', () => dropdown.classList.add('show'));

    // Delay blur to allow click
    input.addEventListener('blur', () => setTimeout(() => dropdown.classList.remove('show'), 200));

    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        if (!val) {
            renderOptions(stockList);
            return;
        }
        const filtered = stockList.filter(item =>
            item.code.includes(val) ||
            item.name.includes(val) ||
            (item.pinyin && item.pinyin.includes(val))
        );
        renderOptions(filtered);
        dropdown.classList.add('show');
    });
}

function selectStock(code) {
    const item = stockList.find(s => s.code === code);
    if (!item) return;

    const wrapper = document.getElementById('stockSelect1');
    wrapper.querySelector('.search-input').value = `${item.name} (${item.code})`;
    document.getElementById('stockCode').value = code;
    selectedStock = item;
}


document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    if (document.getElementById('futuresSelect1')) initSearchableSelect('futuresSelect1');
    if (document.getElementById('stockSelect1')) initStockSelect('stockSelect1');

    // Bind calculator events
    const buys = document.querySelectorAll('#buyPrice1, #stopLoss1, #riskAmount');
    buys.forEach(el => el.addEventListener('input', calculatePosition));
});
