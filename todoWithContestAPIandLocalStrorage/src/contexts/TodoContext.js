import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg ",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    toggleTodo: (id) =>{}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = ()=> {
    
    return useContext(TodoContext);
}