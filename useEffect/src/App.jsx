import { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(val => val + 1);
  }

  useEffect(function () {
    setInterval(increment, 1000);
  }, []);

  useEffect(function(){
    console.log("Count value is " + count);
  }, [count]);

  return(
    <div>
      {count}
      
    </div>
  );
}

export default App;