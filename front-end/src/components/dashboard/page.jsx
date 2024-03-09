import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import LandingPage from './components/LandingPage'
import MyReports from './components/MyReports'
import MyPrescriptions from './components/MyPrescriptions'
import HospitalSelect from './components/HospitalSelect'
import Doxaab from './components/Doxaab'
import RegistrationForm from './components/RegistrationForm'

const Page = () => {
  const [currentViewingMode, setCurrentViewingMode] = useState('registration')







  return (
    <div className="m-0 flex justify-end min-h-full w-full text-center">
      <div className="w-[25vw] h-[90vh] left-0 top-10 rounded-tr-3xl rounded-br-3xl bg-[#2e90f5] fixed z-50">

        <Sidebar changeMode={setCurrentViewingMode}/>
      </div>
      
      <div className="w-[75vw] self-end">
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
    </div>
  )
}

export default Page
