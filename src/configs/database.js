const mongoose = require('mongoose')
require('dotenv').config()
class database {
    async connect() {
        let strConn = 'mongodb://user1:user1@localhost:27017/fajruldb'

        if (process.env.DATABASE_URL != undefined) {
            strConn = 'mongodb://user1:user1@app_database:27017/fajruldb'
        }

        mongoose.connect(strConn, { useUnifiedTopology: true, useNewUrlParser: true });
        const connection = mongoose.connection;
        connection.once("open", function () {
            console.log("MongoDB database connection established successfully");
        });
    }
}
module.exports = new database()
