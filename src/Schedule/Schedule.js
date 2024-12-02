import React from 'react'

const Schedule = ({props}) => {
  return (
    <div className='admindash21'>
            <img src='https://images.pexels.com/photos/15828942/pexels-photo-15828942/free-photo-of-basketball-hoop-at-night.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
            <div className='admindash211'>
               <div className='admindash2111'>{props.start} - {props.end} {props.time}</div>
            </div>
    </div>
  )
}

export default Schedule
