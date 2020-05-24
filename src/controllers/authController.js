const Response = require('../configs/response')
const Password = require('../configs/password')
const Token = require('../configs/token')


const Auth = require('../models/Auth')

module.exports = {
    Auth: (req, res) => {
        const bearerToken = (req.headers['authorization'] != null || req.headers['authorization'] != undefined) &&
            req.headers['authorization'].split(' ') ? req.headers['authorization'].split(' ')[1] : '';
        console.log("Token.decodeToken(bearerToken)",Token.decodeToken(bearerToken))
        res.status(200).json(Response.success("Success Create User")).end()

    },
    register: (req, res) => {
        req.body.password = Password.create(req.body.password)
        let date = new Date()
        Object.assign(req.body, { created_at: date, update_at: date, active: false })
        Auth(req.body).save((err, doc) => {
            if (err) return res.status(500).json(Response.error("Failed Create User")).end()
            res.status(200).json(Response.success("Success Create User", doc)).end()
        })
    },

    login: (req, res) => {
        Auth.findOne({ email: req.body.email }, (err, doc) => {
            if (err) {
                res.status(500).json(Response.error("Error"))
                return
            }
            else if (doc === undefined || doc == null) {
                res.status(404).json(Response.error(req.body.email + " Not registered in our System"))
                return
            } else {
                if ((req.body.password !== null || req.body.password !== undefined) && Password.check(req.body.password, doc.password)) {
                    let token = Token.create(req.body)
                    res.setHeader('Authorization', 'Bearer ' + token);
                    res.status(200).json(Response.success("E-Mail Not Found"))
                } else {
                    res.status(403).json(Response.error("E-Mail or Password Wrong"))
                }
            }
        })
    },
}