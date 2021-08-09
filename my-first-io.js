const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]);
const rslt = buf.toString().split('\n').length - 1;
console.log(rslt);