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
    const space = "**********";
    const dot = '10';
    const dash = '11';
    expr = String(expr);
    let result = "";
    let final = "";
    let char;
    let spare = '00';
    let one;
    while (expr.length !== 0) {
        char = expr.slice(-10);
        if (char === space) {
            final = " " + final;
            expr = expr.slice(0, expr.length - 10);
            continue;
        }
        while (char.length !== 0) {
            one = char.slice(-2);
            if (one === dot) {
                result = '.' + result;
            } else if (one === dash) {
                result = '-' + result;
            } else if (one === spare) {
                break;
            }
            char = char.slice(0, char.length - 2);
        }
        final = MORSE_TABLE[result] + final;
        expr = expr.slice(0, expr.length - 10);
        result = '';
    }
    return final;
}

module.exports = {
    decode
}