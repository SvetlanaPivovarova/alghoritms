//Даны два числа A и B. Вам нужно вычислить их сумму A+B.
//В этой задаче для работы с входными и выходными данными вы можете использовать и файлы и потоки на ваше усмотрение.

const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(' ')

const result = Number(a) + Number(b)

console.log(result)

fs.writeFileSync("output.txt", result.toString())