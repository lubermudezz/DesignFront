import React from 'react'
import './NavBar.css'

const Navbar = () => {

 let userIsAdmin = JSON.parse(localStorage.usuario).admin


 const handleClick = () => {
    localStorage.removeItem('usuario')
    window.location.replace("https://design-front.vercel.app/" || "http://localhost:3000")
}

  return (
    <div className='navDiv'>
        <a href='/'><input type='button' value='Home'/></a>
        {userIsAdmin ? <a href='/entries'><input type='button' value='All Entries'/></a> : <a href='/myEntries'><input type='button' value='My Entries'/></a> }
        <button onClick={(e) => handleClick(e)}>Cerrar Sesión</button>
    </div>
  )
}

export default Navbar