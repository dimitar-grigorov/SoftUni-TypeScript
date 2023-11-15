// Import only the types from the module
import { PersonDetails, PersonDetailsWithoutAge } from "./interfaces/Person";
// Import everything from the module
import * as PersonStuff from "./interfaces/Person";
// Import only the default export from the module
import xx123 from "./utils/person-util";
// Import only the named export from the module
import { nameCapitalizer } from "./utils/person-util";

const person1: PersonDetails = { age: 22, name: "mitko" };
const person2: PersonDetailsWithoutAge = { name: "mitko2" };

const personOneCapitalized = nameCapitalizer(person1);
console.log(person1);
console.log(personOneCapitalized);

const personTwoCapitalized = nameCapitalizer(person2);
console.log(person2);
console.log(personTwoCapitalized);

console.log(xx123());
