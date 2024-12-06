import React,{useState,useEffect} from 'react'
import './RequestTrainer.css'
import RequestTrainerDet from '../RequestTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {requestTrainerList} from '../ProductAction'
import NothingFound from '../NothingFound'

const RequestTrainer = () => {
  const [list,setList] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(requestTrainerList(localStorage.getItem('id')))
  },[dispatch])
  const {requestTrainerDetails} = useSelector((state) => state.requestTrainer)
  useEffect(()=>{
       if(requestTrainerDetails && requestTrainerDetails.length > 0 && document.getElementById('rt')){
         let map = new Map()
         let newList = []
         requestTrainerDetails.forEach(user => {
            if(!map.has(user.id)){
              newList.push(user)
              map.set(user.id,1)
            }
         })
         setList(newList) 
         document.getElementById('rt').style.height = `${100+(requestTrainerDetails.length*4)}vh`
       }
  },[requestTrainerDetails,document.getElementById('rt')])
  return (
    <div className='rt' id='rt'>
        <div className='rtd'>
           {list && list.length > 0  ? list.map(user => <RequestTrainerDet key={user._id} props={user}/>) : <NothingFound/>}
        </div>
    </div>
  )
}

export default RequestTrainer
