import React from 'react';

const Sidebar = () => {
  return (
    <div className="w"> {/* Reduce the width by 30% */}
      <h1 className="flex text-4xl mt-[-39px] py-20 items-center justify-center gap-2 text-white font-mono">
        <img src="/medico-white.png" width={80} alt="Medico logo"/>
        NIROG
      </h1>

      <div className="flex flex-col gap-2 mt-30 text-xl w-full px-15 text-white">
      <p className="flex items-center justify-center font-sans font-bold text-lg"> {/* Increased font size */}
        <img className="inline" width={80} src="/dbb.png" alt="Dashboard icon"/> {/* Fixed image width */}
        Dashboard
      </p>
      <p className="flex items-center justify-center font-sans font-bold text-lg"> {/* Increased font size */}
        <img className="inline" width={80} src="/reports.png" alt="Reports icon"/> {/* Fixed image width */}
        My Reports
      </p>
      <p className="flex items-center justify-center font-sans font-bold text-lg"> {/* Increased font size */}
        <img className="inline" width={80} src="/prescription.png" alt="Prescription icon"/> {/* Fixed image width */}
        My Prescriptions
      </p>
      <p className="flex items-center justify-center font-sans font-bold text-lg"> {/* Increased font size */}
        <img className="inline" width={80} src="/doxxab.png" alt="DOXAAB (beta) icon"/> {/* Fixed image width */}
        DOXAAB (beta)
      </p>

      </div>
    </div>
  );
};

export default Sidebar;
