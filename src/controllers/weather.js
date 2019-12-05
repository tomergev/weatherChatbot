const opencageGeocoding = require('../services/opencageGeocoding')
const darkSky = require('../services/darkSky')

module.exports = {
	async get(req, res, next) {
		try {
			const { location } = req.params
			const locationData = await opencageGeocoding(location)
			const { lat, lng } = locationData.results[0].geometry
			const forecast = await darkSky({ lat, lng })
			console.log('normal route')
			res.json({ forecast })
		} catch (err) {
			next(err)
		}
	},

	async dialogFlow(req, res, next) {
		try {
			console.log(req)
			res.json({
				"fulfillmentText": "This is a text response"
			})
		} catch (err) {
			next(err)
		}
	}
}