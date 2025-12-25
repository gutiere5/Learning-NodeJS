const fs = require('node:fs');
const path = require('node:path');

const filepath = path.join('parentFolder', 'subFolder', 'myFile.txt');

const result = fs.readFileSync(filepath, { encoding: 'utf8'});
fs.appendFileSync(filepath, ' !!');
fs.writeFileSync(filepath, 'Hello World');

