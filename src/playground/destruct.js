

/* const person = {
    name: undefined, 
    age: 27, 
    location: {
        stad: 'Den haag', 
        provinci: 'Zuid-holland', 
        graden: 25
    }
};

const {name: firstName = 'Niet bekend', age} = person;
console.log(`${firstName} is ${age} jaar oud`);

const {stad,provinci,graden} = person.location;
if(stad && graden){
    console.log(`Het is ${graden} graden`);
}*/

const address = ['Laakkade 38', 'Den Haag', 'Zuid-Holland', '2521XB'];

const [straat, stad, provinci, postcode] = address;

console.log(`Je woont in ${stad} op ${straat}`);
