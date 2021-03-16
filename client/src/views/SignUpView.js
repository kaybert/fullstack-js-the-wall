import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import backendServiceAPI from '../shared/api/service/backendServiceAPI'
import { UserContext } from '../shared/providers/UserProvider'

export const SignUpView = () => {
	const history = useHistory()
	const [, setAuthUser] = useContext(UserContext)

	const [ newUser, setNewUser ] = useState()
	const createUser = async () => {
		try{
			const response = await backendServiceAPI.createUser(newUser)
			const user = {userId: response.data._id, username: response.data.username}
			setAuthUser(user)
			localStorage.setItem('user', JSON.stringify(user))
			history.push(RoutingPath.theWallView)

		}catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>Sign Up</h1>
			Username: <input type="text" onChange={(event) => setNewUser({...newUser, username: event.target.value})} />
			Password: <input type="text" onChange={(event) => setNewUser({...newUser, password: event.target.value})}/>
			E-mail: <input type="text" onChange={(event) => setNewUser({...newUser, email: event.target.value})}/>
			<button onClick={() => createUser()}> Sign Up </button>
		</div>
	)
}
