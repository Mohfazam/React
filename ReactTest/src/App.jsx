
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

  return (
    <div>
      <h1>{count}</h1>
    <button onClick={increasecount}>Increase Count</button>
    <button onClick={decreasecount}>Decrease Count</button>
    <button onClick={resetcount}>Reset Count</button>
    </div>
  );
}

export default App
