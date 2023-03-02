const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const arr = fileContent.toString().split('')
console.log(arr)
let filteredArr = []

for (let i = 0; i < (arr.length - 1); i++) {
    if (arr[i] !== " " && arr[i] !== '\n') {
        filteredArr.push(arr[i])
    }
}
console.log(filteredArr)

let symCount = new Map()
let maxSymCount = 0
for (let prop in filteredArr) {
    console.log("filteredArr." + prop + '=' + filteredArr[prop])
}


//const result = Number(a) + Number(b)

//console.log(result)

//fs.writeFileSync("output.txt", result.toString())
