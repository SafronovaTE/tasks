// Написать функцию, возвращающую количество ошибок (символов, которые не совпадают) в палиндроме при сравнении исходной и обратной строки. Пример: для слова "логопед" вернется 6, т.к. в "логопед" и "депогол" не совпадают шесть символов. 

function almostPalindromes(str) {
    arrWord = str.split('');
    var reversArrWord = str.split('').reverse(),
        index = 0,
        num = 0;
    while (arrWord.length > index) {
        if (arrWord[index] !== reversArrWord[index]) {
            num++;
        }
        index++;
    }
    return num;
};

console.log(almostPalindromes('мечом')); // мечом -> мочем, вернет 2