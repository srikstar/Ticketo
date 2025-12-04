import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import UserNav from './User/UserNav'
import PartnerNav from './Partner/PartnerNav'
import './Navbar.css'
import AdminNav from './Admin/AdminNav'
import { logout_api } from '../Interface/auth.api'
import { clearUser } from '../Store/auth.store.js'
import { useDispatch } from 'react-redux'

function Navbar({ access, setPage}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async() =>{
        try {
            const response = await logout_api();
            console.log(response?.message)
            dispatch(clearUser())
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

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
                            <button className='row' onClick={handleLogout}><img className="logout-icon" src="/logout.png" alt="logout-icon" /></button>
                        </div>
                    </div>
                    <div className="navbar-section-two div row">
                        {navbar === 'user' && <UserNav />}
                        {navbar === 'admin' && <AdminNav setPage={setPage}/>}
                        {navbar === 'partner' && <PartnerNav setPage={setPage}/>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar