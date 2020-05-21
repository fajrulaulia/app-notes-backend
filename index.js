const app = require('express')()
const route = require('./src/route')
require('dotenv').config()

app.use(route)
app.listen(process.env.EXPRESS_PORT, () =>
    console.log(`App running on port ${process.env.EXPRESS_PORT}`))
