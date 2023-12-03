import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
    const [input , setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        if(!input) return 
        dispatch(addTodo(input));
        setInput("");
    }
    return (
        <form onSubmit={addTodoHandler} >
            <input 
            style={{color: 'black'}}
            type='text' 
            placeholder='Enter a TOdo ...' 
            value={input} 
            onChange={(e) => {setInput(e.target.value)}} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddTodo