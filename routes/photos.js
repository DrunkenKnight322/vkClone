const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path');
const cors = require('cors');
const uuidv1 = require('uuid/v1')



const Photo = require('../models/Photo')
const User = require('../models/User')

router.get('/:id', (req, res) => {
  User.findOne({user: req.body.id})
      .then(user => {
            const galleryId = user.gallery[user.gallery.length - 1]
            
            Photo.findById(galleryId._id)
            .then(pic => {
              
              if(galleryId._id.toString() == pic._id.toString()){
                const file = `./public/${pic.filename}`
                res.send(file)
              }else{
                res.send('huy')
              }
            })
          })
      
})


router.post('/upload', (req, res, next) => {
  // айди пользователя для котоорого сохранить фото
   const user_id = req.params.user_id

  //const filename = photo.name
   const photo = req.files.photo
   const extension = photo.mimetype.split('/')
   const generated = uuidv1() + '.' + extension[1]

   photo.mv(`./public/${generated}`, (err) => {
     if (err) {
        return res.status(500).send(err);
     }
     const newPhoto = new Photo({ // id
       filename: generated,
       extension: extension[1],
       size: photo.size,
       path: `./public/${generated}`
     })
     //Новый код
     newPhoto.save()
     .then(photo => {
       User.findOne({id: user_id})
        .then(user => {
          user.gallery.push(photo)
          user.save()
        })
        res.json(photo)
   })
 })
}
)

module.exports = router 

// Старый код сохранения в галерею

// User.findOne({id: user_id}).
// then(user=> {
//   Photo.find()
//   .then(photo => {
    
//     const lastpic = photo[photo.length - 1]

//       // Добавить в поле gallery, айди из новой фото
//       // СОхранить .push
//     user.gallery.push(lastpic.id)
//     user.save()
//   })
// })