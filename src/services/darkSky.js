const request = require('../libs/request')
const url = 'https://api.darksky.net/forecast' // docs: https://darksky.net/dev/docs

module.exports = ({ lat, lng }) => request({
	method: 'GET',
	url: `${url}/${process.env.DARK_SKY_SECRET_KEY}/${lat},${lng}`,
	queryParams: {
		exclude: [
			'minutely',
			'hourly',
			'alerts',
			'flags',
			'daily',
		]
	}
})