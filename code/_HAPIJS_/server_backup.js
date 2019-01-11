//import Hapi
const Hapi = require('hapi');
const fs = require('fs');

//create the server
const server = new Hapi.Server();

//create the connection and set the port
server.connection({host: '127.0.0.1', port: '3000'});

var cassandra = require('cassandra-driver');

const authProvider = new cassandra.auth.PlainTextAuthProvider('avnadmin', 'xe15saz3novi0vwv');
var client = new cassandra.Client({contactPoints: ['cassandra-39ee5ac0-akash-7b67.aivencloud.com:18267'],keyspace: 'demo', localDataCenter: 'aiven',
    sslOptions: {
        cert: fs.readFileSync('./ca.pem')
    },
    authProvider});
// client.execute("CREATE KEYSPACE IF NOT EXISTS demo WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}")
// .then(()=>client.execute("USE demo"))
// .then(()=>client.execute("CREATE TABLE IF NOT EXISTS employees (employee_id uuid,name text,age int ,team text,username text,PRIMARY KEY (employee_id))"))
// .then(()=>client.execute("INSERT INTO employees (employee_id, name, team, joining_date, username) VALUES (?,?,?,?,?)", [cassandra.types.uuid(), "Akash", "PDP", (new Date()), "aks.gsg"]))
// .then(()=>client.execute("SELECT employee_id, name, age, team, joining_date, username FROM employees"))
// .then(results=>results.rows.forEach(row=>console.log(row.employee_id, row.name)))
// .then(() => client.shutdown())
// .catch(error => console.error(error));

server.route({
    path: '/',
    method: 'GET',
    handler(req, reply){
        reply('Welcome onboard!')
    }
});
server.route({
    path: '/api',
    method: 'GET',
    handler(req, reply){
        reply('Sure! Let me know what to pull')
    }
})
server.route({
    path: '/api/employee',
    method: 'POST',
    handler(req, reply){
        const emp_id = cassandra.types.uuid();
        const join_date = new Date();
        if(!(req.payload.name || req.payload.team || req.payload.username))
            {
                return reply("Did you miss the name, username or the team?").code(400);
            }
        client.execute("INSERT INTO employees (employee_id, name, team, joining_date, username) VALUES (?,?,?,?,?)", [emp_id, req.payload.name, req.payload.team, join_date, req.payload.username])
        .then((data)=>reply(`The data entered is: ${data}`).code(200))
        .catch(err=>reply(`following error occured: ${err}`).code(500))
    }
})
server.route({
    path: '/api/employees',
    method: 'GET',
    handler(req, reply){
        client.execute("SELECT employee_id, name, age, team, joining_date, username FROM employees")
        .then((employees)=>reply.response(employees).code(200))
    }
})
server.route({
    path: '/api/employees/{id}',
    method: 'GET',
    handler(req, reply){
        if(!req.params.id)
            {
                return reply("Did you forget to provide the id?").code(400);
            }
        const employees = client.execute("SELECT employee_id, name, team, username FROM employees WHERE employee_id=?",[req.params.id])
        .then((data)=>reply.response(data).code(200))
        .catch(err => reply(`An error occurred: ${err}`))
    }
})
server.route({
    path: '/api/employees/{id}',
    method: 'PUT',
    handler(req, reply){
        if(!req.params.id)
            {
                return reply("Did you forget to provide the id?").code(400);
            }
        const employees = client.execute("SELECT employee_id, name, team, username FROM employees WHERE employee_id=?",[req.params.id])
        .then((data)=>reply.response(data).code(200))
        .catch(err => reply(`An error occurred: ${err}`))
    }
})
//Start the server
server.start(err=>{//Let's discuss the arrow function
    if(err)
        {
            throw err;
        }
    console.log(`Server started at port: ${server.info.port}`)
});