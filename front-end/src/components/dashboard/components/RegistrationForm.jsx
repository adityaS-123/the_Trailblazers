import React, {useState, useEffect} from 'react'

const RegistrationForm = ({changeMode}) => {
  const options = [
    { "label": "ENT", "value": "ENT" },
    { "label": "Ortho", "value": "Ortho" },
    { "label": "Neuro", "value": "Neuro" },
    { "label": "Pediatrics", "value": "Pediatrics" },
    { "label": "Cardio", "value": "Cardio" },
    { "label": "Pulmonary", "value": "Pulmonary" },
    { "label": "Dental", "value": "Dental" },
    { "label": "Gynecology", "value": "Gynecology" },
    { "label": "Dermatology", "value": "Dermatology" },
    { "label": "Psychiatry", "value": "Psychiatry" }
  ]
  
  useEffect(()=> {
    
  }, [])


  const handleProceed = () => {
    // hit api

    // run the changes
    changeMode('landing')
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (value) => {
    setSelectedOption(value)
  }

  return (
    <div className="flex flex-col gap-3 mt-10">
      <h1 className="font-bold">
        REGISTRATION FORM
      </h1>
      <h2 className="font-bold">
        (पंजीकरण)
      </h2>
      <div className="self-start flex flex-col p-10 w-4/5 m-auto">
        <div className="dropdown self-start">
        <p className="font-bold">Appointment Type/नियुक्ति प्रकार</p>
          <select
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)}
            className="px-10 py-3 rounded-full bg-slate-200 border-2 border-black"
          >
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="self-start w-full text-left mt-5">

          <p className="font-bold">Symptoms/लक्षण</p>
          <div className="flex flex-col gap-3 w-full">
            <label className="italic font-medium">Describe your symptoms</label>
            <textarea className="border-1 border-slate-800 rounded-3xl p-3" width={300} height={200}></textarea>
          </div>

        </div>
      </div>
      <button onClick={handleProceed} className=" bg-green-500 text-black font-medium text-xl self-center px-5 py-2 rounded-xl">
        Proceed
      </button>
    </div>
  )
}

export default RegistrationForm
