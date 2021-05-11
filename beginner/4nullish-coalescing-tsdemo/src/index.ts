/*
    Description: Nullish Coalescing Operator
*/

const showNullishAndOrOperatorDemo = (value: any) => {
    console.log(`Nullish :: "${value}" <===> ${value ?? "Yes, Right Hand Side Content"}`);
    console.log(`|| (OR) :: "${value}" <===> ${value || "Yes, Right Hand Side Content"}`);
};


[null, undefined, NaN, '', 0n, 0, -0, false, true].forEach( (value) => {
    showNullishAndOrOperatorDemo(value); 
});

