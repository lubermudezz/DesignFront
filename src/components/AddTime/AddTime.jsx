import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postEntry } from '../../redux/actions'
import {DatePicker} from '@material-ui/pickers'
import Swal from 'sweetalert2'

import './AddTime.css'
import { useEffect } from 'react'

const AddTime = ({task_id, project_id}) => {
 const dispatch = useDispatch()
 const userId = JSON.parse(localStorage.usuario).id
 const [date, setDate] = useState(new Date())
 
 const [entry, setEntry] = useState({
    hours: " ",
    comment: " ",
    date: date,
    user_id: userId,
    project_id: project_id,
    task_id: task_id

 })

 useEffect(() => {
  setEntry({...entry, date: date})
 }, [date])


 
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
    Swal.fire({
        title: 'Please confirm',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(postEntry(entry))
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })


 }

 
  return (
    <div>
        <form className='addTimeForm'>
        <DatePicker value={date} onChange={setDate} />
        <input onChange={(e) => handleChange(e)} name='hours' type="number" placeholder='amount of hours' />
        <input onChange={(e) => handleChange(e)} name='comment' type="text" placeholder='comments'/>
        <button onClick={(e) => handleSubmit(e)} type='submit'>add new entry</button>
        </form>
    </div>
  )
}

export default AddTime