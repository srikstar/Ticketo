import React, { useEffect } from 'react'
import '../Admin.css'
import { useDispatch, useSelector } from 'react-redux'
import { get_movies } from '../../../Interface/movies.api'
import { setMovies } from '../../../Store/movies.store'

function Movies() {

    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.movies)

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

    return (
        <>
            <section className="div row">
                <div className='filter-movie-container row-fs'>
                    <button onClick={console.log('Hi')}>+ Add Movies</button>
                </div>
            </section>

            <section className='div row'>
                <div className="movie-display-container row-sb">

                    {movies && movies.map((movie) => (
                        <div className="movie-display row-sb">
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
                                    <span className="card-genre-container-admin ">
                                        {movie?.genre[0]}
                                    </span>
                                    <span className="card-genre-container-admin">
                                        {movie?.genre[1]}
                                    </span>
                                    <span className="card-genre-container-admin">
                                        {movie?.genre[2]}
                                    </span>
                                </div>
                                <h3>IMDB: <span>{movie?.imdbrating}</span></h3>
                                <div className='admin-action-container row-fs'>
                                    <button className='admin-edit admin-control'>Edit</button>
                                    <button className='admin-delete  admin-control'>Delete</button>
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