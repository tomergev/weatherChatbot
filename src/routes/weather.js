const router = require('express').Router()
const weatherController = require('../controllers/weather')

router.route('/:location')
	.get(weatherController.get)

module.exports = router