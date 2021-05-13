/*
    Description: 
*/

const increasingSequence = (values: number[]): boolean => {
    let repeat = 0;

    for (let index = 0; index <= values.length && repeat <= 1; index++) {
        if (values[index] <= values[index - 1]) {
            repeat++;
        }
    }

    return (repeat <= 1);
};

const verifyAlmostIncreasingSequence = (values: number[]) => {
    console.log(`${values} === ${increasingSequence(values)}`);
};

const numbers = [
    [1, 3, 2, 1],
    [1, 3, 2],
    [1, 3, 2, 4, 5],
    [1, 3, 2, 4, 5, 3]
];

numbers.forEach((values) => {
    verifyAlmostIncreasingSequence(values);
});



// let values = [1, 3, 2, 1];
// verifyAlmostIncreasingSequence(values);

// values = [1, 3, 2];
// verifyAlmostIncreasingSequence(values);

// values = [1, 3, 2, 4, 5];
// verifyAlmostIncreasingSequence(values);

// values = [1, 3, 2, 4, 5, 3];
// verifyAlmostIncreasingSequence(values);