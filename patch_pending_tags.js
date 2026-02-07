const fs = require('fs');

// Path to the data file
const DATA_FILE = './futures_data.js';

try {
    // 1. Read the file
    let content = fs.readFileSync(DATA_FILE, 'utf-8');

    // 2. Extract JSON content safely
    const match = content.match(/const FUTURES_DATA = ({[\s\S]*?});/);
    if (!match) {
        console.error("ERROR: Could not find FUTURES_DATA object in file.");
        process.exit(1);
    }

    // 3. Parse JSON
    // Note: The file is JS object literal, not strict JSON, but eval should work for this specific file structure
    // We use Function constructor as a safer alternative to eval if possible, 
    // but here we trust the local file.
    const FUTURES_DATA = eval('(' + match[1] + ')');

    let modifiedCountLong = 0;
    let modifiedCountShort = 0;
    const modifiedCodes = [];

    // 4. Iterate and Apply Rules
    for (const [code, future] of Object.entries(FUTURES_DATA)) {
        if (!future.main || !future.main.data || future.main.data.length < 3) {
            continue;
        }

        const bars = future.main.data;
        const w1 = bars[bars.length - 3];  // Start
        const w2 = bars[bars.length - 2];  // Peak/Trough
        const w3 = bars[bars.length - 1];  // Current

        // --- Pending Long Rules (4 conditions) ---
        const cond1Long = w2.high > w1.high;       // Rally
        const cond2Long = w3.close > w1.low;       // Support hold
        const cond3Long = w3.close <= w2.high;     // Not broken out yet
        const cond4Long = w3.high < w2.high;       // Real pullback (New 4th codition)

        const isPendingLong = cond1Long && cond2Long && cond3Long && cond4Long;

        // --- Pending Short Rules (4 conditions) ---
        const cond1Short = w2.low < w1.low;        // Drop
        const cond2Short = w3.close < w1.high;     // Resistance hold
        const cond3Short = w3.close >= w2.low;     // Not broken down yet
        const cond4Short = w3.low > w2.low;        // Real bounce (New 4th condition)

        const isPendingShort = cond1Short && cond2Short && cond3Short && cond4Short;

        // Initialize latestKDJ if missing (rare but possible)
        if (!future.main.latestKDJ) {
            future.main.latestKDJ = {
                K: w3.K || 50,
                D: w3.D || 50,
                J: w3.J || 50,
                pattern: "自动生成"
            };
        }

        // Apply Tags
        if (isPendingLong) {
            future.main.latestKDJ.custom_rule_2 = 'pending_long';
            modifiedCountLong++;
            modifiedCodes.push(`${future.name}(${code})[L]`);
        } else if (isPendingShort) {
            future.main.latestKDJ.custom_rule_2 = 'pending_short';
            modifiedCountShort++;
            modifiedCodes.push(`${future.name}(${code})[S]`);
        } else {
            // Remove tag if it doesn't match rules anymore (clean up)
            if (future.main.latestKDJ.custom_rule_2 === 'pending_long' ||
                future.main.latestKDJ.custom_rule_2 === 'pending_short') {
                delete future.main.latestKDJ.custom_rule_2;
            }
        }
    }

    // 5. Serialize back to JS file
    const newJSON = JSON.stringify(FUTURES_DATA, null, 2);
    const newContent = content.replace(match[1], newJSON);

    // 6. Write file
    fs.writeFileSync(DATA_FILE, newContent, 'utf-8');

    console.log("=".repeat(50));
    console.log(`✅ Success! Updated ${DATA_FILE}`);
    console.log(`🟡 Pending Long Added: ${modifiedCountLong}`);
    console.log(`🔴 Pending Short Added: ${modifiedCountShort}`);
    console.log("=".repeat(50));
    console.log("Modified Commodities:", modifiedCodes.join(", "));

} catch (e) {
    console.error("Script failed:", e);
}
