var cassandra = require('cassandra-driver');
const fs = require('fs');
const authProvider = new cassandra.auth.PlainTextAuthProvider('avnadmin', 'xe15saz3novi0vwv');
var client = new cassandra.Client({contactPoints: ['cassandra-39ee5ac0-akash-7b67.aivencloud.com:18267'],keyspace: 'demo', localDataCenter: 'aiven',
    sslOptions: {
        cert: fs.readFileSync('./ca.pem')
    },
    authProvider});
module.exports = {
    create(req, reply){
        const emp_id = cassandra.types.uuid();
        const join_date = new Date();
        if(!(req.payload.name || req.payload.team || req.payload.username))
            {
                return reply("Did you miss the name, username or the team?").code(400);
            }
        client.execute("INSERT INTO employees (employee_id, name, team, joining_date, username) VALUES (?,?,?,?,?)", [emp_id, req.payload.name, req.payload.team, join_date, req.payload.username])
        .then((data)=>reply(`The data entered is: ${data}`).code(200))
        .catch(err=>reply(`following error occured: ${err}`).code(500))
    },
    find(req, reply){
        client.execute("SELECT employee_id, name, age, team, joining_date, username FROM employees")
        .then((employees)=>reply.response(employees).code(200))
    },
    findOne(req, reply){
        if(!req.params.id)
            {
                return reply("Did you forget to provide the id?").code(400);
            }
        const employees = client.execute("SELECT employee_id, name, team, username FROM employees WHERE employee_id=?",[req.params.id])
        .then((data)=>reply.response(data).code(200))
        .catch(err => reply(`An error occurred: ${err}`))
    }
}