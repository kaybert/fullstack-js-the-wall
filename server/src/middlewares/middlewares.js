import dotenv from 'dotenv'
import StatusCode from '../../configuration/statuscode.js'

dotenv.config()
const { ENVIROMENT } = process.env
const notFound = (request, response, next) => {
    const error = new Error('invalid URL - 404 NOT FOUND')
    response.status(StatusCode.NOT_FOUND)
    next(error)
}

const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : response.statusCode
    response.status(statusCode)
    response.json({
        statusCode: statusCode,
        message: error.message,
        stackTrace: ENVIROMENT === 'production' ? null : error.stack
    })
}
export default {
    notFound,
    errorHandler
}