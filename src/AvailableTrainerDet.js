import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'

const AvailableTrainerDet = ({props}) => {
    const params= useParams() 
    const [count,setCount] = useState(0)
    let c = 0
    props.trainerBookedByTrainees.forEach(ele =>{
       if(ele.startTime === params.s && ele.endTime === params.e && ele.time === params.t){
         c+=1
       }
    })
    useEffect(()=>{
      setCount(c) 
    },[c])
    return (
        <div className='rtd1'>
           <div className='rtd11'>
             <div className='rtd111'>{props.name}</div>
             <div className='rtd112'>Booked by {count} trainees</div>
           </div>
        </div>
    )
}

export default AvailableTrainerDet
