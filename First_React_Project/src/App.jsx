import React from 'react';
import './App.css';
import UserCard from '../src/components/usercard';



function App() {
 
  return (
    <div className='container' >
    <UserCard name="sarwar1" desc="sarwar1"/>
    <UserCard name="sarwar2" desc="sarwar2"/>
    <UserCard name="sarwar3" desc="sarwar3"/>
</div>

  )
}

export default App
