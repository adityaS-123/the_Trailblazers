import React, { useState } from 'react';

const HospDash = () => {
    const [doctors, setDoctors] = useState([]);
    const [newDoctor, setNewDoctor] = useState('');

    // Function to add a new doctor
    const addDoctor = () => {
        setDoctors([...doctors, newDoctor]);
        setNewDoctor('');
    };

    return (
        <div>
            {/* Row 1: Hospital Details */}
            <div>
                <h2>Hospital Details</h2>
                {/* Add hospital details here */}
            </div>

            {/* Row 2: Total Patients and Doctors */}
            <div>
                <h2>Total Patients and Doctors</h2>
                {/* Add total patients and doctors information here */}
            </div>

            {/* Row 3: All Doctors */}
            <div>
                <h2>All Doctors</h2>
                {doctors.map((doctor, index) => (
                    <p key={index}>{doctor}</p>
                ))}
            </div>

            {/* Button to add a new doctor */}
            <div>
                <input
                    type="text"
                    value={newDoctor}
                    onChange={(e) => setNewDoctor(e.target.value)}
                />
                <button onClick={addDoctor}>Add Doctor</button>
            </div>
        </div>
    );
};

export default HospDash;