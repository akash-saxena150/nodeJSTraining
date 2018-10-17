var person = {
    name: 'Akash',
    greet: function(data){
        console.log("Welcome "+this.name+data);
    }
}
var obj = {name: 'Akshay'};
person.greet.apply(obj, [". How you doing?", arg1, arg2, arg3]);//var temp = {name: 'Akshay'}; temp.prototype = person.prototype; temp.greet()