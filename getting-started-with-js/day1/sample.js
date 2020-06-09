const square = (a) => {
    return a * a;
};

console.log(square(5));

const values = [1, 2, 3, 4];
const squares = values.map(a => a * a);
console.log(`Squares of ${values} are ${squares}`);

const sum = squares.reduce(function (result, item) {
    return result + item;
}, 0);
console.log(`Sum of Squares: ${sum}`);



// const square = (a) => a * a;
// const square = a => a * a;