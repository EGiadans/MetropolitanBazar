const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let adSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price : {
        type: Number
    },
    date : {
        type: Date
    },
    imageUrl : {
        type: String
    },
    owner: {
        type: String
    }
}, {
    collection: 'ads'
});

module.exports = mongoose.model('Ad', adSchema);