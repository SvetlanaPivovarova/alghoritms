// с обработкой BibInt, тесты не проходят, даже входные ???

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputData = [];
const DIVIDER = ' ';

function solve() {
    let arr = []
    let [l, r] = inputData[0].split(DIVIDER);
    l = Number(l) > Number.MAX_SAFE_INTEGER ? BigInt(l) : Number(l)
    r = Number(r) > Number.MAX_SAFE_INTEGER ? BigInt(r) : Number(r)
    if (r < l) {
        return 0
    } else if (r === l) {
        return 1
    } else if (r < 10) {
        return (r - l + 1)
    }
    for (let i = 1; i <= 18; i++) {
        if (i < 17) {
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
    if (typeof l === 'bigint') {
        return arr.filter((item) => (typeof item == 'number' && item >= l && item <= r) || (typeof item == 'bigint' && item >= l && item <= r)).length
    } else if (typeof r === 'bigint') {
        return arr.filter((item) => (typeof item == 'number' && item >= l && item <= r) || (typeof item == 'bigint' && BigInt(item) >= l && item <= r)).length
    }
    else return arr.filter((item) => (typeof item == 'number' && item >= l && item <= r) || (typeof item == 'bigint' && item >= BigInt(l) && item <= BigInt(r))).length
}

rl.on('line', (data) => {
    inputData.push(data)
    if (inputData.length === 1) {
        rl.close();
        console.log(solve());
    }
});
