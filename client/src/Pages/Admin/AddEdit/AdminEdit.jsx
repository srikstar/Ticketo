import React, { useState } from 'react'
import './../Admin.css'

function AdminEdit({ control, setControl, onSubmit, edit }) {

    // Helper function to get initial values
    const getInitialValue = (field) => {
        if (!edit || !edit._id) return "";
        
        if (field === 'releaseData') {
            return edit.releaseData ? new Date(edit.releaseData).toISOString().split('T')[0] : "";
        }
        if (field === 'genre') {
            return edit.genre ? edit.genre.join(", ") : "";
        }
        return edit[field] || "";
    };

    // Individual field states using useState with initial values
    const [title, setTitle] = useState(() => getInitialValue('title'));
    const [description, setDescription] = useState(() => getInitialValue('description'));
    const [duration, setDuration] = useState(() => getInitialValue('duration'));
    const [language, setLanguage] = useState(() => getInitialValue('language'));
    const [releaseData, setReleaseData] = useState(() => getInitialValue('releaseData'));
    const [genre, setGenre] = useState(() => getInitialValue('genre'));
    const [poster, setPoster] = useState(() => getInitialValue('poster'));
    const [imdbrating, setImdbrating] = useState(() => getInitialValue('imdbrating'));

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

        // Convert genre string to array
        const genreArray = genre.split(',').map(g => g.trim()).filter(g => g);

        const data = {
            title,
            description,
            duration,
            language,
            releaseData,
            genre: genreArray,
            poster,
            imdbrating
        };

        // Pass movie ID if editing
        if (edit && edit._id) {
            onSubmit(edit._id, data);
        } else {
            onSubmit(null, data);
        }

        setControl(false); // Close popup after submit
    };

    const isEditMode = edit && edit._id;

    return (
        <div
            onClick={() => setControl(false)}
            className={`admin-control-container row ${control ? "admin-control-show" : "admin-control-hide"}`}
        >
            <div className="admin-control-child column" onClick={handleChild}>
                <h1>{isEditMode ? 'Edit Movie' : 'Add Movie'}</h1>
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
                        <label>Genre (comma-separated)</label>
                        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required placeholder="e.g. Action, Drama, Thriller" />
                    </div>

                    <div className="form-row">
                        <label>Poster URL</label>
                        <input type="text" value={poster} onChange={(e) => setPoster(e.target.value)} required />
                    </div>

                    <div className="form-row">
                        <label>IMDb Rating</label>
                        <input type="text" value={imdbrating} onChange={(e) => setImdbrating(e.target.value)} required />
                    </div>

                    <button type="submit">
                        {isEditMode ? "Update Movie" : "Add Movie"}
                    </button>
                </form>

            </div>
        </div>
    );
}

export default AdminEdit;