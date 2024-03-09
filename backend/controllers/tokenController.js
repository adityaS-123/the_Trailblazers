const Patient = require('../models/patientModel');
const Hospital = require('../models/hospitalModel');
const Doctor = require('../models/doctorModel');
const generateToken = require('../utils/generateToken');



const makeToken=async(req,res)=>{
    try{
        const {useremail,severity,appointmentType,day}=req.body;
        const patient= await Patient.findOne({email:useremail});
        const hospitalOf=patient.hospitals[patient.hospitals.length-1];
        
        const currentHospital= await Hospital.findOne({_id:hospitalOf._id})

        const seniorId= await currentHospital[appointmentType].senior.id


        const juniorName= await hospital[appointmentType].junior
        const junior= await Doctor.findOne({_id:junior_id});

        if(day=="today"){
            if(severity>=3){
                if(senior.today.length()>=28){
                    if(senior.tomorrow.length()>=28){
                        res.json("No slots available for today and Tomorrow")
                    }
                    else{
                        senior.tomorrow.push(patient._id);
                        const token =senior.tomorrow.length();
                        patient.doctorAssigned=senior_id;
                        patient.curToken=token;
                        res.json(token=`Tom${token}`,doctorAssigned=`Dr.${senior.name}`)
                    }
                }
                else{
                    senior.today.push(patient._id);
                    const token =senior.today.length();
                        patient.doctorAssigned=senior_id;
                        patient.curToken=token;
                        res.json(token=`Tod${token}`,doctorAssigned=`Dr.${senior.name}`)
                }
            }
            else{
                if(junior.today.length()>=28){
                    if(junior.tomorrow.length()>=28){
                        res.json("No slots available for today and Tomorrow")

                    }
                    else{
                        junior.tomorrow.push(patient._id);
                        const token =junior.tomorrow.length();
                        patient.doctorAssigned=junior_id;
                        patient.curToken=token;
                        res.json(token=`Tod${token}`,doctorAssigned=`Dr.${junior.name}`)

                    }
                }
                else{
                    junior.today.push(patient._id);
                    const token =junior.today.length();
                    patient.doctorAssigned=junior_id;
                    patient.curToken=token;
                    res.json(token=`Tod${token}`,doctorAssigned=`Dr.${junior.name}`)
                }
            }
        }
        else if(day=="tomorrow"){
            if(severity>=3){
                if(senior.tomorrow.length()>=28){
                    res.json("No slots available for today and Tomorrow")
                }
                else{
                    senior.tomorrow.push(patient._id);
                    const token =senior.tomorrow.length();
                    patient.doctorAssigned=senior_id;
                    patient.curToken=token;
                    res.json(token=`Tom${token}`,doctorAssigned=`Dr.${senior.name}`)
                }
            }
            else{
                if(junior.tomorrow.length()>=28){
                    res.json("No slots available for today and Tomorrow")


                }
                else{
                    junior.tomorrow.push(patient._id);
                    const token =junior.tomorrow.length();
                    patient.doctorAssigned=junior_id;
                    patient.curToken=token;
                    res.json(token=`Tom${token}`,doctorAssigned=`Dr.${junior.name}`)
                }
            }

        }
    }
    catch(e){
        res.status(500
        ).send(e);
        }
}

module.exports = makeToken