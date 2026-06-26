import { getAccounts } from "@/services/account.services";
import { useQueries } from "@tanstack/react-query";

export function useAccounts(accountIds: number[] = []) {
  return useQueries({
    queries: accountIds.map((accountId) => ({
      queryKey: ["account", accountId],
      queryFn: () => getAccounts(accountId),
      enabled: !!accountId,
    })),
  });
}
