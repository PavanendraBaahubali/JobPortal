import React from 'react'
import '../styles/SearchRecommendation.css';
import SearchSuggestion from './SearchSuggestion';
import { NavLink } from 'react-router-dom';

const SearchRecommendation = ({data}) => {
  console.log(data)
  return (
    <div className='SearchRecommendation'>
        <div className='search-wrapper'>
          {
            data.length > 0 ? 
            data.map((recom) => (
              <NavLink to = {`/job/${recom._id}`} ><SearchSuggestion key = {recom._id} recom = {recom} /></NavLink>
            ))
            : <></>
          }
        </div>
    </div>
  )
}

export default SearchRecommendation