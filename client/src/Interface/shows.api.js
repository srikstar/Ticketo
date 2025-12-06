import axios from 'axios'
import { EXPRESS_URL } from './config.js'

const shows = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials:true
})

// GET SHOWS
export const add_shows = async(values) =>{
    try {
        const response = await shows.post('/shows/add-shows', values)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}


export const get_shows = async(id) =>{
    try {
        const response = await shows.get(`/shows/get-all-shows/${id}`)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}