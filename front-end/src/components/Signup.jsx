import React,{useState} from 'react';
import './Login.css'; // Make sure to create a corresponding CSS file

const LoginForm = () => {

  const [open,setOpen] = useState(false);
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("kattaa");
    setOpen(!open);

  }
  const handleVerify = (e) => {
    e.preventDefault();

  }


return(


    <div class="min-w-screen bg-[#72B3BE] min-h-screen overflow-hidden login-container text-center justify-center p-0 align-center ">
       {open &&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
            <p className="mb-4">Please enter the OTP sent to your email & ContactNo:</p>
            <input className="mb-4 p-2 w-32 text-center border-2 border-gray-300 rounded"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              
            />
            <br />
            <button onClick={handleVerify} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Submit
            </button>
            <button onClick={() => setOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      }
        

      
  <div class="flex flex-row w-screen h-screen m-auto p-0 items-center justify-center">
    
    <form className="login-form ">
          <h1 className='headings'>Signup</h1>
          <input onChange={(e)=>setName(e.target.value)} className='border px-2 rounded' type="text" placeholder="Name" />
          <input className='border px-2 rounded' type="number" placeholder="Age" />
          <input onChange={(e)=>setDob(e.target.value)} className='border px-2 rounded' type="date" placeholder='Date of Birth' />
          <select className='border px-2 rounded' placeholder="Sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input  onChange={(e)=>setMobile(e.target.value)}className='border px-2 rounded' type="tel" placeholder="Mobile Number" />
          <input onChange={(e)=>setEmail(e.target.value)} className='border px-2 rounded' type="email" placeholder="Email" />
          <button onClick={handleSubmit}  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SignUp</button>
        </form>
  </div>
  
</div>

)
}

// const LoginForm = () => {
//   return(

//     <div className="container text-center border p-0 ">
//         <div className="row">
//           <div className="col">
//               1
//           </div>
//           <div className='col-6'>
//     2 
//           </div>
//           <div className="col">
// 3
//           </div>

//         </div>
//       </div>
      
//   )
// }




export default LoginForm;