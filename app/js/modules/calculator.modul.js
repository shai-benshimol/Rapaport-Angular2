"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.setupDiamonds = function (diamonds) {
        this.diamondsCount = diamonds.length;
        var singlePrice = 0;
        // Calculate Avarage
        diamonds.forEach(function (diamond) {
            singlePrice += diamond.getPrice();
        });
        this.avgPrice = (singlePrice / this.diamondsCount);
        //Get minumim price
        this.minPrice = Math.min.apply(Math, diamonds.map(function (price) { return price.getPrice(); }));
    };
    Calculator.prototype.getAvg = function () {
        return this.avgPrice;
    };
    Calculator.prototype.getNumOfDiamonds = function () {
        return this.diamondsCount;
    };
    Calculator.prototype.getMinPrice = function () {
        return this.minPrice;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.modul.js.map