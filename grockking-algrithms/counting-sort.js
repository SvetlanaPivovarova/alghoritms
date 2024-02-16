// сортировка подсчетом
// сортирует последовательность на месте, не создавая новую
// https://www.youtube.com/watch?v=Nb5mW1yWVSs&t=47s

function countingSort(seq) {
    const minval = Math.min.apply(null, seq);
    const maxval = Math.max.apply(null, seq);
    const k = (maxval - minval + 1); // количество возможных значений в последовательности
    const count = Array(k).fill(0) // создаем массив из k нулей, на это уходит K операций и k памяти
    for (let i = 0; i < seq.length; i++) { //  перебираем все элементы
        count[seq[i] - minval] += 1         // из элемента вычитаем минимальное значение и увеличиваем счетчик на 1
    }
     console.log('count', count)
    let nowpos = 0;                     // счетчик
    for (let val = 0; val <= k; val++) { // пробегаемся внешним циклом по всем возможным значения, по индексам
        for (let x = 0; x < count[val]; x++) { // пробегаемся по количеству
            seq[nowpos] = val + minval      // меняем что нам передали, меняем ее в отсортированную, заменяем на индекс + минимальное значение
            nowpos += 1
        }
    }
    console.log(seq)
}
countingSort([1, 5, 8, 5])