//Interpolacion

let username = "Walter Cordero";
let age = 30;
let maritalStatus = "Casado";
let blood = "A+";
let profession = "Backend Senior Developer";

console.log("%cInterpolacion de Strings", "color:magenta");

console.log(`%cUsuario: ${username.toUpperCase()}
Edad: ${age} años
Estado Civil: ${maritalStatus}
Tipo de Sangre: ${blood}
Profesion: ${profession}`, "color: red")


function htmlEscape(literals, ...placeholders) {
    let result = "";

    for(let i = 0; i < placeholders.length; i++){
        result += literals[i];

        result += placeholders[i]
                  .replace(/&/g, '&amp;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
    }

    result += literals[literals.length - 1];
    return result;
}

let dicho = "mas vale pajaron en mano que > 100 volando"
let html = htmlEscape `<div> este es un buen dicho: ${dicho} </div>`;

console.log(html);