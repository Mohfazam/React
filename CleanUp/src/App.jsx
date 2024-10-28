import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer(x => !x);
    }, 5000);
  }, []);

  return (
    <div>
      {showTimer && <Timer />}
    </div>
  );
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock =setInterval(() => {
      console.log("From inside the clock ");
      setSeconds(prev => prev + 1);
    }, 1000);

    return function() {
      clearInterval(clock);
    }

  }, []);

  return <div>{seconds} Seconds elapsed</div>
};

export default App;
