const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notes = new Schema({
  title: String,
  content: String,
  thumbnail: Object,
  created_at: Date,
  update_at: Date,
  auth: {

    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auth'
  }

},
  { collection: "Notes", versionKey: false }
);

module.exports = mongoose.model('Notes', Notes);