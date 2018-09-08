const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    status: {
        type: String
    },
    birth: {
        type: String
    },
    city: {
        type: String
    },
    familyStatus: {
        type: String
    },
    inspire: {
        type: String
    },
    languages: {
        type: [String]
    },
    about:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    friendList: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users' 
        }
    }]
})




module.exports = User = mongoose.model('User', UserSchema)