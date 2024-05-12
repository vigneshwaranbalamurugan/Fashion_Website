import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const verificationStore = new Map();
const verifiedEmail = new Map();

/*--------------------Create Transporter-----------------------*/

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:`${process.env.user}`, 
      pass: `${process.env.pass}`,
    },
  });

/*------------------Send Mail---------------------*/

const sendConfirmationEmail = (email, verificationCode) => {
    const mailOptions = {
      from: 'vigneshsobalamurugan2005@gmail.com',
      to: email,
      subject: 'Account Verification',
      text: `This Message is V_SQUAD Fashion Hub Because of you have Registered In our Website,\n
      Your email: ${email},\n
      Your verification code is: ${verificationCode},\n
      If you did not registered kindly ignore this message.`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };

/*------------------Generating Verification code------------------------*/

const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };


export {verificationStore,sendConfirmationEmail,generateVerificationCode,verifiedEmail};