import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import LandingPage from './components/LandingPage'
import MyReports from './components/MyReports'
import MyPrescriptions from './components/MyPrescriptions'
import HospitalSelect from './components/HospitalSelect'
import Doxaab from './components/Doxaab'

const Page = () => {
  const [currentViewingMode, setCurrentViewingMode] = useState('landing')







  return (
    <div className="m-0 flex flex-grow min-h-full text-center">
      <div className="w-[35vw] h-max bg-[#2e90f5]">

        <Sidebar changeMode={setCurrentViewingMode}/>
      </div>
      
      <div className="w-full">
        <LandingPage />
      </div>
    </div>
  )
}

export default Page
