a = 10;
function kick(){
    this.energy-=5;
    console.log("Name: "+this.name+ " Enery: "+ this.energy);
}
function eat(){
    this.energy+=10;
    console.log("Name: "+this.name+ " Enery: "+ this.energy);
}
var CharModel = {
    name: '',
    eat: eat,
    kick: kick
}
var SnakeEyes = Object.create(CharModel);
SnakeEyes.name = "Snake eyes";
var Scorpio = Object.create(CharModel);
Scorpio.name = "Scorpio";
SnakeEyes.eat();
SnakeEyes.kick();
SnakeEyes.kick();
Scorpio.kick();
Scorpio.kick();
