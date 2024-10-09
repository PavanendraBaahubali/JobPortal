import React from 'react'
import '../styles/SideBarSection.css'
import SalaryRange from './SalaryRange'
import SideBarDetails from './SideBarDetails'

const SideBarSection = () => {
    const jobType = ["fullTime", "partTime", "internship", "contract"]
    const workSetting = ["onSite", "remote", "hybrid"]
    const careers = ["entryLevel", "intermediate", "advanced"];
  return (
    <div className='side-bar'>
        <SalaryRange />
        <SideBarDetails name = "Job Type" data = {jobType} />
        <SideBarDetails name = "Work Settings" data = {workSetting} />
        <SideBarDetails name = "Careers Goals" data = {careers} />
    </div>
  )
}

export default SideBarSection