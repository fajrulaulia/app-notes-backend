const express = require('express')
const route = express.Router()

const Notes = require('./controllers/notesController.js')
route
    .get("/", (_, res) => res.json({ "message": "this backend created by fajrul aulia" }))

    //books Notes
    .post("/notes", Notes.insert)
    .get("/notes", Notes.findAll)
    .get("/note/:id", Notes.findOne)

module.exports = route
