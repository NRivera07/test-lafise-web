import { useQueries } from "@tanstack/react-query";
import { getTransactions } from "@/services/transaction.services";

export function useTransactions(accountIds: number[] = []) {
  return useQueries({
    queries: accountIds.map((id) => ({
      queryKey: ["transactions", id],
      queryFn: () => getTransactions(id),
      enabled: !!id,
      staleTime: 1000 * 60 * 5,
    })),
  });
}
