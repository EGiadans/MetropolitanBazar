const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    price : {
        type: Number
    },
    date : {
        type: Date
    },
    file1 : {
        type: String
    }
}, {
    collection: 'products'
});

module.exports = mongoose.model('Product', productSchema);
