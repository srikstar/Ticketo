import React from 'react'
import { Link } from 'react-router-dom'


function AdminNav() {
    return (
        <>
            <div className='div-98 row'>
                <div className="row">
                    <Link className="nav-links navlink">Movies</Link>
                    <Link className="nav-links navlink">Theaters</Link>
                    <Link className="nav-links navlink">Owners</Link>
                    <Link className="nav-links navlink">Sports</Link>
                    <Link className="nav-links navlink">Play</Link>
                    <Link className="nav-links navlink">Gift Cards</Link>
                    <Link className="nav-links navlink">Offers</Link>
                </div>
            </div>
        </>
    )
}

export default AdminNav