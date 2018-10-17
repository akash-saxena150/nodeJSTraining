function GameChar(name, energy){
    this.name = name?name:"Default Char";
    this.energy = energy?energy:50;
}
GameChar.prototype.eat = function(){
    this.energy+=10;
}
GameChar.prototype.kick = function(){
    this.energy-=5;
}
var Scorpio = new GameChar("Scorpio", 50);
var SnakeEyes = new GameChar("Snake Eyes", 80);
console.log("Scorpio",Scorpio);
console.log("SnakeEyes",SnakeEyes);
