import { useEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/providers/UserProvider'

import { TheWallView } from '../views/TheWallView'
import { ProfileView } from '../views/ProfileView'
import { SignInView } from '../views/SignInView'
import { SignUpView } from '../views/SignUpView' 


export const Routes = ({ children }) => {
	const [ , setAuthUser] = useContext(UserContext)

	useEffect(() => {
		if (localStorage.getItem('user'))
			setAuthUser(JSON.parse(localStorage.getItem('user')))
	}, [setAuthUser])

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.theWallView} component={TheWallView} />
				<Route exact path={RoutingPath.profileView} component={ProfileView} />
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route exact path={RoutingPath.signUpView} component={SignUpView} />
				<Route component={TheWallView} />
			</Switch>
		</BrowserRouter>
	)
}