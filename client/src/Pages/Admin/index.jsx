import React  from 'react'
// import {useDispatch} from 'react-redux'

import Navbar from '../Navbar'
import AdminMovies from './AdminMovies'
import '../Pages.css'

function Admin() {

  return (
    <>
        <Navbar access={'admin'} />
        <div className='admin-movie-filters div row'>
          <h4>Filters</h4>
        </div>
        <div className='main-container-display div row'>
          <div className="admin-main-display">
            <AdminMovies />
          </div>
        </div>
    </>
  )
}

export default Admin