const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    name: {
        required: true,
        type: String
    },
    city: String,
    address: String,
    candidates: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Candidate'
        }
    ],
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Job'
        }
    ]
});

module.exports = mongoose.model('Company', CompanySchema);