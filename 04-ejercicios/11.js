// practica de ejercicios de esta seccion.

let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let mayor = [0];
    let menor = [0];
    for (let num of arr){
        mayor = mayor > num ?  mayor:num;
        menor = menor < num ?  menor:num;
    } return [menor,mayor];
}
let numeros = getMenorMayor(array)
console.log(numeros); 