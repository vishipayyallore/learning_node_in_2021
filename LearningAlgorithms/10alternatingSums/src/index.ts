/*
    Description: 
*/

const alternatingSums = (values: number[]): number[] => {

    let evenSum = 0;
    let oddSum = 0;

    values.forEach((value, index) => {
        if (index % 2 === 0) {
            evenSum += value;
        } else {
            oddSum += value;
        }
    });

    return [evenSum, oddSum];
}


const performAlternatingSums = (values: number[][]) => {

    values.forEach((value, index) => {
        console.log(`${index + 1}. "${value}" === "${alternatingSums(value)}"\n`);
    });
};

const values = [
    [50, 60, 60, 45, 70],
    [1, 2, 3, 4, 5]
];
performAlternatingSums(values);

// console.log(alternatingSums([50, 60, 60, 45, 70]));
// console.log(alternatingSums([1, 2, 3, 4, 5]));