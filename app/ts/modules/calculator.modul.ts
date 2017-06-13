import { Diamond } from '../modules/diamond.module';

export class Calculator {
    private diamondsCount: number;
    private avgPrice: number;
    private minPrice: number;

    setupDiamonds(diamonds: Array<Diamond>) {
        
        this.diamondsCount = diamonds.length;
        let singlePrice = 0;
        
        // Calculate Avarage
        diamonds.forEach(diamond => {
            singlePrice += diamond.getPrice();
        });

        this.avgPrice = (singlePrice / this.diamondsCount);
        
        //Get minumim price
        this.minPrice =  Math.min.apply(Math,diamonds.map(function(price){return price.getPrice()}));
        
    }
    getAvg() {
        return this.avgPrice;
    }
    getNumOfDiamonds() {
        return this.diamondsCount;
    }
    getMinPrice() {
        return this.minPrice;
    }
}