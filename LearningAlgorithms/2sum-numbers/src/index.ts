/*
    Description: 
*/

const sumNumbers = (...values: number[]): number => {
    let sum = 0;

    values.forEach((value) => sum += value);

    return sum;
}

console.log(sumNumbers());
console.log(sumNumbers(2));
console.log(sumNumbers(2, 3));
console.log(sumNumbers(2, 3, 4));
console.log(sumNumbers(2, 3, 4, 5));
console.log(sumNumbers(1, 2, 3, 4, 5));