const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const APP_KEY = process.env.APP_KEY
const UNIT = 'metric'
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const axios = require('axios')
const path = require('path')
router.use(express.static(path.join(__dirname, 'public')))
router.use(bodyParser.urlencoded({extended: true}))
const Weather = require('../models/Weather')

router.get('/', (req, res) => {
    const country = req.query.country
    console.log(country);
    res.sendFile("index.html")
})

router.get('/weathers', async (req, res) => {
    const weathers = await Weather.find({})
    res.send(weathers)
})

router.get('/:city', async (req, res) => {
    const city = req.params.city
    const FULL_API_URL = `${WEATHER_URL}?q=${city}&appid=${APP_KEY}&units=${UNIT}`
        axios.get(FULL_API_URL)
            .then(weathersResponse => {
                res.send(weathersResponse)
            })
})

router.post('/:city', (req, res) => {
    const city = req.params.city
    const FULL_API_URL = `${WEATHER_URL}?q=${city}&appid=${APP_KEY}&units=${UNIT}`
    
    axios(FULL_API_URL).then(response => {
        const temperature = response.data.main.temp
        const weatherDescription = response.data.weather[0].description
        const cityName = response.data.name
        const weatherImageSRC = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        const weather = new Weather({
            name: cityName,
            temperature,
            condition: weatherDescription,
            conditionPic: weatherImageSRC
        })
        weather.save()
            .then((weatherResponse) => {
                res.send(weatherResponse)
            })
    })
})

router.delete('/:cityName',  (req, res) => {
    const cityName = req.params.cityName
    Weather.deleteMany({name: cityName}, err => {
        res.send("Deleted all documents about " + cityName)
    })
})

module.exports = router