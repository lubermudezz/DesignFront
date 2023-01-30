import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { approveEntry, getAllEntries } from '../../redux/actions'
import Navbar from '../NavBar/Navbar'
import './Entries.css'

const Entries = () => {
  const dispatch = useDispatch()
  const entries = useSelector(state => state.entries)

  const handleApprove = (e) => {
    dispatch(approveEntry(e.target.name))
  }

  useEffect(() => {
    dispatch(getAllEntries())
  },[dispatch])

  return (
    <div>
        <Navbar/>
        <h1>All entries:</h1>
        <div className='entriesDiv'>
        {Array.isArray(entries)?entries.map(e => {
            return <div key={e.id}>
                <p>User: {e.user?.userName}</p>
                <p>Task: {e.task?.name}</p>
                <p>Project: {e.project?.name}</p>
                <p>Hours: {e.hours}</p>
                <p>Comment: {e.comment}</p>
                <p>Date: {e.date.slice(0, [10])}</p>
                {e.approved ? <p>STATUS: Approved</p> : <button type='submit' name={e.id} onClick={(el) => handleApprove(el)}>Approve entry</button>}
            </div>
        }): <div>No entries</div> }
        </div>

    </div>
  )
}

export default Entries