const request = require('request')

module.exports = ({ url, headers }) => new Promise((resolve, reject) => {
	try {
		const options = {
			url,
			...(headers && { headers })
		}

		const callback = (err, res, body) => {
			if (err) reject(err)
			resolve(JSON.parse(body))
		}

		request(options, callback)
	} catch (err) {
		reject(err)
	}
})