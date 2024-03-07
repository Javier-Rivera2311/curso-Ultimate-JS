//devolver la cantindad de numeros positivos
let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr) {
    let contador = 0;
    for (let pos of arr){
        if (pos > 0) {
            contador++;
        }
    }
    return contador;    
}
let resultado =cuantosPositivos(array);
console.log(resultado);


