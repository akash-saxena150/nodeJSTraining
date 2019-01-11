//import Hapi
const Hapi = require('hapi');
/////for views
const Path = require('path');
const Hoek = require('hoek');
const Vision = require('vision');
////views requires end

//create the server
const server = new Hapi.Server();
const employeeAPIRoutes = require('./routes');
//create the connection and set the port
server.connection({host: '127.0.0.1', port: '3000'});

///set the templating engine

// const start = async () => {

//     await server.register(require('vision'));

//     server.views({
//         engines: {
//             module: require('handlebars'),
//             compileMode: 'sync' // engine specific
//         },
//         relativeTo: __dirname,
//         path: 'templates'
//     });
// };
server.register(Vision, (err) => {
    server.views({
        engines: {
            html: require('handlebars')
        },
        path: __dirname + '/templates'
    });
    server.route(employeeAPIRoutes);
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
        path: '/employees',
        method: 'GET',
        handler(req, reply){
            reply.view('employees', {title: 'Employee list', employees: [{name: 'Akash'}, {name: 'Akshay'}]});
        }
    })
});

////templating engine ends

// client.execute("CREATE KEYSPACE IF NOT EXISTS demo WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}")
// .then(()=>client.execute("USE demo"))
// .then(()=>client.execute("CREATE TABLE IF NOT EXISTS employees (employee_id uuid,name text,age int ,team text,username text,PRIMARY KEY (employee_id))"))
// .then(()=>client.execute("INSERT INTO employees (employee_id, name, team, joining_date, username) VALUES (?,?,?,?,?)", [cassandra.types.uuid(), "Akash", "PDP", (new Date()), "aks.gsg"]))
// .then(()=>client.execute("SELECT employee_id, name, age, team, joining_date, username FROM employees"))
// .then(results=>results.rows.forEach(row=>console.log(row.employee_id, row.name)))
// .then(() => client.shutdown())
// .catch(error => console.error(error));


//Start the server
server.start(err=>{//Let's discuss the arrow function
    if(err)
        {
            throw err;
        }
    console.log(`Server started at port: ${server.info.port}`)
});