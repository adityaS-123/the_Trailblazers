import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import LandingPage from './components/LandingPage'
import MyReports from './components/MyReports'
import MyPrescriptions from './components/MyPrescriptions'
import HospitalSelect from './components/HospitalSelect'
import Doxaab from './components/Doxaab'
import RegistrationForm from './components/RegistrationForm'

const Page = () => {
  const [currentViewingMode, setCurrentViewingMode] = useState('report')







  return (
    <div className="m-0 flex flex-grow min-h-full text-center">
      <div className="w-[35vw] h-max bg-[#2e90f5]">

        <Sidebar changeMode={setCurrentViewingMode}/>
      </div>
      
      {
        (()=>{
          switch (currentViewingMode) {
            case 'landing':
              return(
                <LandingPage />
              )
              break;
            case 'hospitalSelect':
              return(
                <HospitalSelect />
              )
              break;
            case 'registration':
              return(
                <RegistrationForm />
              )
              break
            case 'report':
              return(
                <MyReports />
              )
              break
            case 'prescription':
              return(
                <MyPrescriptions />
              )
              break
            case 'doxaab':
              return(
                <Doxaab />
              )
              break
            default:
              break;
          }
        })()
      }
    </div>
  )
}

export default Page
