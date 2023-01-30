import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks, getMyTasks } from '../../redux/actions'
import './TaskView.css'

const TaskView = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.allTasks)
  const myTask = useSelector(state => state.myTasks)
  const [render, setRender] = useState('none')
  let hours = 0
  const user_id = JSON.parse(localStorage.usuario).id

  const handleClick = (e) => {
    if(render === 'back'){setRender('none')}
    else {
        let task_id = e.target.name
        dispatch(getMyTasks(task_id, user_id))
        setRender('other')
    }

  }

  useEffect(() => {
    dispatch(getAllTasks())
  }, [dispatch])

  return (
    <div>
        {render === 'none' ? <div className='tasksDivAll'>
        {Array.isArray(tasks)?tasks.map(e => {
            return <div key={e.id}>
                <h2>{e.project.name}: "{e.name}"</h2>
                <p>Description: "{e.description}"</p>
                <button name={e.id} onClick={(e) => handleClick(e)}>See my entries</button>
                </div>
        }): <div>no tasks</div>}
        </div> 
        : 
        <div >
         <div className='tasksDivArr'>
            {Array.isArray(myTask)?myTask.map(e => {
             hours = hours + Number(e.hours)
             return <div key={e.id}>
                <h2>Project: {e.project.name}</h2>
                <h3>Task: {e.task.name}</h3>
                <p>Comments: {e.comment}</p>
                <p>Amount of hours: {e.hours}</p>
                <p>Date: {e.date.slice(0, [10])}</p>
                {e.approved ? <p>Status: approved</p> : <button>Edit my entry</button>}
                </div>
        }): <div>no tasks</div>}
        </div>
        <span>Total amount of hours: {hours}</span>
        </div>
        }
        
    </div>
  )
}

export default TaskView