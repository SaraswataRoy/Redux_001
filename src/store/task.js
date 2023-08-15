import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"
let id = 0
const taskSlice = createSlice({
    name:"tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task:action.payload.task,
                completed:false
            })
        },
        removeTask:(state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id)
            state.splice(index, 1)
        },
        completeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index].completed = true
        }
    }
})

export const {addTask, removeTask, completeTask } = taskSlice.actions
export default taskSlice.reducer;


export const fetchTodo = () => {
    return async function (dispatch, getState) {
        const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let task = await response.json()
        console.log(task)
        dispatch(addTask({task: task.title}))
    }
    
} 