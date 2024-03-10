const express = require('express')
const {registerUser, currentUser, loginUser, sendOTP, verifyOTP} = require('../controllers/patientController')
const { model } = require('mongoose')
const makeToken = require('../controllers/tokenController')

const router = express.Router()
router.route('/login/').post(verifyOTP, loginUser)
router.route('/sendOTP').post(sendOTP)
router.route('/register/').post(verifyOTP, registerUser)
router.route('/current/').post(currentUser)
router.route('/allot_token_number/').post(makeToken)

module.exports = router