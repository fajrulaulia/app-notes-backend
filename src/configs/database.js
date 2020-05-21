const mongoose = require('mongoose')
require('dotenv').config()
class database {
    async connect() {
        const param = [
            process.env.MONGO_HOST,
            process.env.MONGO_PORT,
            process.env.MONGO_USER,
            process.env.MONGO_PWD,
            process.env.MONGO_DB,
        ]
        
        let strConn = `mongodb://${param[2]}:${param[3]}@${param[0]}:${param[1]}/${param[4]}`
        if (process.env.IS_MONGO_CONTAINER && process.env.IS_MONGO_CONTAINER === 'true') {
            strConn = `mongodb://${param[2]}:${param[3]}@${param[0]}:${param[1]}/${param[4]}`
        }

        mongoose.connect(
            strConn,{
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        )
        .then(console.log('DB Connection Successfull'))
        .catch((err) => {
            console.error(err);
        });
    }
}
module.exports = new database()
