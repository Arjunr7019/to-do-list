import '../App.css'
import React from 'react';
import AllList from '../Components/AllList';
import NavBar from '../Components/NavBar';
import AddTask from '../Components/AddTask';

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <div style={{padding:"0 1rem"}}>
        <h1>Tasks</h1>
        <div style={{ display: "flex", flexDirection: "row",width:"100%",justifyContent:"start",padding:"0 0 0 2rem" }}>
          <div style={{ width: "50%" }}>
            <h3>Add Task</h3>
            <AddTask />
          </div>
          <div >
            <h3>Task List</h3>
            <AllList />
          </div>
        </div>
      </div>
    </div>
  )
}
