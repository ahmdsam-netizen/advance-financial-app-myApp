import { create } from "zustand";

export const activeTransaction = create((set) => ({
    position : "Transfer" ,
    changePosition : (newPosition : String) => set({position : newPosition})
}))