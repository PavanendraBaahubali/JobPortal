import React from 'react'
import '../styles/MainSectionLayout.css'
import SideBarSection from '../components/SideBarSection'
import JobSection from '../components/JobSection'
import { useParams } from 'react-router-dom'
import JobDetailsLayout from '../components/JobDetailsLayout'

const MainSectionLayout = () => {
    const {jobId} = useParams()
    if (jobId){
        return (
            <JobDetailsLayout />
        )
    }
  return (
    <div className='main-sectionLayout'>
        <SideBarSection />
        <JobSection />
    </div>
  )
}

export default MainSectionLayout