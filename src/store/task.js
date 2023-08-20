import { createAction } from "@reduxjs/toolkit"

// Action
export const addTask  = createAction("ADD_TASK")
export const removeTask  = createAction("REMOVE_TASK")
export const completeTask  = createAction("COMPLETE_TASK")

let id = 0
export default function reducer(state =[], action){
    console.log(action)
    switch(action.type){ // ADD_TASK
        case addTask.type:
            return[
                ...state,
                {
                    id: ++id,
                    task:action.payload.task,
                    completed:false
                }
            ] 
        
        case removeTask.type: // REMOVE_TASK
            return state.filter(task => task.id !== action.payload.id)
        
        case completeTask.type: // COMPLETE_TASK
            return state.map((task) =>
                task.id === action.payload.id  
                    ? {
                        ...task,
                        completed:true,
                    }
                    :task
            )
        default:
            return state
    }
}