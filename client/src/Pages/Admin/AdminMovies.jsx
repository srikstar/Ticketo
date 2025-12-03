import React from 'react'
import { useSelector } from 'react-redux'

function AdminMovies() {

    const { movies } = useSelector(state => state.movies)

    return (
        <>
            <table className="movie-table">
                <thead>
                    <tr className='table-header'>
                        <th>Poster</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Language</th>
                        <th>Genre</th>
                        <th>Duration</th>
                        <th>Ratings</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className='table-body'>
                    {movies && movies.map((movie) => (
                        <tr>
                            <td><img className="poster-image" src={movie?.poster} alt="poster" /></td>
                            <td><h2>{movie?.title}</h2></td>
                            <td className="movie-description">
                                {movie?.description}
                            </td>
                            <td>{movie?.language}</td>
                            <td>{movie?.genre}</td>
                            <td>{movie?.duration}</td>
                            <td>{movie?.imdbrating}</td>
                            <td>
                                <button className="edit-btn admin-key-btn" key={movie._id}>Edit</button>
                                <button className="delete-btn admin-key-btn" key={movie._id}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default AdminMovies
