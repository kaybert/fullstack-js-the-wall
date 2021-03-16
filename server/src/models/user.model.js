import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = Schema({
	username: {
		type: String,
		lowercase: true,
		unique: true,
		allowNull: false,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		lowercase: true,
		required: true,
	}
}, { timestamps: true })

const UserModel = model('user', userSchema)
export default UserModel