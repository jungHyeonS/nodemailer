import express from "express";
import mailSender from "./mail";
const app = express();
  
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/send',(req,res) => {
  const emailParam = {
    toEmail:'upfall.ray@gmail.com',
    subject:'testest',
    text:'mailTest'
  }
  mailSender.sendMail(emailParam);
  res.status(200).send('success');
})
  
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
});