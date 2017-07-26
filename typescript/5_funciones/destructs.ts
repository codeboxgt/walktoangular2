//DESESTRUCTURACION DE OBJETOS

let dev = {
    name: 'Mark Zuckerberg',
    age: 33,
    fortune: 66.7
}

// let name = dev.name;
// let age = dev.age;
// let fortune = dev.fortune;

let {age, ...resto} = dev;
let residuo = resto;
console.log(age,resto, residuo);
// console.log(`${name} tiene ${age} años y una fortuna de
// ${fortune} miles de millones de dolares`);

//DESESTRUCTURACION DE ARREGLOS
//let x =1, y=2;

// let [x, y, ...resto] = [4,5,6,7,8,9,10];

// console.log(x,y,resto);


