import React from 'react'

const Sidebar = ({changeViewingMode}) => {
  return (
    <div className="">
      <h1 className="flex text-4xl py-10 items-center justify-center gap-2 text-white">
        <img src="/medico-white.png" width={80}/>
        Nirog
      </h1>
      <div className="flex flex-col gap-2 text-xl w-full px-5 text-white">
        <p className="flex items-center justify-center cursor-pointer" onClick={()=>changeViewingMode('landing')}>
          <img className="inline" width={80} src="/dbb.png"/>
          Dashboard
        </p>
        <p className="flex items-center justify-center cursor-pointer" onClick={()=>changeViewingMode('report')}>
          <img className="inline" width={80} src="/reports.png"/>
          My Reports
        </p>
        <p className="flex items-center justify-center cursor-pointer" onClick={()=>changeViewingMode('prescription')}>
          <img className="inline" width={80} src="/prescription.png"/>
          My Prescriptions
        </p>
        <p className="flex items-center justify-center cursor-pointer" onClick={()=>changeViewingMode('doxaab')}>
          <img className="inline" width={80} src="/doxxab.png"/>
          DOXAAB (beta)
        </p>
      </div>
    </div>
  )
}

export default Sidebar
