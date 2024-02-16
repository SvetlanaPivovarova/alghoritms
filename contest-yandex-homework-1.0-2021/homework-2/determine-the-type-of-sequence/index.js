const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = [];
let res = [
    'CONSTANT',
    'ASCENDING',
    'WEAKLY ASCENDING',
    'DESCENDING',
    'WEAKLY DESCENDING',
    'RANDOM'
    ]

let con = 0;
let asc = 0;
let desc = 0;
let length = 0;

const check = (arr) => {
    for (let i = 1; i < (arr.length - 1); i++) {
        if (arr[i - 1] === arr[i]) {
            con ++;
        } else if (arr[i - 1] > arr[i]) {
            desc ++;
        } else if (arr[i - 1] < arr[i]) {
            asc ++
        }
    }

    return con, asc, desc;
}

const checkLength = (arr) => {
    length = arr.length - 2
    return length
}

const checkArr = (arr, length) => {
    if (con === length) {
        return res[0];
    } else if (asc === length) {
        return res[1];
    } else if (desc === length) {
        return res[3];
    } else if (asc < length && con < length && desc === 0) {
        return res[2]
    } else if (desc < length && con < length && asc === 0) {
        return res[4]
    } else return res[5]
}

rl.on('line', (rawString) => {
    data.push(Number(rawString));
    if (Number(rawString) === -2000000000) {
        rl.close();
        check(data);

        console.log(checkArr(data, checkLength(data)))

    }
});
