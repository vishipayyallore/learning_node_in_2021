'use strict';

function factorial(value1: number) {
    let results = value1--;

    if (value1 === 0 || value1 === 1) {
        return 1;
    }

    while (value1 > 0) {
        results = results * (value1--);
    }

    return results;
}

let value1 = 25;
const fact = factorial(value1);
console.log(`Factorial of ${value1} is ${fact}`);
