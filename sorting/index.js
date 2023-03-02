const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const arr = fileContent.toString().trim().split(' ')
console.log(typeof arr[3])
const o = arr.reduce((o, v, i) => v < 0? o: v < o.v? {v, i: ++i}: o, {v: Infinity, i: null})
const x = arr.reduce((x, v, i) => v < 0? x: v > x.v? {v, i: ++i}: x, {v: null, i: Infinity})
const min = o.v
const max = x.v
let nowpos = 0
const k = max - min + 1
let count = []
for (let l = 0; l < k; l++) {
    count[l] = 0
}
for (let i = 0; i < (arr.length - 1); i++) {
    let a = arr[i] - min
    count[a] = count[a] + 1
}
for (let val = 0; val < k; val++) {
    for (let j = 0; j < count[val]; j++) {
        arr[nowpos] = +(val + +min)
        nowpos++
    }
}
console.log(typeof arr[3])


console.log(arr)

//console.log(txt)

//fs.writeFileSync("output.txt", result.toString())


//for (let i = 0; i < (arr.length - 1); i++) {
//    if (arr[i] !== " " && arr[i] !== '\n') {
//        console.log(arr[i])
//    }
//}
