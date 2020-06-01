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
    url1 : {
        type: String
    },
    url2 : {
        type: String
    },
    url3 : {
        type: String
    },
    owner : {
        type: String
    },
    purchasedBy: {
        type: String
    },
    purchasedAt: {
        type: String
    },
    visibility: {
        type: Number
    }
}, {
    collection: 'products'
});

module.exports = mongoose.model('Product', productSchema);
