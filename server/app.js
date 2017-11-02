require('dotenv').config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let score = require('./routes/score')
app.use('/score', score)
app.listen(3000, () => {
    console.log("Ready to port 3000")
})
module.exports = app