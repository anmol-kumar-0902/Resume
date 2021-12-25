import React from 'react'
import './Homepage.css'
import resDemo from '../../Utilities/res3.png' 
import { Link } from 'react-router-dom'
function Homepage() {
    return (
        <div className='homepageWrapper'>
        <div className="homeWrapperItem1">
            <span id='homeItem1heading'>
            <p>Alpha Reso Online Resume Builder.</p><p>Create a Professional Resume for Free.</p>
            </span>
            <Link to={'/form'} style={{ textDecoration: 'none' }}><div className='homeButton'>
            BUILD YOUR RESUME NOW
            </div>
            </Link>
        </div>
        <div className="homeWrapperItem2">
            <img src={resDemo} width="100%" alt="" />
        </div>
        </div>
    )
}

export default Homepage
