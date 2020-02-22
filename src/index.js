module.exports = function toReadable (number) {
    /*1 digit*/
    if (number.toString().length === 1) {
        return numbersInWords[number];
    }

    /*2 digits*/
    if (number.toString().length === 2) {
        return decimals(number);
    }

    /*3 digits*/
    //300 & 301
    if (number.toString().length === 3) {
        return (number.toString()[1] == 0 && (number.toString()[2] == 0)) ? numbersInWords[number.toString()[0]] + " hundred" :
            numbersInWords[number.toString()[0]] + " hundred " + decimals(number.toString().slice(1));
    }
}

function decimals(decimal) {
    //  301
    if (decimal.toString()[0] == 0) {
        return numbersInWords[decimal.toString()[1]];
    }
    //  310, 10
    if (decimal.toString()[1] == 0) {
        return numbersInWords[decimal.toString()[0] * 10];
    }
    if ((decimal>10)&&(decimal<20)) {
        return numbersInWords[decimal];
    }
    // 333, 33
    return numbersInWords[decimal.toString()[0] * 10] + " " + numbersInWords[decimal.toString()[1]];
}

let numbersInWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};

