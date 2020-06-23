'use strict';

/*
    Description: A function which accepts something, and returns something.
*/
const addValues = function (value1: number, value2: number) {
    return value1 + value2;
}

let sum = addValues(123, 456);
console.log(`Sum: ${sum}`);

sum = addValues(1345, 3847);
console.log(`Sum: ${sum}`);

