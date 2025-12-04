import axios from 'axios'
import { EXPRESS_URL } from './config.js'

const movie = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials:true
})


// GET MOVIES
export const get_movies = async() =>{
    try {
        const response = await movie.get('/explore/movies', {withCredentials:true})
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}

// UPDATE MOVIE
export const update_movie_api = async(id, values) =>{
    try {
        const response = await movie.put(`/explore/update-movie/${id}`, values)
        return response?.data
    } catch (error) {
        return error?.response?.data 
    }
}

// ADD MOVIE
export const add_movie_api = async(values) =>{
    try {
        const response = await movie.post('/explore/add-movies', values)
        return response?.data
    } catch (error) {
        return error
    }
}

// DELETE MOVIE
export const delete_movie_api = async(id) =>{
    try {
        const response = await movie.delete(`/explore/delete-movie/${id}`)
        return response?.data
    } catch (error) {
        return error
    }
}