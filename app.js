import express from "express";
import mailSender from "./mail";
const PORT = 3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
  
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/send',(req,res) => {
  const emailParam = req.body;
  mailSender.sendMail(emailParam);
  res.status(200).send('success');
})
  
var server = app.listen(PORT, function () {
  
  console.log('Server is listetn: ',PORT);
});