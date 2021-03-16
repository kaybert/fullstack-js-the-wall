import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/providers/UserProvider'

import { ProfileDropdown } from './ProfileDropDown'
import './Profile.css'
export const Profile = () => {

	const history = useHistory()
	const [ authUser, ] = useContext(UserContext) 

	return (
		authUser?.username
			? 
			<div className="profile"> 
				<img className="profile-img" src={'https://thispersondoesnotexist.com/image'} alt={''} />
				<ProfileDropdown />
			</div>
			:
			<div className="profile signUpOrIn">
				<span onClick={() => history.push(RoutingPath.signUpView)}>Sign Up</span>• 
				<span onClick={() => history.push(RoutingPath.signInView)}>Sign In</span>
			</div>
	)
}
