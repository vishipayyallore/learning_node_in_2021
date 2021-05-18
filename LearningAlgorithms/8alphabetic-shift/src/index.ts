/*
    Description: 
*/

const alphabets: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const alphabetsv1: object = {
    'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f', 'f': 'g', 'g': 'h', 'h': 'i', 'i': 'j', 'j': 'k', 'k': 'l', 'l': 'm', 'm': 'n',
    'n': 'o', 'o': 'p', 'p': 'q', 'q': 'r', 'r': 's', 's': 't', 't': 'u', 'u': 'v', 'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z', 'z': 'a'
};

const alphabeticShift = (inputString: string): string => {

    const shiftedString: string[] = [];

    inputString.split('').forEach((char, counter) => {

        const index = (char !== 'z') ? alphabets.indexOf(char) + 1 : 0;

        shiftedString[counter] = alphabets[index];
    });

    return shiftedString.join('');
}

const alphabeticShiftV1 = (inputString: string): string => {

    const shiftedString: string[] = [];

    inputString.split('').forEach((char, counter) => {
        // @ts-ignore
        shiftedString[counter] = alphabetsv1[char];
    });

    return shiftedString.join('');
}

const performShift = (values: string[]) => {

    console.log('Version 1');
    values.forEach((value, index) => {
        console.log(`${index + 1}. "${value}" shifted to "${alphabeticShift(value)}"\n`);
    });

    console.log('Version 2');
    values.forEach((value, index) => {
        console.log(`${index + 1}. "${value}" shifted to "${alphabeticShiftV1(value)}"\n`);
    });
};

const values = ['crazy', 'shiva', 'azim', 'mithnu'];
performShift(values);

/*
let value = 'crazy';
performShift(value);
value = 'shiva';
performShift(value);
value = 'azim';
performShift(value);
value = 'mithnu';
performShift(value);
*/
