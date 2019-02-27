let obj = {name: "Akash", age: 34};

function test({name, age}){
    console.log(name, age);
}

test(obj);//spread operator