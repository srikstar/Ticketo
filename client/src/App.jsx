import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { get_userdata_api } from './Interface/auth.api'
import { setUser } from './Store/auth.store.js'

import Landing from './Landing'
import Public from './Public'
import Protected from './Protected'
import Admin from './Pages/Admin'
import Partner from './Pages/Partner'
import User from './Pages/User'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await get_userdata_api()
        if (response?.user && response?.isLogin) {
          dispatch(setUser(response.user))
        }
        else{
          return <Navigate to='/' />
        }
      } catch (error) {
      console.log(error)
    }
  }
    getUserData()
  }, [dispatch])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public><Landing /></Public>} />
        <Route path="/admin" element={<Protected><Admin /></Protected>} />
        <Route path="/partner" element={<Protected><Partner /></Protected>} />
        <Route path="/user" element={<Protected><User /></Protected>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
