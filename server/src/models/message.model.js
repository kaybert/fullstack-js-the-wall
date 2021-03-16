import mongoose from 'mongoose'
const { Schema, model } = mongoose

const messageSchema = Schema({
	message: {
		type: String,
		required: true,
		allowNull: false,
	},
	likes: {
		type: [{
			type: Schema.Types.ObjectId,
			ref: "user"
		}]
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
		required: true,
		allowNull: false,
	},
	date: { 
		type: Date, 
		default: Date.now 
	},
}, { timestamps: true })

const MessageModel = model('message', messageSchema)
export default MessageModel