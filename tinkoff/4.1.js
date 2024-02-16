const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputData = [];
const DIVIDER = ' ';

function solve() {
    let arr = []
    const n = inputData[0].split(DIVIDER)[0]
    const k = inputData[0].split(DIVIDER)[1]
    const numbersArr = inputData[1].split(DIVIDER).sort((a, b) => a - b)

    for (let i = 0; i < numbersArr.length; i++) {
        const len = numbersArr[i].length - 1
        const a = 9 - Number(numbersArr[i][0])
        const b = a * Math.pow(10, len)
        arr.push(b)
    }
    const res = arr.sort((a, b) => a - b).reverse().slice(0, k)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0,);

    return res > Number.MAX_SAFE_INTEGER ? BigInt(res) : res;
}

rl.on('line', (data) => {
    inputData.push(data)
    if (inputData.length === 2) {
        rl.close();
        console.log(solve());
    }
});
