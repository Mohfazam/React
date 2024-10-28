import { useState } from 'react'


function App() {
  

  return (
   <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}>
    <ToggleMessage />
    <Notification />
    <Notification />
  

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

const Notification = () => {
  const [notification, setNotification] = useState(0);

  function increment() {
    setNotification(notification + 1);
  }

  return (
    <div>
      <button onClick={increment}>
        Toggle Message
      </button>
      {notification}
    </div>
  );
}

export default App
