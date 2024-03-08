const Doctor =require( '../models/doctorModel.js')
const generateToken =require('../utils/generateToken.js')
const jwt = require('jsonwebtoken')

 const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const doctor=await Doctor.findOne({email})
        if(doctor &&  doctor.password==password){
            const jwtToken= generateToken(doctor._id);
            res.json({
                _id:doctor._id,
                name:doctor.name,
                email:doctor.email,
                jwtToken:jwtToken
                
            })
        }else{
            res.status(401)
            throw new Error('Invalid email or password')
        }
    }catch(e){
        res.status(500).send(e)
    }
}

 const register=async(req,res)=>{
    try{
        const {name,email,password,mobile}=req.body
        const doctorExists=await Doctor.findOne({email})
        if(doctorExists){
            res.status(400)
            throw new Error('Doctor already exists')
        }
        const doctor=await Doctor({
            name,
            email,
            password,
            mobile
        })
        await doctor.save();
        const jwtToken = generateToken(doctor._id);
        res.json({
            _id:doctor._id,
            name:doctor.name,
            email:doctor.email,
            jwtToken:jwtToken
            
        })
    }
    catch(e){
        res.status(500).send(e)
    }
}

 const getDoctor=async(req,res)=>{
    try{
        const doctor=await Doctor.findById(req.doctor._id)
        res.json(doctor)
    }catch(e){
        res.status(500).send
    }
}

const doneForToday = async(req, res)=>{
    const {jwtToken} = req.body

    const data = jwt.decode(jwtToken)
    const {name, doctor_id} = body

    const doctor = await Doctor.findOne({_id: doctor_id})
    const todayPatients = doctor.today
    const tomorrowPatients = doctor.tomorrow

    // clear todays patients
    await Doctor.findByIdAndUpdate({_id: doctor._id, today: []})
    
    // append them to tomorrow
    await Doctor.findOneAndUpdate({_id: doctor_id._id}, {$push: {tomorrow: todayPatients}})
}

module.exports={login,register,getDoctor, doneForToday};







