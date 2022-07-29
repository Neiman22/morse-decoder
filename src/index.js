const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let ret = '';
    for (let i = 0; i < expr.length / 10; i++){
        if (expr[i * 10] === '*') {
            ret = ret + ' ';
        } else {
            let code = '';
            for (let n = 0; n < 5; n++) {
                if (!(expr[2 * n + i * 10] === '0' && expr[2 * n + 1 + i * 10] === '0')) {
                    if (expr[2 * n + i * 10] === '1' && expr[2 * n + 1 + i * 10] === '0') {code = code + '.'}
                    if (expr[2 * n + i * 10] === '1' && expr[2 * n + 1 + i * 10] === '1') {code = code + '-'}
                }
            }
            for (let key in MORSE_TABLE) {
                if (key === code) {ret = ret + MORSE_TABLE[key]}
            }
        }
    }
return ret;
}

module.exports = {
    decode
}