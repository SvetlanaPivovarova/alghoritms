//Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче вам нужно читать из файла и выводить ответ в файл

const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(' ')

const result = Number(a) + Number(b)

console.log(result)

fs.writeFileSync("output.txt", result.toString())