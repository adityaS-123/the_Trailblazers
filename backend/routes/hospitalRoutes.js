const express = require('express');
const {login,register,getAllHospitals,getAlldoctors} = require('../controllers/hospitalController')

const router = express.Router();

router.route('/login').post(login);


router.route('/register').post(register);


router.route('/getHospital').get(getAllHospitals);

router.route('/getDoctors').get(getAlldoctors);


module.exports = router;
