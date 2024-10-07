import React from 'react'
import "../styles/SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <SearchIcon />
        <input placeholder='Role' type='text' ></input>
        <hr />
        <LocationOnIcon />
        <input placeholder='Location' type='text' ></input>
        <button>Search</button>
    </div>
  )
}

export default SearchBar