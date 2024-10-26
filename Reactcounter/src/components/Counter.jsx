import React from 'react'
import './Counter.css'


const counter = () => {
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked 0 times</p>
      <button id='btn'>Click me</button>
    </div>
  )
}

export default counter
