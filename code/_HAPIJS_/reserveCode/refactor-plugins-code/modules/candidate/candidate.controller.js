const Candidate = require('./candidate.model');
const Company = require('../company/company.model');
module.exports = {

    async find(req, reply) {
        try {
            const candidates = await Candidate.find({})
                .populate('company');
            reply.response(candidates);
        } catch (err) {
            throw err;
        }
    },
    async create(req, reply) {

        try {
            const candidate = await Candidate.create({
                first_name: req.payload.first_name,
                last_name: req.payload.last_name,
                email: req.payload.email,
                company: req.payload.company
            });

            const _company = await Company.findById(req.payload.company);
            _company.candidates.push(candidate);
            await _company.save();

            return reply.response(candidate);
        }
        catch (err) {
            throw err;
        }
    }
};