import React from 'react'
import axios from 'axios'

const AllTrainerDet = ({props}) => {
    const deleteTrainer = async ()=>{
      try {
        await axios.post('http://localhost:4000/api/v1/delete/trainer',{id : String(props._id)})
        alert('Trainer delete successfully')
      } catch (error) {}
    }
    return (
        <div className='rtd1'>
           <div className='rtd11'>
             <div className='rtd111'>{props.name}</div>
             <img onClick={deleteTrainer} src='https://cdn-icons-png.flaticon.com/128/565/565491.png' alt=''/>
           </div>
        </div>
    )
}

export default AllTrainerDet
