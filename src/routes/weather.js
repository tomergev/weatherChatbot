const router = require('express').Router()
const weatherController = require('../controllers/weather')

router.route('/')
	.get(weatherController.getDarkSkyForecast)

module.exports = router