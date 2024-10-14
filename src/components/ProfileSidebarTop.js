import React from 'react'
import '../styles/ProfileSidebarTop.css';


const ProfileSidebarTop = () => {

  return (
    <div className='ProfileSidebarTop'>
        <div className='profile-img'>
          <h4>P</h4>
        </div>
        <div className='user-profile-details'>
            <h1>Walter White</h1>
            <b>walter@gmail.com</b>
        </div>
    </div>
  )
}

export default ProfileSidebarTop