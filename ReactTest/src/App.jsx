
import { useState } from 'react';
import './App.css'


function App() {

  return (
    <div>
      Yo nigga
    <Counter />
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

  setInterval(function clock(){
    setcount2(count2+1);
  }, 1000);

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
