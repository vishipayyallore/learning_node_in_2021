'use strict';

class Person {

    constructor(name, age) {
        this.fullName = name;
        this.age = age
    }

    describeMe() {
        console.log(`Hello I am ${this.fullName} of ${this.age} years!`);
    }
}

const personOne = new Person("Shiva", 25);
personOne.describeMe();