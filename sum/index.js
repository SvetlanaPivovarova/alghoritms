const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(' ')

const result = Number(a) + Number(b)

console.log(result)

fs.writeFileSync("output.txt", result.toString())


//Даны два числа A и B. Вам нужно вычислить их сумму A+B.
// В этой задаче вам нужно читать из стандартного ввода и выводить ответ в стандартный вывод
//Первая строка входа содержит числа A и B (-2 ⋅ 109 ≤ A, B ≤ 2 ⋅ 109) разделенные пробелом

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines;
rl.on('line', (line) => {
    lines = line.split(' ');
}).on('close', () => {
    const [a, b] = lines;
    const c = Number(a) + Number(b);
    process.stdout.write(c.toString());
});