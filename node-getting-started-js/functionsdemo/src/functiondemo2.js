'use strict';

/*
    Description: A function which accepts nothing, but returns something.
*/
const getDate = function () {
    return new Date().toISOString();
}

let _date = getDate();
console.log(`Date: ${_date}`);

_date = getDate();
console.log(`Date: ${_date}`);
