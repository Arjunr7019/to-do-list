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
        <div></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <h3>Add Task</h3>
            <InputCard inputType="text" labelName="Task Name" />
            <InputCard inputType="text" labelName="Description" />
            <InputCard inputType="date" labelName="Dead Line" />
            <div style={{width:"80%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div id='container' style={{width:"50%"}}>
                <select id='priority' style={{ borderRadius: "1rem", padding: "0.5rem 1rem", textAlign: "center",width:"100%" }}>
                  <option style={{ textAlign: "start" }} value="high">High</option>
                  <option style={{ textAlign: "start" }} value="medium">Medium</option>
                  <option style={{ textAlign: "start" }} value="low">Low</option>
                </select>
                <label id='dropdown' htmlFor="container">Priority</label>
              </div>
              <div style={{width:"50%",margin:"0 0 0 0.3rem",border:"2px solid gray",borderRadius:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}}>Add</div>
            </div>
          </div>
          
          <div>
            <h3>Task List</h3>
          <AllList />
          </div>
        </div>
      </div>
    </div>
  )
}
