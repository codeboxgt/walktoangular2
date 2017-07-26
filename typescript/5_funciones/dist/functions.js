"use strict";
function printParameter(a) {
    console.log(a);
}
var a = 5;
printParameter(a);
//Arrow Functions
var printParameterA = function (a, b, c) {
    console.log("Impresion Arrow " + a);
    console.log("Impresion de " + b);
};
printParameterA(a, 6, 4);
