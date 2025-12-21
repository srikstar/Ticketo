const mongoose = require('mongoose')

const booking = new mongoose.Schema({
    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shows",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    seats: {
        type: [Number],
        required: true
    },
    totalAmount : {
        type : Number,
        required : true
    },
    stripeSessionId:{
        type : String
    },
    stripePaymentIntentId:{
        type : String
    },
    status:{
        type : String,
        enum : ["pending","completed", "failed"],
        default : "pending"
    }
},{timestamps:true})

const Bookings = mongoose.model('Bookings', booking)
module.exports = Bookings