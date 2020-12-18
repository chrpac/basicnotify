const request = require('request');
const fs = require('fs')

token = 'YOUR TOKEN LINE NOTIFY';
message = 'HelloWorld';

request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': token
    },
    formData: {
      'message': message,
      'imageFile': fs.createReadStream('./scarecown.jpg')
    }
  }, (err, httpResponse, body) => {
    if(err){
      console.log(err);
    } else {
      console.log({
        httpResponse: httpResponse,
        body: body
      });
    }
  });