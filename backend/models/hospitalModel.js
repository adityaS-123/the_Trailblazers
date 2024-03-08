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
    intern:
    {
      type:string
    }
  },
  Ortho:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Neuro:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Pediatrics:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Cardio:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Pulmonary:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Dental:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Gynecology:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Dermatology:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Dental:{
    senior:{
      type:string
    },
    intern:
    {
      type:string
    }
  },
  Psychiatry:{
    senior:{
      type:string
    },
    intern:
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
