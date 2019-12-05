const router = require('express').Router()
const weatherController = require('../controllers/weather')

router.route('/')
	.post(weatherController.getWeather)

module.exports = router