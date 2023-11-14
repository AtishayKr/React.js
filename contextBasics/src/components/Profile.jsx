import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext);
    console.log(user)
    if(!user) return <div>please login</div>
    else return <div>welcome {user.username}</div>
}

export default Profile
