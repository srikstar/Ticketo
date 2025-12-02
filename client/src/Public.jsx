import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Public({children}) {
    const { user } = useSelector(state => state.user)

    if(user) {
        const roleRoutes = {
            'admin': '/admin',
            'partner': '/partner',
            'user': '/user'
        }
        return <Navigate to={roleRoutes[user.role] || '/user'} />
    }
    
    return children
}

export default Public