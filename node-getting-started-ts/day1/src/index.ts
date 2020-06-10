'use strict';

import * as promptSync from 'prompt-sync';
const prompt = promptSync.default();

const name = prompt('Please enter your name: ');
const age = prompt('Please enter your age: ');

console.log(`Name: ${name} | Age: ${age}`);

