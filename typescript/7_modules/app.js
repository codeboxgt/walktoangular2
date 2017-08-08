"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var creditCard_js_1 = require("./classes/creditCard.js");
var Test = (function () {
    function Test() {
    }
    Test.main = function () {
        var wallets = new Array();
        wallets[0] = new creditCard_js_1.CreditCard("5391 00375 9387 5309", "John Bowman", "California Savings", 0.0, 2500);
        wallets[1] = new creditCard_js_1.CreditCard("3485 0399 3395 1954", "John Bowman", "California Federal", 0.0, 3500);
        wallets[2] = new creditCard_js_1.CreditCard("6011 4902 3294 2994", "John Bowman", "California Finance", 0.0, 5000);
        for (var i = 1; i <= 16; i++) {
            wallets[0].chargelt(i);
            wallets[1].chargelt(2 * i);
            wallets[2].chargelt(3 * i);
        }
        console.log("%cPAGOS DE TARJETA", "color:blue");
        for (var i = 0; i < 3; i++) {
            creditCard_js_1.CreditCard.printCard(wallets[i]);
            while (wallets[i].getBalance > 100) {
                wallets[i].makePayment(100);
                console.log("%cNuevo Saldo: " + wallets[i].getBalance, "color:red");
            }
        }
    };
    return Test;
}());
Test.main();
