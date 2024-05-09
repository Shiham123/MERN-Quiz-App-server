const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

// application port

/* eslint-disable-next-line no-undef */
const port = process.env.PORT

// routes
app.get("/", (req, res) => {
	try {
		res.json("get request")
	} catch (error) {
		res.json(error)
	}
})

app.listen(port, () => {
	/* eslint-disable no-console */
	console.log(`server running at http://localhost:${port}`)
})
