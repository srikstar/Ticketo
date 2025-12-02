import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './Access.css'
import { get_userdata_api, signin_api } from './Interface/auth.api.js'
import { setUser } from './Store/auth.store.js'

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSignin = async(e) =>{
        e.preventDefault()
        if(!email || !password) {
            console.log('Invalid Credientials')
            return
        }
        try {
            const response = await signin_api({email,password})
            if(response?.isLogin){
                const userData = await get_userdata_api()
                if(userData?.user){
                    dispatch(setUser(userData.user))
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className='auth-main-container'>
                <h2>Sign In</h2>
                <form onSubmit={handleSignin}>
                    <div className='access-input-container'>
                        <label htmlFor="email">Email </label><br />
                    </div>
                    <input type="email" name='email' id='email' placeholder='Enter your email' autoComplete='on' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='access-input-container'>
                        <label htmlFor="password">Password</label><br />
                    </div>
                    <input type="password" name='password' id='password' placeholder='Enter the password' autoComplete='off' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='access-input-container'>
                        <Link>Forgot password?</Link>
                    </div>
                    <button className='access-submit-btn row'>Sign In</button>
                </form>
            </section >
        </>
    )
}

export default Signin
