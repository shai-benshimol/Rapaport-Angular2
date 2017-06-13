"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../services/http.service");
var diamond_module_1 = require("../modules/diamond.module");
var calculator_modul_1 = require("../modules/calculator.modul");
var global = require("../globals");
var BodyComponent = (function () {
    function BodyComponent(httpService) {
        this.httpService = httpService;
        this.calculator = new calculator_modul_1.Calculator();
        this.diamonds = new Array();
        this.httpService.getAllDiamonds(this);
    }
    BodyComponent.prototype.httpProgress = function (request) {
        switch (request) {
            case global.GET_DIAMONDS:
            case global.ADD_DIAMOND:
                //Todo Progressbar
                break;
        }
    };
    BodyComponent.prototype.httpSuccess = function (request, result) {
        switch (request) {
            case global.GET_DIAMONDS:
                this.diamonds = Array();
                for (var k in result) {
                    var diamond = new diamond_module_1.Diamond();
                    diamond.setShape(result[k][global.SHAPE]);
                    diamond.setSize(result[k][global.SIZE]);
                    diamond.setColor(result[k][global.COLOR]);
                    diamond.setClarity(result[k][global.CLARITY]);
                    diamond.setPrice(result[k][global.PRICE]);
                    diamond.setListPrice(result[k][global.LIST_PRICE]);
                    this.diamonds.push(diamond);
                }
                this.calculator.setupDiamonds(this.diamonds);
                break;
            case global.ADD_DIAMOND:
                this.httpService.getAllDiamonds(this);
                break;
        }
    };
    BodyComponent.prototype.httpError = function (request, message) {
        //Todo: error handler
        console.log(message);
    };
    //Events
    BodyComponent.prototype.onNewDiamond = function (shape, size, color, clarity, price, listPrice) {
        var diamond = new diamond_module_1.Diamond();
        diamond.setShape(shape);
        diamond.setSize(Number(size));
        diamond.setColor(color);
        diamond.setClarity(clarity);
        diamond.setPrice(Number(price));
        diamond.setListPrice(Number(listPrice));
        this.httpService.addDiamond(diamond, this);
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    core_1.Component({
        selector: 'app-body',
        templateUrl: "app/view/html/body.html",
        styleUrls: ['app/view/css/body.css']
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], BodyComponent);
exports.BodyComponent = BodyComponent;
//# sourceMappingURL=body.component.js.map