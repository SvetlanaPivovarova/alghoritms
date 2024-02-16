sum = (data) => {
    let i = data;
    let minSlice = 0;
    let j
    while ((i % 2 === 0) || (i > 1) ) {
        i = i / 2
        minSlice++
    }
    j = Math.floor(i / 2) + 1
    i = Math.floor(i / 2)
    minSlice = minSlice + (j - 1)

    return(minSlice)
};

let cnt, res;
process.stdin.on('data', data => {
    res = sum(data);
    process.stdout.write(res + '');
    process.exit();
});