const Company = require('./company.model');

module.exports = {

    create(req, reply) {
        Company.create({
            name: req.payload.name,
            city: req.payload.city,
            address: req.payload.address
        }, (err, savedCompany) => {
            if (err) {
                return reply(err).code(500);
            }
            return reply.response(savedCompany);
        });
    },
    async find(req, reply) {

        try {
            const companies = await Company.find({})
                .populate('candidates')
                .populate('jobs');

            return reply.response(companies);
        }
        catch(err){
            throw err;
        }
    },
    findOne(req, reply) {
        Company.findById(req.params.id, (err, company) => {

            if (err) {
                return reply(err).code(404);
            }
            return reply.response(company);

        })

    },
    update(req, reply) {
        let attributes = {};

        if (req.payload.name) {
            attributes.name = req.payload.name;
        }
        if (req.payload.city) {
            attributes.city = req.payload.city;
        }
        if (req.payload.address) {
            attributes.address = req.payload.address;
        }
        Company.findByIdAndUpdate(req.params.id, attributes, {new: true}, (err, company) => {
            if (err) {
                return reply(err).code(500);
            }
            return reply.response(company);
        })

    },
    delete(req, reply) {
        Company.findByIdAndRemove(req.params.id, (err, result) => {
            if (err) {
                return reply(err).code(500);
            }
            return reply.response({msg: `company has deleted with id ${req.params.id}`});
        })
    }

};