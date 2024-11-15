import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, useSetRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import { counterAtom, isEvenSelector } from './store/atoms/counter';


function App() {
  return (
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
  );
}

function Buttons() {
  return (
    <div>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  console.log("Increase button rendered");

  return <button onClick={increase}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount((c) => c - 1);
  }

  console.log("Decrease button rendered");

  return <button onClick={decrease}>Decrease</button>;
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  console.log("Counter rendered");

  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(isEvenSelector);

  console.log("IsEven rendered");

  return <div>{even ? "Even" : "Odd"}</div>;
}


export default App;