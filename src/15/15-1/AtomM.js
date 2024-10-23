import { atom, selector } from 'recoil'; 

export const AtomM = atom({
  key : "AtomM",
  default : 0
});

export const AtomM2 = selector({
  key : "AtomM2",
  get : ({get}) => {
    return get(AtomM) * 2 ;
  }
});