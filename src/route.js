const express = require('express')
const route = express.Router()

const Books = require('./controllers/bookController')
route
    .get("/", (_,res)=> res.json({"message":"this backend created by fajrul aulia"}))
    .get("/books", Books.findAll)
    .get("/book/:id", Books.findOne)

module.exports = route
