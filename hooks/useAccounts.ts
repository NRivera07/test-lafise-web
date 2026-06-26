import { getAccounts } from "@/services/account.services";
import { useQuery } from "@tanstack/react-query";

export function useAccounts(accountId: number) {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: () => getAccounts(accountId),
  });
}
