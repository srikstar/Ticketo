import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    return (
        <>
            <section className='auth-main-container'>
                <h2>Sign Up</h2>
                <form action="">
                    <div className='access-input-container'>
                        <label htmlFor="name">Name <span style={{ color: name.length === 0 ? 'red' : 'green' }}>*</span></label><br />
                    </div>
                    <input type="text" name='name' id='name' placeholder='Enter your name' autoComplete='on' required value={name} onChange={(e) => setName(e.target.value)} />

                    <div className='access-input-container'>
                        <label htmlFor="email">Email <span style={{ color: email.length === 0 ? 'red' : 'green' }}>*</span></label><br />
                    </div>
                    <input type="email" name='email' id='email' placeholder='Enter your email' autoComplete='on' required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <div className='access-input-container'>
                        <label htmlFor="password">Password <span style={{ color: password.length <= 7 ? 'red' : 'green' }}>*</span></label><br />
                    </div>
                    <input type="password" name='password' id='password' placeholder='Enter the password' autoComplete='off' required value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className='access-input-container'>
                        <label htmlFor="cpassword">Confirm Password <span style={{ color: cpassword.length <= 7 ? 'red' : 'green' }}>*</span></label><br />
                    </div>
                    <input type="password" name='cpassword' id='cpassword' placeholder='Enter the confirm password' autoComplete='on' required value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                    <button className='access-submit-btn row'>Sign In</button>
                </form>
            </section >
        </>
    )
}

export default Signup