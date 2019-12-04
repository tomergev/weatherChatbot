const api = require('./api')
const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_API_TOKEN}&format=json`

module.exports = (location = "Los Angeles") => new Promise(async (resolve, reject) => {
	try {
		const res = await api({ url: url + `&q=${location}` })
		resolve(res)
	} catch (err) {
		reject(err)
	}
})