const express = require('express')
const route = express.Router()

const verify = require('./middleware/verifyToken')
const Notes = require('./controllers/notesController.js')
const Auth = require('./controllers/authController')
const Upload = require('./configs/upload')

route
    .get("/", (_, res) => res.json({ "message": "this backend created by fajrul aulia" }))

    //Route Notes
    .post("/notes", verify, Upload.single('fileUpload'), Notes.insert)
    .get("/notes", verify,  Notes.findAll)
    .get("/note/:id", verify, Notes.findOne)
    .put("/note/:id", verify, Upload.single('fileUpload'), Notes.update)
    .delete("/note/:id", verify, Notes.delete)

    //Route Auth
    .get("/auth",verify, Auth.Auth)
    .post("/auth/register", Auth.register)
    .post("/auth/login", Auth.login)


module.exports = route
