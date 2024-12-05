import React from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {allTrainerList} from './ProductAction'

const AllTrainerDet = ({props}) => {
    const dispatch = useDispatch()
    const deleteTrainer = async ()=>{
      try {
        await axios.post('https://bd-calling-fitness.onrender.com/api/v1/delete/trainer',{id : String(props._id)})
        dispatch(allTrainerList(localStorage.getItem('id')))
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
