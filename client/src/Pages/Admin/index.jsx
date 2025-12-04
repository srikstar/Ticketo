import React, { useState } from 'react'

import './Admin.css'
import Navbar from '../Navbar'
import Movies from './Movies/Movies'
import Theaters from './Theaters/Theaters'

function Admin() {

  const [page, setPage] = useState('')

  return (
    <>
      <Navbar access={'admin'} setPage={setPage} />
      {page === '' && <Movies />}
      {page === 'movies' && <Movies />}
      {page === 'theaters' && <Theaters />}
    </>
  )
}

export default Admin