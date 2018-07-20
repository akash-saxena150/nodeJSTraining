function en(){
console.log("Hello there!");
}
function es(){
console.log("Hola!");
}
module.exports = {
    greet: {
        en: en,
        es: es
    }
};