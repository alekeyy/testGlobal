            ///         CLASE 5 EJERCICIOS      ///

//Ejercicio 1: Haga una funcion que elimine le primer elemento del arreglo:
const array1 = [1, 2, 3, 4, 5]
const firstsDeleter = () => {
    array1.shift();
    console.log(array1)
}

firstsDeleter()



//Ejercicio 2: Haga una funcion que solo reciba arreglos con mas de 5 elementos y luego elimine los ultimos 3 elementos.
// En caso de recibir un arreglo de menos de 5 elementos mostrar en pantalla un mensaje de error:

const tripleDeleter = array2 => {
    if (array2.length > 5){
        array2.pop();
        array2.pop();
        array2.pop();
        console.log(array2);
    } else{
        console.log('"error"');
    }
}
tripleDeleter([0, 1, 2, 5, 9, 10])



//Ejercicio 3: Haga una funcion que reciba un arreglo y un numero. Tenemos que sumarle dicho numero a cada elemento del arreglo y devolver el arreglo.

function arrayAdder(array3, numberToAdd){
    const newArray = array3.map(item => item + numberToAdd);
    console.log(newArray);
}

arrayAdder([-5, 4, 2], 10)

//Ejercicio 4: Haga una funcion que reciba un numero y devuelva un arreglo que tenga el tamaño del numero recibido.
//             El contenido del arreglo deben ser numeros desde el 1 hasta el numero recibido.
const array4 = [];
const numberReceiver = num => {
    for(let i = 1; i <= num; i++) {
      if (array4.length <= num) {
        array4.push(i);
      }
    }
    return array4;
}
console.log(numberReceiver(7));

// Ejercicio 5: Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto.
// findUniq([1,1,1,1,2,1,1,1]) ==> return (2)

const array5 = [0, 0, 0, 0, 0, 3, 0 ,0];
const findUnique = (array5) => {
    let result = array5.find((number) => array5.indexOf(number) === array5.lastIndexOf(number));
    return result;
}
console.log(findUnique(array5));

//Ejercicio 6: Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.
//minSum([7,4,2,3]) ==> return (5)

const array6 = [13, 19, 15, 11, 40];

/* const minSum = array6 => {
    let min1 = array6[0];
    for (i=1; i<array6.length; i++) {
        if(array6[i] < min1){
        min1 = array6[i];
        }
    }
    let min2 = array6[0]
    for (i=1; i<array6.length; i++) {
        if(array6[i] > min1 && array6[i] < min2){
        min2 = array6[i];
        }
    }
    console.log(`La maxima suma de los dos minimos es de: ${min1 + min2}`);
}
minSum(array6); */

const exerciseSix = array6 => {
    let minOne = Math.min(... array6);
    let trashCan = array6.indexOf(minOne);
    array6.splice(trashCan, 1);
    let minTwo = Math.min(... array6)
    return minOne + minTwo;
}
let sum = exerciseSix(array6);
console.log(sum);

// Ejercicio 7: Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor de dicho producto.
// adjacentElementsProduct([9,5,10,2,24,-1]) ==> return (50)
// 5 * 10 = 50

const array7 =[9,5,10,2,24,-1];
const maxProduct = array7 => {

    let newArray = array7.map( (number, index, arr)=>
        {
            return number * arr[index + 1];
        }
    )
    newArray.pop();
    let resultMax = Math.max(... newArray);
    return resultMax
}
let exerciseSeven = maxProduct(array7);
console.log(exerciseSeven)

//Ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
//Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
//Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.

const farm = [
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'sheep',
    'sheep',
    'sheep'
    ];

// dar vuelta el num d indice

//crear funcion
const warnTheSheep = (array) => {
    const wolfIndex = array.indexOf('wolf')     // declaramos el indice del lobo
    const length = array.length;        // declaramos el largo del arreglo

    while(array.length > wolfIndex + 1){  //mientras el largo del arreglo sea mayor al indice del lobo + 1
        console.log(`Warning sheep number ${array.length - (wolfIndex + 1)} the wolf is near`)   // le damos un warning a la oveja en la posicion derecha del lobo (largo - largo del lobo + 1)
        array.splice(wolfIndex + 1, 1)              // eliminamos a la primera que encontramos
    }
    console.log("There are no more sheeps to eat!!")
}
warnTheSheep(farm)