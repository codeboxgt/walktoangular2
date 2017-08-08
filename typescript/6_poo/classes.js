"use strict";
var CreditCard = (function () {
    function CreditCard(no, nm, bk, bl, lm) {
        this.number = no;
        this.name = nm;
        this.bank = bk;
        this.balance = bl;
        this.limit = lm;
    }
    Object.defineProperty(CreditCard.prototype, "getNumber", {
        get: function () {
            return this.number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreditCard.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreditCard.prototype, "getBank", {
        get: function () {
            return this.bank;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreditCard.prototype, "getBalance", {
        get: function () {
            return Math.round(this.balance * 100) / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreditCard.prototype, "getLimit", {
        get: function () {
            return Math.round(this.limit);
        },
        enumerable: true,
        configurable: true
    });
    CreditCard.prototype.chargelt = function (price) {
        if (price + this.balance > this.limit) {
            return false;
        }
        else {
            this.balance += price;
            return true;
        }
    };
    CreditCard.prototype.makePayment = function (payment) {
        this.balance -= payment;
    };
    CreditCard.printCard = function (c) {
        console.log("%cINFORMACION TARJETA CREDITO", "color:darkorange");
        console.log("N\u00FAmero de Tarjeta: " + c.getNumber + "\nNombre: " + c.getName + "\nBanco: " + c.getBank + "\nSaldo Tarjeta: " + c.getBalance + "\nL\u00EDmite Tarjeta: " + c.getLimit);
    };
    return CreditCard;
}());
var Test = (function () {
    function Test() {
    }
    Test.main = function () {
        var wallets = new Array();
        wallets[0] = new CreditCard("5391 00375 9387 5309", "John Bowman", "California Savings", 0.0, 2500);
        wallets[1] = new CreditCard("3485 0399 3395 1954", "John Bowman", "California Federal", 0.0, 3500);
        wallets[2] = new CreditCard("6011 4902 3294 2994", "John Bowman", "California Finance", 0.0, 5000);
        for (var i = 1; i <= 16; i++) {
            wallets[0].chargelt(i);
            wallets[1].chargelt(2 * i);
            wallets[2].chargelt(3 * i);
        }
        console.log("%cPAGOS DE TARJETA", "color:blue");
        for (var i = 0; i < 3; i++) {
            CreditCard.printCard(wallets[i]);
            while (wallets[i].getBalance > 100) {
                wallets[i].makePayment(100);
                console.log("%cNuevo Saldo: " + wallets[i].getBalance, "color:red");
            }
        }
    };
    return Test;
}());
Test.main();
