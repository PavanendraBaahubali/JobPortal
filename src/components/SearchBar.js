import React, { useEffect, useState } from 'react'
import "../styles/SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate, useParams } from 'react-router-dom';
import SearchRecommendation from './SearchRecommendation';
import axios from 'axios';

const SearchBar = () => {
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const [recomData, setRecomData] = useState([])
    const [showRecommendation, setShowRecommendation] = useState(false);

    const {jobId} = useParams()
    
    const navigate = useNavigate();
    


    useEffect(() => {
        let apiUrl = 'https://jobportal-backend-0mls.onrender.com/?'; 
    
        if (role) apiUrl += `role=${encodeURIComponent(role)}&`; 
        if (location) apiUrl += `location=${encodeURIComponent(location)}&`;
    
        apiUrl = apiUrl.endsWith('&') ? apiUrl.slice(0, -1) : apiUrl;
        console.log(apiUrl);
        axios.get(apiUrl) 
            .then((res) => setRecomData(res.data))
            .catch((err) => console.log(err.message));
    }, [role, location]);
    

    const handleSearchRecommendation = (e) => {
        setRole(e.target.value)
    }

    const submitHandler = (e) => {
        
        let url = ""
        e.preventDefault(); // Prevent the default form submission behavior
        if (role && location){
            url += `?${encodeURIComponent('role')}=${role}&${encodeURIComponent('location')}=${location}`;
        }
        else if (role){
            url += `?${encodeURIComponent('role')}=${role}`;
        }
        else if(location){
            url += `?${encodeURIComponent('location')}=${location}`;
        }

        setRole('')
        setLocation('')

        console.log(jobId);
        if (jobId){
            navigate('/')
        }
        navigate(url);
    }
    return (
        <div className='search-bar'>
            <SearchIcon />
            <input
                onFocus={() => setShowRecommendation(true)}
                onBlur={() => {
                    setTimeout(() => {
                        setShowRecommendation(false)
                    }, 200)
                }}
                value={role}
                onChange={(e) => handleSearchRecommendation(e)} // Update role state correctly
                placeholder='Role' 
                type='text' 
            />
            <hr />
            <LocationOnIcon />
            <input 
            onFocus={() => setShowRecommendation(true)}
            onBlur={() => {
                setTimeout(() => {
                    setShowRecommendation(false)
                }, 200)
            }}
                value={location}
                onChange={(e) => setLocation(e.target.value)} // Update location state correctly
                placeholder='Location' 
                type='text' 
            />
            <button onClick={(e) => submitHandler(e)}>Search</button> {/* Use onClick for button */}
            {
                showRecommendation && 
            <SearchRecommendation data = {recomData} />
            }
        </div>
    );
}

export default SearchBar;
