/* class Sports{
    constructor(number, rules, time){ // esta oscura, pq esta definida pero no usada, no tiene valor
        this.number = number;         // con this nos referimos a la clase, estamos entrando a esta (genre)
        this.rules = rules;
        this.time = time;
    }
}

const rugby = new Sports('15 players', true, 80);
console.table(rugby)
const football = new Sports ('11 players', true, 90);
console.table(football)
const array = [rugby, football];
console.table(array);
console.log(`rugby is a sport of ${rugby.number} and its matches have a duration of ${rugby.time} minutes.`)
// if you lose a player then:
rugby.number = '14 players';
console.log(rugby.number) */

/* class Bicicleta {
    constructor(color, numRuedas, manubrio){
        this.color = color;
        this.numRuedas = numRuedas;
        this.manubrio = manubrio;
    }
}

const playera = new Bicicleta('negra', '26', 'bmx')
console.log(`la playera es de color ${playera.color}`);

class Mascota {
    constructor (species, race, name, colour, size) {
        this.species = species;
        this.race = race;
        this.name = name;
        this.colour = colour;
        this.size = size;
    }   
}

const firulais = new Mascota ('dog', 'streetDog', 'firulais', 'brown', 'medium');
console.log(firulais)

class Dueños {
    constructor (name, cellphone, direction, date) {
        this.name = name;
        this.cellphone = cellphone;
        this.direction = direction;
        this.date = date;
    }
}

const santiago = new Dueños ('santiago', 03030456, 'calle falsa 123', new Date());
console.log(santiago)
console.table(santiago)
*/

/* const Game = {
    genre: 'platform',
    multiplayer: true,
    platform: "nintendo",
    year: 1993,
}
console.table(Game)
Game.multiplayer = false;
console.table(Game)
console.table(Game.year)
*/