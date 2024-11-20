import { createContext, useContext, useState } from 'react'

import './App.css'

const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  function backGroundColor(){
    if(theme === "light"){
      return "white";
    }
    else{
      return "black";
    }
  }

  return (
    <themeContext.Provider value={{theme, setTheme}} >
      <div id='container' style={{backgroundColor:backGroundColor()}}>
        <ChildA />
      </div>
    </themeContext.Provider>
  )
}

export default App


function ChildA(){
  return(
    <>
    <ChildB />
    </>
  )
}


function ChildB(){
  return(
    <>
      <ChildC />
    </>
  )
}

function ChildC(){
  const {theme, setTheme} = useContext(themeContext);

  function handleClick(){
    if(theme === "light"){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  }

  return(
    <>
      <button onClick={handleClick}>Change Theme</button>
    </>
  )
}