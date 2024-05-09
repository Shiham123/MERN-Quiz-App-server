const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()

/** All router imported here */
const router = require("../router/route")

const app = express()

/** built in middleware */
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

/* eslint-disable-next-line no-undef */
const port = process.env.PORT

/** Routers */
app.use("/api", router)

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
