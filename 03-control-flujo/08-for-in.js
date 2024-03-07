let user = {
    id: 1,
    name: 'John',
    age: 25
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

console.log('-------------------');
// para iterar sobre un array, mejor usar for-of
let animales = ['lobo', 'tigre', 'leon'];
for (let animal in animales) {
    console.log(animal, animales[animal]);
}

