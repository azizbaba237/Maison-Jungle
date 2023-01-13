import React from 'react'
import { serviceSecure } from '../services/Secure'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  
  function setToken() {
    serviceSecure.setToken()
    navigate("/dashboard")
  }

  return (
    <div className='flex items-center justify-center h-screen overflow-hidden'>
        <button className=' bg-green-500 p-10' onClick={() => setToken()} > YES !!!!!!!</button>
    </div>
  )
}

export default Login