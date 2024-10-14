import React from 'react'
import '../styles/Profile.css';
import UserProfileSidebar from './UserProfileSidebar';
import UserProfileMain from './UserProfileMain';

const Profile = () => {
  return (
    <div className='user-profile'>
        <UserProfileSidebar />
        <UserProfileMain />
    </div>
  )
}

export default Profile