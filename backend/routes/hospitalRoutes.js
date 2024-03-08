const express = require('express');
const {login,register,getAllHospitals,getAlldoctors} = require('../controllers/hospitalController')

const router = express.Router();

router.route('/login').post(login);


router.route('/register').post(register);


router.route('/getHospital').get(getAllHospitals);

router.route('/getDoctors').get(getAlldoctors);

<<<<<<< HEAD
// router.route('/getDoctors').get(hospitalController.getDoctors);

module.exports = router;
=======

module.exports = router;
>>>>>>> a8db449dbd0ce382844d5349cc45dfbec14033c8
