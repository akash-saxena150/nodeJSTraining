const JobController = require('./job.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/api/jobs',
        method: 'GET',
        config :{
            handler: JobController.find,
            tags: ['api'],
            description: 'Get all the Jobs',
            notes: 'Returns all the Jobs with Company'
        }
    },

    {
        path: '/api/jobs',
        method: 'POST',
        config: {
            handler: JobController.create,
            validate: {
                payload: Joi.object().keys({
                    title: Joi.string().required(),
                    company: Joi.string().required()
                })
            },
            description: 'Create new Job',
            tags: ['api'],
            notes: 'Returns newly created Job'
        }
    },
];