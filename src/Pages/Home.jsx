import '../App.css'
import React from 'react';
import AllList from '../Components/AllList';
import NavBar from '../Components/NavBar';
import AddTask from '../Components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <div style={{padding:"0 1rem"}}>
        <h1 className='mt-3'>Tasks</h1>
        <div className='w-100 d-flex jutify-content-start flex-column flex-md-row'
        //  style={{padding:"0 0 0 2rem" }}
         >
          <div className='mt-3' style={{ width: "100%" }}>
            <h3>Add Task</h3>
            <AddTask />
          </div>
          <div className='mt-3' style={{width:"100%"}}>
            <h3>Task List</h3>
            <AllList />
          </div>
        </div>
      </div>
    </div>
  )
}
