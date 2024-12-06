import React,{useState,useEffect} from 'react'
import './RequestTrainer.css'
import RequestTrainerDet from '../RequestTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {requestTrainerList} from '../ProductAction'
import NothingFound from '../NothingFound'

const RequestTrainer = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(requestTrainerList(localStorage.getItem('id')))
  },[dispatch])
  const {requestTrainerDetails} = useSelector((state) => state.requestTrainer)
  useEffect(()=>{
       if(requestTrainerDetails && requestTrainerDetails.length > 0 && document.getElementById('rt')){
         document.getElementById('rt').style.height = `${100+(requestTrainerDetails.length*4)}vh`
       }
  },[requestTrainerDetails,document.getElementById('rt')])
  return (
    <div className='rt' id='rt'>
        <div className='rtd'>
           {requestTrainerDetails && requestTrainerDetails.length > 0  ? requestTrainerDetails.map(user => <RequestTrainerDet key={user._id} props={user}/>) : <NothingFound/>}
        </div>
    </div>
  )
}

export default RequestTrainer
