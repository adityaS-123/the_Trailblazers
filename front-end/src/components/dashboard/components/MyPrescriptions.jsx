import React from 'react';

const AddPrescriptionCard = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <img src="/add_prescription.png" alt="Add Prescription" className="mb-5" /> {/* Added mb-5 for bottom margin */}
      <h3 className='mb-30 text-center'>Your All Prescriptions</h3> {/* Adjusted margin and centered text */}
      <p className="mb-30 text-center">A detailed past prescription helps the doctor to diagnose better.</p> {/* Centered text */}
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Prescription</button>
    </div>
  );
};

export default AddPrescriptionCard;
