import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {requestAdminList} from '../ProductAction'
import RequestAdminDet from '../RequestAdminDet'

const RequestAdmin = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(requestAdminList(localStorage.getItem('id')))
    },[dispatch])
    const {requestAdminDetails} = useSelector((state) => state.requestAdmin)
    return (
        <div className='rt'>
            <div className='rtd'>
              {requestAdminDetails ? requestAdminDetails.map(user => <RequestAdminDet key={user._id} props={user}/>) : <></>}
            </div>
        </div>
    )
}

export default RequestAdmin
