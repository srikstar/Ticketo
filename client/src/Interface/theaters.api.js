import axios from 'axios'
import { EXPRESS_URL } from './config'

const theater = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials: true
})



// ADD
export const add_theater = async(values) =>{
    try {
        const response = await theater.post('/theater/add-theater', values)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}


// GET BY OWNER
export const get_theater_by_owner = async(id) =>{
    try {
        const response = await theater.get(`/theater/theaters-by-owner/${id}`)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}