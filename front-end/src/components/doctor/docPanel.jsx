import React, { useState } from 'react';

const DoctorPanel = () => {
  const [doctorDetails, setDoctorDetails] = useState({
    name: 'Dr. Narender Modi',
    exp: 'senior',
    email: 'bjp .doe@example.com',
    mobile: '1234567890',
    specialisation: 'Cardiologist',
  });

  const [patients, setPatients] = useState([
    { name: 'Patient 1', token: 'TOD3', done: false, diagnosis: '', },
    { name: 'Patient 2', token: 'TOD4', done: true, diagnosis: '', },
    // Add more patients as needed
  ]);

  const handleFileUpload = (e, index) => {
    // Add file upload logic here for a specific patient
    const file = e.target.files[0];
    console.log(`Uploaded file for ${patients[index].name}:`, file);
  };

  const handlePatientDone = (index) => {
    // Toggle the done status of the patient
    const updatedPatients = [...patients];
    updatedPatients[index].done = !updatedPatients[index].done;
    setPatients(updatedPatients);
  };

  const handleDiagnosisChange = (e, index) => {
    // Update the diagnosis for a specific patient
    const updatedPatients = [...patients];
    updatedPatients[index].diagnosis = e.target.value;
    setPatients(updatedPatients);
  };

  const handleDeletePatient = (index) => {
    // Delete a specific patient
    const updatedPatients = [...patients];
    updatedPatients.splice(index, 1);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Doctor Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Doctor Details</h2>
        <p>
          <span className="font-bold">Name:</span> {doctorDetails.name}
        </p>
        <p>
          <span className="font-bold">Experience:</span> {doctorDetails.exp}
        </p>
        <p>
          <span className="font-bold">Email:</span> {doctorDetails.email}
        </p>
        <p>
          <span className="font-bold">Mobile:</span> {doctorDetails.mobile}
        </p>
        <p>
          <span className="font-bold">Specialisation:</span> {doctorDetails.specialisation}
        </p>
      </div>

      {/* Patient Table */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Patient List</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Token</th>
              <th className="px-4 py-2">Done</th>
              <th className="px-4 py-2">Diagnosis</th>
              <th className="px-4 py-2">File Upload</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{patient.name}</td>
                <td className="border px-4 py-2">{patient.token}</td>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    checked={patient.done}
                    onChange={() => handlePatientDone(index)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={patient.diagnosis}
                    onChange={(e) => handleDiagnosisChange(e, index)}
                    className="border p-1 w-full"
                    placeholder="Diagnosis"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input type="file" onChange={(e) => handleFileUpload(e, index)} />
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeletePatient(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPanel;
