const api = require('./api')
const url = `https://api.opencagedata.com/geocode/v1/json?key=${process.env.OPENCAGE_GEOCODING_API_KEY}`

module.exports = (location = "Los Angeles") => new Promise(async (resolve, reject) => {
	try {
		const res = await api({url: url + `&q=${location}`})
		resolve(res)
	} catch (err) {
		reject(err)
	}
})