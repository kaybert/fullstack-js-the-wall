import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../shared/providers/UserProvider'
import backendServiceAPI from '../shared/api/service/backendServiceAPI'

export const ProfileView = () => {
	const [ authUser, ] = useContext(UserContext)
	const [ user, setUser ] = useState()
	


	useEffect (() => {
		const fetchUser = async () => {
			try {
				const response = await backendServiceAPI.getUser(authUser.userId)
				setUser(response.data)
			}catch (error) {
				console.log(error)
			}
		}
		
		fetchUser()
	}, [authUser])
	return (
		<div>
			<h1>Profile</h1>
			<h2>{user?.username}</h2>
			<p> Email: {user?.email}</p>
			<p> your account was grated at {user?.createdAt}</p>
		</div>
	)
}
