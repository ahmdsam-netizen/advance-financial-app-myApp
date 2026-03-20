import { create } from "zustand";

type User = {
    updatedAt : Date ,
    balance : number
}

type UserStore = {
  user: User ;
  setUser: (user: User) => void;
};

export const useAmount = create<UserStore>((set) => ({
  user : { balance : 0 , updatedAt : new Date()} ,
  setUser : (user) => set({user})
}))