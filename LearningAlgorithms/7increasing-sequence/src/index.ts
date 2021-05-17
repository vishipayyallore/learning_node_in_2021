// /*
//     Description: 
// */

import { Console } from "console";

// const increasingSequence = (values: number[]): boolean => {
//     let repeat = 0;

//     for (let index = 0; index <= values.length && repeat <= 1; index++) {
//         if (values[index] <= values[index - 1]) {
//             repeat++;
//         }
//     }

//     return (repeat <= 1);
// };

// const verifyAlmostIncreasingSequence = (values: number[]) => {
//     console.log(`${values} === ${increasingSequence(values)}`);
// };

// const numbers = [
//     [1, 3, 2, 1],
//     [1, 3, 2],
//     [1, 3, 2, 4, 5],
//     [1, 3, 2, 4, 5, 3]
// ];

// numbers.forEach((values) => {
//     verifyAlmostIncreasingSequence(values);
// });



// let values = [1, 3, 2, 1];
// verifyAlmostIncreasingSequence(values);

// values = [1, 3, 2];
// verifyAlmostIncreasingSequence(values);

// values = [1, 3, 2, 4, 5];
// verifyAlmostIncreasingSequence(values);

// values = [1, 3, 2, 4, 5, 3];
// verifyAlmostIncreasingSequence(values);

interface MyType {
    [key: string]: boolean
}

let aList = new Array<MyType>({ ['something']: true }, { ['something2']: true });
console.log(aList);

const B: MyType = { ['something']: false };

for (let index = 0; index < aList.length; index++) {
    console.log(`${JSON.stringify(aList[index])} === ${JSON.stringify(B)}`);

    for (let destinationProperty in aList[index]) {
        for (let sourceProperty in B) {
            if (destinationProperty === sourceProperty) {
                aList[index] = B;
            }
        }
    }
}
console.log(aList);

// aList = aList.map(obj => 
//     obj.key === B.key ? { ...B  } : obj
// );


 // const apple = JSON.parse(JSON.stringify(aList[index]));
    // console.log(apple[0]);
    // if (JSON.stringify(aList[index]) !== JSON.stringify(B)) {
    //     aList[index] = B;
    // }