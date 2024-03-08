//server
const express = require('express')
const connectionToDatabase = require('./database/dbConnection')
const dotenv = require('dotenv')
const app = express()
<<<<<<< HEAD
const twilio = require('twilio')

=======
>>>>>>> a8db449dbd0ce382844d5349cc45dfbec14033c8

dotenv.config()
connectionToDatabase()
app.use(express.json())

// app.use('/', (req, res)=>{
//   console.log("running");
// })

// redirect to patient routes
<<<<<<< HEAD
app.use('/user/', require('./routes/patientRoutes'))
=======
// app.use('/user/', require('./routes/patientRoutes'))
>>>>>>> a8db449dbd0ce382844d5349cc45dfbec14033c8
app.use('/admin/', require('./routes/hospitalRoutes'))
app.use('/doctor/', require('./routes/doctorRoutes'))


<<<<<<< HEAD
// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
=======
>>>>>>> a8db449dbd0ce382844d5349cc45dfbec14033c8

app.listen(process.env.PORT || 8009, ()=>{
  console.log('server up and running')
})


