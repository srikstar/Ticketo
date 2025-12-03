import React, { useEffect }  from 'react'
import {useDispatch} from 'react-redux'

import Navbar from '../Navbar'
import AdminMovies from './AdminMovies'
import '../Pages.css'
import { get_movies } from '../../Interface/movies.api'
import { setMovies } from '../../Store/movies.store.js'
 
function Admin() {

  const dispatch = useDispatch()

  useEffect(() =>{
    const getMovies = async() =>{
      try {
        const response = await get_movies()
        dispatch(setMovies(response?.movies))
      } catch (error) {
        console.log(error)
      }
    }

    getMovies()
  },[dispatch])

  return (
    <>
        <Navbar access={'admin'} />
        <div className='admin-movie-filters div row'>
          <button>+ Add Movies</button>
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