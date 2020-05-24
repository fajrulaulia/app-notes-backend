const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Auth = new Schema({
    email: String,
    phonenumber: { type : String , unique : true, required : true, dropDups: true },
    username: String,
    password: String,
    active:Boolean,
    created_at: Date,
    update_at: Date
},
    { collection: "Auth", versionKey: false }
);

module.exports = mongoose.model('Auth', Auth);