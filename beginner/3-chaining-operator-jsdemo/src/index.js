
import { person } from './person.js';

console.log(person);

console.log(`Person Name: ${person.name}`);
console.log(`Pets -> Dog Name: ${person.pets.dog?.name}`);
console.log(`Pets -> Cat Name: ${person.pets.cat?.name}`);