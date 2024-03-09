/**
 * indice validar que no sea menor a cero y 
 * que el elemento exista en el array
 */
// function getByIdx(arr,idx){
//     if (idx<0){
//       return 'elemento no existe';
//     } else if(arr.length <= idx){
//         return 'elemento no existe';
//     } 
//         return arr[idx]
// }
function getByIdx(arr,idx){
    if (idx<0 || arr.length <= idx){
        return 'elemento no existe';
    } 
        return arr[idx]
}

let resultado = getByIdx([1,2], 1);
console.log(resultado); // 2

/**
 * La función getByIdx verifica la validez del índice proporcionado.
 * Si el índice es menor que cero o mayor o igual que la longitud del array,
 * la función devuelve 'elemento no existe', indicando que el índice está fuera 
 * de los límites del array.
 * Si el índice es válido, la función devuelve el elemento en la posición del 
 * índice en el array.
 */