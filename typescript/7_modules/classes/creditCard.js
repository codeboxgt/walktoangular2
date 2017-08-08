"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.CreditCard = CreditCard;
