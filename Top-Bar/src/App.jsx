import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(1);

  return(
    <div>
      <div style={{display: "flex"}}>
      <div style={{backgroundColor: "red", borderRadius: 20, width:20, height:20, textAlign: "center", lineHeight: "20px", fontSize: 10, color: "white"}}>{count}</div>
      </div>
      <img style={{cursor: "pointer"}} src={"../src/assets/bell.png"} width={20} />
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default App;