var handlers = require('../handlers/api.handler');
module.exports = [
    {        
        path: '/api/employee',
        method: 'POST',
        handler: handlers.create
    },
    {        
        path: '/api/employees',
        method: 'GET',
        handler: handlers.getInfo
    },
    {        
        path: '/api/employees/{id}',
        method: 'GET',
        handler: handlers.getInfoOne
    }
]