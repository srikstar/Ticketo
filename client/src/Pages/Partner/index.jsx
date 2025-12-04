import React, { useState } from 'react'
import Navbar from '../Navbar'
import Theater from './Theater/Theater'
import Shows from './Shows/Shows'

function Partner() {

  const [page, setPage] = useState('theater')

  return (
    <>
        <Navbar access={'partner'} setPage={setPage}/>
        {page === 'theater' && <Theater />}
        {page === 'shows' && <Shows />}
    </>
  )
}

export default Partner