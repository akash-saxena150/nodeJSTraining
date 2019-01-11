var name = "Akash";
var greeting = "Hello";
var postGreeting = "How you doing today";
var type = 'exc';
function fetchSign(t){
    switch(t){
        case 'ques':
            return '?';
            break;
        case 'exc':
            return '!';
            break;
        default:
            return '.'
    }
}

//console.log(greeting+" "+name+". "+ postGreeting+(question?'?':'.'));

console.log(`${greeting} ${name}. ${postGreeting}${fetchSign(type)}`);