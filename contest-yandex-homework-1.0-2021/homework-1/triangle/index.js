//Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами.
// Если это возможно, выведите строку YES, иначе выведите строку NO. Треугольник — это три точки, не лежащие на одной прямой.

const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

let [a, b, c] = fileContent.toString().split('\n')
a = Number(a)
b = Number(b)
c = Number(c)

let result = "NO";

if (a > 0 && b > 0 && c > 0) {
    if (a + b > c) {
        result = "YES"
    }

    else if (b + c > a) {
        result = "YES"
    }

    else if (c + a > b) {
        result = "YES"
    }
}

if (a === b && b === c && c === a) {
    result = "YES"
}

if (a === b || b === c) {
    result = "YES"
}

if ((a + b === c) || (b + c === a) || (c + a === b)) {
    result = "NO"
}

if (a + b < c) {
    result = "NO"
}

else if (b + c < a) {
    result = "NO"
}

else if (c + a < b) {
    result = "NO"
}

fs.writeFileSync("output.txt", result.toString())