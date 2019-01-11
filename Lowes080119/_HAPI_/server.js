//loading Hapi
const Hapi = require('hapi');
const fs = require('fs');
var cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider('avnadmin', 'xe15saz3novi0vwv');
var client = new cassandra.Client({contactPoints: ['cassandra-39ee5ac0-akash-7b67.aivencloud.com:18267'],keyspace: 'demo', localDataCenter: 'aiven',
    sslOptions: {
        cert: fs.readFileSync('./ca.pem')
    },
    authProvider});
// client.execute("CREATE KEYSPACE IF NOT EXISTS demo WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}")
// .then(()=>client.execute("USE demo"))
// .then(()=>client.execute("CREATE TABLE IF NOT EXISTS employees (employee_id uuid,name text,team text,joining_date date,username text,PRIMARY KEY (employee_id))"))
// .then(()=>client.execute("INSERT INTO employees (employee_id, name, team, joining_date, username) VALUES (?,?,?,?,?)", [cassandra.types.uuid(), "Shraddha", "PDP", (new Date()), "Shreds.gsg"]))
// .then(()=>client.execute("SELECT employee_id, name, team, joining_date, username FROM employees"))
// .then(results=>results.rows.forEach(row=>console.log(row.employee_id, row.name)))
// .then(() => client.shutdown())
// .catch(error => console.error(error));
//creating a server
const server = new Hapi.Server();
const port = process.env.PORT || 3000;
//establish a connection and specify the port
server.connection({host: '127.0.0.1', port: port});
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
        reply('Listening for APIs here ...')
    }
});
server.route({
    path: '/api/employee',
    method: 'POST',
    handler(req, reply){
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
    }
});
server.route({
    path: '/api/employees',
    method: 'GET',
    handler(req, reply){
        client.execute("SELECT * FROM employees")
        .then(results=>{
            results.rows.forEach(row=>console.log(row.employee_id, row.name));
            return reply(results.rows).code(200);
        })
    }
});
server.route({
    path: '/api/employees/{id}',
    method: 'GET',
    handler(req, reply){
        console.log(req);
        if(!req.params.id)
            {
                return reply("Hey, did you miss passing the id?").code(400)
            }
        client.execute("SELECT employee_id, name, team, username FROM employees WHERE employee_id=?",[req.params.id])
        .then((record)=>reply.response(record.rows).code(200))
        .catch(err => reply(`An error occurred: ${err}`))
    }
});
//Start the server
server.start(err=>{//Let's discuss the arrow function
    if(err)
        {
            throw err;
        }
    console.log(`Server started at port: ${server.info.port}`)
});
