///less sensible names
// function testFn(){
//     console.log("Hello there!");
// };
// var myFn = testFn;
// console.log(myFn());

//// more sensible names

// function greetMe(greetr, name, lang){
//     greetr(function(lang){
//         var greeting = "";
//         switch(lang){
//             case 'en':
//             greeting = "Hello";
//             break;
//             case 'es':
//             greeting = "Hola";
//             break;
//         }
//         return greeting;
//     }, name, lang);
// }
// function greetUser(greeting, name, lang){
// console.log(greeting(lang)+" "+name+"!");
// }
// greetMe(greetUser, "Akash", "en");

////Closures
// function prepareGreet(lang, name){
//     switch (lang){
//         case 'en':
//         return (function(){
//             console.log("Hello "+name+"!");
//         })
//         break;
//         case 'es':
//         return (function(){
//             console.log("Hola "+name+"!");
//         })
//         break;
//     }
// }
// var greetMe = prepareGreet('en', 'Akash');
// console.log(greetMe);
// greetMe();

function generateRandom(success, err){
    var num = 10*Math.random();
    if(num>=5)
        return success
    return err;
};
var success= function(){
    console.log("Yes, the number was valid!")
}
var err = function(){
    console.log("Bad bad number! No donut for you.")
}
var fnStatus = generateRandom(success, err);
fnStatus();