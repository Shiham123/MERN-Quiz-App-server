const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

/** All router imported here */
const router = require("../router/route")

const app = express()

/** built-in middleware */
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

/** Routers */
app.use("/api", router)

/* eslint-disable no-unused-vars */

app.use((req, res, next) => {
	res.status(404).json({message: "route not found"})
})

app.use((err, req, res, next) => {
	res.status(500).json({message: "Internal Server Error"})
})

module.exports = app
