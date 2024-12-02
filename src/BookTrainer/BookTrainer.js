import React,{useEffect,useState} from 'react'
import BookTrainerDet from '../BookTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {bookTrainerList} from '../ProductAction'
import { useParams } from 'react-router'
import {getUserDetails} from '../ProductAction'

const BookTrainer = () => {
    const params= useParams() 
    const [list,setList] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(bookTrainerList(localStorage.getItem('id')))
      dispatch(getUserDetails(localStorage.getItem('id')))
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
    const {userDetails} = useSelector((state) => state.userDetails)
    return (
        <div className='rt'>
            <div className='rtd'>
            {list ? list.map(user => <BookTrainerDet key={user._id} props={{user,s:params.s,e:params.e,t:params.t,id:localStorage.getItem('id'),userLogin:userDetails}}/>) : <></>}
            </div>
        </div>
    )
}

export default BookTrainer
