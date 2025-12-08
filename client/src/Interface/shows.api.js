import axios from 'axios'
import { EXPRESS_URL } from './config.js'

const shows = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials:true
})

// ADD SHOWS
export const add_shows = async(values) =>{
    try {
        const response = await shows.post('/shows/add-shows', values)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}

// GET SHOWS
export const get_shows = async(id) =>{
    try {
        const response = await shows.get(`/shows/get-all-shows/${id}`)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}

// GET ALL SHOWS AND THEATER
export const get_shows_and_theaters = async(id,date) =>{
    try {
        const response = await shows.get(`/shows/get-all-theathers-by-movie/${id}/${date}`)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}


export const getTheShow = async(id) =>{
    try {
        const response = await shows.get(`/shows/get-shows-by-id/${id}`)
        return response?.data?.show
    } catch (error) {
        return error?.response?.data
    }
}