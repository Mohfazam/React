import React from 'react';
import UserCard from './components/UserCard';



function App() {
 

  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
    <UserCard />
    <UserCard />
    <UserCard />
</div>

  )
}

export default App
