import http from '../backendAPI'

const createUser = (data) => {
	return http.post('/user', data)
}
const signIn = (data) => {
    return http.post('/user/signin', data)
}
const getAllUsers = () => {
	return http.get('/user')
}
const getUser = (userId) => {
    return http.get(`/user/${userId}`)
}


//Messages
const getAllMessages = () => {
    return http.get('/message')
}
const createMessage = (data) => {
    return http.post('/message', data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	createUser,
    signIn,
	getAllUsers,
    getAllMessages,
    createMessage,
    getUser
}