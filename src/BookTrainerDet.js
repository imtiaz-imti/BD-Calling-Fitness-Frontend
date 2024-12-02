import React,{useState,useEffect} from 'react'
import axios from 'axios'

const BookTrainerDet = ({props}) => {
    const [book,setBook] = useState(0)
    const bookClicked = async ()=>{
        const body = {
             startTime:props.s,
             endTime:props.e,
             time:props.t,
             trainer_id:String(props.user._id),
             trainees_id:props.id,
             name: props.userLogin ? props.userLogin.name : ''
        }
        try {
            await axios.post('http://localhost:4000/api/v1/book/trainer',body)
            alert('booked successfully')
        } catch (error) {console.log(error)}  
    }
    const list = props.user.trainerBookedByTrainees
    useEffect(()=>{
        list.forEach(ele => {
            if(ele.startTime === props.s && ele.endTime === props.e && ele.time === props.t && ele.id === props.id){
              setBook(1)
            } 
         })
    },[list])
    return (
        <div className='rtd1'>
           <div className='rtd11'>
             <div className='rtd111'>{props.user.name}</div>
             {book ? <div className='booked'>Booked</div> : <div className='rtd112' onClick={bookClicked}>Book</div>}
           </div>
        </div>
    )
}

export default BookTrainerDet
