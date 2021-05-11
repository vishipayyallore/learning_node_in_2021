/*
    Concepts: 
        1. Chaining Operator (?)
*/
const person = {
    name: 'Shiva',
    age: 21,
    salary: 1234.56,
    address: {
        street: '101 Street',
        city: 'Hyderabad',
        state: 'Telangana'
    },
    certifications: {
        az900: true,
        az104: false
    }
};

console.log(`AZ 900: ${person.certifications?.az900}`);
console.log(`AZ 104: ${person.certifications?.az104}`);
// @ts-ignore
console.log(`AZ 204: ${person.certifications?.az204}`); 
console.log(`${JSON.stringify(person)}`);