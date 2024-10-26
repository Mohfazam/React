
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

  return (
    <div>
      <h1>{count}</h1>
    <button onClick={increasecount}>Increase Count</button>
    </div>
  );
}

export default App
