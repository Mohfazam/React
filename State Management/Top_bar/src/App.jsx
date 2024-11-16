import { useState } from 'react'
import './App.css'
import { useRecoilValue, RecoilRoot } from 'recoil'
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom } from './atoms'

function App() {
return (
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
)

  
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
 

  return(
    <>
    <button>Home</button>

    <button>My network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
    <button>Jobs {}</button>
    <button>messaging {}</button>
    <button>Notifications {}</button>

    <button>Me</button>
    </>
  )
}


export default App;