const mongoose = require('mongoose')

const show = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    totalSeats:{
        type:String,
        required:true
    },
    tickePrice:{
        type:Number,
        required:true
    },
    bookedSeats:{
        type:Array,
        default:[]
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Movies',
        required:true
    },
    thrater:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Theaters',
        required:true
    }
},{timestamps:true})

const Shows = mongoose.model('Shows',show)
module.exports = Shows