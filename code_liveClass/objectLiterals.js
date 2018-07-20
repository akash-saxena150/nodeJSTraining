var subjects = ['physics', 'chemistry', 'maths'];
var records = [
    {name: 'Akash', age: 33, marks: [10,20,30], avg: avg},
    {name: 'Akshay', age: 30, marks: [30,40,30]},
    {name: 'Shraddha', age: 34, marks: [15,25,35]},
];
function avg(vals){
    var sum = 0, i = 0;
    for(i = 0; vals[i]; i++)
        {
            console.log(subjects[i]+": "+vals[i]);
            sum += vals[i];
        }
    return sum/i;
}
function displayRecords(recs, props){
    for(var i = 0; recs[i]; i++)
        {
            var rec = recs[i];
            for(var j=0; props[j]; j++)
                {
                    console.log(rec[props[j]])
                }
        }
}
    displayRecords(records, ['name', 'age', 'avg'])