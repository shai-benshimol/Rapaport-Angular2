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
var http_1 = require("@angular/http");
var global = require("../globals");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var HttpRequest = (function () {
    function HttpRequest(http) {
        this.http = http;
    }
    HttpRequest.prototype.getAllDiamonds = function (httpResult) {
        //Progress bar
        httpResult.httpProgress(global.GET_DIAMONDS);
        console.log(this.http.get(global.REQ_GET_DIAMOND)
            .subscribe(function (data) {
            if (data.json()[global.SUCCESS])
                httpResult.httpSuccess(global.GET_DIAMONDS, data.json()[global.RESULT]);
            else
                httpResult.httpError(global.GET_DIAMONDS, data.json()[global.MESSAGE]);
        }, function (error) {
            console.log(error.json());
        }));
    };
    return HttpRequest;
}());
HttpRequest = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpRequest);
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=http-request.js.map