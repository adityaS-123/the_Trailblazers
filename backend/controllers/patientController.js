const nodemailer = require('nodemailer')
const expressAsyncHandler = require('express-async-handler');
const Patient = require('../models/patientModel');
const axios = require('axios')
const jwt = require('jsonwebtoken')

const generateToken = require('../utils/generateToken');

const expressAsync = require('express-async-handler');

const datatoBot = (async (req, res) => {
    try {
        const {
        name,
        age,
        appointmentType,
        mobile,
        symptoms} = req.body;


        //send data to bot and collect data from api
    }
    catch (e) {
        res.status(500).send(e);
    }
})

const currentUser = expressAsync(async(req, res) => {
  res.status(200).send('hitting curretn user route')
})

const registerUser = expressAsync(async(req, res) => {



  res.status(200).send('register current user')
})

const sendOTP = expressAsync(async(req, res) => {
  let {email} = req.body;

  const patient = await Patient.findOne({email})

  let OTP = ''
  
  for (let index = 0; index < 6; index++) {
    const randomDigit = Math.floor(Math.random()*10)
    OTP += randomDigit
  }
  
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "appnirog@gmail.com",
      pass: "sxbr cqdg qlqb qvff",
    },
  });
  
  const mailOptions = {
    from: "appnirog@gmail.com",
    to: "sourabhawasthy176022@gmail.com",
    subject: "Raho Nirog",
    text: `OTP IS ${OTP}`,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    console.log("your otp is: ", OTP)
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
  
  await patient.updateOne({otp: OTP})
  // saved OTP
  console.log('otp is: ', OTP)
  
})

const loginUser = expressAsync(async(req, res) => {
  const email = res.locals.email

  const token = jwt.sign({email}, process.env.JWT_KEY)

  res.status(200).json({token: token, msg: 'Logged in'})
  console.log(
  'logged in'
  )
})


const verifyOTP = expressAsync(async (req, res, next) => {
  const {email, otpEntered} = req.body
  console.log("entered data: ", email, otpEntered)

  const patient = await Patient.findOne({email}) 

  if (otpEntered == patient.otp){
    res.status(200)  
    res.locals.email = email  
    next()
  } else {
    res.status(400).send("WRONG OTP")
  }

})



module.exports = {currentUser, registerUser, verifyOTP, loginUser, sendOTP}
