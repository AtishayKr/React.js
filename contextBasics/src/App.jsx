import { useState } from 'react'
import reactLogo from './assets/react.svg'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <div style={{display: 'flex'}}>
        <div style={{margin: 'auto'}}>
        <h1> Learning Contest in React.js</h1>
        <Login />
        <Profile />
        </div>
      
      </div>
    </UserContextProvider>
  )
}

export default App
