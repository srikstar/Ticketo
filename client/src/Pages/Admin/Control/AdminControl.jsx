import React, { useState } from 'react'
import '../Admin.css'

function AdminControl({ setControl, edit}) {

    

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [language, setLanguage] = useState("");
    const [releaseData, setReleaseData] = useState("");
    const [genre, setGenre] = useState("");
    const [poster, setPoster] = useState("");
    const [totalrating, setTotalrating] = useState("");
    const [imdbrating, setImdbrating] = useState("");


    const handleSubmit = (e) => {
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

        console.log("FORM DATA:", data);
    };

    return (
        <>
            <section className='add-edit-main-container'>
                <div onClick={() => setControl(false)} className='back' style={{ textAlign: 'right' }}>back</div>
                <div className='adminadder-container'>

                    <form className="movie-form row" onSubmit={handleSubmit}>
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
                        <br />
                        <label className='div-90'>Release Date</label>
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
        </>
    )
}

export default AdminControl