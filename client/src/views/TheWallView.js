import { Messages } from '../components/messages/Messages'
import { PostMessage } from '../components/messages/PostMessage'
import { MessageProvider } from '../shared/providers/MessageProvider'
import './TheWallView.css'

export const TheWallView = () => {
	return (
		
		<div className="the-wall-wrapper">
			<MessageProvider>
				<PostMessage />
				<Messages />
			</MessageProvider>
		</div>
	)
}
