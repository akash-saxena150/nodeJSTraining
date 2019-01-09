let Athlete = {
    name: "Akash",
    age: 34,
    stamina: 90,
    sport: 'Cricket',
    energy: 100,
    eat: function(){
        console.log("My energy before eating: "+this.energy);
        this.energy += 10
        console.log("My energy after eating: "+this.energy);
    },
    checkStamina: function(val, type){
        if((this.energy - val) < this.stamina)
            {
                console.log("Can't "+type+" anymore");
                return false;
            }
        return true;
    },
    walk: function(){
        console.log(this.name+" energy before walking: "+this.energy);
        if(!this.checkStamina(5, "walk"))
            return;
        this.energy -= 5;
        console.log(this.name+" energy after walking: "+this.energy);
    },
    run: function(){
        console.log("The this object: ",this);
        console.log(this.name+" energy before running: "+this.energy);
        if(!this.checkStamina(8, "run"))
            return;
        this.energy -= 8;
        console.log(this.name+" energy after running: "+this.energy);
    },
    initialize: function(name, age, sport, energy, stamina){
        this.name = name;
        this.age = age;
        this.sport = sport;
        this.energy = energy;
        this.stamina = stamina;
    }
};
var kohli = Object.create(Athlete);
var ronaldo = Object.create(Athlete);
kohli.initialize("Kolhi", 30, "Cricket", 100, 80);
ronaldo.initialize("ROnaldo", 37, "Football", 120, 70);
kohli.run();
kohli.run();
kohli.run();
ronaldo.run();
ronaldo.run();
ronaldo.run();
console.log(kohli);
console.log(ronaldo)
