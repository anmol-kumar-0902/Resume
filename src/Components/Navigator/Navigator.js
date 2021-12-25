import React from 'react'
import './Navigator.css'
import logo from '../../Utilities/ar_logo2.png'
import { Link } from 'react-router-dom';
function Navigator() {
    return (
        <div className='navWrapper'>
            <Link to={'/'}><img src={logo} width="120px" alt='logo'/></Link>  
            <div className='navContact'>
            <Link to={'/form'} id="navSpan" style={{ textDecoration: 'none' ,color:"black"}}><span >Build Your Resume</span></Link>
                <span id="navSpan">Contact Us</span>
                
            </div>
        </div>
    )
}
export default Navigator;