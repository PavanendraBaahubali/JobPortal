import React, { useEffect, useState } from 'react'
import "../styles/JobDetailsLayout.css"
import JobDetails from './JobDetails'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import JobDetailsSkelton from './JobDetailsSkelton'

const JobDetailsLayout = () => {
  const [jobInfo,setJobInfo] = useState({})
  const [isLoading, setLoading] = useState(false);

  const {jobId} = useParams();
  console.log(jobId)
  useEffect(() => {
    setLoading(true);
    
    axios.get(`https://jobportal-backend-0mls.onrender.com/job/${jobId}`)
    .then((result) => setJobInfo(result.data))
    .catch((err) => {
      console.log(err.message)
      setJobInfo([]);
    })
    .finally(() => setLoading(false));
    

  }, [jobId])
  if (isLoading){
    return (
      <div className='JobDetailsLayout'>
        <JobDetailsSkelton />
      </div>
    )
  }
  return (
    <div className='JobDetailsLayout'>
      {
        jobInfo && jobInfo.job ? 
        <JobDetails info = {jobInfo} />
        :
        <p>Not found</p>
      }
    </div>
  )
}

export default JobDetailsLayout