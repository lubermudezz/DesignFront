import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'
import ProjectView from '../ProjectView/ProjectView'
import TaskView from '../TaskView/TaskView'
import TimeView from '../TimeView/TimeView'
import './UserEntries.css'

const UserEntries = () => {
 const [render, setRender] = useState('none')
 const handleClick = (e) => {
    if(e.target.name === 'project') {
            setRender('project')
    } else if(e.target.name === 'back') {
        setRender('none')
    } else if (e.target.name === 'tasks'){
        setRender('tasks')
    } else {setRender('other')}
 }
  return (
    <div>
        <Navbar/>
        {render === 'none' ? 
        <div className='optionsDiv'>
        <button onClick={(e) => handleClick(e)}>Weekly / Monthly View</button>
        <button name='project' onClick={(e) => handleClick(e)}>Project View</button>
        <button name='tasks' onClick={(e) => handleClick(e)}>Task View</button>

        </div>
        :
        render === 'project' ? 
        <div>
            <h1>PROJECT</h1>
            <ProjectView/>
            <button className='backButton' name='back' onClick={(e) => handleClick(e)}>Go back</button>
        </div>
        :
        render === 'tasks' ? 
        <div>
            <h1>TASKS</h1>
            <TaskView/>
            <button name='back' onClick={(e) => handleClick(e)}>Go back</button>
        </div>
        :
        <div>
            <h1>Timesheet</h1>
            <TimeView/>
            <button name='back' onClick={(e) => handleClick(e)}>Go back</button>
        </div>
        }
        
    </div>
  )
}

export default UserEntries