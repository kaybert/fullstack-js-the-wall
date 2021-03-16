import MessageController from '../controllers/message.controller.js'

const routes = (application) => {
    application.post('/message', MessageController.createMessage)
    application.get('/message', MessageController.getAllMessages)
    application.delete('/message/:messageId', MessageController.deleteMessage)
    application.put('/like-message/:messageId', MessageController.likeMessage)
}

export default { routes }