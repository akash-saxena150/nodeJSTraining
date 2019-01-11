const {cassandra, client} = require('./dependencies');
module.exports={
    getInfo(req, reply){
        client.execute("SELECT * FROM employees")
        .then(record=>{
            record.rows.forEach(row=>console.log(row.employee_id, row.name));
            return (
                reply.view('employeeList', {title: "Here's our employee list:", employees: record.rows})
            )
        })
        
    }
}