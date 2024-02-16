//верный пример решения задачи для контеста Тинькофф
const readline = require('readline');

const inputData = [];
const DIVIDER = ' ';

readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (data) {
    inputData.push(data);
}).on('close', () => {
    console.log(solve());
    process.exit(0);
});

function solve() {
    let res
    const [inputData, inputNumbers] = fileContent.toString().split('\n')
    const amountOfNumber = inputData.split("  ")[0]
    const numberOfOperations = inputData.split("  ")[1]
    inputNumbersSplitted = inputNumbers.split("  ")

    let arrOfBenefit = []

    for (let i = 0; i < amountOfNumber; i++) {
        if (inputNumbersSplitted[i] < 10) {
            let benefit = 9 - inputNumbersSplitted[i]
            arrOfBenefit.push(benefit)
        }
        else {
            let benefit = 0
            let numberOfRanks = inputNumbersSplitted[i].length - 1
            let seniorRank = Math.floor(inputNumbersSplitted[i] / ( 10 ** numberOfRanks))
            benefit = (9 - seniorRank) * Math.pow(10, numberOfRanks)
            arrOfBenefit.push(benefit)
        }
    }
    const growingArrayOfBenefits = arrOfBenefit.sort((a, b) => a - b).reverse()
    const a = growingArrayOfBenefits.slice(0, numberOfOperations)
    console.log(growingArrayOfBenefits)
    res = a.reduce((sum, current) => sum + current, 0)
    console.log(res)
    return res
}