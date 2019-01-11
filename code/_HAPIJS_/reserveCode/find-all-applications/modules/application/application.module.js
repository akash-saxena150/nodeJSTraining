const applicationRoutes = require('./application.routes');
const ApplicationModule = {
    register: (server, options, next) => {

        server.route(applicationRoutes);
        next();
    }
};

ApplicationModule.register.attributes = {
    name: 'ApplicationModule',
    pkg: require('../../package.json')
};


module.exports = ApplicationModule;