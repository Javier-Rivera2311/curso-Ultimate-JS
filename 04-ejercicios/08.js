/**
 * Tomar un array de objetos y
 * devuelva un array de pares
 */

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

let pares = [
    [1, { id: 1, name: "Javier"}],
    [2, { id: 2, name: "Sarai"}],
    [3, { id: 3, name: "Nicolas"}],
];
function toPairs(arr){
    let pairs=[];
    for(par in arr){
        let element = arr[par];
        pairs[par] =[element.id, element];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);

