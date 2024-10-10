import React from 'react'
import "../styles/HomeLayout.css"
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MainSectionLayout from './MainSectionLayout'
import Please from '../Popups/Please'
import { useSelector } from 'react-redux'

const HomeLayout = () => {
    const showPopup = useSelector((state) => state.please)
    console.log(showPopup);
  return (
    <div className='home-layout'>
        <Header />
        <SearchBar />
        <MainSectionLayout />
        {showPopup && <Please />}
    </div>
  )
}

export default HomeLayout