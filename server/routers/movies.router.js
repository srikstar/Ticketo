const express = require('express')

const Movies = require('../models/movies.model.js')
const movie = express.Router()

// GET ALL MOVIES
movie.get('/movies', async (req, res) => {
    try {
        const movie = await Movies.find()
        return res.status(200).json({
            movies: movie
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        })
    }
})

movie.get('/:id', async (req, res) => {
    try {
        const movie = await Movies.findById(req.params.id)
        return res.status(200).json({
            movies: movie
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error
        })
    }
})

// POST
movie.post('/add-movies', async (req, res) => {
    try {
        const movie = await Movies.findOne({ title: req.body.title })
        if (movie) return res.status(200).json({
            message: 'Title already assigned'
        })

        const newMovie = new Movies(req.body)
        await newMovie.save()

        return res.status(201).json({
            message: 'Movie added successfully',
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error
        })
    }
})

// UPDATE
movie.put('/update-movie/:id', async (req, res) => {
    try {
        const updateMovie = await Movies.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updateMovie) return res.status(200).json({
            message: 'Movie Not found. No Update made',
        })

        return res.status(200).json({
            message: 'Movie updated Successfully!'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error
        })
    }
})

// DELETE
movie.delete('/delete-movie/:id', async (req, res) => {
    try {
        const movie = await Movies.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: 'Movie Deleted Successfully',
            isDeleted : true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error
        })
    }
})


module.exports = movie