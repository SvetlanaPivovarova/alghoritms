
module.exports = function(orders) {
let result = 0;
let time = 0;

for (let i = 0; i < ordersArr.length; i++) {
    time = time + ordersArr[i].executionTime;
    if (time <= ordersArr[i].expiredAt) {
        result++
    }
}
    return result
}