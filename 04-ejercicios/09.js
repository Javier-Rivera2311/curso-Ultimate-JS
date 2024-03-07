/**
 * Devolver objetos en base a pares
 */

let pairs = [
    [1, { name: "Javier"}],
    [2, { name: "Sarai"}],
    [3, { name: "Nicolas"}],
];
let array = [{
    id:1,
    name: 'Javier',
},{
    id:2,
    name: 'Sarai',
},{
    id:3,
    name: 'Nicolas',
}];

function toCollection(arr){
    let coleccion = [];
    for (idx in arr){
        let element= arr[idx];
        coleccion[idx] = element[1];
        coleccion[idx].id = element[0];
    }return coleccion;
}

let resultado = toCollection(pairs);
console.log(resultado);

