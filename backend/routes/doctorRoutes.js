const express = require('express');
const doctorController = require('../controllers/doctorController')

const router = express.Router();

<<<<<<< HEAD
// router.route('/login').post(doctorController.login);


// router.route('/register').post(doctorController.register);
=======
router.route('/login').post(doctorController.login);


router.route('/register').post(doctorController.register);
>>>>>>> a8db449dbd0ce382844d5349cc45dfbec14033c8


// router.route('/getDoctor').get(doctorController.getHospital);

// router.route('/getPatients').get(doctorController.getDoctors);

<<<<<<< HEAD
module.exports = router
=======
>>>>>>> a8db449dbd0ce382844d5349cc45dfbec14033c8

module.exports = router
