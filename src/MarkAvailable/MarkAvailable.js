import React,{useState,useEffect} from 'react'
import './MarkAvailable.css'
import MarkAvailableDet from '../MarkAvailableDet'
import axios from 'axios'
import { useParams } from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails} from '../ProductAction'

const MarkAvailable = () => {
  const dispatch = useDispatch()
  const [mark,setMark] = useState(0) 
  const {userDetails} = useSelector((state) => state.userDetails) 
  useEffect(()=>{
    dispatch(getUserDetails(localStorage.getItem('id')))
    if(userDetails){
        const list = userDetails.trainerAvailable
        list.forEach(ele => {
           if(ele.startTime === params.s && ele.endTime === params.e && ele.time === params.t){
             setMark(1)
           } 
        })
      }
  },[dispatch,userDetails])   
  const params= useParams()  
  const available = async ()=>{
    const body = {
        "startTime":params.s,
        "endTime": params.e,
         "time":params.t,
        "id": localStorage.getItem('id'),
      }
      try {
        await axios.post('http://localhost:4000/api/v1/trainer/mark/available',body)
        alert('mark successfully')
      } catch (error) {console.log(error)}
  }  
  useEffect(()=>{
    if(document.getElementById('ma11')){
        document.getElementById('ma11').style.color = 'orange'
    }
  },[document.getElementById('ma11')])
  return (
    <div className='ma'>
       <div className='ma1'>
         {mark ? <div className='ma11' id='ma11'>Marked As Available for this session</div> :
         <div className='ma11' onClick={available}>Mark As Available for this session</div>}
         <div className='ma12'>All the booked trainess will be shown below</div>
         {userDetails ? userDetails.trainerBookedByTrainees.map(user => <MarkAvailableDet key={user._id} props={user}/>) : <></>}
       </div>
    </div>
  )
}

export default MarkAvailable
