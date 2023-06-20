/**
 * Number to Chinese
 * @author Prk
 */

export default number => {
    let chineseNumber = '',
        chineseDigits = [
            '零',
            '一',
            '二',
            '三',
            '四',
            '五',
            '六',
            '七',
            '八',
            '九'
        ],
        chineseUnits = [
            '',
            '十',
            '百',
            '千',
            '万',
            '亿'
        ];
    if (0 === number) return chineseDigits[0];

    let numStr = number.toString(),
        len = numStr.length,
        shouldAddZero = false;

    for (var i = 0; len > i; i++) {
        var digit = parseInt(numStr[i]);

        if (0 === digit) shouldAddZero = true;
        else {
            if (shouldAddZero) {
                chineseNumber += chineseDigits[0];
                shouldAddZero = false;
            }
            chineseNumber += chineseDigits[digit] + chineseUnits[len - i - 1];
        }
    }

    return chineseNumber;
}