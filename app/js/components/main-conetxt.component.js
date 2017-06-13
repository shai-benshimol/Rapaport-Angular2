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
var statistic_component_1 = require("./statistic.component");
var http_service_1 = require("../services/http.service");
var diamond_module_1 = require("../modules/diamond.module");
var calculator_modul_1 = require("../modules/calculator.modul");
var global = require("../globals");
var ContextComponent = (function () {
    function ContextComponent(httpService) {
        this.httpService = httpService;
        this.avgPrice = "vvv";
        this.diamonds = new Array();
        this.calculator = new calculator_modul_1.Calculator();
        this.httpService.getAllDiamonds(this);
    }
    ContextComponent.prototype.httpProgress = function (request) {
        switch (request) {
            case global.GET_DIAMONDS:
            case global.ADD_DIAMOND:
                //Todo: progress bar
                break;
        }
    };
    ContextComponent.prototype.httpSuccess = function (request, result) {
        switch (request) {
            case global.GET_DIAMONDS:
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
                break;
        }
    };
    ContextComponent.prototype.httpError = function (request, message) {
        //Todo: error handler
        console.log(message);
    };
    return ContextComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ContextComponent.prototype, "avgPrice", void 0);
ContextComponent = __decorate([
    core_1.Component({
        selector: 'app-main-context',
        template: "<app-statistic></app-statistic>\n              ",
        providers: [statistic_component_1.StatisticComponent]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], ContextComponent);
exports.ContextComponent = ContextComponent;
//# sourceMappingURL=main-conetxt.component.js.map