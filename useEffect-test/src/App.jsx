import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [currentTab, setCurrentTab] = useState("feed");

return (
<div>
  <button onClick={() => {
    setCurrentTab("feed");
  }} style={{color: currentTab === "feed" ? "red" : "black"}}>Feed</button>

  <button onClick={() => {
    setCurrentTab("Notifications");
  }} style={{color: currentTab === "Notifications" ? "red" : "black"}}>Notifications</button>
  
  <button onClick={() => {
    setCurrentTab("Messages");
  }} style={{color: currentTab === "Messages" ? "red" : "black"}}>Messages</button>
  
  <button onClick={() => {
    setCurrentTab("Jobs");
  }} style={{color: currentTab === "Jobs" ? "red" : "black"}}>Jobs</button>
</div>
);
}

export default App;