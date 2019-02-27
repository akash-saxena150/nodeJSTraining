class Player{
    constructor(name, age, energy){
        this.name = name;
        this.age = age;
        this.energy = energy;
        this.lives = 3;
    }
    kick(){
        this.energy -= 5;
        this.isDead();
        console.log("Kicked! Enenrgy: "+this.energy);
    }
    potion(){
        this.energy += 10;
        console.log("Potion! Enenrgy: "+this.energy);
    }
    isDead(){
        this.lives = this.energy>0?this.lives:this.lives-1;
        if(this.energy <=0)
            console.log(this.name+ "is dead.")
    }
}
class Villain extends Player{
    constructor(name, age, energy){
        super(name, age, energy)
    }
}
var scorpion = new Villain("Scorpion", 36, 89);
console.log(scorpion);