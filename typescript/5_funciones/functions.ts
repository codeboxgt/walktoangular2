function printParameter(a) {
    console.log(a);
}

let a = 5;
printParameter(a);

//Arrow Functions
let printParameterA = (a,b?,c) => {
    console.log(`Impresion Arrow ${a}`);
    console.log(`Impresion de ${b}`);
}

printParameterA(a,6,4);