const jobRoutes = require('./job.routes');
const JobModule = {
    register: (server, options, next) => {

        server.route(jobRoutes);
        next();
    }
};

JobModule.register.attributes = {
    name: 'JobModule',
    pkg: require('../../package.json')
};


module.exports = JobModule;