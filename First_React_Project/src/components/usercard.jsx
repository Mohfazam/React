import React from 'react'
import sarwar_pic from '../assets/a.png';
import './usercard.css'

const UserCard = () => {
  return (
    <div className='user-container'>
      <p id='user-name'>Sarwar Khan</p>
      <img id='user-img' src={sarwar_pic} alt="Sarwar JPG"></img>
      <p id='user-desc'>Description Of sarwar</p>
    </div>
  )
}

export default UserCard
