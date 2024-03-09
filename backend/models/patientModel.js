const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        
    },
    age:{
        type :Number,
        required:true
    },
    hospitals:{
        type:Array,
        dafault:[],
    },
    
    prevReport:{
        type:Array,
        
    },
    curReport:{
        type:String,
    },
    doctorAssigned:{
        type:String,
    
    },
    curToken:{
        type:Number,
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    otp: {
        type: Number,
        required: false,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;