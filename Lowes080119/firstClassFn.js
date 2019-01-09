



// function test(){
//     return 10;
// }
// var a = test();
// console.log(a);


var greetEn = function(name, fn){
    fn(name);
};

var greetEs = function(name){
    console.log("Hola Amigo "+ name+"!");
};
var evening = function(name){
    console.log("Good evening, "+name+"!");
}
function morning(name){
    console.log("Good morning, "+name+"!");
}
function greetMe(name, en, es, lang, type){
    switch(lang){
        case ('en'):
            var tempFn = evening;
            if(type=="morning")
                tempFn = morning;
            en(name, tempFn);
            break;
        case ('es'):
            es(name);
            break;
    }
}
greetMe("Akash", greetEn, greetEs, "en", "morning");
