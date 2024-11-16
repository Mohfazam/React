import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 20
});


export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 20
});


export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 20
});


export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 20
});



export const totalNotificationSelector = selector({
    key: 'totalNotificationSelector',
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        const result = networkAtomCount + jobAtomCount + notificationsAtomCount + messagingAtomCount;
        return result;
    }
});