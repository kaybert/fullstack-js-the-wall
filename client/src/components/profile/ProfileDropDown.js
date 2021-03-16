import './ProfileDropdown.css'
import { useContext } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const ProfileDropdown = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const signOut = () => {
        setAuthUser(false)
        localStorage.removeItem('user')
        history.push(RoutingPath.theWallView)
    }

    return (
        <div className="profile-dropdown">
                <span className="profile-username">{authUser?.username}</span>
                <span className="button" onClick={() => history.push(RoutingPath.profileView)}> Profile </span>
                <span className="button" onClick={() => signOut()}>Sign&nbsp;out</span>
        </div>
    )
}
export const ProfileDropDown = () => {
    return (
        <div>
            
        </div>
    )
}
