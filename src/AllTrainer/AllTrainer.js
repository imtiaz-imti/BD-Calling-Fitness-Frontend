import React,{useEffect} from 'react'
import AllTrainerDet from '../AllTrainerDet'
import {useDispatch,useSelector} from 'react-redux'
import {allTrainerList} from '../ProductAction'
import NothingFound from '../NothingFound'

const AllTrainer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(allTrainerList(localStorage.getItem('id')))
    },[dispatch])
    const {allTrainerDetails} = useSelector((state) => state.allTrainer)
    useEffect(()=>{
        if(allTrainerDetails && allTrainerDetails.length > 0 && document.getElementById('rt')){
          document.getElementById('rt').style.height = `${100+(allTrainerDetails.length*4)}vh`
        }
   },[allTrainerDetails,document.getElementById('rt')])
    return (
        <div className='rt' id='rt'>
            <div className='rtd'>
               {allTrainerDetails && allTrainerDetails.length > 0 ? allTrainerDetails.map(user => <AllTrainerDet key={user._id} props={user}/>) : <NothingFound/>}
            </div>
        </div>
    )
}

export default AllTrainer
