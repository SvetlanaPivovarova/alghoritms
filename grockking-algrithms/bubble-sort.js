const bubbleSort = (arr) => {
    let stepsCount = arr.length - 1;
    // Значение переменной swapped показывает был ли
    // совершен обмен элементов во время перебора массива
    let swapped;
    do {
        swapped = false;
        // Перебираем массив
        for (let i = 0; i < stepsCount; i += 1) {
            // и меняем местами элементы, если предыдущий больше, чем следующий
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // Если была совершена перестановка, присваиваем swapped значение true
                swapped = true;
            }
        }
        // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
        // в конце массива
        stepsCount -= 1;
    } while (swapped); // продолжаем, пока swapped === true

    return arr;
};

console.log(bubbleSort([3, 2, 10, -2, 0])); // => [ -2, 0, 2, 3, 10 ]
