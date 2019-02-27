
function Player(name, age, energy){
    this.name = name;
    this.age = age;
    this.energy = energy;
    this.lives = 3;
}
Player.prototype.kick = function(){
    this.energy -= 5;
    this.isDead();
    console.log("Kicked! Enenrgy: "+this.energy);
}
Player.prototype.potion = function(){
    this.energy += 10;
    console.log("Potion! Enenrgy: "+this.energy);
}
Player.prototype.isDead = function(){
    this.lives = this.energy>0?this.lives:this.lives-1;
    if(this.energy <=0)
        console.log(this.name+ "is dead.")
}
var Hero = function(name, age, energy){
    Player.call(this, name, age, energy);
}
Hero.prototype = Object.create(Player.prototype);

var Villain = function(name, age, energy){
    Player.call(this, name, age, energy);
}
Villain.prototype = Object.create(Player.prototype);


var scorpion = new Villain("Scorpion", 45, 30);
var leuKang = new Hero("Leu Kang", 50, 85);
scorpion.finishHim = function(){
    this.energy -= 15;
    this.isDead();
    console.log("Finishing! Enenrgy: "+this.energy);
}
leuKang.spiral = function(){
    this.energy -= 17;
    this.isDead();
}
scorpion.kick();
scorpion.kick();
scorpion.finishHim();
scorpion.finishHim();

// function Human(name, age, energy){
//     this.name = name;
//     this.age = age;
//     this.energy = energy || 70;
// }
// Human.prototype.walking = function(){
//     this.energy -= 5;
//     console.log(this.energy)
// }
// Human.prototype.eating = function(){
//     this.energy += 10;
//     console.log(this.energy)
// }
// var Athlete = function(name, age, energy, stamina){
//     Human.call(this, name, age, energy);
//     this.stamina = stamina || 80;
// }
// Athlete.prototype = Object.create(Human.prototype);

// var Ronaldo = new Athlete("Ronaldo", 36, 80, 90);
// console.log(Ronaldo);