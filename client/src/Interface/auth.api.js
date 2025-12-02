import axios from 'axios'
import { EXPRESS_URL } from './config'

const auth = axios.create({
    baseURL : EXPRESS_URL,
    withCredentials:true
})

// Sign Up
export const signup_api = async(values) =>{
    try {
        const response = await auth.post('/api/auth/signup', values)
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}

// Sign In
export const signin_api = async(values) =>{
    try {
        const response = await auth.post('/api/auth/signin', values, {withCredentials:true})
        return response?.data

    } catch (error) {
        return error?.response?.data
    }
}

// Get Current
export const get_userdata_api = async() =>{
    try {
        const response = await auth.get('/api/auth/get-current-data')
        return response?.data
    } catch (error) {
        return error?.response?.data
    }
}