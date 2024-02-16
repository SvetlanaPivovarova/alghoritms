//Даны два числа A и B. Вам нужно вычислить их сумму A+B.
// В этой задаче вам нужно читать из стандартного ввода и выводить ответ в стандартный вывод



//

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
    console.log(c)
    process.stdout.write(c.toString());
});
