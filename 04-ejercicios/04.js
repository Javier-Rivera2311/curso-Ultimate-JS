// FORMA 1:
for (let i = 0; i < 10 ;i++){
    if (i%2 === 1){
        console.log('Número impar: ',i)
    }
}

console.log("------------------------")
// FORMA 2:
for (let i = 0; i < 10 ;i++){
    if (i%2 !== 0){
        console.log('Número impar: ',i)
    }
}

console.log("------------------------")
// FORMA 3:
let i = 0;
while (i<=10){
    if (i%2 !==0){
        console.log('Número impar: ', i)
    }
    i++;
}

