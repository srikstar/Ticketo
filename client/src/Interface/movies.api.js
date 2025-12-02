import axios from 'axios'
import { EXPRESS_URL } from './config.js'

const movie = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials:true
})


// GET MOVIES
export const get_movies = async() =>{
    try {
        const response = await movie.get('/explore/movies')
        console.log(response)
    } catch (error) {
        return error?.response?.data
    }
}