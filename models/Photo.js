const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PhotoSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    size: {
        type: Number
    },
    extension: {
        type: String
    },
    path: {
        type: String
    }
})
module.exports = Photo = mongoose.model('Photo', PhotoSchema)