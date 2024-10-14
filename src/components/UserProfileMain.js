import React from 'react'
import '../styles/UserProfileMain.css';
import UserProfileGraph from './UserProfileGraph';
import RecentJobsLayout from './RecentJobsLayout';

const UserProfileMain = () => {
  return (
    <div className='UserProfileMain'>
        <UserProfileGraph />
        <RecentJobsLayout />
    </div>
  )
}

export default UserProfileMain