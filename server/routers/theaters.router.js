const express = require('express')

const Theaters = require('../models/theaters.model')
const theater = express.Router()

// GET ALL Theaters
theater.get('/theaters', async (req, res) => {
    try {
        const theater = await Theaters.find()
        return res.status(200).json({
            theaters: theater
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        })
    }
})


// GET ALL Theaters by OWNER
theater.get('/theaters-by-owner/:id', async (req, res) => {
    try {
        const theater = await Theaters.find({ owner: req.params.id })
        return res.status(200).json({
            theater: theater
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        })
    }
})

// APPROVE THEATER
theater.patch('/theater-approve/:id', async (req, res) => {
    try {
        const updatedTheater = await Theaters.findByIdAndUpdate(
            req.params.id,
            { isActive: true },
            { new: true }
        );

        if (!updatedTheater) {
            return res.status(404).json({
                message: 'Theater not found',
            });
        }

        return res.status(200).json({
            message: 'Theater approved successfully',
            theater: updatedTheater
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
});


theater.patch('/theater-block/:id', async (req, res) => {
    try {
        const updatedTheater = await Theaters.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );

        if (!updatedTheater) {
            return res.status(404).json({
                message: 'Theater not found',
            });
        }

        return res.status(200).json({
            message: 'Theater blocked successfully',
            theater: updatedTheater
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
});


// POST
theater.post('/add-theater', async (req, res) => {
    try {
        const newTheater = new Theaters(req.body)
        await newTheater.save()

        return res.status(201).json({
            message: 'Theater added successfully',
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error
        })
    }
})

// UPDATE
theater.put('/update-theater/:id', async (req, res) => {
    try {
        const updateTheater = await Theaters.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updateTheater) return res.status(200).json({
            message: 'Theater Not found. No Update made',
        })

        return res.status(200).json({
            message: 'Theater updated Successfully!'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error
        })
    }
})

// DELETE
theater.delete('/delete-theater/:id', async (req, res) => {
    try {
        const theater = await Theaters.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: 'Theater Deleted Successfully',
            isDeleted: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error
        })
    }
})


module.exports = theater