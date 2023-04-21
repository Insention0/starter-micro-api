
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'mf8131692@gmail.com',
      pass: 'vpvoabewgechdyyw'
  }
});




// Middleware to parse request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define a route for handling POST requests to '/submit'
app.post('/submit', (req, res) => {
  let mailOptions = {
    from: '"api" mf8131692@gmail.com', // sender address
    to: 'profile332@gmail.com', // list of receivers
    subject: JSON.stringify(req.body), // Subject line
    text: JSON.stringify(req.body), // plain text body
    html: JSON.stringify(req.body) // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });


  res.json('Done');
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});





// create reusable transporter object using the default SMTP transport

// setup email data with unicode symbols

// send mail with defined transport object





