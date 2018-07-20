class sellingItem{
    constructor(name){
        this.qnty = 20;
        this.price = 30;
    }
    sold(){
        this.qnty--;
    }
}
var pen = new sellingItem("Akash");
export default sellingItem;