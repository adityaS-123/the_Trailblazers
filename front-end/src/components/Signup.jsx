import React from 'react';
import './Login.css'; // Make sure to create a corresponding CSS file
import "reactstrap";

const SignUpForm = () => {
return(
    <div class="container login-container text-center justify-center align-center ">
  <div class="row h-50 ">
    <div class="col-3 images">
      <div className='dna'>
      <img src="DNA.png"  className='rounded-full ' alt="DNA" width="100" height="100"></img>
      </div>
      <div className='plus'>
      <img src="plus.png" className='rounded-full ' alt="Doctor" width="100" height="100"></img>
      </div>
    </div>
    <div class="col-6">
    <form className="login-form h-100">
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Age" />
          <select placeholder="Sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="password" placeholder="Password" />
          <input type="tel" placeholder="Mobile Number" />
          <button type="submit">SIGN UP</button>
        </form>

    </div>
    <div class="col-3">
    <img src="doctor.png" className='rounded-full doctor' alt="Doctor" width="100" height="100"></img>
    </div>
  </div>
  
</div>

)
}




export default SignUpForm;