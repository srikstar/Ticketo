import { configureStore } from '@reduxjs/toolkit'

import authRducer from './auth.store.js'
import movieReducer from './movies.store.js'

export const store = configureStore({
    reducer:{
        'user' : authRducer,
        'movies' : movieReducer
    }
})