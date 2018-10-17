'use strict';

class Person{
    constructor(name, age, energy){
        this.name = name;
        this.age = age;
        this.energy = energy || 50;
    }
    eat(){
        this.energy +=10;
        return (this.energy);
    }
    walk(){
        this.energy -=5;
        return (this.energy);
    }
}
class Sportsman extends Person{
    constructor(sport, name, age, energy){
        super(name, age, energy);
        this.sport = sport || "Everybody's a cricketer";
    }
}
var Akash = new Person("Akash", 34, 80);
console.log(Akash.eat());
console.log(Akash.walk());