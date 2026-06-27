import { useMutation } from "@tanstack/react-query";
import { createTransaction } from "@/services/transaction.services";

export function useTransfer() {
  return useMutation({
    mutationFn: createTransaction,
  });
}
