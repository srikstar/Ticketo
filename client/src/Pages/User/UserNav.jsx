import React from 'react'
import { Link } from 'react-router-dom'

import '../Navbar.css'

function UserNav() {
    return (
        <>
            <div className='div-98 row-sb'>
                <div className="row">
                    <Link className="nav-links navlink">Movies</Link>
                    <Link className="nav-links navlink">Events</Link>
                    <Link className="nav-links navlink">Sports</Link>
                    <Link className="nav-links navlink">Play</Link>
                </div>
                <div className="row">
                    <Link className="nav-links-right navlink">Gift Cards</Link>
                    <Link className="nav-links-right navlink">Offers</Link>
                </div>
            </div>
        </>
    )
}

export default UserNav