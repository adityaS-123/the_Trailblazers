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
  console.log('route hitting')
  const {jwtToken} = req.body
  console.log('token: ', jwtToken)

  const payload = jwt.decode(jwtToken)
  console.log("decoded data: ", payload.id)
  const patient = await Patient.findOne({_id: payload.id})

  res.status(200).json({patient: patient})
})

const registerUser = expressAsync(async(req, res) => {
  try {
    const email = res.locals.email
    console.log('recieved email')

    const newPatient = await Patient.findOne({email})
    newPatient.verified = true
    await newPatient.save()


    const token = generateToken(newPatient._id)
    console.log('token for you is: ', token)
    res.status(201).json({msg: "Success", token: token})
  } catch (error) {
    res.status(400).json({error})
  }
})

const sendOTP = expressAsync(async(req, res) => {
  
  let OTP = ''
  
  for (let index = 0; index < 6; index++) {
    const randomDigit = Math.floor(Math.random()*10)
    OTP += randomDigit
  }
  const {isRegistered, email} = req.body
  console.log('data recieved while sending otp: ', isRegistered, email)


  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "appnirog@gmail.com",
      pass: "sxbr cqdg qlqb qvff",
    }
  });
  
  const mailOptions = {
    from: "appnirog@gmail.com",
    to: email,
    subject: "Raho Nirog",
    text: `OTP IS ${OTP}`,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    console.log("your otp is: ", OTP)
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response)
    }
  })

  if (isRegistered) {
    const {email} = req.body
    const patient = await Patient.findOne({email})    
    patient.otp = OTP
    await patient.save()
  } else {
    const {name, sex, dob, age, mobile, email} = req.body
    
    const newPatient = new Patient({name, email, sex, dob, age, mobile})
    
    newPatient.otp = OTP
    await newPatient.save()
    console.log('saved')
  }

  // saved OTP
  console.log('otp is: ', OTP)
  res.status(200).json({msg: "OTP SENT SUCCESSFULLY"})
  
})

const loginUser = expressAsync(async(req, res) => {
  const email = res.locals.email
  const patient = await Patient.findOne({email}) 

  if (patient){
    const token = generateToken(patient._id)
    res.status(200).json({token: token, msg: 'Logged in'})
    console.log(
      'logged in'
    )
  } else {
    res.status(404).json({msg: 'user not found'})
  }
})  


const verifyOTP = expressAsync(async (req, res, next) => {
  const {email, otp} = req.body
  console.log("entered data: ", email, otp)

  const patient = await Patient.findOne({email}) 

  if (otp == patient.otp){
    console.log('correct otp')
    res.status(200)  
    res.locals.email = email
    next()
  } else {
    res.status(400).json({msg: "WRONG OTP"})
  }

})

const verifyotprandom = expressAsync(async (req, res) => {
  const {email, otpEntered, forLogin} = req.body
  console.log("entered data: ", email, otpEntered)

  const patient = await Patient.findOne({email}) 

  if (otpEntered == patient.otp){
    res.status(200).json({verified: true})
  } else {
    res.status(400).json({verified: false})
  }
})

module.exports = {currentUser, registerUser, verifyOTP, loginUser, sendOTP, verifyotprandom}
