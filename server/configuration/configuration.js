import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
		console.log('successfully connected to database!')
	} catch (error){
		console.log('error while connecting to database!...')
		process.exit()
	}
}
const connectToPort = (application) => {
	application.listen(PORT, () => {
		console.log('Server is running on port ' + 3001.)
	})
}

export default {
	connectToDatabase,
	connectToPort
}