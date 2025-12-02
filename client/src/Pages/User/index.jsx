import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import Navbar from "../Navbar";
import "./indexuser.css";
import { setMovies } from "../../Store/movies.store";
import { get_movies } from "../../Interface/movies.api";
import { Link } from "react-router-dom";

function User() {

  const dispatch = useDispatch()
  const { movies } = useSelector(state => state.movies)

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const response = await get_movies();
        dispatch(setMovies(response?.movies))
      } catch (error) {
        console.log(error)
      }
    }
    getAllMovies()
  }, [dispatch])


  return (
    <>
      <Navbar access={'user'} />

      <div className="user-main-container row">
        <div className="banner-main-container">
          <img className="banner-image" src="./banner.jpg" alt="banner-image" />
        </div>
        <div className="movies-main-container">
          <h2>
            <span style={{ color: "orange" }}>|</span> Movies
          </h2>
          <p style={{ color: "grey" }}>Movies in theater</p>
          <div className="movies-display-container div row-sb">
            <Link className="link-card row-sb div">
              {movies && movies.map((movie) => (
                <div className="movie-card user-card card" key={movie._id}>
                  <img className="card-image" src={movie.poster} alt="card-image" />
                  <div className="card-rating-container div row-sb">
                    <h4 className="row"><img className="star" src="/start.png" alt="star" />&nbsp;{movie.imdbrating}</h4>
                    <h4>{movie.totalrating}k</h4>
                  </div>
                  <h3>{movie.title}</h3>
                  <div className="card-genre row-fs">
                    <span className="card-genre-container">
                      {movie.genre[0]}
                    </span>
                    <span className="card-genre-container">
                      {movie.genre[1]}
                    </span>
                    <span className="card-genre-container">
                      {movie.genre[2]}
                    </span>

                  </div>
                </div>
              ))}
            </Link>
          </div>
        </div>


        <div className="movies-main-container">
          <h2>
            <span style={{ color: "orange" }}>|</span> Events
          </h2>
          <p style={{ color: "grey" }}>The Best of Live Events</p>
          <div className="movies-display-container div row-sb">
            <div className="movie-card user-card card">
              <img className="card-image" src="/logo.png" alt="card-image" />
              <div className="card-rating-container div row-sb">
                <h4 className="row"><img className="star" src="/start.png" alt="star" /> 6.4/10</h4>
                <h4>7 Votes</h4>
              </div>
              <h3>Hello</h3>
              <div className="card-genre row-fs">
                <span className="card-genre-container">
                  Adventure
                </span>
                <span className="card-genre-container">
                  Adventure
                </span>
                <span className="card-genre-container">
                  Adventure
                </span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default User;
