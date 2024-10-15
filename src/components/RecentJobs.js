import React, { useEffect, useState } from 'react'
import "../styles/RecentJobs.css"
import RecentJobCard from './RecentJobCard'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const RecentJobs = () => {
  const userId = localStorage.getItem('userId');
  const [jobData, setJobData] = useState([])

  const [isDropDown, setDropDown] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleSort = () => {
    if (!isDropDown) {
      setDropDown(true);
    }
    else{
      setDropDown(false);
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3030/profile/appliedJobs/${userId}`)
    .then((res) => setJobData(res.data))
    .catch((err) => console.log(err.message));
  }, [userId]);



  return (
    <div className='RecentJobs'>
        <div className='recent-jobs-head'>
            <h2>Recent Applied Jobs</h2>
            <div className='sortby'>
                <p onClick={() => toggleSort()}>Sort By</p>
                {
                  isDropDown && <div className='sort-options' >
                      <li onClick={() => {
                        toggleSort()
                        setIndex(0)
                      }}>Most Recent</li>
                      <li onClick={() => {
                        toggleSort()
                        setIndex(1);
                      }}>Least Recent</li>
              </div>
                }
            </div>
        </div>
        <div
        className= {index !== 0 ? 'recent-jobcards-wrapper' : 'least-jobcards-wrapper'}>
          {
            jobData.length > 0 ?
            jobData.map((data) => (
              <NavLink  to = {`/job/${data.appliedJobs.jobId}`} >
                <RecentJobCard data={data} />
              </NavLink>
            ))
            :
            <p>No applied jobs were found</p>
          }
            
        </div>
    </div>
  )
}

export default RecentJobs