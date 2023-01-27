import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postEntry } from '../redux/actions'

const AddTime = ({task_id, project_id}) => {
 const dispatch = useDispatch()
 const userId = JSON.parse(localStorage.usuario).id
 const [entry, setEntry] = useState({
    hours: " ",
    comment: " ",
    user_id: userId,
    project_id: project_id,
    task_id: task_id

 })
 
 const handleChange = (e) => {
    if(e.target.name === 'hours') {
        setEntry({
            ...entry,
            hours: e.target.value
        })
    } else{
        setEntry({
            ...entry,
            comment: e.target.value
        })
    }
 }

 const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postEntry(entry))
 }
 
  return (
    <div>
        <form>
        <input onChange={(e) => handleChange(e)} name='hours' type="text" placeholder='add time' />
        <input onChange={(e) => handleChange(e)} name='comment' type="text" placeholder='comments'/>
        <button onClick={(e) => handleSubmit(e)} type='submit'>add new entry</button>
        </form>
    </div>
  )
}

export default AddTime