function callbackFn(fn, name){
    console.log("Hey! How you doing?");
    fn(name);//function(){}
}
callbackFn(
    function(name){console.log( `Hey ${name}`)}, 
    "Akash"
)