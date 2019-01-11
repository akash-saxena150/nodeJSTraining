const Application = require('./application.model');
module.exports = {

    async find(req, reply) {
       try {
           const applications =await Application.find({})
               .populate('job')
               .populate('candidate');
           return reply.response(applications)
       }
       catch(err){
           throw err;
       }
    },

    async create(req, reply) {

        try {
            const application = await Application.create({
                hired: req.payload.hired,
                job: req.payload.job,
                candidate: req.payload.candidate
            });

            return reply.response(application);

        }
        catch (err) {
            throw err;
        }
    }
};