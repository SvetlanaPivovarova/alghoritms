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
    const [employeeCount, timeToGo] = inputData[0].split(DIVIDER).map(x => parseInt(x))
    const stages = inputData[1].split(DIVIDER).map(x => parseInt(x))
    const employeeIndex = +inputData[2] - 1

    if (
        ((stages[employeeIndex] - stages[0]) <= timeToGo) ||
        ((stages[employeeCount - 1] - stages[employeeIndex]) <= timeToGo)
    ) {
        res = stages[employeeCount - 1] - stages[0]
    }

    else {
        if (stages[employeeCount - 1] - stages[employeeIndex] <= stages[employeeIndex] - stages[0]) {
            res = stages[employeeCount - 1] - stages[0] + stages[employeeCount - 1] - stages[employeeIndex]
        }
        else {
            res = stages[employeeCount - 1] - stages[0] + stages[employeeIndex] - stages[0]
        }
    }
    console.log(res)
    return res
}