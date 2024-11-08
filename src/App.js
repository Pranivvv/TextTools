import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [myStyle, setMyStyle] = useState({
            color: 'black',
            backgroundColor: 'white'
        }
    )

  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#fff';
      document.title = 'TextTools - Dark Mode';
      myAlert('Switched to dark mode', 'success')
      setMyStyle({
          color: 'white',
          backgroundColor: 'rgb(40, 40, 40)'
      })
      // console.log("mode switched to dark")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212529';
      document.title = 'TextTools - light Mode';
      myAlert('Switched to light mode', 'success')
      setMyStyle({
          color: 'rgb(40, 40, 40)',
          backgroundColor: 'white'
      })
      // console.log("mode switched to light")
    }
  }

  const myAlert = (mess, state) =>{
    // console.log(mess, state ,'print me')
    setAlert({
      mess: mess,
      state: state,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Navbar title='TextTools' mode={mode} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <TextBox heading='Enter text to make changes' mode={mode} myAlert={myAlert} />
    </> 
    },
    {
      path: "about",
      element: <>
        <Navbar title='TextTools' mode={mode} changeMode={changeMode}/>
        <Alert alert={alert}/>
        <About myStyle={myStyle} />
      </> 
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
