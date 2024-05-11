const {errorResponse, successResponse} = require("../handler/responseHandler")
const userSchema = require("../models/userSchema")

const postUserName = async (req, res) => {
	try {
		const {username} = req.body

		if (!username) return errorResponse(res, {statusCode: 400, message: "Username not found"})

		const existingUser = await userSchema.findOne({username})

		if (existingUser) {
			return errorResponse(res, {statusCode: 400, message: "Username already exists"})
		} else {
			const newUser = await userSchema.create({username})
			return successResponse(res, {
				statusCode: 200,
				message: "Successfully created user",
				payload: newUser,
			})
		}
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: error.message})
	}
}

const getUserName = (req, res) => {
	try {
		userSchema
			.find()
			.then((data) => {
				return successResponse(res, {
					statusCode: 200,
					message: "successfully get the user",
					payload: data,
				})
			})
			.catch((error) => {
				return errorResponse(res, {statusCode: 400, message: error.message})
			})
	} catch (error) {
		return errorResponse(res, {statusCode: 400, message: error.message})
	}
}

module.exports = {postUserName, getUserName}
