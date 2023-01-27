import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects, getMyEntries } from '../../redux/actions'
import './ProjectView.css'

const ProjectView = () => {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects)
  const[render, setRender] = useState('none')
  let userId = JSON.parse(localStorage.usuario).id



  const handleClick = (e) => {
    let project_id = e.target.name
    dispatch(getMyEntries(userId, project_id))
    setRender('other')

  }

  const myEntries = useSelector(state => state.myentries)


  useEffect(() => {
    dispatch(getAllProjects())
  }, [dispatch])

  return (
    <div>
        {render === 'none' ? <div className='divProjectsMap'>
        {projects.map((e) => {
            return <div className='projectDivNone' key={e.id}>
                <h1>{e.name}</h1>
                <button name={e.id} onClick={(e) => handleClick(e)}>See all entries</button>
            </div>
        })}
        </div> : 

        <div className='projectViewDiv'>
        {Array.isArray(myEntries)?myEntries.map((e) => {
            return <div key={e.id}> 
                <h2>Project: {e.project.name}</h2>
                <h3>Task: {e.task.name}</h3>
                <p>Comment: {e.comment}</p>
                <p>Hours: {e.hours}</p>
                {e.approved ? <p>Status: approved</p> : <p>Status: not approved</p> }
                {e.approved ? null : <button>Edit my entry</button>}
            </div>
        }): <div>No entries</div>}
        </div>
    }


        
    </div>
  )
}

export default ProjectView