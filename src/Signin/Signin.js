import React from 'react'
import './Signin.css'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails} from '../ProductAction'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submit = async ()=>{
    const body = {
      "email":document.getElementById('email').value,
      "password":document.getElementById('password').value,
    }
    try {
      const userID = await axios.post('http://localhost:4000/api/v1/login',body)
      localStorage.setItem('id',userID.data.userNew)
      dispatch(getUserDetails(userID.data.userNew))
      alert('user logged in successfully')
    } catch (error) {
      alert('Invalid Email or Password')
    }
  }
  const {userDetails} = useSelector((state) => state.userDetails)
  if(userDetails && userDetails.role === 'admin'){
    navigate("/admin/dashboard")
    navigate("/admin/dashboard", { replace: true })
  }
  else if(userDetails && userDetails.role === 'trainer'){
    navigate("/trainer/dashboard")
    navigate("/trainer/dashboard", { replace: true })
  }
  else if(userDetails && userDetails.role === 'trainees'){
    navigate("/trainees/dashboard")
    navigate("/trainees/dashboard", { replace: true })
  }
  return (
    <div className='signin'>
      <div className='signin1'>
        <div className='signin11'>Please Enter Your Details</div>
        <div className='signin13'>Welcome Back</div>
        <div className='signin12'>
            <div className='signin121'><input autoComplete='off' type='text' placeholder='Email Address' className='email' id='email'></input></div>
            <div className='signin121'><input autoComplete='off' type='text' placeholder='Password' className='email' id='password'></input></div>
        </div>
        <div className='signin14'>
            <div className='signin141' onClick={submit}>Sign In</div>
        </div>
      </div>
    </div>
  )
}

export default Signin
