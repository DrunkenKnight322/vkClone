const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const users = require('./routes/users')
const feed = require('./routes/feed')



const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

mongoose.connect('mongodb://127.0.0.1:27017/vkclone',{ useNewUrlParser: true }).then(res => console.log('MongoDB connected'))


//Passport middleware
app.use(passport.initialize())

//Passport Config
require('./config/passport')(passport)

app.use('/api/users', users)
app.use('/api/feed', feed)

app.post('/upload', (req, res, next) => {
    let imageFile = req.files.file;
  
    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({file: `public/${req.body.filename}.jpg`});
    });
  
  })
  app.get('/photo', (req,res) => {

  })


const port = process.env.PORT || 3030

app.listen(port,  () => console.log('Server running on port 3030'))