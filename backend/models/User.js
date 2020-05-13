const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let wishesSchema = new Schema({name: String})
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
        type: String,
        required: true,
    },
    hashpassword: {
        type: String,
        required: true,
        trim:true
    },
    acta: String,

    wishes: [wishesSchema]
    
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)