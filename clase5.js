// APRENDIDO CLASE 5
// ARREGLOS
let ejemplo = [1, 2, 3, 4, 5]; // Array con los elementos 1(indice 0) 2(1) 3(2) 4(3)  y  5(4)
console.log(ejemplo);


        // FORMAS DE MANIPULAR ARRAYS //

// Intercambiar valor de un array:
ejemplo[4] = 6; // cambiamos el valor de 5 a 6.
console.log(ejemplo);


// Push: Agrega un elemento al final del arreglo.
ejemplo.push(7); // Agregamos 7 a nuestro array
console.log(ejemplo);


// Pop: Elimina el ultimo elemento del arreglo.
ejemplo.pop();  //Eliminamos el 7 agregado
console.log(ejemplo);


// Shift: Elimina el primer elemento del arreglo.
ejemplo.shift();    //Eliminamos el 1 de nuestro array
console.log(ejemplo);


// Unshift: Agrega un item al principio del arreglo.
ejemplo.unshift(1);    //Volvemos a agregar el 1 en nuestro array.
console.log(ejemplo);


/// Slice : Retorna una copia de una porcion (inicio(incluido) - final(hasta)) con (n, m) siendo INDICES
let ejemplosliceado = ejemplo.slice(1, 4) // Creamos un nuevo arreglo que almacenara los valores desde la posicion 1 hasta(no incluida) la 4 de nuestro arreglo ejemplo.
console.log("Ejemplo de slice en nuevo arreglo: " + ejemplosliceado);


/// Splice: Puede agregar(0) o eliminar(+1) elementos del array. (n, m, m1) siendo n la posicion que toma, m siendo (0/+1) y m1 el valor a agregar cuando m = 0.
ejemplo.splice(4, 0, 5);    // Agregamos el valor 5 luego de nuestra posicion 4 para que tenga sentido el arreglo
console.log(ejemplo);


        //  LOOPS EN ARRAYS  //

// indexOf: Devuelve la primera posicion(indice) en el que el elemento a buscar es encontrado. Si no lo encuentra, devuelve -1.
console.log(ejemplo.indexOf(4)); //Devuelve la posicion del numero 4 en nuestro arreglo.


// Filter: Retorna un arreglo con todos los elementos que cumplan una condicion y lo utilizamos con funciones.
let newEjemplo = ejemplo.filter((number) => number > 4); // le pedimos que nos devuelva un arreglo con la condicion de numeros mayores a 4.
console.log(newEjemplo);


// Find: Devuelve el primer elemento(no posicion/indice) que cumpla la condicion designada.
let ejemploEncontrar = ejemplo.find((number) => number > 2) // devuelve el primer elemento que encuentre que sea mayor a 2.
console.log(ejemploEncontrar);


// forEach: Ejecuta una funcion para cada elemento del arreglo.
ejemplo.forEach((number) => console.log(number > 2)); // Verifica si los elementos(en orden) son mayores a 2


// MAP: Crea un arreglo con los resultados del accionar de cada elemento a partir de una funcion.
let newMapEjemplo = ejemplo.map((number) => number * 2); // Hacemos un nuevo arreglo que incluya los numeros mayores a 5 en el arreglo predeterminado.
console.log(newMapEjemplo);

