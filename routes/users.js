const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../config/keys')
const fs = require('fs-extra')

const User = require('../models/User')
const Photo = require('../models/Photo')



// Register user 

router.post('/register', (req, res) => {

    User.findOne({'email': req.body.email})
    .then(user => {
        if (user) {
            return res.status(400).json({msg: 'This user is already exists'})
        } else{
            const user = new User(req.body)

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if(err) throw err

                    user.password = hash
                    user.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))

                })
            })
        }
    })
})

//Login
router.post('/login', (req, res) => {

    User.findOne({'email':req.body.email})
        .then(user => {
            if (!user) {
                return res.status(404).json({msg:'User not found'})
            } else{

                bcrypt.compare(req.body.password, user.password)
                      .then(isMatch => {
                          if (isMatch) {
                              const payload ={
                                 name: user.name,
                                 id: user.id,
                                 lastname: user.lastname,
                                 birth: user.birth,
                                 status: user.status,
                                 city: user.city,
                                 familyStatus: user.familyStatus,
                                 inspire: user.inspire,
                                 languages: user.languages,
                                 about: user.about
                                }

                              jwt.sign(payload, keys.secretOrKey ,{expiresIn: 3600}, (err, token) =>{
                                  res.json({
                                      success: true,
                                      token: 'Bearer ' + token
                                  })
                              })
                          }else{
                              return res.status(400).json({msg:'Wrong Password'})
                          }

                      })  
            }
        })
})

//Profile

router.post('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    const profileFields = {};
    if(req.body.city) profileFields.city = req.body.city;
    if(req.body.status) profileFields.status = req.body.status;
    if(req.body.familyStatus) profileFields.familyStatus = req.body.familyStatus;
    if(req.body.birth) profileFields.birth = req.body.birth;
    if(req.body.inspire) profileFields.inspire = req.body.inspire;
    if(req.body.about) profileFields.about = req.body.about;
    
    if(typeof req.body.languages != 'undefined'){
        profileFields.languages = req.body.languages.split(',')
    };
 
    User.update({_id: req.user.id}, {$set: profileFields})
        .then(user => res.json(user))
       
})

//Add friends
router.post('/add_friend/',  passport.authenticate('jwt', {session: false}), (req, res)=> {
    User.findOne({id: req.body.id})
    .then(profile => {
        console.log(profile.friendList)
    })
})

//Current User
router.get('/current',(req, res)=> {
    res.json(req.user)
})

router.delete('/gallery/:id', (req, res) => {
    User.findOne({id:req.body.id})
    .then(user => { 
        //delete from the User model
        const removeIndex = user.gallery.map(i => i._id.toString()).indexOf(req.params.id)
        user.gallery.splice(removeIndex, 1)
        user.save().then(us => res.json(us))

        Photo.findById(req.params.id, (err, doc) => {
            console.log(doc.filename)
            // delete from the file system
            fs.remove(`./public/${doc.filename}`)
            .then(() => {
            console.log('success!')
            })
            .catch(err => {
            console.error(err)
            })
            //delete from the database
            doc.remove().then(()=> res.json({succes: true}))                 
    })


}) 
})

module.exports = router;

