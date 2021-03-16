import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

import middlewares from './src/middlewares/middlewares.js'
import configuration from './configuration/configuration.js'
import UserRoutes from './src/routes/user.route.js'
import MessageRoutes from './src/routes/message.route.js'

const application = express()
//application.use(bodyParser.urlencoded({ extended: true }))

application.use(express.json())
application.use(helmet())
application.use(morgan('common'))
application.use(cors({credentials: true}))

UserRoutes.routes(application)
MessageRoutes.routes(application)
application.use(middlewares.notFound)
application.use(middlewares.errorHandler)

configuration.connectToDatabase()
configuration.connectToPort(application)

export default application