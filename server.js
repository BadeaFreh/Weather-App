
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
app.use(express.static(path.join(__dirname, 'public')))
const api = require('./routes/weather-api')
app.use('/', api)

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/WeathersDB", {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3333
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
