const {successResponse} = require("../handler/responseHandler")
const questionSchema = require("../models/questionSchema")

const getAllQuestion = (req, res) => {
	questionSchema
		.find()
		.then((data) => {
			return successResponse(res, {statusCode: 201, message: "success", payload: data})
		})
		.catch((error) => res.status(400).json({message: error.message}))
}

const postInsertQuestions = (req, res) => {
	try {
		return res.status(200).json({message: "insert the question"})
	} catch (error) {
		return res.status(400).json({message: error.message})
	}
}

const deleteAllQuestion = (req, res) => {
	try {
		return res.status(200).json({message: "here delete the question"})
	} catch (error) {
		return res.status(400).json({message: error.message})
	}
}

module.exports = {getAllQuestion, postInsertQuestions, deleteAllQuestion}
