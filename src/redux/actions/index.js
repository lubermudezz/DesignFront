import axios, * as others from 'axios';
export const GET_PROJECTS = 'GET_PROJECTS'
export const LOGIN = 'LOGIN'
export const GET_ENTRIES = 'GET_ENTRIES'
export const GET_TASKS = 'TASKS'
export const GET_MY_ENTRIES = 'GET_MY_ENTRIES'
export const GET_ALL_TASKS= 'GET_ALL_TASKS'
export const GET_MY_TASKS = 'GET_MY_TASKS'

export function getAllProjects () {
    return async function (dispatch) {
        let res = await axios.get(`/projects`)
        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        })
    }
}

export function login (userName) {
    return async function (dispatch) {
        try {
           let res = await axios.get(`/users/login/${userName}`)
           localStorage.setItem('usuario', JSON.stringify(res.data))
           window.location.reload()
           return  dispatch({
                type: LOGIN,
                payload: res.data
            }) 
        } catch (error) {
         console.log(error)   
        }
    }
}

export function getTasks (project_id) {
    return async function (dispatch) {
        try{
            let res = await axios.get(`/tasks/${project_id}`)
            return dispatch ({
                type: GET_TASKS, 
                payload: res.data
            })
        }catch(err) {
            console.log(err)
        }
    }
}

export function postEntry(data) {
    return async function() {
        try {
            let res = await axios.post(`/entries`, data)
            console.log('done')
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllEntries() {
    return async function(dispatch) {
        try {
            let res = await axios.get(`/entries`)
            return dispatch({
                type: GET_ENTRIES,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function approveEntry(id){
    return async function() {
        try {
            let res = await axios.put(`/entries/approve/${id}`)
            console.log('approved')
        } catch (error) {
            console.log(error)
        }
    }
}

export function getMyEntries (user_id, project_id) {
    return async function (dispatch) {
        try {
            let res = await axios.get(`/projects/myEntries/${user_id}/${project_id}` )
            return dispatch({
                type: GET_MY_ENTRIES,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllTasks () {
    return async function (dispatch) {
        try {
            let res = await axios.get('/tasks')
            return dispatch({
                type: GET_ALL_TASKS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
      }
}

export function getMyTasks (task_id, user_id) {
    return async function (dispatch) {
        try {
            let res = await axios.get(`/tasks/entries/${task_id}/${user_id}`)
            return dispatch ({
                type: GET_MY_TASKS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}