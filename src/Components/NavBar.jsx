import React from 'react';
import '../App.css';
import logo from '../Images/logo.png'

export default function NavBar() {
    return (
        <div className='navBar' style={{display:"flex",flexDirection:"row",alignItems:"center",padding:"0.6rem 1rem"}}>
            <img style={{ width: "2.5rem" }} src={logo} alt="logo" />
            <h2 style={{margin:"0"}}>To Do List</h2>
        </div>
    )
}
