const opencageGeocoding = require('../services/opencageGeocoding')
const darkSky = require('../services/darkSky')

module.exports = {
	async get(req, res, next) {
		try {
			const { location } = req.params
			const locationData = await opencageGeocoding(location)
			const { lat, lng } = locationData.results[0].geometry
			const forecast = await darkSky({ lat, lng })
			res.json({ forecast })
		} catch (err) {
			next(err)
		}
	}
}