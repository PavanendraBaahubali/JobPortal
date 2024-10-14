import React from 'react'
import "../styles/RecentJobCard.css"

const RecentJobCard = ({data}) => {
  return (
    <div key={data._id} className='RecentJobCard'>
        <div className='recent-job-main'>
        <div className='recent-job-poster'></div>
        <h3>{data.appliedJobs.jobRole}</h3>
        </div>
        <p>15-Aug-2001</p>
    </div>
  )
}

export default RecentJobCard