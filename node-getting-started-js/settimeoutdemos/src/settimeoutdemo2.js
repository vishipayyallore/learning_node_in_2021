'use strict';

const WaitTimeOneSecond = 1000;
const LoopUntil = 90000000000;

// Returns the number of milliseconds
const getCurrentMilliseconds = () => {

    return Date.now();

};

const start = getCurrentMilliseconds();

setTimeout(function () {

    const current = getCurrentMilliseconds();

    console.log(`Current: ${current} | Start: ${start}`);
    console.log(current - start);

}, WaitTimeOneSecond);

// A Loop
for (var i = 0; i < LoopUntil; ++i) { }
