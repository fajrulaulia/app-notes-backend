const jwt = require('jsonwebtoken')
const Response = require('../configs/response')

verifyToken = (req, res, next) => {
    const bearerToken = (req.headers['authorization'] != null || req.headers['authorization'] != undefined) &&
        req.headers['authorization'].split(' ') ? req.headers['authorization'].split(' ')[1] : '';
    jwt.verify(bearerToken, 'secret', (err) => {
        if (err) {
            res.status(401).json(Response.error("Token Failed or Expired"))
        } else {
            next()
        }
    })
}

module.exports = verifyToken