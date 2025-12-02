import React  from 'react'

function AdminMovies() {

    return (
        <>
            <table className="movie-table">
                <thead>
                    <tr>
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

                <tbody>
                    <tr>
                        <td><img src="/placeholder.jpg" alt="poster" className="movie-table-poster" /></td>
                        <td>Movie Title</td>
                        <td className="movie-description">
                            Description goes here...
                        </td>
                        <td>English</td>
                        <td>Genre</td>
                        <td>2h 30m</td>
                        <td>8.5</td>
                        <td>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default AdminMovies
