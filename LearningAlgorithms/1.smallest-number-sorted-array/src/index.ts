/*
    Description: 
*/

const absoluteValuesSumMinimization = (numbersArray: number[]) => {

    const isArrayLengthEven = (numbersArray.length % 2 === 0);
    const midPosition = numbersArray.length / 2;

    return (isArrayLengthEven) ? numbersArray[midPosition - 1] : numbersArray[Math.floor(midPosition)];
};

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7, 8]));