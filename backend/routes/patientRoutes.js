const express = require('express')
const {registerUser, currentUser, loginUser, sendOTP, verifyOTP} = require('../controllers/patientController')
const { model } = require('mongoose')

const router = express.Router()
router.route('/login/').post(verifyOTP, loginUser)
router.route('/sendOTP').post(sendOTP)
router.route('/register/').post(registerUser)
router.route('/current/').get(currentUser)

module.exports = router