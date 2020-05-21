var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book = new Schema({
  title   : String,
  author  : String,
  category: String,
},
{ collection: "Books", versionKey: false}
);

module.exports = mongoose.model('Books', Book );