import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../../redux/actions'
import AddTime from '../AddTime/AddTime'
import './Card.css'

const Card = ({name, description, project_id}) => {

const dispatch = useDispatch()
const tasks = useSelector(state => state.tasks)


 const handleClick = (e) => {
    dispatch(getTasks(project_id))
    e.target.name !== 'hidden' ? 
    document.getElementById(name).style.display='block'
    : document.getElementById(name).style.display='none'
 }

  return (
    <div className='cardDiv'>
        <h2>{name}</h2>
        <p>{description}</p>
        <button name={project_id} onClick={(e) => handleClick(e)}>See Tasks</button>
        <button name='hidden' onClick={(e) => handleClick(e)}>Hide Tasks</button>

        <div id={name}>
            {tasks.map(e => e.project_id === project_id ? 
            <div key={e.id}>
                <p>{e.name}</p>
                <AddTime task_id={e.id} project_id={e.project_id}/>
            </div> : null)}
        </div>
    </div>
  )
}

export default Card