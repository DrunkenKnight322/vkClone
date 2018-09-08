const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')


const Feed = require('../models/Feed')



router.get('/test', (req,res) => res.json({msg:'Feed works'}));

//Get All posts
router.get('/all', (req, res) => {
    //localhost: 3001/api/all?skip=3&limit=2&order=asc 
    let skip = parseInt(req.query.skip)
    let limit = parseInt(req.query.limit)
    let order = req.query.order

    //Order =asc||desc
    Feed.find().skip(skip).sort({_id: order}).limit(limit).exec((err, doc) => {
           if(err) return res.status(400).send(err)
           res.status(200).json(doc)
    })
})

//Get one post
router.get('/:id', (req, res) => {
    Feed.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({msg: 'No post found'}))
})



//Post 
router.post('/', passport.authenticate('jwt',{session: false}),(req,res) => {
  
    const newPost = new Feed({
        text: req.body.text,
        name: req.body.name,
        lastname: req.body.lastname,
        user: req.user.id
    });
    newPost.save().then(post => res.json(post))
});


//Like routes
router.post('/like/:id', passport.authenticate('jwt',{session: false}),(req,res) => {
    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findById(req.params.id)
            .then(post => {
             if (post.likes.filter(like => like.user.toString() == req.user.id).length > 0) {
                 return res.status(400).json({alreadyliked: 'This post is already liked by user'})
             }
             post.likes.unshift({ user: req.user.id});
             post.save().then(post => res.json(post))
    })
    .catch(err => res.status(404).json({postnofound: 'No likes found '}))

})
});


// Unlike the post 
router.post('/unlike/:id', passport.authenticate('jwt',{session: false}),(req,res) => {
    User.findOne({ user: req.user.id })
    .then(profile => {
        Feed.findById(req.params.id)
            .then(post => {
             if (post.likes.filter(like => like.user.toString() == req.user.id).length === 0) {
                 return res.status(400).json({alreadyliked: 'You have not liked this post yet'})
             }
             const removeIndex = post.likes.map(i => i.user.toString()).indexOf(req.user.id)
             post.likes.splice(removeIndex, 1);
             post.save().then(post => res.json(post))
    })
    .catch(err => res.status(404).json({postnofound: 'No likes found '}))

})
});





//Comment routes
router.post('/comment/:id', passport.authenticate('jwt',{session: false}), (req, res)=>{
    User.findOne({user: req.body.id})
        .then(profile => {
            Feed.findById(req.params.id)
                .then(post => {
                    post.comments.unshift({
                        user: req.user.id,
                        text: req.body.text,
                        name: req.body.name,
                        lastname: req.body.lastname
                    })
                    post.save().then(post => res.json(post))
                 } )
        }).catch(err => res.status(404).send(err))
})

router.delete('/comment/:id/:comment_id', passport.authenticate('jwt',{session: false}),(req,res) => {
   
    Post.findById(req.params.id)
        .then(post => {
            if(post.comments.filter(
                comment => comment._id.toString() === req.params.comment_id
            ).length === 0){
                return res.status(404).json({comment: 'Comment does not exist'})
            }     
            const removeIndex = post.comments.map(i => i._id.toString()).indexOf(req.params. comment_id)
            post.comments.splice(removeIndex, 1);
            post.save().then(post => res.json(post))
        })
    .catch(err => res.status(404).json({postnofound: 'No likes found '}))

})


//Delete

router.delete('/:id', passport.authenticate('jwt',{session: false}), (req, res) => {
   
 
    User.findOne({ user: req.body.id })
        .then(profile => {
                
                Feed.findById(req.params.id, (err, doc) => {
                    if(doc.user.toString() !== req.user.id){
                        return res.status(404).json({notauthorized: 'User not authorized'})
                  }
                  doc.remove().then(()=> res.json({succes: true}))          
            })
    }).catch(err => res.status(400).send(err))
    

})
module.exports = router 
