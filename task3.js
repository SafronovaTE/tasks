// ����������� �������, ��������� ��� ���� ��������� ������� �������� ���������, ������ � ����� ����� k.

function numbersUpTo(nums, k) {
    var array = nums,
        sum = k,
        arrayPair = [],
        arrayPairReverse = [],
        objResult = {},
        arrayResult = [];

    //���������� ������ array, ���������� ���� ��������� ��������� � ������ arrayPair
    for (i = 0; i < array.length; i++) {
        for (j = 1; j < array.length - 1; j++) {
            if (array[i] + array[j] == sum) {
                arrayPair = [array[i], array[j]];
                // ��������� ���� ���������� � ������������� ������ objResult ����� �������� ���������
                objResult[arrayPair] = arrayPair;
                // ������������� ��������� ���� � ������������ ����������
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
