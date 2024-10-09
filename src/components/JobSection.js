import React, { useEffect, useState } from 'react'
import '../styles/JobSection.css'
import JobCard from './JobCard'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import JobSkelton from './JobSkelton';

const JobSection = () => {
    const [jobData, setJobData] = useState([]);
    const [isLoading, SetLoading] = useState(false)



    const location = useLocation();
    console.log(jobData)
    useEffect(() => {
        const getQueryParams = () => {

            const searchParams = new URLSearchParams(location.search);
            const query = {}
            searchParams.forEach((val, key) => query[key] = val)

            console.log(searchParams)
            console.log(query);

            return query;
        }

        const getFilterdJobs = async () => {
            SetLoading(true);
            setJobData([])
            const queryParams = getQueryParams();

            let ApiUrl = `http://localhost:3030/`;

            const queryString = Object.keys(queryParams)
            .map((key) => `${key}=${queryParams[key]}`)
            .join("&");
            
            if (queryString.length > 0)
                ApiUrl += "?"
            ApiUrl += queryString;

            console.log(ApiUrl);

            try{
                const response = await axios.get(ApiUrl)
                console.log(response.data);
                setJobData(response.data);
            }
            catch(err){
                console.log(err.message);
            }
            finally{
                SetLoading(false)
            }
        }
        
        getFilterdJobs()

    }, [location.search])

    

  

  return (
    <div className='job-section'>
        {   
            isLoading ? Array(5).fill().map((_, index) => <JobSkelton key={index} />)
            :
            jobData.length > 0 ?
            jobData.map((job) => (
                <JobCard key={job._id} job = {job} />
            ))
            :
            <h4>No Jobs Were Found.</ h4>
        }
    </div>
  )
}

export default JobSection