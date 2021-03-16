import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

import { Profile } from '../profile/Profile'
import './Navigation.css'

export const Navigation = () => {
	const history = useHistory()
	
	return (
		<nav className="navigation">
			<div className="the-wall" onClick={() => history.push(RoutingPath.theWallView)}> <span className="logo">🧱</span> The Wall</div>
			<Profile />
		</nav>
	)
}
