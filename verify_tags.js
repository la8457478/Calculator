const fs = require('fs');
const content = fs.readFileSync('./futures_data.js', 'utf-8');
const match = content.match(/const FUTURES_DATA = ({[\s\S]*?});/);
const data = eval('(' + match[1] + ')');

const pendingLong = [];
const pendingShort = [];

for (const [code, future] of Object.entries(data)) {
    if (future.main && future.main.latestKDJ && future.main.latestKDJ.custom_rule_2 === 'pending_long') {
        pendingLong.push(`${future.name}(${code})`);
    }
    if (future.main && future.main.latestKDJ && future.main.latestKDJ.custom_rule_2 === 'pending_short') {
        pendingShort.push(`${future.name}(${code})`);
    }
}

console.log(`Pending Long: ${pendingLong.length}`);
console.log(pendingLong.join(', '));
console.log(`Pending Short: ${pendingShort.length}`);
console.log(pendingShort.join(', '));
