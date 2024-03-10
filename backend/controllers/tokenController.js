const Patient = require('../models/patientModel');
const Hospital = require('../models/hospitalModel');
const Doctor = require('../models/doctorModel');
const generateToken = require('../utils/generateToken');



const makeToken=async(req,res)=>{
    console.log("aagya")
    try{
        const {useremail,severity,appointmentType,day}=req.body;
        console.log(useremail,severity,appointmentType,day)
        const patient= await Patient.findOne({email:useremail});

        console.log('patient', patient)
        const hospitalId=patient.hospitals[patient.hospitals.length-1];

        console.log('hopspita idL ', hospitalId)
        
        const currentHospital= await Hospital.findOne({_id:hospitalId})
        console.log("current: ", currentHospital)


        const seniorId= currentHospital[appointmentType].senior.id
        const juniorId= currentHospital[appointmentType].junior.id

        console.log('ids: ', seniorId, juniorId)

        let seniorDoctor = await Doctor.findOne({_id: seniorId})
        console.log('senior doctor: ', seniorDoctor)
        let juniorDoctor = await Doctor.findOne({_id: juniorId})
        console.log('jr doctor: ', juniorDoctor)
        


        if(day=="today"){
            if(severity>=3){
                if(seniorDoctor.today.length>=28){
                    if(seniorDoctor.tomorrow.length>=28){
                        res.json("No slots available for today and Tomorrow")
                    }
                    else{
                        seniorDoctor.tomorrow.push(patient._id)
                        const token = senior.tomorrow.length
                        // assigning the doctor
                        patient.DoctorAssigned=seniorId

                        patient.curToken=token
                        await patient.save()
                        await seniorDoctor.save()
                        res.status(200).json(token=`Tom${token}`,DoctorAssigned=`Dr.${seniorDoctor.name}`)
                    }
                }
                else{
                    seniorDoctor.today.push(patient._id)
                    const token = seniorDoctor.today.length
                    patient.DoctorAssigned=seniorId
                    patient.curToken=token

                    // saving the data
                    await patient.save()
                    await seniorDoctor.save()
                    res.json({token: `Tod${token}`,DoctorAssigned:`Dr.${seniorDoctor.name}`})
                }
            }
            else{
                if(juniorDoctor.today.length>=28){
                    if(juniorDoctor.tomorrow.length>=28){
                        res.json("No slots available for today and Tomorrow")

                    }
                    else{
                        juniorDoctor.tomorrow.push(patient._id);
                        const token =juniorDoctor.tomorrow.length
                        patient.DoctorAssigned=juniorId;
                        patient.curToken=token

                        // saving the data
                        await patient.save()
                        await juniorDoctor.save()
                        res.json(token=`Tod${token}`,DoctorAssigned=`Dr.${juniorDoctor.name}`)

                    }
                }
                else{
                    juniorDoctor.today.push(patient._id)
                    const token = juniorDoctor.today.length
                    patient.DoctorAssigned = juniorId
                    patient.curToken=token

                    // saving the data
                    await patient.save()
                    await juniorDoctor.save()
                    res.json(token=`Tod${token}`,DoctorAssigned=`Dr.${juniorDoctor.name}`)
                }
            }
        }
        else if(day=="tomorrow"){
            if(severity>=3){
                if(seniorDoctor.tomorrow.length>=28){
                    res.json("No slots available for today and Tomorrow")
                }
                else{
                    seniorDoctor.tomorrow.push(patient._id);
                    const token =seniorDoctor.tomorrow.length
                    patient.DoctorAssigned=seniorId;
                    patient.curToken=token;

                    //saving the data
                    await patient.save()
                    await seniorDoctor.save()
                    res.json(token=`Tom${token}`,DoctorAssigned=`Dr.${seniorDoctor.name}`)
                }
            }
            else{
                if(juniorDoctor.tomorrow.length>=28){
                    res.json("No slots available for today and Tomorrow")


                }
                else{
                    juniorDoctor.tomorrow.push(patient._id)
                    const token =junior.tomorrow.length
                    patient.DoctorAssigned=juniorId
                    patient.curToken=token

                    // saving the data
                    await patient.save()
                    await juniorDoctor.save()
                    res.json(token=`Tom${token}`,DoctorAssigned=`Dr.${juniorDoctor.name}`)
                }
            }



        }
    }
    catch(e){
        console.log("error:" , e)
        res.status(500
        ).send(e);
        }
}

module.exports = makeToken