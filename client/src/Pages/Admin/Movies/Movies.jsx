import React, { useEffect, useState } from 'react'

import AdminEdit from '../AddEdit/AdminEdit'
import '../Admin.css'
import { useDispatch, useSelector } from 'react-redux'
import { delete_movie_api, get_movies } from '../../../Interface/movies.api'
import { add_movie_api, update_movie_api } from '../../../Interface/movies.api'
import { setMovies } from '../../../Store/movies.store'

function Movies() {

    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.movies)

    const [control, setControl] = useState(false)
    const [movieEdit, setMovieEdit] = useState(null)
    const [deleteMovie, setDelete] = useState('')

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await get_movies()
                dispatch(setMovies(response?.movies))
            } catch (error) {
                console.log(error)
            }
        }

        getMovies()
    }, [dispatch])

    const handleMovieSubmit = async (id, data) => {
        try {
            if (id) {
                // Update existing movie
                const response = await update_movie_api(id, data);
                if (response?.message) {
                    alert(response.message);
                    // Refresh movie list
                    const updatedMovies = await get_movies();
                    dispatch(setMovies(updatedMovies?.movies));
                }
            } else {
                // Add new movie
                const response = await add_movie_api(data);
                if (response?.message) {
                    alert(response.message);
                    // Refresh movie list
                    const updatedMovies = await get_movies();
                    dispatch(setMovies(updatedMovies?.movies));
                }
            }
        } catch (error) {
            console.log("Error submitting movie:", error);
            alert("Failed to save movie. Please try again.");
        }
    }

    const handleAddNew = () => {
        setMovieEdit(null);
        setControl(true);
    }

    const handleEdit = (movie) => {
        setMovieEdit(movie);
        setControl(true);
    }

    useEffect(() => {
        const handleDelete = async () => {
            try {
                const reponse = await delete_movie_api(deleteMovie)
                if (reponse?.isDeleted) {
                    const updatedMovies = await get_movies();
                    dispatch(setMovies(updatedMovies?.movies));
                }
            } catch (error) {
                console.log("Error submitting movie:", error);
                alert("Failed to save movie. Please try again.");
            }
        }
        handleDelete()
    },[dispatch,deleteMovie])

    return (
        <>
            {control && <AdminEdit setControl={setControl} control={control} onSubmit={handleMovieSubmit} edit={movieEdit} />}
            <section className="div row">
                <div className='filter-movie-container row-fs'>
                    <button onClick={handleAddNew}>+ Add Movies</button>
                </div>
            </section>

            <section className='div row'>
                <div className="movie-display-container row-sb">

                    {movies && movies.map((movie) => (
                        <div className="movie-display row-sb" key={movie._id}>
                            <div className="movie-card-image">
                                <img className='movie-poster-image' src={movie?.poster} alt="movie-poster-image" />
                            </div>
                            <div className="movie-card-container">
                                <h1>{movie?.title}</h1>
                                <p className='movie-desc'>{movie?.description}</p>
                                <h3>Duration : <span>{movie?.duration}</span></h3>
                                <h3>Language : <span>{movie?.language}</span></h3>
                                <h3>Release Date : <span>{new Date(movie?.releaseData).toLocaleDateString()}</span></h3>
                                <div className="card-genre row-fs">
                                    {movie?.genre && movie.genre.map((g, index) => (
                                        <span key={index} className="card-genre-container-admin">
                                            {g}
                                        </span>
                                    ))}
                                </div>
                                <h3>IMDB: <span>{movie?.imdbrating}</span></h3>
                                <div className='admin-action-container row-fs'>
                                    <button onClick={() => handleEdit(movie)} className='admin-edit admin-control'>Edit</button>
                                    <button onClick={() => setDelete(movie._id)} className='admin-delete admin-control'>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </>
    )
}

export default Movies