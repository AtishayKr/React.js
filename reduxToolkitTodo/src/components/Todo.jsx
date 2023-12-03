import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteTodo} from '../features/todo/todoSlice'

function Todo() {
    
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch();
    console.log(todos)

    {todos.map((item) => {
        console.log(item);
    })}

  return (
    <>
        <div>Todos</div>
        {todos.map((item) => (
            <li key={item.id}>
                {item.msg}
                <button onClick={() => (dispatch(deleteTodo(item.id)))}>X</button>
            </li>
        ))}
    </>
  )
}

export default Todo