'use strict'
var studentRecs = []
function addRecord(record, success, err){
    for(var key in record)
        {
            if(!record[key])
                {
                    err(`${key} is missing`);
                    return;
                }                
        }
    studentRecs.push(record);
    success(studentRecs);
}
function err(errMsg){
    console.log(errMsg)
}
function success(data){
    console.log('Success! The record data below:',data)
}
addRecord({name: 'Akash', id: '01', age: 34}, success, err);
addRecord({name: 'Akshay', id: '02', age: 28}, success, err);
addRecord({name: 'Shraddha', id: '03', age: 34}, success, err);
addRecord({name: 'Random', id: '01', age: null}, success, err);