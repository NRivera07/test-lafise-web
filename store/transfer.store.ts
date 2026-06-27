import { TransferData } from "@/types/transfer";
import { create } from "zustand";

interface TransferStore {
  transfer: TransferData;

  setTransfer: (data: Partial<TransferData>) => void;

  clearTransfer: () => void;

  transactionResult?: unknown;

  setTransactionResult: (result: unknown) => void;
}

export const useTransferStore = create<TransferStore>((set) => ({
  transfer: {
    origin: "",
    destination: "",
    currency: "",
    amount: 0,
  },

  setTransfer: (data) =>
    set((state) => ({
      transfer: {
        ...state.transfer,
        ...data,
      },
    })),

  clearTransfer: () =>
    set({
      transfer: {
        origin: "",
        destination: "",
        currency: "",
        amount: 0,
      },
      transactionResult: undefined,
    }),

  transactionResult: undefined,

  setTransactionResult: (result) =>
    set({
      transactionResult: result,
    }),
}));
