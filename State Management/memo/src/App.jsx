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
        
        <Counter />
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




const CurrentCount = memo(function () {
  

    return(
      <div>
        hey
      </div>
    )
  
});


const Decrease = memo(function () {
  function decrease () {
    
  }
  

    return(
      <div>
        <button onClick={decrease}>Decrease</button>
      </div>
    )
  
})

const Increase = memo(function () {

  function increase(){

  }
  

    return(
      <div>
        <button onClick={increase}>Increae</button>
      </div>
    )
  
})



export default App
