import { resolve } from "path";
 
class Country {

    private name;
    constructor(name: string){
        this.name = name;
    }

    getName() {
        return this.name
    }
}
const person = "Henry Kwasi Asiedu";
const country = new Country('Lawrencia');

console.log(person);
console.log(resolve(__dirname, 'dist'));
console.log(country.getName());

