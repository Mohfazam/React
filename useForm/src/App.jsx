import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input {...register('firstName', {required: true,  maxLength: 20, minLength: 3})}/>
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input {...register('middlename', {required: true,  maxLength: 20, minLength: 3})}/>
      </div>
      <br />

      <div>
        <label>last Name: </label>
        <input {...register('lastname', {required: true,  maxLength: 20, minLength: 3})}/>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
