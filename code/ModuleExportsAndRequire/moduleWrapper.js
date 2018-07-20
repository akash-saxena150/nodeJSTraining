(function(exports, require, module, _filename, _dirname){
    var greet = function() {
        console.log('Hello!');
    };

    module.exports = greet;
});//function wrapping
fn(module.exports, require, module, filename, dirname)//function invocation
return module.exports //returned by require