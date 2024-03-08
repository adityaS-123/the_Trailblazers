const express = require('express')
const {loginController, registerController, currentUser} = require('../controllers/authController')
const { model } = require('mongoose')

const router = express.Router()
router.route('/login/').post(loginController)
router.route('/register/').post(registerController)
router.route('/current/').get(currentUser)

module.exports = router