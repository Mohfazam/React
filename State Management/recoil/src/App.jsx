import React, { useState } from 'react'
import './app.css'
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'


function App() {
  

  return (
    <RecoilRoot>
      <Counter />
    </ RecoilRoot>
  )
}

function Counter(){

  

  return(
    <div>
      <Decrease />
      <Increase />
      <CurrentCount  />
    </div>
  )
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom);
  return(
    <div>
      {count}
    </div>
  )
}


function Decrease(){

  const setCount = useSetRecoilState(counterAtom);

  function decrease(){
    setCount(count => count - 1)
  }

  return(
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Increase(){

  const setCount = useSetRecoilState(counterAtom);

  function increase(){
    setCount(Count => Count + 1);
  }

  return(
    <div>
      <button onClick={increase}>Increae</button>
    </div>
  )
}

export default App
