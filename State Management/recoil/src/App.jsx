import React, { useState } from 'react'

function App() {
  

  return (
    <>
      <Counter />
    </>
  )
}

function Counter(){

  const [count, setCount] = useState(0);

  return(
    <div>
      <Decrease setCount ={setCount}/>
      <Increase setCount ={setCount}/>
      count: {count}
    </div>
  )
}


function Decrease({setCount}){

  function decrease(){
    setCount(count => count - 1)
  }

  return(
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Increase({setCount}){

  function increase(){
    setCount(Count => Count + 1);
  }

  return(
    <div>
      <button onClick={increase}>Increae</button>
    </div>
  )
}

export default App
