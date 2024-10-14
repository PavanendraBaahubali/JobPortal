import React from 'react'
import "../styles/RecentJobs.css"
import RecentJobCard from './RecentJobCard'

const RecentJobs = () => {
  return (
    <div className='RecentJobs'>
        <div className='recent-jobs-head'>
            <h2>Recent Jobs</h2>
            <p>Sort by</p>
        </div>
        <div className='recent-jobcards-wrapper'>
            <RecentJobCard />
            <RecentJobCard />
            <RecentJobCard />
            <RecentJobCard />
            <RecentJobCard />
            
        </div>
    </div>
  )
}

export default RecentJobs