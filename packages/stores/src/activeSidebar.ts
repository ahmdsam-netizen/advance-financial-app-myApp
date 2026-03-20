import { create } from "zustand";

export const activeSidebar = create((set) => ({
    position : "Home" ,
    changePosition : (newPosition : String) => set({position : newPosition})
}))