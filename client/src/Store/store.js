import { configureStore } from '@reduxjs/toolkit'
import authRducer from './auth.store.js'

export const store = configureStore({
    reducer:{
        'user' : authRducer
    }
})