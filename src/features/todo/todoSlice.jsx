import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: "abc", task: "Demo-task", isDone: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo)
        }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer