import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Public({children}) {
    const { user } = useSelector(state => state.user)

    if(user) {
        return <Navigate to='/user' />
    }
    return children
}

export default Public