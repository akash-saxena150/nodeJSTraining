var handlers = require('../handlers/files.handler');
module.exports = [
    {        
        path: '/employees',
        method: 'GET',
        handler: handlers.getInfo
    }
]