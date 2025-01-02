import './App.css';
import logo from '../src/Images/logo.png';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';

function App() {
  const[animation , setAnimation] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setAnimation(true);
    },5000)
  },[])
  
  return (
    <div style={{ height: "100vh" }}>
      {/* <Home/> */}
      {animation ?
      <Home/> :  <img className='logo' src={logo} alt="logo" />}
    </div>
  );
}

export default App;
