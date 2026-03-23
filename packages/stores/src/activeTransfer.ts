import { create } from "zustand";

interface TransferStore {
  refetchTrigger: number;
  triggerRefetch: () => void;
}

export const useTransferStore = create<TransferStore>((set) => ({
  refetchTrigger: 0,
  triggerRefetch: () => set((state) => ({ refetchTrigger: state.refetchTrigger + 1 })),
}));