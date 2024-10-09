import React from 'react'
import '../styles/JobCard.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
const JobCard = ({job}) => {
    const jobId = job._id
    const navigate = useNavigate();
    const handleJobId = () => {
        navigate(`/job/${jobId}`);
    }
    const workTypes = Object.keys(job.workTypes);
    const typesOfWork = workTypes.filter((type) => (
        job.workTypes[type]
    ))
  return (
    <div className='job-card'>
        <div className = "banner">
            <p>Ads</p>
        </div>
        <div className='job-title'>
            <div className='job-poster'>
                <img 
                alt = "company-logo"
                src = "https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479"
                />
            </div>
            <h3>{job.job.title}</h3>
        </div>
        <div className='company-name'>
            <h4>{job.company}</h4>
        </div>
        <div className='job-info'>

            <div className='job-info-row'>

            <div className='info'>
                <LocationOnIcon />
                <p>{job.job.location}</p>
            </div>

            <div className='info'>
                <AttachMoneyIcon />
                <p>{job.salaryRange.from}-{job.salaryRange.to}</p>
            </div>

            </div>
<div className='job-info-row'>

            <div className='info'>
                <WorkHistoryIcon />
                {
                    typesOfWork.map((type, index) => (
                        index === workTypes.length - 1 ?
                <p>{type[0].toUpperCase() + type.substring(1) }</p>
                        :
                        job.workTypes[type] ?
                <p>{type[0].toUpperCase() + type.substring(1) + "/"}</p>
                        :
                        ""
                    ))
                }
            </div>

            <div className='info'>
                <AccessTimeIcon />
                <p>{job.postedDate}</p>
            </div>
            
            </div>

        </div>
        <div className='job-share'>
            <div className='job-share-left'>
            <div className='job-bookmark'>
                <BookmarkBorderIcon />
            </div>
            <div className='job-bookmark'>
                <ShareIcon />
            </div>
            </div>
            <div className='job-share-right'>
                <h5 onClick={() => handleJobId()}>Details</h5>
            </div>
        </div>
    </div>
  )
}

export default JobCard