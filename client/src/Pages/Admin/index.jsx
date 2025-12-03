import React, { useEffect, useState } from 'react'

import './Admin.css'
import Navbar from '../Navbar'
import AdminM from '../Admin/Movies/AdminM'
import AdminT from './Theaters/AdminT'

import { get_movies } from '../../Interface/movies.api.js'
import { setMovies } from '../../Store/movies.store.js'
import { useDispatch } from 'react-redux'


function Admin() {

  const [page, setPage] = useState('')
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
      <Navbar access={'admin'} setPage={setPage} />
      {page === '' && <AdminM />}
      {page === 'movies' && <AdminM />}
      {page === 'theaters' && <AdminT />}
    </>
  )
}

export default Admin