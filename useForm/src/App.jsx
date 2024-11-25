import { useState } from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  return (
    <form>
      <div>
        <label>First Name: </label>
        <input/>
      </div>

      <div>
        <label>Middle Name: </label>
        <input/>
      </div>

      <div>
        <label>last Name: </label>
        <input/>
      </div>
    </form>
  )
}

export default App
