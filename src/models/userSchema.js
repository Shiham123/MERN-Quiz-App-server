const {Schema, model} = require("mongoose")

const userModel = new Schema({
	username: {type: String},
	status: {type: String},
	createAt: {type: Date, default: Date.now},
})

module.exports = model("User", userModel)
