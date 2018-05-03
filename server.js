const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
app.post("/contact", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h4>Contact Details</h4>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
    <p>${req.body.comments}</p>`;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          type: 'OAuth2',
          user: 'jsigns@gmail.com',
          clientId: '353108951107-v48b7qhhmhqgitj5g4somn1r4fo5kon7.apps.googleusercontent.com',
          clientSecret: 'Y0Qh7L7I79npfvQAMalIAspq',
          refreshToken: '1/-1CpLD56J38G0ulDDB6dIxISw4hdDyoy88Y6TSywTPM',
          accessToken: 'ya29.GluwBZivPaOjP7igRnRuCL0L70qRF8gpDYi34I9RQeFsGZXz-cjAD0SvYCTYI1rmznE7oAECoRRaNEWpfP5CmmBGlfov8SjQB8z4pJv7MjCgJbXt88C_vEclf71T',
          expires: 3600
      }
  });
  

    let mailOptions = {
      from: req.body.email,
      to: "jsigns@gmail.com",
      replyTo: req.body.email,
      subject: "New message from your website",
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        return console.log(err);
      }
    })
  });
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
