function Human(name,eyeColor, hairColor){
    this.name = name;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    var myName = name;
    this.eat = function(){
        console.log("I am eating ...");
    }
}
Human.prototype.breathe = function(){
    this.eat();
        return "my name is "+this.name;
    }
function Athlete(name, eye, hair){
    Human.call(this, name, eye, hair);
    this.speed = 50;
    this.breathe = function(){
        
    }
}
Athlete.prototype = Object.create(Human.prototype);
Athlete.prototype.run = function(){
    console.log("I am running");
}
var ronaldo = new Athlete('Ronaldo', 'black', 'brown');
console.log(ronaldo);
