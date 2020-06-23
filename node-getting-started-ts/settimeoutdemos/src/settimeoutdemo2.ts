"use strict";

import { WaitTimeOneSecond } from './common';

let value1 = 100;

setTimeout(function () {

    console.log(`Value1: ${value1}`);
    value1 = 0;
    console.log(`Value1: ${value1}`);
}, WaitTimeOneSecond);

const value2 = value1; // 100 or 0?

console.log(`A: ${value1} | B: ${value2}`);


// import * as common from './common';