const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    lastname: {
        type: String,
        required: true,
        trim:true
    },
    username: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String
    },
    hashpassword: {
        type: String,
        required: true,
        trim:true
    },
    acta: {
    }

}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)