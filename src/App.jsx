import './App.css';
import logo from '../src/Images/logo.png';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import { ListContext } from './Context/ListContext';
import Services from './Services/Services';

function App() {
  const [animation, setAnimation] = useState(false);
  const [taskList, setTaskList] = useState();

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 2500)
    Services.getTaskData().then(res=>{
      res ? setTaskList(res) : setTaskList();
    })
  }, [])

  return (
    <ListContext.Provider value={{taskList, setTaskList}}>
      <div style={{ height: "100vh" }}>
        {animation ? <Home /> : <img className='logo' src={logo} alt="logo" />}
      </div>
    </ListContext.Provider>
  );
}

export default App;
