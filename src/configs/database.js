const mongoose = require('mongoose')
class database {
    connect() {
        mongoose.connect('mongodb://user1:user1@localhost:27017/fajruldb', { useNewUrlParser: true, useUnifiedTopology: true })
    }
}
module.exports = new database()
