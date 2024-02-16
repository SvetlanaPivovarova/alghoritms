const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let res = "YES";

const check = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        res = Number(arr[i - 1]) < Number(arr[i]) ? "YES" : "NO";
        if (res === "NO") {
            break
        }
    }
    return res;
}

rl.on('line', (rawString) => {
    const result = check(rawString.split(' '));
    rl.close();
    console.log(result);
});
