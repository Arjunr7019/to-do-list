import '../App.css'
import React from 'react';
import AllList from '../Components/AllList';
import logo from '../Images/logo.png';
import InputCard from '../Components/InputCard';

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div className='navBar'>
        <img style={{ width: "4%", marginTop: "1rem", marginLeft: "1rem" }} src={logo} alt="logo" />
      </div>
      <div style={{ margin: "0 1rem" }}>
        <h1>Tasks</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <InputCard inputType="text" labelName="Task Name"/>
            <InputCard inputType="text" labelName="Description"/>
            <InputCard inputType="date" labelName="Date"/>
          </div>
          <AllList />
        </div>
      </div>
    </div>
  )
}
