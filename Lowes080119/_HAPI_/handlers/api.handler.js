const {cassandra, client} = require('./dependencies');
module.exports={
    create(req, reply){
        //generate a uid
        const emp_id = cassandra.types.uuid();
        //generate a date
        const join_date = new Date();
        //check if the name or team is missing. If yes, error out and exit
        if(!(req.payload.name && req.payload.team && req.payload.username))
            {
                return reply("Did you miss sending some Data?").code(400)
            }
        //If not, create an employee
        client.execute("INSERT INTO employees (employee_id, name, team, joining_date, username) VALUES (?,?,?,?,?)", [emp_id, req.payload.name, req.payload.team, join_date, req.payload.username])
        .then((data)=>reply(`Record created: ${data}`))
    },
    getInfo(req, reply){
        client.execute("SELECT * FROM employees")
        .then(record=>{
            record.rows.forEach(row=>console.log(row.employee_id, row.name));
            return reply(record.rows).code(200);
        })
    },
    getInfoOne(req, reply){
        if(!req.params.id)
            {
                return reply("Hey, did you miss passing the id?").code(400)
            }
        client.execute("SELECT employee_id, name, team, username FROM employees WHERE employee_id=?",[req.params.id])
        .then((record)=>reply.response(record.rows).code(200))
        .catch(err => reply(`An error occurred: ${err}`))
    }
}