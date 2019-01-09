function Athlete(n, a, s, st, e){
    this.name = n;
    this.age = a;
    this.sport = s;
    this.stamina = st;
    this.enegry = e;
}
Athlete.prototype.walk = function(){
    this.energy -= 5;
}
Athlete.prototype.run = function(){
    this.energy -= 8;
    console.log(this.name+" energy: "+this.energy)
};
Athlete.prototype.eat = function(){
    this.energy += 10;
};
var kohli = new Athlete("Kohli", 30, "Cricket", 80, 100);
var ronaldo = new Athlete("Ronaldo", 34, "Football", 60, 120);
console.log("kohli",kohli);
console.log("ronaldo",ronaldo);
ronaldo.kick = function(){
    this.energy -= 15;
    console.log(this.name+ " energy is: "+ this.energy);
};
ronaldo.kick();

function Cricket(){
    Athlete.call(this, "Cricketer", 34, "Cricket", 100, 90);
}
Cricket.prototype = Object.create(Athlete.prototype);
let Rahul = new Cricket;
Rahul.run();
console.log("Running cricket: ");


