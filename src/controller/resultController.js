const {successResponse, errorResponse} = require("../handler/responseHandler")
const resultSchema = require("../models/resultSchema")

const getAllResult = (req, res) => {
	try {
		resultSchema
			.find()
			.then((data) => {
				return successResponse(res, {
					statusCode: 200,
					message: "successfully get the data",
					payload: data,
				})
			})
			.catch((error) => {
				return errorResponse(res, {statusCode: 400, message: error.message})
			})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to get all question"})
	}
}

const postAllResult = (req, res) => {
	try {
		const {username, result} = req.body

		if (!username & !result) {
			return errorResponse(res, {statusCode: 300, message: "username or result not exits"})
		} else {
			resultSchema
				.create({username, result})
				.then((data) => {
					return successResponse(res, {
						statusCode: 200,
						message: "successfully created data",
						payload: data,
					})
				})
				.catch((err) => {
					return errorResponse(res, {statusCode: 400, message: err.message})
				})
		}
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to get all question"})
	}
}

const deleteResult = (req, res) => {
	try {
		resultSchema
			.deleteMany()
			.then((data) => {
				return successResponse(res, {statusCode: 200, message: "deleted all result", payload: data})
			})
			.catch((error) => {
				return errorResponse(res, {statusCode: 400, message: error.message})
			})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: "failed to get all question"})
	}
}

module.exports = {getAllResult, postAllResult, deleteResult}
