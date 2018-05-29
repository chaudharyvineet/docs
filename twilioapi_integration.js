  var accountSid = 'AC5e4b48dbd5d0885a1b5a35146861a235'; // Your Account SID from www.twilio.com/console
  var authToken = '7b675698a583498f3ce86e612aed5034';   // Your Auth Token from www.twilio.com/console
 
  var twilio = require('twilio');
  var client = new twilio(accountSid, authToken);
 
  client.messages.create({
      body: temperature,
      to: '+917015386369',  // Text this number
      from: '+32460208893' // From a valid Twilio number
 })
.then((message) => console.log(message.sid));
