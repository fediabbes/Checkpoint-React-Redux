import { ADDTASK, DELETETASK, EDITTASK, TOGGLEDONE } from "../types";



const initialState = {
    todos: [{ id: 0, task: "EAT", done: false }, { id: 1, task: 'SLEEP', done: false }, { id: 2, task: 'REPEAT', done: false }]
}



function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADDTASK:
            return { ...state, todos: [...state.todos, { id: Math.random(), task: action.payload, done: false }] }
        case DELETETASK:
            return { ...state, todos: state.todos.filter(el => el.id !== action.payload) }
        case TOGGLEDONE:
            return { ...state, todos: state.todos.map(el => el.id === action.payload ? { ...el, done: !el.done } : el) }
        case EDITTASK:
            return { ...state, todos: state.todos.map(el => el.id === action.payload.id ? { ...el, task: action.payload.newTask } : el) }

        default:
            return state
    }
}

export default todoReducer