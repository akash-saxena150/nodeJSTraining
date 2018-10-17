var school = {
    name: "St John Bosco"
}
school.exams = function(){
    console.log("Exams are from 24th");
}
var schoolEvents = [];
school.events = schoolEvents;
schoolEvents.push(function(){
    console.log("Tomorrow is a holiday");
});
schoolEvents.push(function(){
    console.log("25th is the PTA");
});
schoolEvents.push(function(){
    console.log("Let's participate in Diwali event");
});
school.events[0]();
