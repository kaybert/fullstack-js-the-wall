import { useEffect, useState , useContext} from 'react'
import backendServiceAPI from '../../shared/api/service/backendServiceAPI'
import { MessageContext } from '../../shared/providers/MessageProvider'
import { Message } from './Message'
export const Messages = () => {
	const [messages, setMessages] = useState([])
	const [updateMessage, ] = useContext(MessageContext)
	
	const fetchMessages = async () => {
		try {
			const response = await backendServiceAPI.getAllMessages()
			setMessages(response.data)
		}
		catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchMessages()
	}, [updateMessage])

	return (
		<div className="messages">
		{messages.map((m) => <Message key={m._id} message={m} />
		)}
	</div>
	)
}
