const {successResponse, errorResponse} = require("../handler/responseHandler")
const questionSchema = require("../models/questionSchema")

const getAllQuestion = (req, res) => {
	questionSchema
		.find()
		.then((data) => {
			return successResponse(res, {statusCode: 201, message: "all questions", payload: data})
		})
		.catch((error) => {
			return errorResponse(res, {statusCode: 400, message: error.message})
		})
}

const postInsertQuestions = (req, res) => {
	try {
		return successResponse(res, {statusCode: 200, message: "Success posted", payload: {}})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to post data in database"})
	}
}

const deleteAllQuestion = (req, res) => {
	try {
		return successResponse(res, {statusCode: 200, message: "Success posted", payload: {}})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to Delete data"})
	}
}

module.exports = {getAllQuestion, postInsertQuestions, deleteAllQuestion}
