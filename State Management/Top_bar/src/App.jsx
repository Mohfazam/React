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
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

 

  return(
    <>
    <button>Home</button>

    <button>My network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
    <button>Jobs {jobsAtomCount >= 100 ? "99+" : jobsAtomCount}</button>
    <button>messaging {notificationsAtomCount >= 100 ? "99+" : notificationsAtomCount}</button>
    <button>Notifications {messagingAtomCount >= 100 ? "99+" : messagingAtomCount}</button>

    <button>Me</button>
    </>
  )
}


export default App;