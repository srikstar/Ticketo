const express = require('express')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const Users = require('../models/users.model.js')
const isAuth = require('../middlewares/isAuth.js')

const auth = express.Router()

// Sign UP
auth.post('/signup', async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (user) return res.status(200).json({
            message: 'Email already in use',
            isSuccess: false
        })

        const salt = await bcryptjs.genSalt(10)
        const hash = await bcryptjs.hash(req.body.password, salt)
        req.body.password = hash

        const newaccount = new Users(req.body)
        await newaccount.save()

        return res.status(201).json({
            message: 'Your account is all set!',
            isSuccess: true
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            error: error
        })
    }
})

// Sign In
auth.post('/signin', async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (!user) return res.status(200).json({
            message: "Invalid Credientials",
            isLogin: false
        })

        const verifyPass = await bcryptjs.compare(req.body.password, user.password)
        if (!verifyPass) return res.status(200).json({
            message: "Invalid Credientials",
            isLogin: false
        })

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {expiresIn:'7d'})
        res.cookie('token', token, {
            httpOnly: true,
            secure: false
        })

        return res.status(200).json({
            message: 'Login Successfull',
            isLogin: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error',
            error: error
        })
    }
})

// Log out
auth.post('/logout', (req,res) =>{
    res.clearCookie('token')
    return res.status(200).json({
        message : "Logged out successfully"
    })
})

// User Data
auth.get('/get-current-data', isAuth, async (req, res) => {
    try {
        const user = await Users.findById(req.userID).select('-password')
        if (!user) return res.json({
            message: "Please Sign In again",
            isLogin: false,
        })

        return res.status(200).json({
            user: user,
            isLogin: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            isLogin: false
        })
    }
})

module.exports = auth