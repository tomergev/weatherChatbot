const router = require('express').Router()
const weatherController = require('../controllers/weather')

router.route('/')
	.post(weatherController.dialogFlow)

router.route('/:location')
	.get(weatherController.get)

module.exports = router