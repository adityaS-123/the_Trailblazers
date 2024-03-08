const nodemailer = require('nodemailer')
const expressAsyncHandler = require('express-async-handler');
const Patient = require('../models/patientModel');
const axios = require('axios')

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

  await patient.updateOne({otp: OTP})
  // saved OTP
  console.log("your otp is: ", patient.otp)


})

const loginUser = expressAsync(async(req, res) => {
  res.status(200).send('logged in')
})


const verifyOTP = expressAsync(async (req, res, next) => {
  const {mobile, otpEntered} = req.params

  next()
})



module.exports = {currentUser, registerUser, verifyOTP, loginUser, sendOTP}
