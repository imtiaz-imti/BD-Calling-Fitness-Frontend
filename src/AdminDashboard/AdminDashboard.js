import React,{useEffect} from 'react'
import './AdminDashboard.css'
import Schedule from '../Schedule/Schedule'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails} from '../ProductAction'
import axios from 'axios'

const AdminDashboard = () => {
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(getUserDetails(localStorage.getItem('id')))
   },dispatch)
   const navigate = useNavigate()
    const openDet = ()=>{
       if(document.getElementById('admindash31')){
         document.getElementById('admindash31').style.visibility = 'visible'
         document.getElementById('admindash31').style.zIndex = 9999
       }
    }
    const closeDet = ()=>{
        if(document.getElementById('admindash31')){
          document.getElementById('admindash31').style.visibility = 'hidden'
          document.getElementById('admindash31').style.zIndex = 0
        }
   }
   const signOut = ()=>{
      localStorage.setItem('id','')
      navigate("/")
      navigate("/", { replace: true })
   }
   const rt = async ()=>{
      try {
         await axios.put('http://localhost:4000/api/v1/delete/notification/count/trainer',{id : localStorage.getItem('id')})
      } catch (error) {}
   }
   const ra = async ()=>{
      try {
         await axios.put('http://localhost:4000/api/v1/delete/notification/count/admin',{id : localStorage.getItem('id')})
      } catch (error) {}
   }
   const {userDetails} = useSelector((state) => state.userDetails)
   if(userDetails && userDetails.wantToTrainerNotificationCount > 0 && document.getElementById('rt')){
      document.getElementById('rt').style.visibility = 'visible'
   }
   if(userDetails && userDetails.wantToAdminNotificationCount > 0 && document.getElementById('ra')){
      document.getElementById('ra').style.visibility = 'visible'
   }
  return (
    <div className='admindash'>
       <div className='admindash1'>
         <div className='admindash11'>BD-Calling Fitness</div>
         <img onClick={openDet} src='https://cdn-icons-png.flaticon.com/128/7792/7792127.png' alt=''/>
       </div>
       <div className='admindash2'>
           <Link to="/available/trainer/5.30/7.30/AM"><Schedule props={{start:'5.30',end:'7.30',time:'AM'}}/></Link>
           <Link to="/available/trainer/7.30/9.30/AM"><Schedule props={{start:'7.30',end:'9.30',time:'AM'}}/></Link>
           <Link to="/available/trainer/9.30/11.30/PM"><Schedule props={{start:'9.30',end:'11.30',time:'PM'}}/></Link>
           <Link to="/available/trainer/11.30/1.30/PM"><Schedule props={{start:'11.30',end:'1.30',time:'PM'}}/></Link>
           <Link to="/available/trainer/1.30/3.30/PM"><Schedule props={{start:'1.30',end:'3.30',time:'PM'}}/></Link>
           <Link to="/available/trainer/3.30/5.30/PM"><Schedule props={{start:'3.30',end:'5.30',time:'PM'}}/></Link>
           <Link to="/available/trainer/5.30/7.30/PM"><Schedule props={{start:'5.30',end:'7.30',time:'PM'}}/></Link>
           <Link to="/available/trainer/7.30/9.30/PM"><Schedule props={{start:'7.30',end:'9.30',time:'PM'}}/></Link>
           <Link to="/available/trainer/9.30/11.30/PM"><Schedule props={{start:'9.30',end:'11.30',time:'PM'}}/></Link>
           <Link to="/available/trainer/11.30/1.30/AM"><Schedule props={{start:'11.30',end:'1.30',time:'AM'}}/></Link>
       </div>
       <div className='admindash3'>
          <div className='admindash31' id='admindash31'>
             <div className='admindash311'><img onClick={closeDet} src='https://cdn-icons-png.flaticon.com/128/2961/2961937.png' alt=''/></div>
             <div className='admindash311'>
                <div className='admindash3111'>
                    <div className='admindash31111'onClick={rt} ><Link to="/request/trainer" style={{color:'black'}}>Request for trainer</Link></div>
                    <div className='admindash31112' id='rt' >{userDetails && userDetails.wantToTrainerNotificationCount > 0 ? userDetails.wantToTrainerNotificationCount : <></>}</div>
                </div>
             </div>
             <div className='admindash311'>
              <div className='admindash3111'>
                    <div className='admindash31111' onClick={ra}><Link to="/request/admin" style={{color:'black'}}>Request for Admin</Link></div>
                    <div className='admindash31112' id='ra'>{userDetails && userDetails.wantToAdminNotificationCount > 0 ? userDetails.wantToAdminNotificationCount : <></>}</div>
                </div>
             </div>
             <div className='admindash311'>
             <div className='admindash3111'>
                    <div className='admindash31111'><Link to="/all/trainer" style={{color:'black'}}>All Trainer</Link></div>
                </div>
             </div>
             <div className='admindash311'>
             <div className='admindash3111'>
                    <div className='admindash31111' onClick={signOut}>Sign Out</div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default AdminDashboard
