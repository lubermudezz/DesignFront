import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks, getMyTasks } from '../../redux/actions'
import './TaskView.css'

const TaskView = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.allTasks)
  const myTask = useSelector(state => state.myTasks)
  const [render, setRender] = useState('none')
  const user_id = JSON.parse(localStorage.usuario).id
  console.log(myTask)

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
                <h2>{e.name}</h2>
                <button name={e.id} onClick={(e) => handleClick(e)}>See my entries</button>
                </div>
        }): <div>no tasks</div>}
        </div> 
        : 
        <div className='tasksDivArr'>
            {Array.isArray(myTask)?myTask.map(e => {
            return <div key={e.id}>
                <h2>{e.project.name}</h2>
                <h3>{e.task.name}</h3>
                <p>{e.comment}</p>
                <p>{e.hours}</p>
                </div>
        }): <div>no tasks</div>}
        </div>
        }
        
    </div>
  )
}

export default TaskView