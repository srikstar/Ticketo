const mongoose = require('mongoose')

const movie = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique: true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    releaseData:{
        type: Date,
        required:true
    },
    genre:{
        type:Array,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    totalrating:{
        type:String,
        required:true
    },
    imdbrating:{
        type:String,
        required:true
    }
},{timestamps:true})

const Movies = mongoose.model('Movies', movie)
module.exports = Movies