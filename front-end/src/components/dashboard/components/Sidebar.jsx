import React from 'react';

const Sidebar = () => {
  return (
    <div className="w"> {/* Reduce the width by 30% */}
      <h1 className="flex text-4xl py-20 items-center justify-center gap-2 text-white font-space-mono">
        <img src="/medico-white.png" width={80} alt="Medico logo"/>
        NIROG
      </h1>

      <div className="flex flex-col gap-2 mt-20 text-xl w-full px-5 text-white">
        <p className="flex items-center justify-center font-sans font-bold">
          <img className="inline" width={80} src="/dbb.png" alt="Dashboard icon"/>
          Dashboard
        </p>
        <p className="flex items-center justify-center font-sans font-bold">
          <img className="inline mr-2" width={80} src="/reports.png" alt="Reports icon"/>
          My Reports
        </p>
        <p className="flex items-center justify-center font-sans font-bold">
          <img className="inline" width={80} src="/prescription.png" alt="Prescription icon"/>
          My Prescriptions
        </p>
        <p className="flex items-center justify-center font-sans font-bold">
          <img className="inline" width={80} src="/doxxab.png" alt="DOXAAB (beta) icon"/>
          DOXAAB (beta)
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
