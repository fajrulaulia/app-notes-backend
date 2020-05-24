const jwt = require('jsonwebtoken')

const token = {
    create: (payload) => {
        const newPayload={
            _id:payload._id,
            email:payload.email,
            phonenumber:payload.phonenumber,
            username:payload.username
        }
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: newPayload
        }, 'secret');
    },

    decodeToken: (bearerToken) => {
       return jwt.verify(bearerToken, 'secret')
    }
}


module.exports = token