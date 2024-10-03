import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()

  if(!user){
    navigate("/")
  }
  
  return (
    <div>Profile</div>
  )
}

export default Profile