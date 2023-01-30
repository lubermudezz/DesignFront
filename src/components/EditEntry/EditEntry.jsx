import { ar } from 'date-fns/locale'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editEntry, getTimesheet } from '../../redux/actions'

const EditEntry = () => {
  const user_id = JSON.parse(localStorage.usuario).id
  const entries = useSelector(state => state.myTimesheet)
  const [id, setId] = useState('')

// console.log(entries)
  const [edit, setEdit] = useState({
    comment: '',
    hours: ''
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTimesheet(user_id))

  }, [dispatch])

  const handleChange = (e) => {
    if(e.target.name !== 'hours' && e.target.name !== 'comment') {
        setId(e.target.value)
    }
    setEdit({
        ...edit,
        [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editEntry(id, edit))
  }


  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            
            <select  onChange={(e) => handleChange(e)}>
                <option value="">Choose entry</option>
                {Array.isArray(entries)?entries.map(e => {
                    return <option key={e.id} value={e.id}>hs: {e.hours} c: {e.comment}</option>
                }):null}
            </select>
            <input onChange={(e) => handleChange(e)} type="number" placeholder='please enter hours' name='hours'/>
            <input onChange={(e) => handleChange(e)} type='text' placeholder='edit your comment' name='comment' />

            <button type='submit'>Save changes</button>
        </form>
    </div>
  )
}

export default EditEntry