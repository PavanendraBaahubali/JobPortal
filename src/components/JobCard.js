import React from 'react'
import '../styles/JobCard.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
const JobCard = () => {
  return (
    <div className='job-card'>
        <div className = "banner">
            <p>Ads</p>
        </div>
        <div className='job-title'>
            <div className='job-poster'>
                <img 
                alt = "oompany image"
                src = "https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479"
                />
            </div>
            <h3>UI/UX Designer</h3>
        </div>
        <div className='company-name'>
            <h4>Amazon</h4>
        </div>
        <div className='job-info'>

            <div className='job-info-row'>

            <div className='info'>
                <LocationOnIcon />
                <p>Jakarta, ID</p>
            </div>

            <div className='info'>
                <AttachMoneyIcon />
                <p>500-1500</p>
            </div>

            </div>
<div className='job-info-row'>

            <div className='info'>
                <WorkHistoryIcon />
                <p>Full Time</p>
            </div>

            <div className='info'>
                <AccessTimeIcon />
                <p>15 Aug 2024</p>
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
                <h5>Details</h5>
            </div>
        </div>
    </div>
  )
}

export default JobCard