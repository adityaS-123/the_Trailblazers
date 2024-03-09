const express = require('express');
const doctorController = require('../controllers/doctorController')

const router = express.Router();

router.route('/login').post(doctorController.login);


router.route('/register').post(doctorController.register);
router.route('/doneForToday').post(doctorController.doneForToday)



module.exports = router
