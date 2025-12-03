import React, { useState } from 'react'

import AdminControl from '../Control/AdminControl'
import { useSelector } from 'react-redux'

function AdminM() {

    const [control, setControl] = useState(false)
    const [edit, setEdit] = useState('')
    const { movies } = useSelector(state => state.movies)

    return (
        <>
            <div className={`admin-control-container row ${control ? "control-show" : "control-hide"}`}>
                <AdminControl setControl={setControl} edit={edit}/>
            </div>

            <div className='filters-admin-container row'>
                <div className="filter-container row-fs">
                    <button type='' onClick={() => setControl(true)}>+ Add Movies</button>
                </div>
            </div>
            <div className='admin-display-main-container row'>
                <div className="admin-display-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Poster</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Language</th>
                                <th>Gnere</th>
                                <th>Release Date</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies && movies.map((movie) => (
                                <tr key={movie?._id}>
                                    <td><img src={movie?.poster} alt="" /></td>
                                    <td><h4>{movie?.title}</h4></td>
                                    <td>{movie?.description}</td>
                                    <td>{movie?.language}</td>
                                    <td>{movie?.genre}</td>
                                    <td>{new Date(movie?.releaseData).toLocaleDateString()}</td>
                                    <td>{movie?.imdbrating}</td>
                                    <td>
                                        <button className='admin-edit admin-btn' onClick={() => setEdit(movie?._id)}>Edit</button>
                                        <button className='admin-delete admin-btn'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminM