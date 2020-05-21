var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Notes = new Schema({
  title   : String,
  content  : String,
  thumbnail: String,
},
{ collection: "Notes", versionKey: false}
);

module.exports = mongoose.model('Notes', Notes );