const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({
    
    name: {
        type: String
    },

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
        type: String

    },
    county: {
        type: String

    },    
    loaddate: {
        type: Date
    },
    filingdate: {
        type: Date
    },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        isRequired: true,
    },
    leinid: {
        type: String
    },
    lexid: {
        type: String
    },
    businessphone: {
        type: String
    },
    consumerphone: {
        type: String
    },  
    duration: {
        type: String
    },  
    callid: {
        type: String
    },
    businessphone: {
        type: String
    },
    callrecording: {
        type: String
    },
    startime: {
        type: Date
    },
    trackingphone: {
        type: String
    },
    compliance: {
        type: String
    },
    filingstatus: {
        type: String
    },
    representation: {
        type: String
    }

});

module.exports = mongoose.model('lead', LeadSchema);
