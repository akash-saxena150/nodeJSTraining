const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
});


module.exports = mongoose.model('Candidate', CandidateSchema);
