const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const arrOfNumbers = fileContent.toString().split('\n');

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
    return numberObj
}

function compareNumbers(first, second) {
    if (first.code === second.code && first.phone === second.phone) {
        return "YES"
    } else return "NO"
}

let resArr = []

for (let i = 1; i < arrOfNumbers.length; i++) {
    resArr.push(compareNumbers(checkPhoneNumbers(arrOfNumbers[0]), checkPhoneNumbers(arrOfNumbers[i])))
}

const result = resArr.join('\n')
console.log(resArr.join('\n'))

fs.writeFileSync("output.txt", result)