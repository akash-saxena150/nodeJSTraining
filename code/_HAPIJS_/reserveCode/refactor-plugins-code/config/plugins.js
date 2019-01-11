
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const MongoosePlugin = require('../plugins/mongoose.plugin');
const CompanyModule = require('../modules/company/company.module');
const ApplicationModule = require('../modules/application/application.module');
const CandidateModule = require('../modules/candidate/candidate.module');
const JobModule = require('../modules/job/job.module');

module.exports = [
    {
        register: MongoosePlugin,
        options: {
            mongoDbUri: 'mongodb://127.0.0.1/hapi_db'
        }
    },
    Inert,
    Vision,
    {
        register: HapiSwagger,
        options: {
            info: {
                title: 'API Documentation',
                version: '0.0.1'
            }
        }
    },
    CompanyModule,
    ApplicationModule,
    CandidateModule,
    JobModule
];