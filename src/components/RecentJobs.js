import React, { useEffect, useState } from 'react'
import "../styles/RecentJobs.css"
import RecentJobCard from './RecentJobCard'
import axios from 'axios'

const RecentJobs = () => {
  const userId = localStorage.getItem('userId');
  const [jobData, setJobData] = useState([])

  console.log(localStorage.getItem('token'))
  console.log(userId);


  useEffect(() => {
    axios.get(`https://jobportal-backend-0mls.onrender.com/profile/appliedJobs/${userId}`)
    .then((res) => setJobData(res))
    .catch((err) => console.log(err.message));
  }, [userId]);

  return (
    <div className='RecentJobs'>
        <div className='recent-jobs-head'>
            <h2>Recent Jobs</h2>
            <p>Sort by</p>
        </div>
        <div className='recent-jobcards-wrapper'>
          {
            jobData.length > 0 ?
            jobData.map((data) => (
              <RecentJobCard data={data} />
            ))
            :
            <p>No applied jobs were found</p>
          }
            
        </div>
    </div>
  )
}

export default RecentJobs