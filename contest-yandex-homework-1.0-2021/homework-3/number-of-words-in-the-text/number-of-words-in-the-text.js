const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", "utf8");

let size;

if (fileContent.length === 0) {
    size = 0;
} else {
    //  слова разделены одним или большим числом пробелов или символами конца строки
    let arr = fileContent.match(/\S+/g) || [];

    let result = new Set(arr);
    size = result.size;
}

fs.writeFileSync("output.txt", size.toString());