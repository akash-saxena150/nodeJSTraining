function greetEn(name){
    console.log("Hello, "+name);
}
function greetEs(name){
    console.log("Hola, "+name);
}
function greetMe(name, lang){
    var userName = name;
    var a = 10;
    return function(){
        switch(lang){
            case ('es'):
            greetEs(userName);
            break;
            case ('en'):
            greetEn(userName);
            break;
        }
    }
}

var greetPref = greetMe("Akash", 'es');
greetPref();
greetPref = null;