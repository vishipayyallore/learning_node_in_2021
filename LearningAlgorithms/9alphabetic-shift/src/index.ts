/*
    Description: 
*/

function alphabetSubsequence(input: string): boolean {

    let isAlphabetsInSequence = true;
    const asciiValues: number[] = [];

    input.split('').forEach((char) => {
        asciiValues.push(char.charCodeAt(0));
    });

    if (new Set(asciiValues).size !== asciiValues.length) {
        isAlphabetsInSequence = false;
    }

    for (let index = 0; index < asciiValues.length - 1; index++) {
        if (asciiValues[index] >= asciiValues[index + 1]) {
            isAlphabetsInSequence = false;
            break;
        }
    };

    return isAlphabetsInSequence;
}

const performAlphabetSubsequence = (values: string[]) => {

    values.forEach((value, index) => {
        console.log(`${index + 1}. "${value}" === "${alphabetSubsequence(value)}"\n`);
    });
};

const values = ['zab', 'effg', 'cdce', 'ace', 'bxz'];
performAlphabetSubsequence(values);

// console.log(alphabetSubsequence('zab'));
// console.log(alphabetSubsequence('effg'));
// console.log(alphabetSubsequence('cdce'));
// console.log(alphabetSubsequence('ace'));
// console.log(alphabetSubsequence('bxz'));
