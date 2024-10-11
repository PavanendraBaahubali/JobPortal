import React, { useEffect, useState } from 'react';
import '../styles/JobSection.css';
import JobCard from './JobCard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import JobSkelton from './JobSkelton';
import { useSelector } from 'react-redux';

const JobSection = () => {
    const [jobData, setJobData] = useState([]);
    const [isLoading, SetLoading] = useState(false);

    const locationHook = useLocation();
    const bookmarks = useSelector((state) => state.bookmark);
    const location = useLocation();

    useEffect(() => {
        const getQueryParams = () => {
            const searchParams = new URLSearchParams(location.search);
            const query = {};
            searchParams.forEach((val, key) => query[key] = val);
            return query;
        };

        const getFilterdJobs = async () => {
            SetLoading(true);
            setJobData([]);
            const queryParams = getQueryParams();

            let ApiUrl = `https://jobportal-backend-0mls.onrender.com`;
            const queryString = Object.keys(queryParams)
                .map((key) => `${key}=${queryParams[key]}`)
                .join("&");
            if (queryString.length > 0) ApiUrl += "?";
            ApiUrl += queryString;

            try {
                const response = await axios.get(ApiUrl);
                setJobData(response.data);
            } catch (err) {
                console.log(err.message);
            } finally {
                SetLoading(false);
            }
        };

        getFilterdJobs();
    }, [location.search]);

    if (locationHook.pathname === '/bookmarks') {
        return (
            <div className='job-section'>
                {isLoading ? (
                    Array(5)
                        .fill()
                        .map((_, index) => <JobSkelton key={index} />)
                ) : bookmarks.length > 0 ? (
                    bookmarks.map((job) => (
                        <JobCard key={job._id} job={job} bookmark={true} />
                    ))
                ) : (
                    <h4>No Bookmarks Exist.</h4>
                )}
            </div>
        );
    }

    return (
        <div className='job-section'>
            {isLoading ? (
                Array(5)
                    .fill()
                    .map((_, index) => <JobSkelton key={index} />)
            ) : jobData.length > 0 ? (
                jobData.map((job) => {
                    // const isBookmarked = bookmarks.some(
                    //     (bookmark) => bookmark._id === job._id
                    // );

                    const isBookmarked = () => {
                        for(let index in bookmarks){
                        if(bookmarks[index]._id === job._id) return true
                    }
                        return false
                    }
                    return (
                        <JobCard key={job._id} job={job} bookmark={isBookmarked} />
                    );
                })
            ) : (
                <h4>No Jobs Were Found.</h4>
            )}
        </div>
    );
};

export default JobSection;
