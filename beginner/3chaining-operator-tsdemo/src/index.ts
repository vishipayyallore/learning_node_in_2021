
import { person } from './person';

console.log(person);

console.log(`Person Name: ${person.name}`);
console.log(`Pets -> Dog Name: ${person.pets.dog?.name}`);

// @ts-ignore
console.log(`Pets -> Cat Name: ${person.pets.cat?.name}`);