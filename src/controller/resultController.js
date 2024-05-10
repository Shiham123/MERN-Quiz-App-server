const {successResponse, errorResponse} = require("../handler/responseHandler")

const getAllResult = (req, res) => {
	try {
		return successResponse(res, {statusCode: 201, message: "all questions", payload: {}})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to get all question"})
	}
}

const postAllResult = (req, res) => {
	try {
		return successResponse(res, {statusCode: 201, message: "all questions", payload: {}})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to get all question"})
	}
}

const deleteResult = (req, res) => {
	try {
		return successResponse(res, {statusCode: 201, message: "all questions", payload: {}})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to get all question"})
	}
}

module.exports = {getAllResult, postAllResult, deleteResult}
