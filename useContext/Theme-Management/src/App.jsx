import { createContext, useContext, useState } from 'react'

import './App.css'

const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={theme}>
      <ChildA />
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
  const theme = useContext(themeContext);
  return(
    <>
      {theme}
    </>
  )
}