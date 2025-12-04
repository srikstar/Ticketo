import React from 'react'
import { Link } from 'react-router-dom'

function PartnerNav({setPage}) {
  
  return (
    <>
      <div className='div-98 row'>
        <div className="row">
          <Link className="nav-links navlink" onClick={() => setPage('theater')}>Theater</Link>
          <Link className="nav-links navlink" onClick={() => setPage('shows')}>Shows</Link>
        </div>
      </div>
    </>
  )
}

export default PartnerNav