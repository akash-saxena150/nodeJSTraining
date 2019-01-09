var myData = require('./myData.json');
console.log(myData[0].name);
function Employee(n,a,m){
    this.name = n;
    this.age = a;
    this.mobile = m;
}
Employee.prototype.fetchRecord = function(){
    console.log(
        "Name: "+this.name,
        "Age: "+this.age,
        "Mobile: "+this.mobile
    )
}
var emp = {};
for(let i = 0; myData[i]; i++)
    {
        emp[myData[i].name] = new Employee(myData[i].name, myData[i].age, myData[i].mobile);
    }
function getEmpDetails(name){
    emp[name].fetchRecord();
}
getEmpDetails("Akash")