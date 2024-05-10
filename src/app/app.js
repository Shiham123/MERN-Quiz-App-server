const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

/** All router imported here */
const router = require("../router/route")
const {errorResponse} = require("../handler/responseHandler")

const app = express()

/** built-in middleware */
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

/** Routers */
app.use("/api", router)

app.use((req, res, next) => {
	res.status(404).json({message: "route not found"})
})

app.use((err, req, res, next) => {
	return errorResponse(res, {statusCode: err.status, message: err.message})
})

module.exports = app
