'use strict';

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    describeMe() {
        console.log(`Hello I am ${this.name} of ${this.age} years!`);
    }
}


const personOne = new Person("Shiva", 25);
personOne.describeMe();