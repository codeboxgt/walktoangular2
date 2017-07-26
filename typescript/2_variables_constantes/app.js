"use strict";
//DECLARACION DE VARIABLES CON JAVASCRIPT
// var a=10;
// function f() {
//     var message = "Hola, Mundo";
//     return message;
// }
// function b() {
//     var a = 10;
//     return function c(){
//         var b = a + 1;
//         return b;
//     }
// }
// var g = b();
// console.log(a); 
// console.log(f());
// console.log(g());
console.log("%cSCOPING VARIABLES", "color: green");
// function c(validate){
//     if(validate) {
//         var x = 10;
//     }
//     return x;
// }
// console.log(c(true));
// console.log(c(false));
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
console.log("%cUSO DE LET EN SETTIMEOUT", "color:yello");
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
