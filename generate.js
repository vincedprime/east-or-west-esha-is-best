const fs = require('fs');

const lines = fs.readFileSync('pickup-lines.txt', 'utf-8').split('\n').filter(Boolean);
const randomLine = lines[Math.floor(Math.random() * lines.length)];

fs.writeFileSync('data.json', JSON.stringify({ pickup_line: randomLine }, null, 2));
console.log("Generated pickup line:", randomLine);
