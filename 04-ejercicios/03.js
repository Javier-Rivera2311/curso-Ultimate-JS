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

