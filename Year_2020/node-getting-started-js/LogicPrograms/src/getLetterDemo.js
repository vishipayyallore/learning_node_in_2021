'use strict';

function getLetter(s) {
    let letter = 'D';

    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'i':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }

    return letter;
}

console.log(getLetter('zkbieat'));