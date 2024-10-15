import React from 'react'
import "../styles/RecentJobCard.css"

const RecentJobCard = ({data}) => {
  return (
    <div key={data._id} className='RecentJobCard'>
        <div className='recent-job-main'>
        <div className='recent-job-poster'>
        <img 
                alt = "company-logo"
                src = "https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479"
                />
        </div>
        <h3>{data.appliedJobs.jobRole}</h3>
        </div>
        <p>{data.appliedJobs.appliedDate}</p>
    </div>
  )
}

export default RecentJobCard