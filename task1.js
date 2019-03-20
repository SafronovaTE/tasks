// Написать функцию, принимающую предложение и возвращающую количество содержащихся в нем четырехбуквенных слов. О знаках препинания не беспокоиться.
        
function fourLetterWords(sentence) {
    var num = 0,
        arrayOfWords = sentence.split(' ');
    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length === 4) {
            num++;
        }
    }
    return num;
};
console.log(fourLetterWords('Здесь есть слова из четырех букв'));