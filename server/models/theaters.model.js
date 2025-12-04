const mongoose = require('mongoose')

const theater = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }

}, { timestamps: true })

const Theaters = mongoose.model('Theaters', theater)
module.exports = Theaters