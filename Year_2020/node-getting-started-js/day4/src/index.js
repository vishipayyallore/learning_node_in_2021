console.log(`******************** Exports ********************`);
console.log(exports);

console.log(`******************** Require ********************`);
console.log(require);

console.log(`******************** Module ********************`);
console.log(module);

console.log(`******************** Filename ********************`);
console.log(`FileName: ${__filename}`);

console.log(`******************** DirName ********************`);
console.log(`DirName: ${__dirname}`);

console.log(`******************** (this === module.exports) within the .js file ********************`);
console.log(`(this === module.exports): ${this === module.exports}`);

console.log(`******************** (this === global) will be true from Console ********************`);
console.log(`(this === global): ${this === global}`);

console.log(`******************** process.argv ********************`);
process.argv.forEach(argument => console.log(argument));
