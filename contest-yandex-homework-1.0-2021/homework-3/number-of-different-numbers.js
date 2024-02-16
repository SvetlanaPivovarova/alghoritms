const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//let res = [];
const DIVIDER = ' ';

const check = (arr) => {
    let set = new Set;
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }
    return set.size;
}

rl.on('line', (rawString) => {
    if (!!rawString) {
        const result = check(rawString.split(DIVIDER));
        rl.close();
        console.log(result);
    }
    else {
        rl.close();
        console.log(0)
    }
});
