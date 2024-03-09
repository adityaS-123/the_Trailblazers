import React from 'react';

const Sidebar = ({ changeViewingMode }) => {
  return (
    <div> {/* Reduce the width by 30% */}
<<<<<<< HEAD
      <h1 className="flex text-4xl mt-[-39px] py-20 items-center justify-center gap-2 text-white font-mono">
=======
      <h1 className="flex text-2xl pt-12 items-center justify-center gap-2 text-white font-mono">
>>>>>>> 05c6d8a9c24e41d670652677def48f3d4806e043
        <img src="/medico-white.png" width={80} alt="Medico logo"/>
        NIROG
      </h1>

      <div className="flex flex-col gap-2 text-lg w-full px-5 text-white mt-5">
        <p className="flex items-center justify-center cursor-pointer" onClick={() => changeViewingMode('landing')}>
          <img className="inline" width={80} src="/dbb.png" alt="Dashboard icon"/>
          Dashboard
        </p>
        <p className="flex items-center justify-center cursor-pointer" onClick={() => changeViewingMode('report')}>
          <img className="inline" width={80} src="/reports.png" alt="Reports icon"/>
          My Reports
        </p>
        <p className="flex items-center justify-center cursor-pointer" onClick={() => changeViewingMode('prescription')}>
          <img className="inline" width={80} src="/prescription.png" alt="Prescription icon"/>
          My Prescriptions
        </p>
        <p className="flex items-center justify-center cursor-pointer" onClick={() => changeViewingMode('doxaab')}>
          <img className="inline" width={80} src="/doxxab.png" alt="DOXAAB (beta) icon"/>
          DOXAAB (beta)
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
