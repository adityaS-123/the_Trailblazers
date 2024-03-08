const Patient = require('../models/patientModel');
const Hospital = require('../models/hospitalModel');
const Doctor = require('../models/doctorModel');
const generateToken = require('../utils/generateToken');

const makeToken=async(req,res)=>{
    try{
        const {useremail,severity,appointmentType,day}=req.body;
        const patient= await Patient.findOne({email:useremail});
        const hospital=patient.hospitals[-1];
        const senior= await hospital.appointmentType.senior;
        const intern= await hospital.appointmentType.intern;
    }
    catch(e){
        res.status(500
        ).send(e);
        }
}

module.exports = makeToken