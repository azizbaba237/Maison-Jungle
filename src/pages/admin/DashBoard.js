import React from 'react'
import { useNavigate } from 'react-router-dom'
import { serviceSecure } from '../../services/Secure'



function DashBoard() {

  const navigate = useNavigate()

  function setTsetLogOutoken() {
    serviceSecure.removeToken()
    navigate("/")
  }

  return (
    <div>
      <h1>DashBoard</h1>
      <button className='bg-red-600 p-10' onClick={() => setTsetLogOutoken()}>Log out</button>
    </div>
  )
}

export default DashBoard