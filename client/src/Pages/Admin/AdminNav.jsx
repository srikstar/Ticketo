import React from 'react'
import { Link } from 'react-router-dom'


function AdminNav({setPage}) {
    return (
        <>
            <div className='div-98 row'>
                <div className="row">
                    <Link className="nav-links navlink" onClick={() => setPage('movies')}>Movies</Link>
                    <Link className="nav-links navlink" onClick={() => setPage('theaters')}>Theaters</Link>
                </div>
            </div>
        </>
    )
}

export default AdminNav