import React,{useEffect} from 'react'
import './RequestTrainer.css'
import RequestTrainerDet from '../RequestTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {requestTrainerList} from '../ProductAction'

const RequestTrainer = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(requestTrainerList(localStorage.getItem('id')))
  },[dispatch])
  const {requestTrainerDetails} = useSelector((state) => state.requestTrainer)
  return (
    <div className='rt'>
        <div className='rtd'>
           {requestTrainerDetails ? requestTrainerDetails.map(user => <RequestTrainerDet key={user._id} props={user}/>) : <></>}
        </div>
    </div>
  )
}

export default RequestTrainer
