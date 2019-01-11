const Job = require('./job.model');
const Company = require('../company/company.model');

module.exports = {

    async find(req, reply) {

        try{

            const jobs = await Job.find({})
                .populate('company');
            return reply.response(jobs);
        }
        catch(err){
            throw err;
        }
    },
    async create(req, reply) {

        try {

            const job = await Job.create({
                title: req.payload.title,
                company: req.payload.company
            });
            const _company = await Company.findById(req.payload.company);
            _company.jobs.push(job);
            await _company.save();

            return reply.response(job);
        }
        catch (err) {
            throw err;
        }
    }
};