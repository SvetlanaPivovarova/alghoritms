const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = [];
const defaultCode = 495;

const parseToNumber = (rawString) => {
    const numberArray = [];
    for (let i = 0; i < rawString.length; i += 1) {
        const number = Number(rawString[i]);
        if (!isNaN(number)) {
            numberArray.push(number);
        }
    }
    console.log(numberArray)

    const fullNumberArray = numberArray.length === 7
        ? [defaultCode, ...numberArray] : numberArray.slice(1);

    return Number(fullNumberArray.join(''));
}

rl.on('line', (rawString) => {
    const number = parseToNumber(rawString);
    data.push(number);
    if (data.length === 4) {
        rl.close();
        const [defaultNumber, ...numbers] = data;
        // console.log(data)
        const answer = numbers.map((number) => defaultNumber === number ? 'YES' : 'NO');
        console.log(answer.join('\n'));
    }
});
