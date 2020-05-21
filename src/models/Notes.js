const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notes = new Schema({
  title: String,
  content: String,
  thumbnail: String,
},
  { collection: "Notes", versionKey: false }
);

module.exports = mongoose.model('Notes', Notes);