//Тинькофф начал разрабатывать новый проект. Для этого было подобрано ﻿nn﻿ разработчиков. У ﻿ii﻿-го разработчика есть порог социальности ﻿aiai​﻿, это значит, что он готов контактировать напрямую с не более чем ﻿aiai​﻿ другими разработчиками.
//
// Определите, можно ли наладить контакт между какими-то парами разработчиков, так чтобы любые два контактировали либо напрямую, либо через других разработчиков.
//
// Формат входных данных
//
// Каждый тест состоит из нескольких наборов входных данных.
//
// В первой строке находится одно целое число ﻿tt﻿ ﻿(1≤t≤1000)(1≤t≤1000)﻿ — количество наборов входных данных. Далее следует описание наборов входных данных.
//
// Первая строка каждого набора входных данных содержит одно число ﻿nn﻿ ﻿(1≤n≤105)(1≤n≤105)﻿ — количество разработчиков. Вторая строка содержит ﻿nn﻿ натуральных чисел ﻿aiai​﻿ ﻿(1≤ai≤109)(1≤ai​≤109)﻿ — пороги социальностей разработчиков. Гарантируется, что сумма значений ﻿nn﻿ по всем наборам входных данных не превосходит ﻿105105﻿.
//
// Формат выходных данных
//
// Для каждого набора входных данных, выведите «﻿YesYes﻿», если можно наладить контакт между программистами, и «﻿NoNo﻿» иначе. Вы можете выводить каждую букву в любом регистре (строчную или заглавную). Например, строки «﻿yEsyEs﻿», «﻿yesyes﻿», «﻿YesYes﻿» и «﻿YESYES﻿» будут приняты как положительный ответ.
//
// ввод
//4
// 1
// 1000000000
// 2
// 1 1
// 3
// 1 1 1
// 4
// 1 1 2 2
// вывод
// Yes
// Yes
// No
// Yes


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputData = [];
const DIVIDER = ' ';

function solve() {
    let res = []

    for (let i = 1; i < inputData.length; i += 2) {
        const n = Number(inputData[i]);
        const ai = inputData[i + 1].split(DIVIDER);
        if (n === 1) {
            res.push('Yes')
        } else {
            let sum = 0;
            for (let i = 0; i < ai.length; i++) {
                sum += Number(ai[i])
            }
            if (sum % 2 === 0) {
                res.push('Yes')
            } else res.push('No')
        }
    }
    return res.join('\n')
}

rl.on('line', (data) => {
    inputData.push(data)
    const n = Number(inputData[0]) * 2 + 1
    if (inputData.length === n) {
        rl.close();
        console.log(solve());
    }
});