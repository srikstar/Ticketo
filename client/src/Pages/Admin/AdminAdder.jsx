import React, { useState } from 'react'

import {add_movie_api} from '../../Interface/movies.api.js'
import '../Pages.css'

function AdminAdder() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [language, setLanguage] = useState("");
    const [releaseData, setReleaseData] = useState("");
    const [genre, setGenre] = useState("");
    const [poster, setPoster] = useState("");
    const [totalrating, setTotalrating] = useState("");
    const [imdbrating, setImdbrating] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const genreArray = genre
            .split(",")
            .map((g) => g.trim())
            .filter((g) => g !== "");

        const data = {
            title,
            description,
            duration,
            language,
            releaseData,
            genre: genreArray,
            poster,
            totalrating,
            imdbrating
        };

        try {
            const response = await add_movie_api(data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className='adminadder-main-container row'>
            <div className='adminadder-container'>

                <form className="movie-form" onSubmit={handleSubmit}>
                    <h2>Add Movie</h2>

                    <input 
                        placeholder="Title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required 
                    />

                    <textarea 
                        placeholder="Description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required 
                    />

                    <input 
                        placeholder="Duration (e.g. 2h 15m)" 
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required 
                    />

                    <input 
                        placeholder="Language" 
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        required 
                    />

                    <label>Release Date</label>
                    <input 
                        type="date" 
                        value={releaseData}
                        onChange={(e) => setReleaseData(e.target.value)}
                        required 
                    />

                    <input
                        placeholder="Genres (comma separated e.g. action, drama, thriller)"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />

                    <input 
                        placeholder="Poster URL"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                        required 
                    />

                    <input 
                        placeholder="Total Rating"
                        value={totalrating}
                        onChange={(e) => setTotalrating(e.target.value)}
                        required 
                    />

                    <input 
                        placeholder="IMDb Rating"
                        value={imdbrating}
                        onChange={(e) => setImdbrating(e.target.value)}
                        required 
                    />

                    <button type="submit">Add Movie</button>
                </form>

            </div>
        </section>
    );
}

export default AdminAdder;
