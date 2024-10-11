import React, {  useState } from 'react'
import "../styles/JobDetails.css"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { addToBookmark, removeBookmark } from '../reduxSlices/BookMarkSlice';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const JobDetails = ({info}) => {
   const [isToggle, setToggle] = useState(false);
   const [showPopup, setPopup] = useState(false);

   const dispatch = useDispatch();

   const toggleBookmark = () => {
    const token = localStorage.getItem('token');
    if (!token){
        dispatch(setPopup(!showPopup));
        return;
    }
    if(!isToggle) {
        setToggle(true)
        dispatch(addToBookmark(info));
    }
    else{
        setToggle(false);
        dispatch(removeBookmark(info));
    }
}

  return (
    <div key={info._id} className='JobDetails'>
        <div className='job-details-top'>
            <div className= 'job-detail-head'>
                <div className='job-company'>
                <div className='job-detail-img'>
                    <img 
                    alt = "company-logo"
                    src = "https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479"
                    />
                </div>
                <h6>{info.company}</h6>
                </div>

                <h2>{
                info.job.title
           }</h2>
                <div onClick={() => toggleBookmark()} className='job-detail-bookmark'>
                
                    {isToggle ? <BookmarkIcon /> :  
                    <TurnedInNotIcon />}
                </div>
            </div>
            <div className='job-detail-info'>
                <div className='job-detail-row'>
                <WorkOutlineIcon />
                {
                            Object.keys(info.workTypes).map((type, index) => (
                                info.workTypes[type] ? <p key={index}>{type}</p> : <></>
                            ))
                        }
                
                </div>

                <div className='job-detail-row'>
                <QueryBuilderIcon />
                <p>2:00PM - 5:00AM</p>
                </div>


                <div className='job-detail-row'>
                <AttachMoneyIcon />
                <p>{info.salaryRange.from} - {info.salaryRange.to}</p>
                </div>

                <div className='job-detail-row'>
                <LocationOnIcon />
                <p>{info.job.location}</p>
                </div>


                <div className='job-detail-row'>
                <CalendarMonthIcon />
                <p>Posted Date: {info.postedDate}</p>
                </div>

            </div>

            <div className='job-apply'>
                <button className='btn-apply'>Apply</button>
            </div>
        </div>
        <div className='job-details-bottom'>
            <div className='job-description'>
                <h3>Job Description</h3>
                <p>
                {info.job.description}
                </p>
            </div>
            <div className='job-requirements'>  
                <h3>Job requirements</h3>
                    <p>
                    What is {info.company}?

We started out as a data team ourselves and worked across large-scale data projects for 200 organizations, including the United Nations' SDGs National Data Platforms.

Today, Atlan is the next-generation platform for data and AI governance. It is a control plane that stitches together a business's disparate data infrastructure, cataloging data and enriching it with business context and security.

Data practitioners spend 30-50% of their time finding and understanding data; Atlan's platform cuts that time by 95% and sets a new standard for modern data governance and AI readiness. With Atlan, data and business teams can easily find, trust, and govern AI-ready data.

Backed by top investors including GIC, Insight Partners, Sequoia Capital India, and Salesforce Ventures, Atlan features deep integrations across the modern data stack and is trusted by the likes of Cisco, Autodesk, Unilever, Ralph Lauren, FOX, News Corp, Nasdaq, NextGen, Plaid, and HubSpot to enable major AI and data democratization initiatives.
                    </p>
            </div>
            <div className='job-skills'>
                <b>Skills : </b>
               <div className = 'job-skills-list'>
               {info.job.skills && info.job.skills.length > 0 ?
                        info.job.skills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        )) :
                        <p>No skills listed</p>
                    }
               </div>
            </div>
            <div className='about-job'>
                <h3>About Job</h3>
                <p>What is {info.company}?

We started out as a data team ourselves and worked across large-scale data projects for 200 organizations, including the United Nations' SDGs National Data Platforms.

Today, Atlan is the next-generation platform for data and AI governance. It is a control plane that stitches together a business's disparate data infrastructure, cataloging data and enriching it with business context and security.

Data practitioners spend 30-50% of their time finding and understanding data; Atlan's platform cuts that time by 95% and sets a new standard for modern data governance and AI readiness. With Atlan, data and business teams can easily find, trust, and govern AI-ready data.

Backed by top investors including GIC, Insight Partners, Sequoia Capital India, and Salesforce Ventures, Atlan features deep integrations across the modern data stack and is trusted by the likes of Cisco, Autodesk, Unilever, Ralph Lauren, FOX, News Corp, Nasdaq, NextGen, Plaid, and HubSpot to enable major AI and data democratization initiatives.</p>
            </div>


        </div>
    </div>
  )
}

export default JobDetails