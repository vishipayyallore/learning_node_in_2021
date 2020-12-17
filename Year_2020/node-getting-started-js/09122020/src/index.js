/*
    1. Optional chaining is one of the new JavaScript
    2. 0, -0, 0n (BigInt) , "" (empty string), null, undefined, and NaN
    3. !! for calculating the Boolean Values
*/

const person =
{
    name: 'Shiva',
    dog: {
        name: 'No Name'
    }
};

console.log('******************** Optional chaining ********************');
console.log(`Dog Name: ${person.dog.name}`);
console.log(`Cat Name: ${person.cat?.name}`);

console.log('\n******************** Falsy Values using Boolean() ********************');
console.log(`Boolean(0) === ${Boolean(0)}`);
console.log(`Boolean(-0) === ${Boolean(-0)}`);
console.log(`Boolean(0n) === ${Boolean(0n)}`);
console.log(`Boolean("") === ${Boolean("")}`);
console.log(`Boolean(null) === ${Boolean(null)}`);
console.log(`Boolean(undefined) === ${Boolean(undefined)}`);
console.log(`Boolean(NaN) === ${Boolean(NaN)}`);

console.log('\n******************** Falsy Values using !! ********************');
console.log(`!!0 === ${!!0}`);
console.log(`!!-0 === ${!!-0}`);
console.log(`!!0n === ${!!0n}`);
console.log(`!!"" === ${!!""}`);
console.log(`!!null === ${!!null}`);
console.log(`!!undefined === ${!!undefined}`);
console.log(`!!NaN === ${!!NaN}`);
