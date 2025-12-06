import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get_specific_movies } from '../../../Interface/movies.api';
import "./MovieDetails.css";

function Movies() {
    const navigate = useNavigate()
    const [movie, setMovie] = useState({}); const { id } = useParams(); useEffect(() => { const fetchMovie = async () => { try { const response = await get_specific_movies(id); setMovie(response?.movie || response?.movies); } catch (error) { console.log(error); } }; if (id) fetchMovie(); }, [id]); console.log(movie);

  return (
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
            <span className="release-date">• {movie?.releaseData?.slice(0,10)}</span>
          </div>

          <p className="movie-description">{movie?.description}</p>

          {/* DETAILS TABLE */}
          <table className="details-table">
            <tbody>
              <tr><td>Duration</td><td>{movie?.duration} mins</td></tr>
              <tr><td>IMDB Rating</td><td>{movie?.imdbrating}</td></tr>
              <tr><td>Release Date</td><td>{movie?.releaseData?.slice(0,10)}</td></tr>
              <tr><td>Language</td><td>{movie?.language}</td></tr>
            </tbody>
          </table>

          <div className="btn-row">
            <button className="back-list-btn" onClick={() => navigate('/')}>Back to list</button>
            <button className="book-btn">Book / Buy</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Movies;
