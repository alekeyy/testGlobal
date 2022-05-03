/* /* const list = [
    {name: "Gabriel", surname: "Martinez" },
    {name: "alex", surname: "carvajal"}
]

const newList = list.map((persona) => persona.surname);

console.log(newList) */
/*
const person = {
    firstName: "Alexander",
    lastName: "Carvajal",
    work: "Dont have one",
}; 
console.table(person)

/* class Mascota {
    constructor(nombre, especie = "perro"){
        this.nombre = nombre;
        this.especie = especie; // si no aclaramos especie sera perro
    }
}

const mascota1 = new Mascota("firulais");
console.log(mascota1); */
/*
const { lastName } = person;
console.log(person);
console.log(lastName);

// deconstructuring
// deconstructuring y spr
const array = [1, 2, 3, 4, 5, 6];

const var1 = array[3];


console.log(var1);
const[first, second,, xd] = [1, 2, 3, 4, 5]; // asignacion directa;
console.log(second);
console.log(xd);


const[primero, ...rest] = [10, 20, 30, 40]; //spride operador el ... da el resto.
console.log(rest); 
// cualq nombre de variable luego de los ... sera el spride operator
const[uno, dos, tres, ...resto] = [1, 2, 3, 4, 5, 6, 7];
console.log(resto);
// ...x es el operador de dispersion

console.log(...resto + " 50");
console.log(resto + " 50"); */
const persona = {
    name: "alex",
    lastName: "carvajal",
    hobbie: "sports",
};

const personaMejorada = {
    ...persona,
    power: 'procrastinating machine',
    favFruit: 'apple',
};

console.log(persona);
console.log(personaMejorada);
const { power: superPower } = personaMejorada
console.log(superPower);

// operadores ternarios: SIRVE PARA HACER UNA SOLA TAREA
// condicion ? (if) expresion1 :(else) expresion2;

let firstName = 'Alex';

firstName == 'Alex' 
    ? console.log('Se llama alex')
    : console.log("Claramente no se llama Alex");

let balance = 300;

balance >= 3000 ? console.log("si"): null; // para que no pase nada

const ejercicio = (array) => {
    array.length > 5
    ? (array.pop(), array.pop(), array.pop())
    : console.log("mal");
}
const array = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4, 5, 6, 7];

console.log(ejercicio(array));
console.log(ejercicio(array2));

