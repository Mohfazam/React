import { useState } from 'react'
import './App.css'
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from './atoms'

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
  const  messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationsCount = useRecoilValue(totalNotificationSelector);

 

  return(
    <>
    <button>Home</button>

    <button>My network {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
    <button>Jobs {jobsAtomCount >= 100 ? "99+" : jobsAtomCount}</button>
    <button >Notifications {notificationsAtomCount>= 100 ? "99+" : notificationsAtomCount}</button>
    <button>messaging {messagingAtomCount >= 100 ? "99+" : messagingAtomCount}</button>
    

    <button>Me {totalNotificationsCount}</button>
    </>
  )
}


export default App;