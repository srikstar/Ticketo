import axios from 'axios'
import { EXPRESS_URL } from './config'

const theater = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials: true
})


// GET ALL
export const get_theater = async() =>{
    try {
        const response = await theater.get('/theater/theaters')
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}


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


// APPROVE
export const theater_approve_api = async(id) => {
    try {
        const response = await theater.patch(`/theater/theater-approve/${id}`)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}

// BLOCK
export const theater_block_api = async(id) => {
    try {
        const response = await theater.patch(`/theater/theater-block/${id}`)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}