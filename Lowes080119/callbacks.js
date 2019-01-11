function greet(success, err){
    let score = parseInt(10*Math.random());
    if(score>5)
        {
            success();
            return;
        }
    err();
}
function allowDonuts(){
    console.log("Here are your donuts!")
}
function badMarks(){
    console.log("Darn! No donuts for you")
}

greet(allowDonuts, badMarks);
