//Для вывески нового офиса Тинькофф были заказаны неоновые буквы.
// В офис привезли какой-то набор из больших латинских букв. Проверьте, что из них действительно можно составить строку «﻿TINKOFFTINKOFF﻿» для вывески. Тинькофф не хочет платить за лишние буквы, поэтому должны быть использованы все привезённые буквы.
// Формат входных данных
// Каждый тест состоит из нескольких наборов входных данных. В первой строке находится одно целое число ﻿tt﻿ ﻿(1≤t≤100)(1≤t≤100)﻿ — количество наборов входных данных. Далее следует описание наборов входных данных. Единственная строка каждого набора входных данных содержит одну непустую строку из больших латинских букв длиной не более 20 символов — привезённый набор букв.
// Формат выходных данных
// Для каждого набора входных данных, в отдельной строке, выведите «﻿YesYes﻿» (без кавычек), если из всех привезённых букв можно составить строку «﻿TINKOFFTINKOFF﻿», и «﻿NoNo﻿» иначе. Вы можете выводить каждую букву в любом регистре (строчную или заглавную). Например, строки «﻿yEsyEs﻿», «﻿yesyes﻿», «﻿YesYes﻿» и «﻿YESYES﻿» будут приняты как положительный ответ.
// Ввод
//4
// TINKOFF
// TINKOFFF
// AAAA
// FFOKNIT
// вывод
// Yes
// No
// No
// Yes

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inputData = [];
const DIVIDER = ' ';
const CHECK = Array.from('TINKOFF').sort().join('');

function solve() {
    let res = []
    let arr = inputData.slice(1)
    const n = inputData[0];

    for (let i = 0; i < arr.length; i++) {
        const a = Array.from(arr[i]).sort().join('');
        if (a === CHECK) {
            res.push('Yes')
        } else res.push('No')
    }

    return res.join('\n');
}

rl.on('line', (data) => {
    inputData.push(data)
    const n = Number(inputData[0]) + 1
    if (inputData.length === n) {
        rl.close();
        console.log(solve());
    }
});