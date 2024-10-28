import { useState } from 'react'


function App() {
  

  return (
   <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}>
    <ToggleMessage />

   </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This Message is conditionally rendered</p>}
    </div>
  );
}

export default App
