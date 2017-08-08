"use strict";
// Herencia en clases
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Progression = (function () {
    function Progression() {
        this.first = this.current = 0;
    }
    Progression.prototype.firstValue = function () {
        this.current = this.first;
        return this.current;
    };
    Progression.prototype.nextValue = function () {
        return ++this.current;
    };
    Progression.prototype.printLine = function (num) {
        var _builder = "";
        for (var i = 2; i <= num; i++) {
            _builder += this.nextValue() + " ";
            // console.log(`%c ${this.nextValue()}`, "color:blue");
        }
        return _builder;
    };
    Progression.prototype.printProgression = function (n) {
        console.log("%c" + this.firstValue(), "color:red");
        for (var i = 2; i <= n; i++) {
            console.log("%c " + this.nextValue(), "color:blue");
        }
    };
    return Progression;
}());
// Serie Aritmetica extiende de Progression
var ArithProgression = (function (_super) {
    __extends(ArithProgression, _super);
    function ArithProgression(inc) {
        if (inc === void 0) { inc = 1; }
        var _this = _super.call(this) || this;
        _this.increment = inc;
        return _this;
    }
    ArithProgression.prototype.nextValue = function () {
        this.current += this.increment;
        return this.current;
    };
    return ArithProgression;
}(Progression));
// Serie Geometrica extiende de Progression
var GeomProgression = (function (_super) {
    __extends(GeomProgression, _super);
    function GeomProgression(base) {
        if (base === void 0) { base = 2; }
        var _this = _super.call(this) || this;
        _this.first = base;
        _this.current = _this.first;
        return _this;
    }
    GeomProgression.prototype.nextValue = function () {
        this.current *= this.first;
        return this.current;
    };
    return GeomProgression;
}(Progression));
var Tester = (function () {
    function Tester() {
    }
    Tester.main = function () {
        var progression;
        console.log("%cSerie Aritmetica con incremento Predeterminado: ", "color:darkorange");
        progression = new ArithProgression();
        progression.printProgression(10);
        console.log("\n");
        console.log("%cSerie Aritmetica con incremento 5: ", "color:darkred");
        progression = new ArithProgression(5);
        progression.printProgression(10);
        console.log("\n");
        console.log("%cSerie Geometrica con base Predeterminada: ", "color:blueviolet");
        progression = new GeomProgression();
        progression.printProgression(10);
        console.log("\n");
        console.log("%cSerie Geometrica con base 3: ", "color:coral");
        progression = new GeomProgression(5);
        progression.printProgression(10);
    };
    return Tester;
}());
Tester.main();
