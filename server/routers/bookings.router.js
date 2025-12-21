const express = require('express')
const Bookings = require('../models/bookings.model.js')
const Shows = require('../models/shows.model.js')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const isAuth = require('../middlewares/isAuth.js')
const { requireUser } = require('../middlewares/roleMiddleware.js')

const booking = express.Router()

booking.post('/create-checkout-session', isAuth, requireUser, async(req,res) => {
    try {
        const { amount }
    } catch (error) {
        
    }
})