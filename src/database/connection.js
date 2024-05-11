const mongoose = require("mongoose")
const {mongodbLocalUrl} = require("../app/secret")

const mongodbConnection = async () => {
	try {
		await mongoose.connect(mongodbLocalUrl)
		/* eslint-disable no-console */
		console.log("Database connected")
	} catch (error) {
		console.error("Error connecting to database:", error)
	}
}

module.exports = {mongodbConnection}
