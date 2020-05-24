const Response = require('../configs/response')
const Password = require('../configs/password')
const Token = require('../configs/token')


const Auth = require('../models/Auth')

module.exports = {
  Auth: (req, res) => {
    const bearerToken = (req.headers['authorization'] != null || req.headers['authorization'] != undefined) &&
      req.headers['authorization'].split(' ') ? req.headers['authorization'].split(' ')[1] : '';
    res.status(200).json(Response.success("Success Create User"))

  },
  register: (req, res) => {
    req.body.password = Password.create(req.body.password)
    let date = new Date()
    Object.assign(req.body, { created_at: date, update_at: date, active: false })
    Auth(req.body).save((err, doc) => {
      if (err){
        res.status(500).json(Response.error("Failed Create User"))
      }else{
        let token = Token.create(doc)
        res.setHeader('Authorization', 'Bearer ' + token);
        res.status(200).json(Response.success("Success register user Success", Token.decodeToken(token)))
      }
    })
  },

  login: (req, res) => {
    Auth.findOne({ email: req.body.email }, (err, doc) => {
      if (err) {
        res.status(500).json(Response.error("Error"))
      } else if (doc === undefined || doc == null) {
        res.status(404).json(Response.error(req.body.email + " Not registered in our System"))
      } else {
        if ((req.body.password !== null || req.body.password !== undefined) && Password.check(req.body.password, doc.password)) {
          let token = Token.create(doc)
          res.setHeader('Authorization', 'Bearer ' + token);
          res.status(200).json(Response.success("Login Success", Token.decodeToken(token)))
        } else {
          res.status(403).json(Response.error("E-Mail or Password Wrong"))
        }
      }
    })
  },
}