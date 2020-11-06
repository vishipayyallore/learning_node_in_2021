'use strict';

/*
    1. console.log(this === module.exports);
    2. console.log(this === global); // In Termial this === global
    3. process object is a property of the global object
    Example: console.log(`this === module.exports === ${this === module.exports}`);
*/

console.log('Process.argv ...');

process.argv.forEach(argument => console.log(argument));

