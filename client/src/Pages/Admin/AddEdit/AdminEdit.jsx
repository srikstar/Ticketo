import React, { useState } from 'react'
import './../Admin.css'

function AdminEdit({ control, setControl, onSubmit, edit}) {

    console.log(edit)

    // Individual field states using useState
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [language, setLanguage] = useState("");
    const [releaseData, setReleaseData] = useState("");
    const [genre, setGenre] = useState("");
    const [poster, setPoster] = useState("");
    const [imdbrating, setImdbrating] = useState("");

    const handleChild = (e) => {
        e.stopPropagation(); // Prevent closing when clicking inside
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: check if any field is empty
        if (!title || !description || !duration || !language || !releaseData || !genre || !poster || !imdbrating) {
            alert("Please fill all fields!");
            return;
        }

        const data = {
            title,
            description,
            duration,
            language,
            releaseData,
            genre,
            poster,
            imdbrating
        };

        if (onSubmit) onSubmit(data);

        setControl(false); // Close popup after submit
    };

    return (
        <div
            onClick={() => setControl(false)}
            className={`admin-control-container row ${control ? "admin-control-show" : "admin-control-hide"}`}
        >
            <div className="admin-control-child column" onClick={handleChild}>
                <h1>{control ? 'Add Movies' : 'Edit Movies'}</h1>
                <br /><br />
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Duration</label>
                        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Language</label>
                        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Release Date</label>
                        <input type="date" value={releaseData} onChange={(e) => setReleaseData(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>Genre</label>
                        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                    </div>

                    <div className="">
                        <label>Poster URL</label>
                        <input type="text" value={poster} onChange={(e) => setPoster(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>IMDb Rating</label>
                        <input type="text" value={imdbrating} onChange={(e) => setImdbrating(e.target.value)} required />
                    </div>
form-row
                    <button type="submit">
                        {control ? "Add Movies" : "Edit Movies"}
                    </button>
                </form>

            </div>
        </div>
    );
}

export default AdminEdit;
