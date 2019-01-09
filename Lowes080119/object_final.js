function Character(n, e, l){
    this.name = n;
    this.energy = e;
    this.life = l
}
Character.prototype.dead = function(){
    console.log(`${this.name} is dead!`);
    this.life = this.life>0? this.life-1:0
}
Character.prototype.hit = function(){
    console.log(`${this.name}'s energy before hit: ${this.energy}`);
    this.energy = this.energy>8?this.energy-8:0;
    console.log(`${this.name}'s energy after hit: ${this.energy}`);
    if(!this.energy)
        this.dead()
}
Character.prototype.kick = function(){
    console.log(`${this.name}'s energy before kick: ${this.energy}`);
    this.energy = this.energy>5?this.energy-5:0;
    console.log(`${this.name}'s energy after kick: ${this.energy}`);
    if(!this.energy)
        this.dead()
}
Character.prototype.potion = function(){
    console.log(`${this.name}'s energy before hit: ${this.energy}`);
    this.energy += 7;
    console.log(`${this.name}'s energy after hit: ${this.energy}`);
}

function Hero(n, e, g){
    Character.call(this, n || 'Liu Kang', e || 100, g||3);
}
Hero.prototype = Object.create(Character.prototype);
Hero.prototype.fly = function(){
    console.log(`${this.name}'s energy before fly: ${this.energy}`);
    this.energy = this.energy>7?this.energy-7:this.energy;
    console.log(`${this.name}'s energy after fly: ${this.energy}`);
    if(this.energy<=7)
        console.log("can't fly");
}
function Villain(n,e,g){
    Character.call(this, n || 'scorpio', e || 120, g||3);
}
Villain.prototype = Object.create(Character.prototype);
Villain.prototype.laugh = function(){
    console.log(`${this.name}'s energy before laugh: ${this.energy}`);//template literal
    this.energy += 1;
    console.log(`${this.name}'s energy after laugh: ${this.energy}`);
}

let liuKang = new Hero("Liu Kang", 100, 0);

let scorpio = new Villain("Scorpion");

console.log(liuKang);
console.log(scorpio);