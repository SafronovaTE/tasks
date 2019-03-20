// Реализовать функцию, выводящую все пары элементов массива числовых элементов, дающих в сумме число k.

function numbersUpTo(nums, k) {
    var array = nums,
        sum = k,
        arrayPair = [],
        arrayPairReverse = [],
        objResult = {},
        arrayResult = [];

    //перебираем массив array, подходящие пары слагаемых добавляем в массив arrayPair
    for (i = 0; i < array.length; i++) {
        for (j = 1; j < array.length - 1; j++) {
            if (array[i] + array[j] == sum) {
                arrayPair = [array[i], array[j]];
                // найденную пару записываем в ассоциативный массив objResult сразу отсеивая дубликаты
                objResult[arrayPair] = arrayPair;
                // дополнительно исключаем пары с аналогичными слагаемыми
                arrayPairReverse = [array[j], array[i]];
                if (arrayPairReverse in objResult) {
                    delete objResult[arrayPair];
                }
            }
        }
    }
    for (var key in objResult) {
        arrayResult.push(objResult[key]);
    }
    return arrayResult;
}

console.log(numbersUpTo([1, 3, 2, 4, 20, 11, 2, 1, 3], 5));
