const fs = require('node:fs/promises');
const path = require('node:path');

const filepath = path.join('parentFolder', 'subFolder', 'myFile.txt');

console.log('Reading ...')
fs.readFile(filepath, { encoding: 'utf8'})
    .then(result => console.log(result));
console.log('Finish...')


