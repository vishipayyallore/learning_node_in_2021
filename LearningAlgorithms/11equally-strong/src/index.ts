/*
    Description: 
*/

const equals = (a: any, b: any) =>
    a.length === b.length &&
    a.every((v: any, i: any) => v === b[i]);

const areEquallyStrong = (yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean => {

    var person1 = [yourLeft, yourRight].sort();
    var person2 = [friendsLeft, friendsRight].sort();

    return equals(person1, person2);
}

const performAreEquallyStrong = (values: number[][]) => {

    values.forEach((value, index) => {
        // @ts-ignore
        console.log(`${index + 1}. "${value}" === "${areEquallyStrong(...value)}"\n`);
    });
};

const values = [
    [10, 15, 15, 10],
    [15, 10, 15, 10],
    [15, 10, 15, 9],
    [20, 20, 20, 20]
];
performAreEquallyStrong(values);


// let value: number[] = [10, 15, 15, 10];
// function sum(x: number, y: number, z: number) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3];

// // @ts-ignore
// console.log(sum(...numbers));
//   // expected output: 6

//   // console.log(sum.apply(null, numbers));
