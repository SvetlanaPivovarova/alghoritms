const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = [];

function checkPhoneNumbers(number) {
    let numberObj = {}
    const clearNumber = number.split('(').join('').split(')').join('').split('-').join('').split('+').join('').toString()
    //console.log(clearNumber.length)
    if(clearNumber.length === 11) {
        numberObj = {
            "pre": Number(clearNumber[0]),
            "code": Number(clearNumber.slice(1, 4)),
            "phone": Number(clearNumber.slice(4)),
        }
    } else if (clearNumber.length === 7) {
        numberObj = {
            "pre": '',
            "code": 495,
            "phone": Number(clearNumber),
        }
    }
    return numberObj.code + numberObj.phone
}

rl.on('line', (rawString) => {
    const number = checkPhoneNumbers(rawString);
    data.push(number);
    if (data.length === 4) {
        rl.close();
        const [defaultNumber, ...numbers] = data;
        // console.log(data)
        const answer = numbers.map((number) => defaultNumber === number ? 'YES' : 'NO');
        console.log(answer.join('\n'));
    }
});
