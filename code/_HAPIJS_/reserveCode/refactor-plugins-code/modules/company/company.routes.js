const CompanyController = require('./company.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    city: Joi.string().optional(),
    address: Joi.string().optional(),
});

module.exports = [
    {
        path: '/api/companies',
        method: 'POST',
        config: {
            validate: {
                payload: schema
            },
            handler: CompanyController.create,
            description: 'Create new Company',
            tags: ['api'],
            notes: 'Returns newly created Company'
        }
    },
    {
        path: '/api/companies',
        method: 'GET',
        config: {
            handler: CompanyController.find,
            tags: ['api'],
            description: 'Find all the Companies',
            notes: 'Returns all the Companies'
        }


    },
    {
        path: '/api/companies/{id}',
        method: 'GET',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            },
            handler: CompanyController.findOne,
            tags: ['api'],
            description: 'Find Company By Id',
            notes: 'Returns a single Company'

        }
    },
    {
        path: '/api/companies/{id}',
        method: 'DELETE',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                })
            },
            handler: CompanyController.delete,
            tags: ['api'],
            description: 'Delete Company By Id',
            notes: 'Returns a deleted message'
        }
    },
    {
        path: '/api/companies/{id}',
        method: 'PUT',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                }),
                payload:Joi.object().keys({
                    name: Joi.string().optional(),
                    city: Joi.string().optional(),
                    address: Joi.string().optional(),
                })
            },
            handler: CompanyController.update,
            tags: ['api'],
            description: 'Update Company By Id',
            notes: 'Returns a updated Company'

        }
    }
];