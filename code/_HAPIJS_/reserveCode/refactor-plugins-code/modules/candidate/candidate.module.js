const candidateRoutes = require('./candidate.routes');
const CandidateModule = {
    register: (server, options, next) => {

        server.route(candidateRoutes);
        next();
    }
};

CandidateModule.register.attributes = {
    name: 'CandidateModule',
    pkg: require('../../package.json')
};


module.exports = CandidateModule;