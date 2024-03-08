//server
const express = require('express')
const connectionToDatabase = require('./database/dbConnection')
const dotenv = require('dotenv')
const app = express()
const twilio = require('twilio')


dotenv.config()
connectionToDatabase()
app.use(express.json())

// app.use('/', (req, res)=>{
//   console.log("running");
// })

// redirect to patient routes
app.use('/user/', require('./routes/patientRoutes'))
app.use('/admin/', require('./routes/hospitalRoutes'))
app.use('/doctor/', require('./routes/doctorRoutes'))


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

app.listen(process.env.PORT || 8009, ()=>{
  console.log('server up and running')
})


