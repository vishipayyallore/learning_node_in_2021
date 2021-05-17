// /*
//     Description: 
// */

import { Console } from "console";

const alphabets: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function alphabeticShift(inputString: string): string {

    const shiftedString: string[] = [];

    inputString.split('').forEach((char, counter) => {

        const index = (char !== 'z') ? alphabets.indexOf(char) + 1 : 0;

        // console.log(`${char} === ${alphabets.indexOf(char)} === ${alphabets[index]}`);

        shiftedString[counter] = alphabets[index];
    })

    return shiftedString.join('');
}

const performShift = (value: string) => {
    console.log(`${value} shifted to ${alphabeticShift(value)}`);
};

let value = 'crazy';
performShift(value);

value = 'shiva';
performShift(value);

value = 'azim';
performShift(value);

value = 'mithnu';
performShift(value);


