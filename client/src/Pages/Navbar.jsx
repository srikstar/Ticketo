import React from 'react'
import { Link } from 'react-router-dom'

import UserNav from './User/UserNav'
import PartnerNav from './Partner/PartnerNav'
import './Navbar.css'
import AdminNav from './Admin/AdminNav'

function Navbar({ access }) {

    const navbar = access

    return (
        <>
            <section className='navbar-main-container row'>
                <div className='navbar column'>
                    <div className="navbar-section-one row-sb">
                        <div className='navbar-section-one-partition row-sb'>
                            <Link to=""><img className='logo-icon' src="/logo.png" alt="logo-icon" /></Link>
                            {navbar === 'user' && (
                                <input type="text" name="search" placeholder='Search for Movies, Events, Play & more' />
                            )}
                        </div>
                        <div className='row'>
                            <Link to=""><img className='profile-icon' src="/logo.png" alt="" /></Link>
                            <button className='row'><img className="logout-icon" src="/logout.png" alt="logout-icon" /></button>
                        </div>
                    </div>
                    <div className="navbar-section-two div row">
                        {navbar === 'user' && <UserNav />}
                        {navbar === 'admin' && <AdminNav />}
                        {navbar === 'partner' && <PartnerNav />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar