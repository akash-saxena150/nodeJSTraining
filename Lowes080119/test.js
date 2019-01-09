function test(exports){
    exports.name = "Akash";
}

var module = {
    exports:{age: 34, company: "GetSetGo Fitness"}
}
test(module.exports);
console.log(module.exports);
