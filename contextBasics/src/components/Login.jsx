import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setuser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username, password});
    }

  return (
    <div >
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => (setUsername(e.target.value))}
        placeholder='text' />
        {" "}
        <input type='password'
        value={password}
        onChange={(e) => (setPassword(e.target.value))}
        placeholder='Username' />
        <button type='submit' onClick={handleSubmit} >Submit</button>

    </div>
  )
}

export default Login