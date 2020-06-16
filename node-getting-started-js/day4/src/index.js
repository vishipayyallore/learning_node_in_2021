'use strict';

const message = `This is setTimeout's DEFAULT message.`;
const WaitTimeOneSecond = 1000;

const logMessage = (message) => {
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

// setTimeout Example 3
const displayMessage = (message) => {
    logMessage(message);
};

setTimeout(displayMessage, WaitTimeOneSecond, `Example 3 :: ${message}`);
logMessage(`Wait for setTimeout Example 3's output.`);