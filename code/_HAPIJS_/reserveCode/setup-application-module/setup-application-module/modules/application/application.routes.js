const ApplicationController = require('./application.controller');
module.exports  = [
    {
        path : '/api/applications',
        method: 'GET',
        handler: ApplicationController.find
    }
];