import React,{useEffect} from 'react'
import AllTrainerDet from '../AllTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {allTrainerList} from '../ProductAction'

const AllTrainer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(allTrainerList(localStorage.getItem('id')))
    },[dispatch])
    const {allTrainerDetails} = useSelector((state) => state.allTrainer)
    return (
        <div className='rt'>
            <div className='rtd'>
               {allTrainerDetails ? allTrainerDetails.map(user => <AllTrainerDet key={user._id} props={user}/>) : <></>}
            </div>
        </div>
    )
}

export default AllTrainer
