// без обработки BigInt, проходит 11 тестов

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputData = [];
const DIVIDER = ' ';

function solve() {
    let arr = []
    const [l, r] = inputData[0].split(DIVIDER);
    if (r < l) {
        return 0
    } else if (r === l) {
        return 1
    } else if (r < 10) {
        return (r - l + 1)
    }
    const len = r.length - 1
    for (let i = 1; i <= 18; i++) {
        if (i < 16) {
            const c = Number(Array.from({ length: i }, (_, n) => n = 1).join(''))
            for (let j = 1; j <= 9; j++) {
                arr.push(j * c)
            }
        } else {
            const c = BigInt(Array.from({ length: i }, (_, n) => n = 1).join(''))
            for (let j = 1; j <= 9; j++) {
                arr.push(BigInt(j) * c)
            }
        }
    }
    return arr.filter((item) => item >= l && item <= r).length
}

rl.on('line', (data) => {
    inputData.push(data)
    if (inputData.length === 1) {
        rl.close();
        console.log(solve());
    }
});