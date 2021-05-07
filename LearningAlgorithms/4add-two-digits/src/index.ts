/*
    Description: 
*/

const addTwoDigits = (value: number): number => {
    return ((value/10) >> 0) + (value%10);
};

let value = 45;
console.log(`Sum of two digits ${value} = ${addTwoDigits(value)}`);

value = 28;
console.log(`Sum of two digits ${value} = ${addTwoDigits(value)}`);



