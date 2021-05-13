"use strict";
/*
    Description:
*/
const increasingSequence = (values) => {
    let repeat = 0;
    for (let index = 0; index <= values.length && repeat <= 1; index++) {
        if (values[index] <= values[index - 1]) {
            repeat++;
        }
    }
    return (repeat <= 1);
};

const verifyAlmostIncreasingSequence = (values) => {
    console.log(`${values} === ${increasingSequence(values)}`);
};

[
    [1, 3, 2, 1],
    [1, 3, 2],
    [1, 3, 2, 4, 5],
    [1, 3, 2, 4, 5, 3]
].forEach((values) => {
    verifyAlmostIncreasingSequence(values);
});
