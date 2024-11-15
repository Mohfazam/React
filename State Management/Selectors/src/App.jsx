import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import { counterAtom, isEvenSelector } from './store/atoms/counter';


function App(){
  return <div>
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
  </div>
}

function Buttons() {

  const [,setCount] = useRecoilState(counterAtom)

  function increase(){
    setCount(c => c + 2);
  }

  function decrease(){
    setCount(c => c - 1);
  }

  return (
    <div>
      <button onClick = {increase}>Increase</button>
      <button onClick = {decrease}>Decrease</button>
    </div>
  )
}

function Counter(){

  const count = useRecoilValue(counterAtom);
  return (
    <div>
      {count}
    </div>
  )
}

function IsEven(){
  const even = useRecoilValue(isEvenSelector);

  return (
    <div>
      {even ? 'Even' : 'odd'}
    </div>
  )
}

export default App;