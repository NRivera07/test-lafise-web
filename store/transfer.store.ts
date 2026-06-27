import { create } from "zustand";

import { TransferData } from "@/types/transfer";
import { Transaction } from "@/types/transaction";

interface TransferStore {
  transfer: TransferData;

  transactions: Transaction[];

  setTransfer: (data: Partial<TransferData>) => void;

  addTransaction: (transaction: Transaction) => void;

  clearTransfer: () => void;
}

export const useTransferStore = create<TransferStore>((set) => ({
  transfer: {
    origin: "",
    destination: "",
    currency: "",
    amount: 0,
  },

  transactions: [],

  setTransfer: (data) =>
    set((state) => ({
      transfer: {
        ...state.transfer,
        ...data,
      },
    })),

  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [transaction, ...state.transactions],
    })),

  clearTransfer: () =>
    set({
      transfer: {
        origin: "",
        destination: "",
        currency: "",
        amount: 0,
      },
    }),
}));
