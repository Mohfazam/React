import React, { useState, memo, useEffect } from 'react'
import './app.css'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() =>{
    setInterval(() => {
      setCount(count => count + 10)
    }, 1000)
  }, [])
  

  return (
    
      <div>
        
        <MemoizedCount />
      </div>
    
  )
}

function Counter(){
  return(
    <div>
      <Decrease />
      <Increase />
      <CurrentCount />
    </div>
  )
}


const MemoizedCount = memo(Counter);

function CurrentCount(){

  return(
    <div>
      hey
    </div>
  )
}


function Decrease(){

  

  function decrease(){
    
  }

  return(
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Increase(){

  

  function increase(){
    
  }

  return(
    <div>
      <button onClick={increase}>Increae</button>
    </div>
  )
}

export default App
