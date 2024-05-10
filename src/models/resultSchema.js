const {Schema, model} = require("mongoose")

const resultModel = new Schema({
	username: {type: String},
	result: {type: Array, default: []},
	createAt: {type: Date, default: Date.now},
})

module.exports = model("Result", resultModel)
