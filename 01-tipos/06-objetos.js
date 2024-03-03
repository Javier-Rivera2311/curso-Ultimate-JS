let nombre = "Tanjiro";
let anime = "Kimetsu no Yaiba";
let edad = 15;

let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 15
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.anime);
console.log(personaje.edad);
console.log(personaje["nombre"]);
console.log(personaje["anime"]);
console.log(personaje["edad"]);

personaje.nombre = "Nezuko"; //Cambiar el valor de una propiedad
console.log(personaje.nombre);

delete personaje.edad; //Eliminar una propiedad
console.log(personaje);
