const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = '';
    let arr = [];
    let res = '';
    let bot = expr.split(' ');
    for (let i = 0; i < expr.length; i++) {
        for (const prop in MORSE_TABLE) {
            if (expr[i] === MORSE_TABLE[prop]) {
                arr.push(prop);
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 10 - arr[i].length * 2; j++) {
            str += '0';
        }
        for (let k = 0; k < arr[i].length; k++) {
            if (arr[i][k] === '.')
                str += '10'
            else if (arr[i][k] === '-')
                str += '11';
            else
                continue
        }
    }
    res = str.split('');
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === ' ') {
            res.splice(i * 10, 0, '**********');
        }
    }
    return res.join('');
}

module.exports = {
    decode
}