import UserController from '../controllers/user.controller.js'

const routes = (application) => {
    application.post('/user', UserController.createUser)
    application.get('/user', UserController.getAllUsers)
    application.delete('/user/:userId', UserController.deleteUser)
    application.put('/user/:userId', UserController.updateUser)
    application.get('/user/:userId', UserController.getUserById)
    application.get('/search', UserController.queryUsername)
    application.post('/user/signin', UserController.signIn)
}

export default { routes }