import { atom, RecoilRoot } from 'recoil'

export const counterAtom = atom({
  key: 'counter',
  default: 0,
})
