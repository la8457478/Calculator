const fs = require('fs');

// 读取并解析 futures_data.js
const content = fs.readFileSync('./futures_data.js', 'utf-8');
const match = content.match(/const FUTURES_DATA = ({[\s\S]*?});/);

if (!match) {
    console.log("ERROR: 找不到 FUTURES_DATA");
    process.exit(1);
}

const FUTURES_DATA = eval('(' + match[1] + ')');

console.log("=".repeat(80));
console.log("📊 扫描所有期货商品 - 3根K线 Pending 形态分析");
console.log("=".repeat(80));
console.log();

const pendingLong = [];
const pendingShort = [];
const activeLong = [];
const activeShort = [];

for (const [code, future] of Object.entries(FUTURES_DATA)) {
    if (!future.main || !future.main.data || future.main.data.length < 3) {
        continue;
    }

    const bars = future.main.data;
    const w1 = bars[bars.length - 3];  // 起点
    const w2 = bars[bars.length - 2];  // Peak/Trough
    const w3 = bars[bars.length - 1];  // Current

    const name = future.name || code;
    const symbol = future.main.symbol || 'N/A';

    // Pending Long规则 (4个条件)
    const cond1Long = w2.high > w1.high;
    const cond2Long = w3.close > w1.low;
    const cond3Long = w3.close <= w2.high;
    const cond4Long = w3.high < w2.high;  // 新增: w3确实回调
    const isPendingLong = cond1Long && cond2Long && cond3Long && cond4Long;

    // Active Long
    const isActiveLong = (w2.high > w1.high) && (w3.close > w2.high);

    // Pending Short规则 (4个条件)
    const cond1Short = w2.low < w1.low;
    const cond2Short = w3.close < w1.high;
    const cond3Short = w3.close >= w2.low;
    const cond4Short = w3.low > w2.low;  // 新增: w3确实反弹
    const isPendingShort = cond1Short && cond2Short && cond3Short && cond4Short;

    // Active Short
    const isActiveShort = (w2.low < w1.low) && (w3.close < w2.low);

    if (isPendingLong) {
        pendingLong.push({
            code, name, symbol,
            w1High: w1.high, w1Low: w1.low,
            w2High: w2.high,
            w3Close: w3.close,
            distance: ((w2.high - w3.close) / w2.high * 100).toFixed(2)
        });
    }

    if (isActiveLong) {
        activeLong.push({ code, name, symbol, close: w3.close, breakout: w2.high });
    }

    if (isPendingShort) {
        pendingShort.push({
            code, name, symbol,
            w1High: w1.high, w1Low: w1.low,
            w2Low: w2.low,
            w3Close: w3.close,
            distance: ((w3.close - w2.low) / w2.low * 100).toFixed(2)
        });
    }

    if (isActiveShort) {
        activeShort.push({ code, name, symbol, close: w3.close, breakdown: w2.low });
    }
}

// 输出结果
console.log(`🟡 Pending Long (蓄势做多) - 共 ${pendingLong.length} 个品种`);
console.log("-".repeat(80));
pendingLong.forEach(item => {
    console.log(`✅ ${item.name} (${item.code}) - ${item.symbol}`);
    console.log(`   w1: High ${item.w1High}, Low ${item.w1Low}`);
    console.log(`   w2: High ${item.w2High} ← 阻力位 (距离${item.distance}%)`);
    console.log(`   w3: Close ${item.w3Close} (蓄势中)`);
    console.log();
});

console.log();
console.log(`🟢 Active Long (已突破) - 共 ${activeLong.length} 个品种`);
console.log("-".repeat(80));
activeLong.forEach(item => {
    console.log(`🚀 ${item.name} (${item.code}) - ${item.symbol}`);
    console.log(`   当前: ${item.close}, 已突破: ${item.breakout}`);
    console.log();
});

console.log();
console.log(`🔴 Pending Short (蓄势做空) - 共 ${pendingShort.length} 个品种`);
console.log("-".repeat(80));
pendingShort.forEach(item => {
    console.log(`⚠️ ${item.name} (${item.code}) - ${item.symbol}`);
    console.log(`   w1: High ${item.w1High}, Low ${item.w1Low}`);
    console.log(`   w2: Low ${item.w2Low} ← 支撑位 (距离${item.distance}%)`);
    console.log(`   w3: Close ${item.w3Close} (蓄势中)`);
    console.log();
});

console.log();
console.log("=".repeat(80));
console.log("总结:");
console.log(`  Pending Long: ${pendingLong.length} 个`);
console.log(`  Active Long: ${activeLong.length} 个`);
console.log(`  Pending Short: ${pendingShort.length} 个`);
console.log(`  Active Short: ${activeShort.length} 个`);
console.log("=".repeat(80));

console.log("\n📋 需要添加 pending_long 标记的商品:");
console.log(pendingLong.map(x => `${x.name}(${x.code})`).join(", "));

console.log("\n📋 需要添加 pending_short 标记的商品:");
console.log(pendingShort.map(x => `${x.name}(${x.code})`).join(", "));
