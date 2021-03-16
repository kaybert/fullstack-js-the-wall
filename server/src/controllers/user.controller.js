import UserModel from '../models/user.model.js'
import statusCode from '../../configuration/statuscode.js'

const createUser = async (request, response) => {
	const user = new UserModel({
		username: request.body.username,
		password: request.body.password,
		email: request.body.email
	})

	try {
		const databaseResponse = await user.save()
		response.status(statusCode.CREATED).send(databaseResponse)
	} catch (error) {
		response.status(statusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error while creating user.', 
			stack: error
		})
	}
}

const getAllUsers = async (request, response) => {
	try {
		const databaseResponse = await UserModel.find()
		response.status(statusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(statusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
	}
}

const deleteUser = async (request, response) => {
	const userId = request.params.userId
	try {
		const databaseResponse = await UserModel.findByIdAndDelete(userId)
		response.status(statusCode.OK).send({ message: 'Seccessfully deleted user.', data: databaseResponse })
	} catch (error) {
		response.status(statusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error while trying to delete user by ID ${userId}`,
			error: error.message
		})
	}
}

const updateUser = async (request, response) => {
	const userId = request.params.userId
	const data = {
		username: request.body.username,
		password: request.body.password
	}
	try {
		const databaseResponse = await UserModel.findByIdAndUpdate(userId, data, {new: true})
		response.status(statusCode.OK).send({ message: 'Seccessfully updated user.', data: databaseResponse })

	} catch (error) {
		response.status(statusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error while trying to delete user by ID ${userId}`,
			error: error.message
		})
	}
}

const queryUsername = async (request, response) => {
	try {
		const databaseResponse = await UserModel.find({username: request.query.username})
		response.status(statusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(statusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error while querying username ${request.query.username}`,
			error: error.message
		})
	}
}
const signIn = async (request, response) => {
	try {
		const databaseResponse = await UserModel.findOne({username: request.body.username, password: request.body.password})
		if (databaseResponse) 
			response.status(statusCode.OK).send(databaseResponse)
		else 
			response.status(statusCode.UNAUTHORIZED).send(databaseResponse)
	} catch (error) {
		response.status(statusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error while signing in user ${request.body.username}`,
			error: error.message
		})
	}
}
const getUserById = async (request, response) => {
	try {
		const databaseResponse = await UserModel.findOne({_id: request.params.userId})
		response.status(statusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(statusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error while trying to find one user by ID ${request.params.userId}`,
			error: error.message
		})
	}
}

export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
	queryUsername,
	getUserById,
	signIn
}