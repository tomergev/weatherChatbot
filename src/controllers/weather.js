const opencageGeocoding = require('../services/opencageGeocoding')
const darkSky = require('../services/darkSky')

module.exports = {
	async getWeather(req, res, next) {
		try {
			const location = req.body.queryResult.parameters['geo-city']
			const locationData = await opencageGeocoding(location)
			const { lat, lng } = locationData.results[0].geometry
			const { hourly, currently } = await darkSky({ lat, lng })
			const fulfillmentText = `The current temperature is ${currently.temperature} °F. Summary: ${hourly.summary}.`
			res.json({ fulfillmentText })
		} catch (err) {
			next(err)
		}
	},
}