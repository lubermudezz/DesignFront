import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from '../../redux/actions'
import Card from '../Card/Card'
import Navbar from '../NavBar/Navbar'
import './Projects.css'

const Projects = () => {

const dispatch = useDispatch()
useEffect(() => {
    dispatch(getAllProjects())
},[dispatch])

const projects = useSelector(state => state.projects)
console.log(projects)



  return (
    <div>
    <Navbar/>
    <h1>All Projects:</h1>
    <div className='projectCardDiv'>
    {projects.map(e => {
        return <Card key={e.id} project_id={e.id} name={e.name} description={e.description}/>
    })}
    </div>
    </div>

  )
}

export default Projects