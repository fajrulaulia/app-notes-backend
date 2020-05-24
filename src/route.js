const express = require('express')
const route = express.Router()

const verify=require('./middleware/verifyToken')
const Notes = require('./controllers/notesController.js')
const Auth = require('./controllers/authController')

route
    .get("/", (_, res) => res.json({ "message": "this backend created by fajrul aulia" }))

    //Route Notes
    .post("/notes", Notes.insert)
    .get("/notes",verify, Notes.findAll)
    .get("/note/:id", Notes.findOne)
    .put("/note/:id", Notes.update)
    .delete("/note/:id", Notes.delete)

    //Route Auth
    .get("/auth", Auth.Auth)
    .post("/auth/register", Auth.register)
    .post("/auth/login", Auth.login)


module.exports = route
