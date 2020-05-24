const jwt = require('jsonwebtoken')

const token = {
    create: (payload) => {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: payload
        }, 'secret');
    },

    decodeToken: (bearerToken) => {
        const result = {}
        jwt.verify(bearerToken, 'secret', (err, decoded) => {
            if (err){
                result.err= err
            }else{
                result.succes=decoded
            }
            console.log(result)
            return result
        })
    }
}


module.exports = token