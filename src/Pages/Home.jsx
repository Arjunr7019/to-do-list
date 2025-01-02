import React from 'react';
import AllList from '../Components/AllList';
import logo from '../Images/logo.png'

export default function Home() {
  return (
    <div>
        <div>
            <img style={{width:"4%", marginTop:"1rem" ,marginLeft:"1rem"}} src={logo} alt="logo" />
        </div>
      <AllList/>
    </div>
  )
}
