const express = require('express')
const route = express.Router()

const Books = require('./controllers/bookController')
route
    .get("/books", Books.findAll)

module.exports = route
