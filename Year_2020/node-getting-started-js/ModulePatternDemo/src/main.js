'use strict';

const colors = require('colors');

const numberCounterModule = (() => {

    let counter = 0;

    // Private method
    const logMessage = (message) => {
        console.log(colors.cyan(`${new Date().toISOString()} :: ${message}`).bold);
    }

    const exportedMethods = {
        
        counterPlus: () => {
            logMessage(`Incrementing the counter ${counter} to ${++counter}`);

            return counter;
        },

        counterMinus: () => {
            logMessage(`Decrementing the counter ${counter} to ${--counter}`);

            return counter;
        },

        getCounterValue: () => {
            return counter;
        }

    }

    return exportedMethods;

})();

console.log(numberCounterModule);

numberCounterModule.counterPlus();
numberCounterModule.counterPlus();
numberCounterModule.counterMinus();
numberCounterModule.counterPlus();
console.log(`Final Counter: ${numberCounterModule.getCounterValue()}`.green.bold);

