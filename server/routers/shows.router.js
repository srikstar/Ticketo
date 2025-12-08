const express = require('express')

const Shows = require('../models/shows.model.js')
const show = express.Router()

// create shows
show.post('/add-shows', async (req, res) => {
    try {
        const newShow = new Shows(req.body)
        await newShow.save()
        return res.send({
            message: 'Show successfully created'
        })
    } catch (error) {
        return res.json({
            message: 'Internal server error',
            error: error
        })
    }
})

// UPDATE
show.put('/update-shows/:id', async (req, res) => {
    try {
        await Shows.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send({
            message: 'Successfully updated'
        })
    } catch (error) {
        return res.json({
            message: 'Internal server error',
            error: error
        })
    }
})

// DELETE
show.delete('/delete-shows/:id', async (req, res) => {
    try {
        await Shows.findByIdAndDelete(req.params.id)
        return res.send({
            message: 'Successfully deleted'
        })
    } catch (error) {
        return res.json({
            message: 'Internal server error',
            error: error
        })
    }
})

// GET ALL SHOWS AND THEATER FOR A MOVIE
show.get('/get-all-theathers-by-movie/:id/:date', async (req, res) => {
  try {
    const movie = req.params.id;
    const date = req.params.date;

    // Populate theater data
    const shows = await Shows.find({ movie, date })
      .populate("thrater");

    const uniqueTheaters = [];

    shows.forEach((showObj) => {
      const existingTheater = uniqueTheaters.find(
        (t) => t._id.toString() === showObj.thrater._id.toString()
      );

      if (!existingTheater) {
        const showsOfThisTheater = shows.filter(
          (s) => s.thrater._id.toString() === showObj.thrater._id.toString()
        );

        uniqueTheaters.push({
          ...showObj.thrater._doc,
          shows: showsOfThisTheater
        });
      }
    });

    res.status(200).json({
      message: "Shows fetched successfully",
      theaters: uniqueTheaters
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error
    });
  }
});




// GET SHOWS BY ID
show.get('/get-shows-by-id/:id', async (req, res) => {
  try {
    const showData = await Shows.findById(req.params.id)
      .populate('movie', 'title language duration poster')
      .populate('thrater', 'name address email phone');

    if (!showData) {
      return res.status(404).json({ message: 'Show not found' });
    }

    res.status(200).json({
      message: 'Show fetched successfully',
      show: showData
    });

  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
});



// GET ALL SHOWS
show.get('/get-all-shows/:id', async (req, res) => {
  try {
    const shows = await Shows.find({thrater : req.params.id})
      .populate('movie', 'title')
      .populate('thrater', 'name');

    return res.status(200).json({
      message: "Success",
      shows
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error
    });
  }
});



module.exports = show