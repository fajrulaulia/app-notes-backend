const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Auth = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    phonenumber: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
    },
    update_at: {
        type: Date,
        required: true,
    },
},
    { collection: "Auth", versionKey: false }
);

module.exports = mongoose.model('Auth', Auth);