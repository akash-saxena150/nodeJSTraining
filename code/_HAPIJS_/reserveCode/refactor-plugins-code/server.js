const hapi = require('hapi');
const server = new hapi.Server();
const plugins = require('./config/plugins');

server.connection({host: '127.0.0.1', port: '3000'});


server.register(plugins, (err) => {

    if (err) {
        throw err;
    }
    server.start(err => {
        if (err) {
            throw err;
        }
        console.log(`Server Running at PORT ${server.info.port}`);
    });
});