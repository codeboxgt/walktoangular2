"use strict";
//Interpolacion
var username = "Walter Cordero";
var age = 30;
var maritalStatus = "Casado";
var blood = "A+";
var profession = "Backend Senior Developer";
console.log("%cInterpolacion de Strings", "color:magenta");
console.log("%cUsuario: " + username.toUpperCase() + "\nEdad: " + age + " a\u00F1os\nEstado Civil: " + maritalStatus + "\nTipo de Sangre: " + blood + "\nProfesion: " + profession, "color: red");
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    result += literals[literals.length - 1];
    return result;
}
var dicho = "mas vale pajaron en mano que > 100 volando";
var html = (_a = ["<div> este es un buen dicho: ", " </div>"], _a.raw = ["<div> este es un buen dicho: ", " </div>"], htmlEscape(_a, dicho));
console.log(html);
var _a;
