"use strict";
//DESESTRUCTURACION DE OBJETOS
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var dev = {
    name: 'Mark Zuckerberg',
    age: 33,
    fortune: 66.7
};
// let name = dev.name;
// let age = dev.age;
// let fortune = dev.fortune;
var age = dev.age, resto = __rest(dev, ["age"]);
var residuo = resto;
console.log(age, resto, residuo);
// console.log(`${name} tiene ${age} años y una fortuna de
// ${fortune} miles de millones de dolares`);
//DESESTRUCTURACION DE ARREGLOS
//let x =1, y=2;
// let [x, y, ...resto] = [4,5,6,7,8,9,10];
// console.log(x,y,resto);
