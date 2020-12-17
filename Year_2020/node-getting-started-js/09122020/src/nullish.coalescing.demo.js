/*
    1. nullish coalescing operator, which is denoted by ??.
        1.1. nullish coalescing operator, which is denoted by ??. The nullish coalescing operator is a logical operator 
             that returns the right operand when the left operand is either null or undefined.
        1.2. The logical OR operator returns the right operand when the left operand is any falsy value.
*/

console.log('\n******************** || Versus ?? ********************');
console.log(`0 || "Content" === ${0 || "Content"}`);
console.log(`0 ?? "Content" === ${0 ?? "Content"}`);

console.log(`\n-0 || "Content" === ${-0 || "Content"}`);
console.log(`-0 ?? "Content" === ${-0 ?? "Content"}`);

console.log(`\n0n || "Content" === ${0n || "Content"}`);
console.log(`0n ?? "Content" === ${0n ?? "Content"}`);

console.log(`\n"" || "Content" === ${"" || "Content"}`);
console.log(`"" ?? "Content" === ${"" ?? "Content"}`);

console.log(`\n null || "Content" === ${null || "Content"}`);
console.log(` null ?? "Content" === ${null ?? "Content"}`);

console.log(`\n undefined || "Content" === ${undefined || "Content"}`);
console.log(` undefined ?? "Content" === ${undefined ?? "Content"}`);

console.log(`\n NaN || "Content" === ${NaN || "Content"}`);
console.log(` Nan ?? "Content" === ${NaN ?? "Content"}`);

