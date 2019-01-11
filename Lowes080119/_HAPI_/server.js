//loading Hapi
const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
const handlebars = require('handlebars');
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
const routeInfo = require('./routes/apiRoutes');
const fileRouteInfo = require('./routes/fileRoutes');

server.register(Vision, (err) => {
    server.views({
        engines: {
            html: handlebars
        },
        path: __dirname + '/templates'
    });
    server.route(routeInfo);
    server.route(fileRouteInfo);
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
    })
});


// server.route({//update the employee
//     path: '/api/employees/{id}',
//     method: 'PUT',
//     handler(req, reply){
//         client.execute("SELECT * FROM employees WHERE employee_id=?",[req.params.id])
//         .then((data)=>{
//             let tempData = {};
//             tempData.name = req.payload.name || data.rows[0].name;
//             tempData.username = req.payload.username || data.rows[0].username;
//             tempData.team = req.payload.team || data.rows[0].team;
//             client.execute("UPDATE employees SET name = ?, team = ?, joining_date=?, username = ? WHERE employee_id=?",[tempData.name, tempData.team, data.rows[0].joining_date, tempData.username, req.params.id])            
//         })
//         .then(data=> reply(`Hey! Record upddated. Updated info: data.rows`).code(200))
//         .catch(err => reply(`An error occurred: ${err}`))
//     }
// })
//Start the server
server.start(err=>{//Let's discuss the arrow function
    if(err)
        {
            throw err;
        }
    console.log(`Server started at port: ${server.info.port}`)
});
