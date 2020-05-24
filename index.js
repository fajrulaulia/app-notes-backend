const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const route = require('./src/route')
require('./src/configs/database').connect()
require('dotenv').config()

app.use(bodyParser.json())
app.use(cors)
app.use(route)
app.listen(process.env.EXPRESS_PORT, () =>
    console.log(`App running on port ${process.env.EXPRESS_PORT}`))
