const xlsx = require('xlsx');
// Try to handle different pinyin export styles
let pinyin = require('pinyin');
if (typeof pinyin !== 'function' && pinyin.default) {
    pinyin = pinyin.default;
}
if (typeof pinyin !== 'function' && pinyin.pinyin) {
    pinyin = pinyin.pinyin;
}
const fs = require('fs');

// File paths
const INPUT_FILE = '全部A股-行情报价.xlsx';
const OUTPUT_FILE = 'stocks_data.js';

function parseExcel() {
    try {
        console.log(`Reading file: ${INPUT_FILE}`);
        if (!fs.existsSync(INPUT_FILE)) {
            console.error(`Error: File ${INPUT_FILE} not found.`);
            return;
        }

        const workbook = xlsx.readFile(INPUT_FILE);
        const sheetName = workbook.SheetNames[0]; // Assume data is in first sheet
        const sheet = workbook.Sheets[sheetName];

        // Convert to JSON
        const rawData = xlsx.utils.sheet_to_json(sheet);
        console.log(`Loaded ${rawData.length} rows.`);

        const stockList = [];

        rawData.forEach(row => {
            // Adjust these keys based on actual Excel headers
            // Common headers: "代码", "名称" or "code", "name"
            let code = row['代码'] || row['Code'] || row['code'];
            let name = row['名称'] || row['Name'] || row['name'];

            if (code && name) {
                // Formatting code: usually 6 digits
                code = String(code).padStart(6, '0');

                // Filter out BSE (starts with 9 as per user request) and STAR Market (starts with 688)
                if (code.startsWith('9') || code.startsWith('688')) {
                    return; // Skip this stock
                }

                // Determine market based on code (Simple heuristic)
                let market = 'SZ';
                if (code.startsWith('6') || code.startsWith('9')) {
                    market = 'SH';
                } else if (code.startsWith('4') || code.startsWith('8')) {
                    market = 'BJ';
                }

                // Generate Pinyin
                // pinyin returns array of arrays like [['zhong'], ['guo']]
                const pyArray = pinyin(name, {
                    style: pinyin.STYLE_NORMAL,
                    heteronym: false
                });
                const py = pyArray.flat().join('').toLowerCase();

                // First letters for easier search (e.g. gzmt)
                const abbrArray = pinyin(name, {
                    style: pinyin.STYLE_FIRST_LETTER,
                    heteronym: false
                });
                const abbr = abbrArray.flat().join('').toLowerCase();

                // Pick the most useful one or combine? 
                // Usually people search by abbreviation (gzmt) or full pinyin (guizhoumaotai)
                // Let's store abbreviation in 'pinyin' field as per my previous logic, 
                // or I can store both. Previous implementation used 'pinyin' for abbreviation (e.g. 'gzmt').
                // Let's stick to 'pinyin' = abbreviation for consistency with my manual list.

                stockList.push({
                    code: code,
                    name: name,
                    pinyin: abbr,
                    market: market
                });
            }
        });

        console.log(`Parsed ${stockList.length} valid stocks.`);

        const fileContent = `const stockList = ${JSON.stringify(stockList, null, 4)};\n`;

        fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf8');
        console.log(`Successfully wrote to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error parsing excel:', error);
    }
}

parseExcel();
