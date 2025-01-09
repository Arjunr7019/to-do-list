import React from 'react';
import '../App.css';
import logo from '../Images/logo.png'

export default function NavBar() {
    return (
        <div className='navBar'>
            <img style={{ width: "4%", marginTop: "1rem", marginLeft: "1rem" }} src={logo} alt="logo" />
        </div>
    )
}
