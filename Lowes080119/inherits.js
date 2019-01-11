class Human{
    constructor(){
        this.name = "Akash";
        this.age = 34;
        this.energy = 100;
    };
    eat(){
        this.energy += 10
    }
}

class Athlete extends Human{
    constructor(){
        super(Human);
        this.sport = "Cricket";    
    }
}
var kohli = new Athlete;
console.log("Kohli",kohli);