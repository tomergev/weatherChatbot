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
				"fulfillmentText": "This is a text response",
				"fulfillmentMessages": [
					{
						"card": {
							"title": "card title",
							"subtitle": "card text",
							"imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
							"buttons": [
								{
									"text": "button text",
									"postback": "https://assistant.google.com/"
								}
							]
						}
					}
				],
				"source": "example.com",
				"payload": {
					"google": {
						"expectUserResponse": true,
						"richResponse": {
							"items": [
								{
									"simpleResponse": {
										"textToSpeech": "this is a simple response"
									}
								}
							]
						}
					},
					"facebook": {
						"text": "Hello, Facebook!"
					},
					"slack": {
						"text": "This is a text response for Slack."
					}
				},
				"outputContexts": [
					{
						"name": "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
						"lifespanCount": 5,
						"parameters": {
							"param": "param value"
						}
					}
				],
				"followupEventInput": {
					"name": "event name",
					"languageCode": "en-US",
					"parameters": {
						"param": "param value"
					}
				}
			})
		} catch (err) {
			next(err)
		}
	}
}