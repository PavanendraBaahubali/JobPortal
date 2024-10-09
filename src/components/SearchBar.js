import React, { useState } from 'react'
import "../styles/SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate, useParams } from 'react-router-dom';

const SearchBar = () => {
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const {jobId} = useParams()
    
    const navigate = useNavigate();
    
    
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
                value={role}
                onChange={(e) => setRole(e.target.value)} // Update role state correctly
                placeholder='Role' 
                type='text' 
            />
            <hr />
            <LocationOnIcon />
            <input 
                value={location}
                onChange={(e) => setLocation(e.target.value)} // Update location state correctly
                placeholder='Location' 
                type='text' 
            />
            <button onClick={(e) => submitHandler(e)}>Search</button> {/* Use onClick for button */}
        </div>
    );
}

export default SearchBar;
