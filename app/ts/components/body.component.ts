import { Component } from '@angular/core';
import { OnHttpResult } from '../interfaces/http-result.interface';
import { HttpService } from '../services/http.service';
import { Diamond } from '../modules/diamond.module';
import { Calculator } from '../modules/calculator.modul';
import * as global from '../globals';


@Component({
    selector: 'app-body',
    templateUrl: `app/view/html/body.html`,
    styleUrls: ['app/view/css/body.css']
})
export class BodyComponent implements OnHttpResult {
    private diamonds: Array<Diamond>;
    private calculator: Calculator;
    constructor(private httpService: HttpService) {
        this.calculator = new Calculator();
        this.diamonds = new Array<Diamond>();
        this.httpService.getAllDiamonds(this);

    }
    httpProgress(request: string): void {

        switch (request) {
            case global.GET_DIAMONDS:
            case global.ADD_DIAMOND:
            //Todo Progressbar
                break;
        }
    }
    httpSuccess(request: string, result: JSON): void {
        switch (request) {
            case global.GET_DIAMONDS:
            this.diamonds = Array<Diamond>();
                for (var k in result) {
                    let diamond = new Diamond();
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
    }
    httpError(request: string, message: string): void {
        //Todo: error handler
        console.log(message);
    }

    //Events
    onNewDiamond(shape: string, size: string, color: string, clarity: string, price: string, listPrice: string) {
        let diamond = new Diamond();
        diamond.setShape(shape);
        diamond.setSize(Number(size));
        diamond.setColor(color);
        diamond.setClarity(clarity);
        diamond.setPrice(Number(price));
        diamond.setListPrice(Number(listPrice));

        this.httpService.addDiamond(diamond, this);
    }
}