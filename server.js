const express = require('express')
const app = express()
const server = require('http').createServer(app);
const path = require('path')
const port = process.env.PORT || 5000
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer')


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

  // if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join (__dirname, './','client','build');
  app.use (express.static (publicPath));
  app.get ('*', (req, res) => { 
       
      res.sendFile (path.join (publicPath, 'index.html')); 
   })
  //  }

// const defaultConfig = "smtp://virap10@mail.ru:532530122erevan@smtp.mail.ru"

 const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
      user: 'virap10@mail.ru',
      pass: '532530122erevan'
  }
},{
   from: 'Alcyonsystems  <virap10@mail.ru>',
});

app.post('/test',(req,res)=>{
 
  res.json({data:'good job'})
}) 
app.post('/mail',(req,res)=>{
        console.log(req.body);
        
    const mailOptions = {
       
        to:'virap100@mail.ru',
        subject: req.body.name,
        text:`user name is ${req.body.name} user phone ${req.body.phone}
        ${req.body.name} email  ${req.body.email}
        ${req.body.name} message ${req.body.description}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return res.json({err:error})
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({message:'mail sended succssefuly'});
        }
       });
    
})



server.listen(port, function () {
  console.log('Server is running on port: ' + port)
});