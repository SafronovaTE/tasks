// �������� �������, ������������ ���������� ������ (��������, ������� �� ���������) � ���������� ��� ��������� �������� � �������� ������. ������: ��� ����� "�������" �������� 6, �.�. � "�������" � "�������" �� ��������� ����� ��������. 

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

console.log(almostPalindromes('�����')); // ����� -> �����, ������ 2