import React from 'react'
import Schedule from '../Schedule/Schedule'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TrainerDashboard = () => {
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
      const ra = async ()=>{
         await axios.post('http://localhost:4000/api/v1/request/admin',{id : localStorage.getItem('id')})
         alert('Request send to admin')
      }
   return (
     <div className='admindash'>
        <div className='admindash1'>
          <div className='admindash11'>BD-Calling Fitness</div>
          <img onClick={openDet} src='https://cdn-icons-png.flaticon.com/128/7792/7792127.png' alt=''/>
        </div>
        <div className='admindash2'>
           <Link to="/mark/available/5.30/7.30/AM"><Schedule props={{start:'5.30',end:'7.30',time:'AM'}}/></Link>
           <Link to="/mark/available/7.30/9.30/AM"><Schedule props={{start:'7.30',end:'9.30',time:'AM'}}/></Link>
           <Link to="/mark/available/9.30/11.30/PM"><Schedule props={{start:'9.30',end:'11.30',time:'PM'}}/></Link>
           <Link to="/mark/available/11.30/1.30/PM"><Schedule props={{start:'11.30',end:'1.30',time:'PM'}}/></Link>
           <Link to="/mark/available/1.30/3.30/PM"><Schedule props={{start:'1.30',end:'3.30',time:'PM'}}/></Link>
           <Link to="/mark/available/3.30/5.30/PM"><Schedule props={{start:'3.30',end:'5.30',time:'PM'}}/></Link>
           <Link to="/mark/available/5.30/7.30/PM"><Schedule props={{start:'5.30',end:'7.30',time:'PM'}}/></Link>
           <Link to="/mark/available/7.30/9.30/PM"><Schedule props={{start:'7.30',end:'9.30',time:'PM'}}/></Link>
           <Link to="/mark/available/9.30/11.30/PM"><Schedule props={{start:'9.30',end:'11.30',time:'PM'}}/></Link>
           <Link to="/mark/available/11.30/1.30/AM"><Schedule props={{start:'11.30',end:'1.30',time:'AM'}}/></Link>
        </div>
        <div className='admindash3'>
           <div className='admindash31' id='admindash31'>
              <div className='admindash311'><img onClick={closeDet} src='https://cdn-icons-png.flaticon.com/128/2961/2961937.png' alt=''/></div>
              <div className='admindash311'>
               <div className='admindash3111'>
                     <div className='admindash31111' onClick={ra}>Request for Admin</div>
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

export default TrainerDashboard
