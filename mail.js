import nodemailer from "nodemailer";
import dotenv from "dotenv";

const mailSender = {
  sendMail: (param) => {
    dotenv.config();
    //mail tranport 생성
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    })

    //메일 옵션 생성
    const mailOptions = {
      ...param,
      //첨부파일, 첨부파일은 배열 형태로 여러개 전송할수있다
      attachments:[
        {
          filename: 'vac_pattern_s1.png',
          path: 'vac_pattern_s1.png'
        }
      ]
    }

    // //메일  발송
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