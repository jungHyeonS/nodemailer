import nodemailer from "nodemailer";
import dotenv from "dotenv";

const mailSender = {
  sendMail: (param) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port:587,
      host: 'smtp,gmail.com',
      secure:false,
      requireTLS:true,
      auth:{
        user:process.env.user,
        pass:process.env.pass
      }
    })

    const mailOptions = {
      from: process.env.user,
      to: param.toEmail,
      subject: param.subject,
      text: param.text
    }

    transporter.sendMail(mailOptions, (error,info) => {
      if(error){
        console.log(error);
      }else{
        console.log('Email Sent: ' + info.response)
      }
    })
  }
}

export default mailSender