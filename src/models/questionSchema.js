const {Schema, model} = require("mongoose")

/** question model */
const questionModel = new Schema({
	question: {type: Array, default: []},
	answer: {type: Array, default: []},
	createAt: {type: Date, default: Date.now},
})

module.exports = model("Questions", questionModel)
