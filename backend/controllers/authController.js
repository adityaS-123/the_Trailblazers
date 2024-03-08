const expressAsync = require('express-async-handler')


const loginController = expressAsync(async (req, res) => {
  
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  
  client.messages
    .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+919717333704',
      to: '+919418223946'
    })
    .then(message => console.log(message.sid));

})

module.exports = {loginController}