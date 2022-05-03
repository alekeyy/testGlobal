// ejercicio 1
// PRIMERO CREAR CLASE, SUS NOMBRES Y DENTRO DE LA FUNCION EN LOS PARAMETROS LOS OBJETOS
function Hero(name = 'defecto', position = "0 0", hp = 100, dmg = 5, exp = 0) {
    this.name = name;
    this.position = position;
    this.hp = hp;
    this.dmg = dmg;
    this.exp = exp;
  }

const newHero = (name, position, hp, dmg, exp) => {
  return new Hero(name, position, hp, dmg, exp);
}

const alex = newHero('Alex', "0 1");
const heroDefault = newHero();
const assasin = newHero('Assasin', '0 2', 150, 40, 10)
const kamikaze = newHero('kamikaze', '0 0', 130, 130, 100)
const allHeros = [assasin, alex, heroDefault, kamikaze];
console.table(allHeros)

/* Ejercicio 2: Hubo una conferencia de programación hace poco y necesitamos saber quienes fueron las personas que estuvieron en el evento.
Sabemos que la información está guardada en un array de objetos.
Necesitamos saber cuántas personas de “Europa” asistieron. Haga una función para devolver dicho valor.
*/

const list = [
  { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Carla', country: 'Tahiti', continent: 'Africa', age: 28, language: 'JavaScript' },
  { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

let europeos = list.filter(list => list.continent === "Europe");
console.log(europeos)
for (x=0;x<=europeos.length; x++){
  if(x==europeos.length){
  console.log('La cantidad de europeo en la conferencia es de: ' + x);
  }
}

/* 
Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar un mensaje para cada persona que asista al evento la próxima vez. Para eso, nuestra tarea es tener una función que devuelva un array donde cada posición tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.

const list1 = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
return ==>
[
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
  */
  const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ]
  
const greeter = list1.forEach((item) => {
  console.log(`Hi ${item.firstName}, what do you like the most about ${item.language}?`);
});
greeter()

/* Ejercicio 4: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores de cierto lenguaje para poder preparar contenido específico. Por lo tanto, necesitamos una función que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. Por ejemplo:

const list = [
  { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
return ('Ruby' )==> true */

const list2 = [
  { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

let languageFinder = (languageFinder, list2) => {
  (list2.forEach(item)
  if (languageFinder === item.language){
   return console.log(true);
  }
  )
}
languageFinder('ruby')

/* list2.forEach((item) => {
      if(languagex == item.language){
        return true;
      } else{
        return false;
      }
    }
  }
})

const languagex = (languagex) => {
  for(i = 0; i <= list2.length; i++)
  if(languagex == list2[i].language){
    return console.log(true);
  } else return console.log(false);
}
languagex('Ruby');
languagex('Javascript');
languagex('Python'); */

/* let finder = list2.forEach((language, index) =>{
      if(language == list2[index].language){
        return console.log(true);
      } else {
        return console.log(false);
      }
    }
)
*/
