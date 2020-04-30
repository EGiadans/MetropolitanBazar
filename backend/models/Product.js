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
    }
}, {
    collection: 'products'
});

module.exports = mongoose.model('Product', productSchema);
