const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = [];
const DIVIDER = ' ';

function intersection(arrA, arrB) {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    const _intersection = new Set();
    for (const elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }

    return Array.from(_intersection).sort((a,b) => a - b);
}

rl.on('line', (rawString) => {
    if (!!rawString) {
        data.push(rawString.split(DIVIDER));
        if (data.length === 2) {
            rl.close();
            intersection(data[0], data[1]).forEach((item) => {
                console.log(item)
            })

        }
    }
    else {
        rl.close();
        console.log(0)
    }

});