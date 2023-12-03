import { useState } from 'react'
import './App.css'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import AddTodo from './components/addTodo'
import Todo from './components/Todo'

function App() {


  return (
  <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        {/*  */}
        <AddTodo />
        <Todo />
    </div>
  </div>
  )
}

export default App
