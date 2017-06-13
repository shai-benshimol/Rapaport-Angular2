import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Diamond } from '../modules/diamond.module';
import { OnHttpResult } from '../interfaces/http-result.interface';
import * as global from '../globals';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    //Get All Diamonds
    getAllDiamonds(httpResult: OnHttpResult) {

        //Progress bar
        httpResult.httpProgress(global.GET_DIAMONDS);
        this.http.get(global.REQ_GET_DIAMOND)
            .subscribe(data => {
                console.log(data.json());
                if (data.json()[global.SUCCESS])
                    httpResult.httpSuccess(global.GET_DIAMONDS, data.json()[global.RESULT]);
                else
                    httpResult.httpError(global.GET_DIAMONDS, data.json()[global.MESSAGE]);
            }, error => {
                httpResult.httpError(global.GET_DIAMONDS, global.ERR_GLOBAL);
            });
    }
    //Add Diamond
    addDiamond(diamond: Diamond, httpResult: OnHttpResult) {
        httpResult.httpProgress(global.ADD_DIAMOND);
        this.http.post(global.REQ_GET_DIAMOND, diamond)
            .subscribe(data => {
                console.log(data.json());
                if (data.json()[global.SUCCESS])
                    httpResult.httpSuccess(global.ADD_DIAMOND, data.json()[global.RESULT]);
                else
                    httpResult.httpError(global.ADD_DIAMOND, data.json()[global.MESSAGE]);
            }, error => {
                httpResult.httpError(global.ADD_DIAMOND, global.ERR_GLOBAL);
            });
    }
}