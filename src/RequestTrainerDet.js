import React from 'react'
import axios from 'axios'

const RequestTrainerDet = ({props}) => {
  const accept = async ()=>{
    try {
      await axios.post('http://localhost:4000/api/v1/make/trainer',{id : props.id})
      alert('Accepted as Trainer')
    } catch (error) {}
  }
  const deleteNot = async ()=>{
    try {
      await axios.post('http://localhost:4000/api/v1/delete/notification/trainer',{admin_id : localStorage.getItem('id'),id:props.id})
      alert('Deleted')
    } catch (error) {}
  }
  return (
    <div className='rtd1'>
       <div className='rtd11'>
         <div className='rtd111'>{props.name}</div>
         <div className='rtd112' onClick={accept}>Accept</div>
         <img onClick={deleteNot} src='https://cdn-icons-png.flaticon.com/128/565/565491.png' alt=''/>
       </div>
    </div>
  )
}

export default RequestTrainerDet
