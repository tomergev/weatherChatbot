const request = require('request')

const createSearchParams = (searchParams = {}) => {
	const keys = Object.keys(searchParams)

	const searchParamsString = keys.reduce((string, key) => {
		string += `${key}=${searchParams[key]}&`
		return string
	}, '?')

	return searchParamsString
}

module.exports = ({ url, headers, method, queryParams }) => new Promise((resolve, reject) => {
	try {
		const options = {
			method,
			...(headers && { headers }),
			url: url + createSearchParams(queryParams)
		}

		const callback = (err, res, body) => {
			if (err) throw err
			const parsedBody = JSON.parse(body)
			if (res.statusCode >= 400) reject(parsedBody)
			resolve(parsedBody)
		}

		request(options, callback)
	} catch (err) {
		reject(err)
	}
})
