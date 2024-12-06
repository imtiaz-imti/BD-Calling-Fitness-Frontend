import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {requestAdminList} from '../ProductAction'
import RequestAdminDet from '../RequestAdminDet'
import NothingFound from '../NothingFound'

const RequestAdmin = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(requestAdminList(localStorage.getItem('id')))
    },[dispatch])
    const {requestAdminDetails} = useSelector((state) => state.requestAdmin)
    useEffect(()=>{
        if(requestAdminDetails && requestAdminDetails.length > 0 && document.getElementById('rt')){   
         document.getElementById('rt').style.height = `${100+(requestAdminDetails.length*4)}vh`
        }
   },[requestAdminDetails,document.getElementById('rt')])
    return (
        <div className='rt' id='rt'>
            <div className='rtd'>
              {requestAdminDetails && requestAdminDetails.length > 0? requestAdminDetails.map(user => <RequestAdminDet key={user._id} props={user}/>) : <NothingFound/>}
            </div>
        </div>
    )
}

export default RequestAdmin
