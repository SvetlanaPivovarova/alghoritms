const readline = require('readline');

const inputData = [];
const DIVIDER = ' ';

readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (data) {
    inputData.push(data);
}).on('close', () => {
    console.log(solve());
    process.exit(0);
});

function solve() {
    let res
    let arrOfData = inputData[0].split(DIVIDER);
    const a = parseInt(arrOfData[0])
    const b = parseInt(arrOfData[1])
    const c = parseInt(arrOfData[2])
    const d = parseInt(arrOfData[3])
    if (d > b) {
        res = a + (d - b) * c
    } else {
        res = a
    }
    return res
}