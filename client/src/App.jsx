import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Landing from './Landing'
import Simple from './Pages/Simple'
import Public from './Public'
import Protected from './Protected'
import { get_userdata_api } from './Interface/auth.api'
import { setUser } from './Store/auth.store.js'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await get_userdata_api()
        if (response?.user) {
          dispatch(setUser(response.user))
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
        <Route path="/user" element={<Protected><Simple /></Protected>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
