import { UserContext } from '../../shared/providers/UserProvider'
import { useContext, useState } from 'react'

import backendServiceAPI from '../../shared/api/service/backendServiceAPI'
import { MessageContext } from '../../shared/providers/MessageProvider'

export const PostMessage = () => {
	const [ authUser, ] = useContext(UserContext)
	const [ newMessage, setNewMessage ] = useState({userId: authUser?.userId, message: ''})
	const [, setUpdateMessage] = useContext(MessageContext)

	const postMessage = async () => {
		try {
			const response = await backendServiceAPI.createMessage(newMessage)
			setNewMessage({userId: authUser.userId, message: ''})
			setUpdateMessage(true)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}
	const postHandler = (message) => {
		setNewMessage({userId: authUser.userId, message: message})
	}

	return ( authUser?.userId ?
		<div>
			<textarea 
				className="post" 
				placeholder="Post somthing to the wall" 
				onChange={(e) => postHandler(e.target.value)}
				value={newMessage.message}>
			</textarea><br />
			<button onClick={postMessage}> Post </button>
		</div>
		:<></>
	)
}
