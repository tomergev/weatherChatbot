const opencageGeocoding = require('../libs/opencageGeocoding')

module.exports = {
	async getDarkSkyForecast(req, res, next) {
		try {
			const { location } = req.params
			const locationData = await opencageGeocoding(location)
			res.json({ locationData })
		} catch (err) {
			next(err)
		}
	}
}