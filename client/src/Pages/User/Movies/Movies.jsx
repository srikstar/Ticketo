import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get_specific_movies } from '../../../Interface/movies.api';
import "./MovieDetails.css";
import { get_shows_and_theaters } from '../../../Interface/shows.api';

function Movies() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState({});
  const [shows, setShows] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await get_specific_movies(id);
        setMovie(response?.movie || response?.movies);
      }
      catch (error) {
        console.log(error);
      }
    };

    if (id) fetchMovie();
  }, [id]);

  const [date, setDate] = useState('')

  const handleDate = (e) => {
    const selected = e.target.value
    setDate(e.target.value)
    navigate(`/movies/${id}?data=${selected}`)
  }


  useEffect(() => {
    if (!date) return;
    const getAllShowsWithTheater = async () => {
      try {
        const response = await get_shows_and_theaters(id, date)
        setShows(response?.theaters || [])
      } catch (error) {
        console.log(error)
      }
    }
    getAllShowsWithTheater(id, date)
  }, [date, id])


  const handleBooking = (id) =>{
    navigate(`/booking/${id}`)
  }

  return (
    <>
      <div className="movie-details-main">

        <button className="back-btn" onClick={() => navigate('/user')}>⬅ Back</button>

        <div className="movie-details-container">

          {/* LEFT - POSTER + DETAILS */}
          <div className="movie-left">
            <img className="movie-poster" src={movie?.poster} alt="poster" />

            <button className="trailer-btn">▶ Watch Trailer</button>

            <p><strong>Language:</strong></p>
            <p>{movie?.language}</p>
          </div>

          {/* RIGHT - MOVIE INFO */}
          <div className="movie-right">
            <h1>{movie?.title}</h1>
            <h3 className="movie-genre">{movie?.genre?.join(", ")}</h3>

            <div className="rating-row">
              ⭐⭐⭐⭐⭐
              <span className="rating-value">{movie?.imdbrating} / 10</span>
              <span className="release-date">• {movie?.releaseData?.slice(0, 10)}</span>
            </div>

            <p className="movie-description">{movie?.description}</p>

            {/* DETAILS TABLE */}
            <table className="details-table">
              <tbody>
                <tr><td>Duration</td><td>{movie?.duration} mins</td></tr>
                <tr><td>IMDB Rating</td><td>{movie?.imdbrating}</td></tr>
                <tr><td>Release Date</td><td>{movie?.releaseData?.slice(0, 10)}</td></tr>
                <tr><td>Language</td><td>{movie?.language}</td></tr>
                <tr><td>Date</td><td><input type="date" name="date" id="" value={date} onChange={(e) => handleDate(e)} /></td></tr>
              </tbody>
            </table>

            <div className="btn-row">
              <button className="back-list-btn" onClick={() => navigate('/')}>Back to list</button>
              <button className="book-btn">Book / Buy</button>
            </div>
          </div>

        </div>
      </div>

<section className="shows-section">
  {shows.length > 0 ? (
    shows.map((theater) => (
      <div className="theater-card" key={theater._id}>
        
        {/* Theater Name */}
        <div className="theater-header">
          <span className="theater-name">{theater.name}</span>
        </div>

        {/* Show Timing Buttons */}
        <div className="showtime-grid">
          {theater.shows.map((sh) => (
            <button
              key={sh._id}
              className="showtime-btn"
              onClick={() => handleBooking(sh._id)}
            >
              <span className="time">{sh.time}</span>
              <span className="format">Rs.{sh.tickePrice}</span>
            </button>
          ))}
        </div>

      </div>
    ))
  ) : (
    <h3 className="no-shows">Select a date to view shows</h3>
  )}
</section>


    </>
  );
}

export default Movies;
