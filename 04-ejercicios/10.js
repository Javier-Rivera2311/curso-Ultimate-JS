/**
 * crear array de longitud N, y que sus
 * elementos sean numeros de 1 hasta N
 */
let longitud = 7;
//forma 1
function crearArray(n) {
    let array= [];
    for (let i =1 ;i<=n; i++){
        array.push(i);
    }return array;
}
//forma 2
function crearArray(n) {
    if (n<=0){
        return[];
    }
    let arr =[];
    for (let i = 0; i < n; i++){
        arr[i] = i+1;
    } return arr;
}

let resultado = crearArray(longitud);
console.log(resultado);

