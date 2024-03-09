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
  <div className="input-icon-container">
    <i className="icon-user"></i>
    <input type="text" placeholder="Name" />
  </div>
  <div className="input-icon-container">
    <i className="icon-calendar"></i>
    <input type="number" placeholder="Age" />
  </div>
  <div className="input-icon-container">
    <select placeholder="Sex">
      <option value="" disabled selected>Sex</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <i className="icon-chevron-down"></i>
  </div>
  <div className="input-icon-container">
    <i className="icon-lock"></i>
    <input type="password" placeholder="Password" />
  </div>
  <div className="input-icon-container">
    <i className="icon-phone"></i>
    <input type="tel" placeholder="Mobile Number" />
  </div>
  <button type="submit" className="signup-button">SIGN UP</button>
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