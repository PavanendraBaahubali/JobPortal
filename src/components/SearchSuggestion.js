import React from 'react'
import '../styles/SearchSuggestion.css';

const SearchSuggestion = ({recom}) => {
  console.log(recom);
  return (
    <div className='SearchSuggestion'>
        <div className='search-img'>
        <img 
                    alt = "company-logo"
                    src = "https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479"
                    />
        </div>
        <h3>{recom.job.title}</h3>
    </div>
  )
}

export default SearchSuggestion