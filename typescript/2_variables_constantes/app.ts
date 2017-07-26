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

for(var i=0; i<10;i++){
    (function(i){
        setTimeout(function() {
            console.log(i);
        }, 100*i);
    })(i);
}

console.log("%cUSO DE LET EN SETTIMEOUT", "color:yello");
for(let i = 0; i< 10;i++){
    setTimeout(function() {
        console.log(i);
    }, 100*i);
}