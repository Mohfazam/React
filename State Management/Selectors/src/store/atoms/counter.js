import { atom, selector } from 'recoil'

export const counterAtom = atom({
  key: 'counter',
  default: 0,
})


export const isEvenSelector = selector({
    key: 'isEvenSelector',
    get: function( { get } ){
        const currentCount = get(counterAtom);
        return currentCount % 2 === 0;
    }
})