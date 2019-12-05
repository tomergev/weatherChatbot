const request  = require('../libs/request')
const url = `https://us1.locationiq.com/v1/search.php`

module.exports = (location) => request({
	url,
	method: 'GET',
	queryParams: {
		format: 'json',
		key: process.env.LOCATION_IQ_API_TOKEN,
		q: location,
	}
})