'use strict';

// Sample 1
const squareV1 = (a: number): number => {
    return a * a;
};
console.log(`Square V1: ${squareV1(5)}`);


// Sample 2
const squareV2 = (a: number) => a * a;
console.log(`Square V2: ${squareV2(6)}`);

// Sample 3
const squareV3 = (a: number) => { return a * a; }
console.log(`Square V4: ${squareV3(8)}`);
