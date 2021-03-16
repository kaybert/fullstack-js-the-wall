import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import backendServiceAPI from '../shared/api/service/backendServiceAPI'
import { UserContext } from '../shared/providers/UserProvider'

export const SignInView = () => {
	const history = useHistory()
	const [loginCredentials, setLoginCredentials] = useState({username: '', password: '',})
	const [, setAuthUser] = useContext(UserContext)
	
	const signIn = async () => {
		try {
			const response = await backendServiceAPI.signIn(loginCredentials)
			if (response.status === 200) {
				const user = {userId: response.data._id, username: response.data.username}
				setAuthUser(user)
				localStorage.setItem('user', JSON.stringify(user))
				history.push(RoutingPath.theWallView)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>Sign In</h1>
			<form>
				<input
					placeholder="username"
					onChange={e => setLoginCredentials({...loginCredentials, username: e.target.value})} />
				<input
					type="password"
					placeholder="password"
					onChange={e => setLoginCredentials({...loginCredentials, password: e.target.value})} />

			</form>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	)
}
