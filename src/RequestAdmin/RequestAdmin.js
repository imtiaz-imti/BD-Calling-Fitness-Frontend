import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {requestAdminList} from '../ProductAction'
import RequestAdminDet from '../RequestAdminDet'
import NothingFound from '../NothingFound'

const RequestAdmin = () => {
    const [list,setList] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(requestAdminList(localStorage.getItem('id')))
    },[dispatch])
    const {requestAdminDetails} = useSelector((state) => state.requestAdmin)
    useEffect(()=>{
        if(requestAdminDetails && requestAdminDetails.length > 0 && document.getElementById('rt')){
            let map = new Map()
            let newList = []
            requestAdminDetails.forEach(user => {
               if(!map.has(user.id)){
                 newList.push(user)
                 map.set(user.id,1)
               }
            })
            setList(newList)       
         document.getElementById('rt').style.height = `${100+(requestAdminDetails.length*4)}vh`
        }
   },[requestAdminDetails,document.getElementById('rt')])
    return (
        <div className='rt' id='rt'>
            <div className='rtd'>
              {list && list.length > 0? list.map(user => <RequestAdminDet key={user._id} props={user}/>) : <NothingFound/>}
            </div>
        </div>
    )
}

export default RequestAdmin
