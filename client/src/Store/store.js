import { configureStore } from '@reduxjs/toolkit'

import authRducer from './auth.store.js'
import movieReducer from './movies.store.js'
import theaterReducer from './theaters.store.js'
import showReducer from './shows.store.js'

export const store = configureStore({
    reducer:{
        'user' : authRducer,
        'movies' : movieReducer,
        'owner' : theaterReducer,
        'shows' : showReducer
    }
})