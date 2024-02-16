
const fs = require('fs')

let fileContent = fs.readFileSync("input.txt", "utf8");

const orders = JSON.parse(fileContent)



    const ordersArr = JSON.parse(orders)
    let result = 0;
    let time = 0;

    for (let i = 0; i < ordersArr.length; i++) {
        time = time + ordersArr[i].executionTime;
        if (time <= ordersArr[i].expiredAt) {
            result++
        } else continue
    }
    console.log(result)


fs.writeFileSync("output.txt", result.toString())