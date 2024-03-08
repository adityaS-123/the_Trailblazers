const mongoose = require('mongoose')

const HospitalSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    default: 'govt'    
  },

  doctors: {
    type: Array,
    
  },
  name: {
    type: String,
    required: true,
  },
  address:{
    type: String,
    
  },
  pincode: {
    type: Number,
    
  },
  patients: {
    type: Array,
    
  }
})



const Hospital = mongoose.model('Hospital', HospitalSchema)
module.exports = Hospital
// Path: electrothon6.0/backend/models/hospitalModel.js
