import React, { useEffect, useState } from 'react'
import '../Partner.css'
import PartnerEdit from '../AddEdit/PartnerEdit'
import { add_theater, get_theater_by_owner } from '../../../Interface/theaters.api'
import { getTheaterByOwner } from '../../../Store/theaters.store'
import { useDispatch, useSelector } from 'react-redux';
import { get_movies } from '../../../Interface/movies.api'
import { setMovies } from '../../../Store/movies.store'
import { add_shows, get_shows } from '../../../Interface/shows.api'
import { setShowsByOwner } from '../../../Store/shows.store'

function Theater() {

    const [control, setControl] = useState(false);

    const [selectShows, setShows] = useState(false)
    const [addShow, setAddShow] = useState(false)
    const [selectedShowTheater, setSelectedShowTheater] = useState('')

    const { user } = useSelector(state => state.user)
    const { movies } = useSelector(state => state.movies)
    const { owner } = useSelector(state => state.owner)
    const { shows } = useSelector(state => state.shows)
    const dispatch = useDispatch()

    useEffect(() => {
        const getTheaters = async () => {
            try {
                const response = await get_theater_by_owner(user?._id)
                const movies = await get_movies()
                const shows = await get_shows(selectedShowTheater)
                dispatch(getTheaterByOwner(response?.theater))
                dispatch(setMovies(movies?.movies))
                dispatch(setShowsByOwner(shows?.shows))
            } catch (error) {
                console.log(error)
            }
        }
        getTheaters()
    }, [dispatch, user, selectedShowTheater])

    const handleAdd = () => {
        setControl(true);
    };

    const handleAddTheaterSubmit = async (data) => {
        try {
            const response = await add_theater(data);
            console.log("Theater Added Successfully:", response);
        } catch (error) {
            console.log(error);
        }
    };

    const [addShowData, setFormData] = useState({ name: '', date: '', time: '', totalSeats: '', tickePrice: '', movie: ''});
    const handleChange = (e) => setFormData({ ...addShowData, [e.target.name]: e.target.value });

    const handleAddShow = async () => {
        if (Object.values(addShowData).some(value => value === '')) {
            alert("Please fill all fields!");
            return;
        }
        setAddShow(false)
        try {
            const response = await add_shows({...addShowData, 'thrater' : selectedShowTheater})
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const handleShowChild = (e) => {
        e.stopPropagation()
    }

    return (
        <>
            {control && (
                <PartnerEdit setControl={setControl} onSubmit={handleAddTheaterSubmit} />
            )}

            {selectShows && (
                <section onClick={() => { setShows(false); setAddShow(false) }} style={{ height: '100vh' }} className='div row show-shows'>
                    <div onClick={handleShowChild} className='show-shows-container'>
                        <button onClick={() => setAddShow(true)}>Add Shows</button><br /><br />
                        {addShow && (
                            <section className='add-shows'>
                                <form onSubmit={handleAddShow}>
                                    <label>Show Name</label>
                                    <input type="text" name="name" required value={addShowData.name} onChange={handleChange} />

                                    <label>Date</label>
                                    <input type="date" name="date" required value={addShowData.date} onChange={handleChange} />

                                    <label>Time</label>
                                    <input type="time" name="time" required value={addShowData.time} onChange={handleChange} />

                                    <label>Total Seats</label>
                                    <input type="number" name="totalSeats" required value={addShowData.totalSeats} onChange={handleChange} />

                                    <label>Ticket Price</label>
                                    <input type="number" name="tickePrice" required value={addShowData.tickePrice} onChange={handleChange} />

                                    <label>Select Movie</label>
                                    <select name="movie" required value={addShowData.movie} onChange={handleChange}>
                                        <option value="">Choose...</option>
                                        {movies.map((m) => (
                                            <option key={m._id} value={m._id}>{m.title}</option>
                                        ))}
                                    </select>
                                    <button>Add Show</button>
                                </form>
                            </section>
                        )}
                        <table className='div'>
                            <thead>
                                <tr>
                                    <th>Show Name</th>
                                    <th>Show Date</th>
                                    <th>Show Time</th>
                                    <th>Movie</th>
                                    <th>Theater</th>
                                    <th>Total Seats</th>
                                    <th>Ticket Price</th>
                                    <th>Available Seats</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shows && shows.map((data) => (
                                    <tr key={data?._id}>
                                    <td>{data?.name}</td>
                                    <td>{data?.date}</td>
                                    <td>{data?.time}</td>
                                    <td>{data?.movie?.title}</td>
                                    <td>{data?.thrater?.name}</td>
                                    <td>{data?.totalSeats}</td>
                                    <td>{data?.tickePrice}</td>
                                    <td>{data?.bookedSeats}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            <section className="div row">
                <div className='filter-movie-container row-fs'>
                    <button onClick={handleAdd}>+ Add Theater</button>
                </div>
            </section>


            <section className="div row">
                <div className="theater-display-main">
                    <table className='div'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Owner</th>
                                <th>isActive</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {owner && owner.map((data) => (
                                <tr key={data?._id}>
                                    <td>{data?.name}</td>
                                    <td>{data?.address}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.phone}</td>
                                    <td>{data?.owner.name}</td>
                                    <td>{data?.isActive ? 'Approved' : 'Pending'}</td>
                                    <td><button>Edit</button><button>Delete</button></td>
                                    <td>{data?.isActive ? (<button onClick={() => {setShows(true); setSelectedShowTheater(data?._id)}}>Shows</button>) : ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    );
}

export default Theater;
