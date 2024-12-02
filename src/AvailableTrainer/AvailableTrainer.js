import React,{useEffect,useState} from 'react'
import AvailableTrainerDet from '../AvailableTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {bookTrainerList} from '../ProductAction'
import { useParams } from 'react-router'

const AvailableTrainer = () => {
    const params= useParams() 
    const [list,setList] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(bookTrainerList(localStorage.getItem('id')))
    },[dispatch])
    const {bookTrainerDetails} = useSelector((state) => state.bookTrainer)
    useEffect(()=>{
       if(bookTrainerDetails){
         let data = []
         bookTrainerDetails.forEach(user => {
            user.trainerAvailable.forEach(ele => {
               if(ele.startTime === params.s && ele.endTime === params.e && ele.time === params.t){
                 data.push(user)
               }
            })
         })
         setList(data)
       }
    },[bookTrainerDetails])
    return (
        <div className='rt'>
            <div className='rtd'>
            {list ? list.map(user => <AvailableTrainerDet key={user._id} props={user}/>) : <></>}
            </div>
        </div>
    )
}

export default AvailableTrainer
