/*
    Description: 
*/

const areSimilar = (values1: number[], values2: number[]): boolean => {

    const array1: number[] = [];
    let array2: number[] = [];

    if (values1.toString() === values2.toString()) {
        return true;
    }

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) {
            array1.push(values1[i]);
            array2.push(values2[i]);
        }
    }

    array2 = array2.reverse();

    if (array1.length === 2 && (array1.toString() === array2.toString())) {
        return true;
    }

    return false;
};


const performAreSimilar = (arrayOfArrays: number[][][]) => {
    arrayOfArrays.forEach((values, index) => {
        //console.log(values);
        // @ts-ignore
        console.log(`${index + 1}. "${values[0]} ${values[1]}" === "${areSimilar(values[0], values[1])}"\n`);
    });
};

let arrayOfArrays = [
    [
        [1, 2, 3],
        [1, 2, 3]
    ],
    [
        [1, 2, 3],
        [2, 1, 3]
    ],
    [
        [1, 2, 2],
        [2, 1, 1]
    ]
];

performAreSimilar(arrayOfArrays);

// let values = [
//     [1, 2, 3],
//     [1, 2, 3]
// ];
// performAreSimilar(values);

// values = [
//     [1, 2, 3],
//     [2, 1, 3]
// ];
// performAreSimilar(values);

// values = [
//     [1, 2, 2],
//     [2, 1, 1]
// ];
// performAreSimilar(values);