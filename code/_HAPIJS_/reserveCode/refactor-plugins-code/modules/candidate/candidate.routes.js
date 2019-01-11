const CandidateController = require('./candidate.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/api/candidates',
        method: 'GET',
        config: {
            handler: CandidateController.find,
            tags: ['api'],
            description: 'Find all Candidates',
            notes: 'Returns all Candidates'
        }
    },
    {
        path: '/api/candidates',
        method: 'POST',
        config: {
            handler: CandidateController.create,
            validate: {
                payload: Joi.object().keys({
                    first_name: Joi.string().required(),
                    last_name: Joi.string().required(),
                    email: Joi.string().required(),
                    company: Joi.string().required(),
                })
            },
            tags: ['api'],
            description:'Create new Candidate',
            notes: 'Returns newly created Candidate'

        }
    },

];