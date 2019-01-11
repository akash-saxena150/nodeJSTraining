var handlers = require('./handlers/employees.handler');
module.exports = [
    {
        path: '/api/employee',
        method: 'POST',
        handler:handlers.create
    },
    {
        path: '/api/employees',
        method: 'GET',
        handler: handlers.find
    },
    {
        path: '/api/employees/{id}',
        method: 'GET',
        handler: handlers.findOne
    }

]