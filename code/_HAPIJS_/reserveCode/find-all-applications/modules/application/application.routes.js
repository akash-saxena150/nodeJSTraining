const ApplicationController = require('./application.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/api/applications',
        method: 'GET',
        config: {
            handler: ApplicationController.find,
            description:'Find all the Applications',
            tags: ['api'],
            notes:'Returns all the Applications'

        }
    },
    {
        path: '/api/applications',
        method: 'POST',
        config: {
            handler: ApplicationController.create,
            validate:{
                payload: Joi.object().keys({
                    hired: Joi.boolean().optional(),
                    job: Joi.string().required(),
                    candidate: Joi.string().required(),
                })
            },
            description:'Create new Application',
            tags: ['api'],
            notes:'Returns newly created Application'
        }
    }
];