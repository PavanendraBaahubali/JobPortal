import React from 'react'
import "../styles/JobDetailsSkelton.css"

const JobDetailsSkelton = () => {
  return (
    <div className='JobDetailsSkelton'>
        <div className='JobDetailsSkelton-job-details-top'>
            <div className= 'JobDetailsSkelton-job-detail-head'></div>
        </div>
        <div className='JobDetailsSkelton-job-details-bottom'>
            <div className='JobDetailsSkelton-job-description'></div>
            <div className='JobDetailsSkelton-job-requirements'>  </div>
        </div>
    </div>
  )
}

export default JobDetailsSkelton