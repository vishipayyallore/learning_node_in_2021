'use strict';

// import * as Color from 'colors';

const message = `This is setTimeout's DEFAULT message.`;
const WaitTimeOneSecond = 1000;

const logMessage = (message: string) => {

    console.log(message);

};

// setTimeout Example 1
setTimeout(() => {

    logMessage(`Example 1 :: ${message}`);

}, WaitTimeOneSecond);
logMessage(`Wait for setTimeout Example 1's output.`);

// setTimeout Example 2
setTimeout(function () {

    logMessage(`Example 2 :: ${message}`);

}, WaitTimeOneSecond);
logMessage(`Wait for setTimeout Example 2's output.`);
