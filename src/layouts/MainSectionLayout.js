import React from 'react'
import '../styles/MainSectionLayout.css'
import SideBarSection from '../components/SideBarSection'
import JobSection from '../components/JobSection'

const MainSectionLayout = () => {
  return (
    <div className='main-sectionLayout'>
        <SideBarSection />
        <JobSection />
    </div>
  )
}

export default MainSectionLayout