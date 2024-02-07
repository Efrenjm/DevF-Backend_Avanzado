const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Plase add your name']
    },
    email: {
        type: String,
        required: [true, 'Please add your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please set your password']
    },
    esAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)