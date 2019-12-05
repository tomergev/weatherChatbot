const request = require('../libs/request')
const url = 'https://api.opencagedata.com/geocode/v1/json' // docs: https://opencagedata.com/api?fbclid=IwAR2eIq46bTiQDA7h93oXvFV3lRNl2sbIdmKDJFXBQXvT3SGZ5mHFsov6YXg#forward-resp

module.exports = (location) => request({
	url,
	method: 'GET',
	queryParams: {
		limit: 1,
		q: location,
		no_annotations: 1,
		key: process.env.OPENCAGE_GEOCODING_API_KEY,
	}
})

