const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if(err) return console.error(err);
    const rslt = data.split('\n').length - 1;
console.log(rslt);
});