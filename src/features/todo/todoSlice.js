//? 2. Reducers
//In redux toolkit we call reducers as slices
//nanoid => unique id's generate
import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial State

const initialState ={
    todos : [{id:1,text : "Hello world"}]
}



export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo ={
                id:nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

//slice -> reducer ka bada version 
//individual reducers
export const {addTodo,removeTodo}=todoSlice.actions
//full reducer
export default todoSlice.reducer