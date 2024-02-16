const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = [];
const DIVIDER = ' ';

function sortingSet(set) {
    return Array.from(set).sort((a, b) => a - b)
}


function intersection() {
    const n = Number(data[0][0]);
    //const m = Number(data[0][1]);
    const cubesA = new Set(data.slice(1, n + 1).flat());
    const cubesB = new Set(data.slice(n + 1).flat());
    const _intersection = new Set();
    const restA = new Set(cubesA);
    const restB = new Set;
    for (const elem of cubesB) {
        if (cubesA.has(elem)) {
            _intersection.add(elem);
            restA.delete(elem);
        } else restB.add(elem)
    }
    //console.log(cubesA, cubesB, _intersection)
    const res = [sortingSet(_intersection).length, sortingSet(_intersection).join(' '), sortingSet(restA).length, sortingSet(restA).join(' '), sortingSet(restB).length, sortingSet(restB).join(' ')]
    return res;
}

rl.on('line', (rawString) => {
    data.push(rawString.split(DIVIDER));
    //console.log(data)
    const n = data[0][0];
    const m = data[0][1];
    if (Number(n) >= 0 && Number(m) >= 0) {
        const len = Number(n) + Number(m) + 1;
        if (data.length === len) {
            rl.close();
            console.log(intersection().join('\n'))
        }
    } else {
        rl.close();
        console.log()
    }
});