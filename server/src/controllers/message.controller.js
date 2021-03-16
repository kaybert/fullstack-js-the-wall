import StatusCode from '../../configuration/statuscode.js'
import MessageModel from '../models/message.model.js'

const createMessage = async (request, response) => {
	const message = new MessageModel({
		message: request.body.message,
		user: request.body.userId,
	})

	try {
		const databaseResponse = await message.save()
		response.status(StatusCode.CREATED).send(databaseResponse)
	}catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: "Error while creating a message",
			stack: error
		})
	}
}
const getAllMessages = async (request, response) => {
	try {
        const databaseResponse = await MessageModel.find().sort({date: 'descending'})
		.populate("user")
        response.status(StatusCode.OK).send(databaseResponse)
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}
const deleteMessage = async (request, response) => {
	const messageId = request.params.messageId
    try {
        const databaseResponse = await MessageModel.findByIdAndDelete(messageId)
        response.status(StatusCode.OK).send({ message: 'Seccessfully deleted message', data: databaseResponse })
    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to delete message by ID ${messageId}`,
            error: error.message
        })
    }
}
const likeMessage = async (request, response) => {
	const messageId = request.params.messageId
	const userId = request.body.userId

	try {
        const databaseResponse = await MessageModel.findByIdAndUpdate(
			messageId, 
			{"$push": {"likes": userId}}, 
			{new: true})
        response.status(StatusCode.OK).send({ message: 'Seccessfully liked a message.', data: databaseResponse })

    } catch (error) {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to like a message ${messageId}`,
            error: error.message
        })
    }
}

export default {
	createMessage,
	getAllMessages,
	deleteMessage,
	likeMessage
}