import React,{useEffect,useState} from 'react'
import AvailableTrainerDet from '../AvailableTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {bookTrainerList} from '../ProductAction'
import { useParams } from 'react-router'
import NothingFound from '../NothingFound'

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
    useEffect(()=>{
      if(list && list.length > 0 && document.getElementById('rt')){
        document.getElementById('rt').style.height = `${100+(list.length*4)}vh`
      }
    },[list,document.getElementById('rt')])
    return (
        <div className='rt' id='rt'>
            <div className='rtd'>
            {list && list.length > 0 ? list.map(user => <AvailableTrainerDet key={user._id} props={user}/>) : <NothingFound/>}
            </div>
        </div>
    )
}

export default AvailableTrainer
