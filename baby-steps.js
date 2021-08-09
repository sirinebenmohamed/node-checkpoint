const numbers = process.argv.slice(2);
const sum = numbers.reduce((acc, num) => {
    return acc + +num ;
},0);
console.log(sum);