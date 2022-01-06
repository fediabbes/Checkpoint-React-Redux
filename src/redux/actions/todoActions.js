import { ADDTASK, DELETETASK, EDITTASK, TOGGLEDONE } from "../types"



export const addTask = (task) => {
    return {
        type: ADDTASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETETASK,
        payload: id
    }
}

export const toggleDone = (id) => {
    return {
        type: TOGGLEDONE,
        payload: id
    }
}

export const editTask = (id, newTask) => {
    return {
        type: EDITTASK,
        payload: { id, newTask }
    }
}