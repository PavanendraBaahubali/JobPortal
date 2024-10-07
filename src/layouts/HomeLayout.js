import React from 'react'
import "../styles/HomeLayout.css"
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MainSectionLayout from './MainSectionLayout'

const HomeLayout = () => {
  return (
    <div className='home-layout'>
        <Header />
        <SearchBar />
        <MainSectionLayout />
    </div>
  )
}

export default HomeLayout