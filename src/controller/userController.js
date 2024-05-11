const {errorResponse, successResponse} = require("../handler/responseHandler")
const userSchema = require("../models/userSchema")

const postUserName = async (req, res) => {
	try {
		const {username} = req.body

		if (!username) return errorResponse(res, {statusCode: 400, message: "Username not found"})

		userSchema
			.findOne({username: username})
			.then((exitingUser) => {
				if (exitingUser) {
					return errorResponse(res, {statusCode: 300, message: "user exits in database"})
				} else {
					return userSchema
						.create({username})
						.then((newUser) => {
							return successResponse(res, {
								statusCode: 200,
								message: "User created successfully",
								payload: newUser,
							})
						})
						.catch(() => {
							return errorResponse(res, {statusCode: 400, message: "unable to create user"})
						})
				}
			})
			.catch((error) => {
				return errorResponse(res, {statusCode: 400, message: error.message})
			})
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
