const mongoose = require('mongoose');

const LienSchema = mongoose.Schema({

    filetype: {
        type: String

    },
    address: {
        type: String

    },
    city: {
        type: String

    },
    state: {
        type: String

    },
    zip: {
        type: Number

    },
    plaintiff: {
        type: String

    },
    amount: {
        type: Number

    },
    county: {
        type: String

    },    
    loaddate: {
        type: Date,
        default: Date.now
    },
    filingdate: {
        type: Date
    },
    telephone: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('lien', LienSchema);