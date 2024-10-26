
import { useState, useEffect } from 'react'
import './App.css'


function App() {

  let countervisible = false;

  return (
    <div>
      {countervisible ? <Counter></Counter>: null}
      {countervisible && <Counter></Counter>}
    
    </div>
  );
}


function Counter() {

  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);

  // let count  = 0;
  function increasecount(){
    setcount(count+1);
  }

  function decreasecount(){
    setcount(count-1);
  }

  function resetcount(){
    setcount(0);
  }

  useEffect(function(){
    setInterval(function clock(){
      setcount2(count2 => count2+1);
    }, 100);
  }, []);

  

  return (
    <div>
      <h1>{count}</h1>
    <button onClick={increasecount}>Increase Count</button>
    <button onClick={decreasecount}>Decrease Count</button>
    <button onClick={resetcount}>Reset Count</button>

    <h1>Clock: {count2}</h1>
    </div>
  );
}

export default App
