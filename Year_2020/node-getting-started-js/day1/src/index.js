'use strict';

const prompt = require('prompt-sync')();

const name = prompt('Please enter your name: ');
const age = prompt('Please enter your age: ');

console.log(`Name: ${name} | Age: ${age}`);

const person = { 'Name': name, 'Age': age };
console.log(`Person: ${JSON.stringify(person)}`);
