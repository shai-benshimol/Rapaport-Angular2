export class Diamond {
    private shape: string;
    private size: number;
    private color: string;
    private clarity: string;
    private price: number;
    private listPrice: number;
    setShape(shape:string){
        this.shape =shape;
    }
    getShape(){
        return this.shape;
    }
    setSize(size:number){
        this.size= size;
    }
    getSize(){
        return this.size;
    }
    setColor(color:string){
        this.color =color;
    }
    getColor(){
        return this.color;
    }
    setClarity(clarity:string){
        this.clarity =clarity;
    }
    getClarity(){
        return this.clarity;
    }
    setPrice(price:number){
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    setListPrice(listPrice:number){
        this.listPrice =listPrice;
    }
    getListPrice(){
        return this.listPrice;
    }
    
}