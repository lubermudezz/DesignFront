import { GET_ALL_TASKS, GET_ENTRIES, GET_MY_ENTRIES, GET_MY_TASKS, GET_PROJECTS, GET_TASKS, LOGIN } from "../actions"

const initialState = {
    projects: [],
    tasks: [],
    entries: [],
    user: [],
    myentries: [],
    allTasks: [],
    myTasks: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_PROJECTS:
        return{
            ...state,
            projects: action.payload
        }
        case LOGIN: 
        return{
            ...state,
            user: action.payload
        }
        case GET_TASKS:
            return{
                ...state,
                tasks: action.payload
            }
        case GET_ENTRIES:
            return{
                ...state,
                entries: action.payload
            }
        case GET_MY_ENTRIES:
            return{
                ...state,
                myentries: action.payload
            }
        case GET_ALL_TASKS:
            return{
                ...state,
                allTasks: action.payload
            }
        case GET_MY_TASKS:
            return{
                ...state,
                myTasks: action.payload
            }
        default: return state
    }
}