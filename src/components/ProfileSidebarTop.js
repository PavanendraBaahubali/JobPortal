import React, { useEffect, useState } from 'react'
import '../styles/ProfileSidebarTop.css';
import axios from 'axios';


const ProfileSidebarTop = () => {
  const userId = localStorage.getItem('userId');
  const [profileData, setProfileData] =  useState([])
  const [isProfileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    setProfileLoading(true);
    
    axios.get(`https://jobportal-backend-0mls.onrender.com/profile/${userId}`)
    .then((res) =>{
      setProfileData(res.data[0])

    })
    .catch((err) => {
      console.log(err.message)}
    )
    .finally(() => {
      setProfileLoading(false)
    })

  }, [userId]);


    if (isProfileLoading){
      return (
        <div className= 'profileSidebarTopLoading'>
            <div className='profile-img'>
                  <h4> </h4>
            </div>
            <div className='user-profile-details'>
                <h1> </h1>
                <b> </b>
            </div>
        </div>
      )
    }
  return (
    <div className= 'ProfileSidebarTop'  >
        <div className='profile-img'>
          <h4>{profileData.userName ? profileData.userName[0].toUpperCase() : ""}</h4>
        </div>
        <div className='user-profile-details'>
            <h1>{profileData.userName}</h1>
            <b>{profileData.emailId}</b>
        </div>
    </div>
  )
}

export default ProfileSidebarTop