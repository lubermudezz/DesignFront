import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimesheet } from '../../redux/actions'
import './TimeView.css'

const months = [{name: 'January', code: '01'}, {name: 'February', code: '02'}, {name: 'March', code: '03'}, {name: 'April', code: '04'}, {name: 'May', code: '05'}, {name: 'June', code: '06'}, {name: 'July', code: '07'}, {name: 'August', code: '08'}, {name: 'September', code: '09'}, {name: 'October', code: '10'}, {name: 'November', code: '11'}, {name: 'December', code: '12'}]

const TimeView = () => {

  const dispatch = useDispatch()
  const user_id = JSON.parse(localStorage.usuario).id
  const timesheet = useSelector(state => state.myTimesheet)
  const [value, setValue] = useState('none')
  const [week, setWeek] = useState(0)
  let hours = 0

  const getFirstDay = (num) => {
    let firstDay = 7 * (Number(num) -1)
    return firstDay
  }
  const getLastDay = (num) => {
    let lastDay = 7 * week
    return lastDay
  }


  useEffect(() => {
    if(value === 'none') {
      dispatch(getTimesheet(user_id))
    }
  }, [dispatch])

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleWeek = (e) => {
    setWeek(e.target.value)
  }





  return (
    <div>
        <select className='selectTime' onChange={(e) => handleChange(e)}>
            <option value='none'>Month</option>
        {months?.map((e) => {
                return <option  key={e.code} value={e.code}>{e.name}</option>
            })}        
        </select>
        <select className='selectTime' onChange={(e) => handleWeek(e)}>
          <option value="0">Week</option>
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
          <option value="5">Week 5 </option>
        </select>
    <div >
            <div className='timeDiv'>
           {Array.isArray(timesheet)?timesheet.map((e) => {
            if(week == 0) {
              if(e.date.slice(5,[7]) == value) {
                hours = hours + Number(e.hours)
                return <div key={e.date} className='timeViewDiv'>
                <p>Project: {e.project.name}</p>
                <p>Task: {e.task.name}</p>
                <p>Comment: {e.comment}</p>
                <p>Date: {e.date.slice(0,[10])}</p>
                <p>Hours: {e.hours}</p>
                {e.approved ? <p>Status: Approved</p> : <a href='/edit'><input type='button' value='Edit my entry'/></a>}  


              </div>
              }
              else if (value == 'none'){
                hours = hours + Number(e.hours)
                return <div key={e.date} className='timeViewDiv'>
                <p>Project: {e.project.name}</p>
                <p>Task: {e.task.name}</p>
                <p>Comment: {e.comment}</p>
                <p>Date: {e.date.slice(0,[10])}</p>
                <p>Hours: {e.hours}</p>
                {e.approved ? <p>Status: Approved</p> : <a href='/edit'><input type='button' value='Edit my entry'/></a>}  

              </div>
              } 
            } else {
              if(e.date.slice(5,[7]) == value && getFirstDay(week) <= e.date.slice(8,[10]) && e.date.slice(8,[10])  < getLastDay(week)){
                hours = hours + Number(e.hours)
                return <div key={e.date} className='timeViewDiv'>
                <p>Project: {e.project.name}</p>
                <p>Task: {e.task.name}</p>
                <p>Comment: {e.comment}</p>
                <p>Date: {e.date.slice(0,[10])}</p>
                <p>Hours: {e.hours}</p>
                {e.approved ? <p>Status: Approved</p> : <a href='/edit'><input type='button' value='Edit my entry'/></a>}  

              </div>
              }
              else if(value === 'none' && getFirstDay(week) <= e.date.slice(8,[10]) && e.date.slice(8,[10])  < getLastDay(week)){
                hours = hours + Number(e.hours)
                return <div key={e.date} className='timeViewDiv'>
                  <p>Project: {e.project.name}</p>
                  <p>Task: {e.task.name}</p>
                    <p>Comment: {e.comment}</p>
                  <p>Date: {e.date.slice(0,[10])}</p>
                  <p>Hours: {e.hours}</p>
                  {e.approved ? <p>Status: Approved</p> : <a href='/edit'><input type='button' value='Edit my entry'/></a>}  

                  </div>
              }
            }

          }):null}
          </div>
          <span>Total amount of hours: {hours} </span>
        </div>
    </div>
  )
}

export default TimeView