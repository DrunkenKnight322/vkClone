const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/users')
const feed = require('./routes/feed')



const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/vkclone',{ useNewUrlParser: true })
                .then(res => console.log('MongoDB connected'))
                .catch(err => console.log(err))

//Passport middleware
app.use(passport.initialize())

//Passport Config
require('./config/passport')(passport)

app.use('/api/users', users)
app.use('/api/feed', feed)


const port = process.env.PORT || 3030

app.listen(port,  () => console.log('Server running on port 3030'))