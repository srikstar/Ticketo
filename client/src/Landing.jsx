import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Landing.css'
import Signin from './Signin'
import Signup from './Signup'

function Landing() {

    const [select, setSelect] = useState(true)
    return (
        <>
            <section className='landing-main-container div row'>
                <div className='landing-nav-container'>
                    <Link to='/'><img className='logo' src="./logo.png" alt="logo" /></Link>
                </div>
                <div className="landing-body-container div row">
                    <div className="landing-section row">
                        <div className="landing-section-container column">

                        {select ? <Signin /> : <Signup />}
                        <div className='div-60 access-select'>
                        {select ? <Link onClick={() => setSelect(!select)}>Don’t have an account? Create one</Link> : <Link onClick={() => setSelect(!select)}>Already have an account? Log in</Link>}
                        </div>
                        </div>
                        <div className="landing-section-container">
                            <img className='landing-image' src="./landing.jpg" alt="landing-image" />
                        </div>
                    </div>
                    <div className="landing-footer-container div row">
                        <div className="landind-social-container row-sb">
                            <div className="landing-socials row">
                                <Link className="landing-social-link">Terms</Link>
                                <Link className="landing-social-link">Privacy</Link>
                                <Link className="landing-social-link">Contact</Link>
                            </div>
                            <div className="landing-socials">
                                <span>© Clone by <Link to='https://github.com/srikstar' target='_blank'>srikstar</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing