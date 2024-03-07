/**
 * Crear un algoritmoo que devuelva número
 * menor y mayor de un array.
 */

let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (let num of arr){
        menor = menor<num ? menor:num;
        mayor = mayor>num ? mayor:num;
    }
    return [menor,mayor];
}

let numeros = getMenorMayor(array)
console.log(numeros); //[-100, 55]

