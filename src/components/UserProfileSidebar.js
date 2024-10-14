import React from 'react'
import '../styles/UserProfileSidebar.css';
import ProfileSidebarTop from './ProfileSidebarTop';
import ProfileSidebarBottom from './ProfileSidebarBottom';

const UserProfileSidebar = () => {
  return (
    <div className='UserProfileSidebar'>
        <ProfileSidebarTop />
        <hr />
        <ProfileSidebarBottom />
    </div>
  )
}

export default UserProfileSidebar