'use strict';

function vowelsAndConsonants(line) {
    const vowels = 'aeiou';
    let consonants = '';

    line.split('').forEach(c => {
        if (vowels.includes(c)) {
            console.log(c);
        } else {
            consonants += `${c}\n`;
        }
    });

    console.log(consonants);
}

vowelsAndConsonants('javascriptloops');

