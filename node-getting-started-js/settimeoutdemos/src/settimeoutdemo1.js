"use strict";

require('colors');

const message = `This is setTimeout's DEFAULT message.`;
const WaitTimeOneSecond = 1000;

const logMessage = (message) => {

  console.log(message.red);

};

// setTimeout Example 1
setTimeout(() => {

  logMessage(`Example 1 :: ${message}`.yellow.bgBlue);

}, WaitTimeOneSecond);
logMessage(`Wait for setTimeout Example 1's output.`.blue);

// setTimeout Example 2
setTimeout(function () {

  logMessage(`Example 2 :: ${message}`);

}, WaitTimeOneSecond);
logMessage(`Wait for setTimeout Example 2's output.`.bgCyan);
