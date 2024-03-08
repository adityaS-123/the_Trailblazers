const mongoose = require('mongoose')

const HospitalSchema = mongoose.Schema({
  type: {
    type: String,
    
    default: 'govt'    
  },
  ENT:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Ortho:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Neuro:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Pediatrics:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Cardio:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Pulmonary:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Dental:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Gynecology:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Dermatology:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Dental:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
  },
  Psychiatry:{
    senior:{
      type:string
    },
    junior:
    {
      type:string
    }
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
