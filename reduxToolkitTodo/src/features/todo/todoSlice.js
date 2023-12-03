import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { 
    todos: [{id: 1, msg: "Hellow world", completed: false}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {

            const todo = {
                id: nanoid(),
                msg: action.payload,
                completed: false
            }

            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload.id ? todo.msg = action.payload.msg : todo))
        },
        toggleTodo: (state, action) =>{

            state.todos.map((todo) => (todo.id === action.payload ? !todo.completed : todo))
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, toggleTodo} = todoSlice.actions

export default todoSlice.reducer
