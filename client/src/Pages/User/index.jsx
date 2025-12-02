import React from "react";
import Navbar from "../Navbar";
import "./indexuser.css";

function User() {
  return (
    <>
      <Navbar access={'user'}/>


      <div className="user-main-container row">
        <div className="banner-main-container"></div>
        <div className="movies-main-container">
          <h2>
            <span style={{color:"orange"}}>|</span> Movies
          </h2>
          <p style={{color:"grey"}}>Movies in theater</p>
          <div className="movies-display-container div row-sb">

            <div className="movie-card user-card card">
              <img className="card-image" src="/logo.png" alt="card-image" />
              <div className="card-rating-container div row-sb">
                <h4 className="row"><img className="star" src="/start.png" alt="star" /> 6.4/10</h4>
                <h4>7 Votes</h4>
              </div>
              <h3>Hello</h3>
              <div className="card-genre row-s">
                <span className="card-genre-container">
                  Adventure
                </span>
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


        <div className="movies-main-container">
          <h2>
            <span style={{color:"orange"}}>|</span> Events
          </h2>
          <p style={{color:"grey"}}>The Best of Live Events</p>
          <div className="movies-display-container div row-sb">
            <div className="movie-card user-card card">
              <img className="card-image" src="/logo.png" alt="card-image" />
              <div className="card-rating-container div row-sb">
                <h4 className="row"><img className="star" src="/start.png" alt="star" /> 6.4/10</h4>
                <h4>7 Votes</h4>
              </div>
              <h3>Hello</h3>
              <div className="card-genre row-s">
                <span className="card-genre-container">
                  Adventure
                </span>
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
