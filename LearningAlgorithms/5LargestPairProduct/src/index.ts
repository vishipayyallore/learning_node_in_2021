/*
    Description: 
*/

const largestPairProduct = (values: number[]): number => {
    
    let largestProduct = values[0] * values[1];

    for(let index=1; index < values.length-1; index++){
        const currentProduct = values[index] * values[index + 1];

        largestProduct = (largestProduct < currentProduct) ? currentProduct : largestProduct;
    }

    return largestProduct;
};

let values = [3, 6, -2, -5, 7, 3];
console.log(`Largest Pair Product of ${values} is = ${largestPairProduct(values)}`);

values = [13, 6, -2, -5, 7, 3];
console.log(`Largest Pair Product of ${values} is = ${largestPairProduct(values)}`);


