import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions'
import '../Login/Login.css'

const Login = () => {
    const dispatch = useDispatch()
 
    const [user, setUser] = useState({
        userName: ''
    })
 
    const handleChange = (e)  => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        dispatch(login(user.userName))
    }

  return (
    <div className='loginDiv'>
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Welcome!</h1>
            <input onChange={(e) => handleChange(e)} name='userName' placeholder='username:' type="text" />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login