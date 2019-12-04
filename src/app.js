const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
require('dotenv').config({ path: './.env' })

const routes = require('./routes')

const app = express()
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routeKeys = Object.keys(routes)

routeKeys.forEach((key) => {
	app.use(`/${key}`, routes[key])
})

// Must include the next parameter for express to know that this is the error handling function
const errorHandling = (err, _req, res, _next) => {
	res.status(err.status || 400).json({
		message: err.message,
		error: err,
	})
}

app.use(errorHandling)

app.listen(process.env.PORT_NUMBER, (err) => {
	if (err) {
		process.exit(1) // https://stackoverflow.com/questions/43147330/what-is-difference-between-method-process-exit1-and-process-exit0-in-node-js
	}

	console.log(`Magic happening on port ${process.env.PORT_NUMBER}`)
}
)