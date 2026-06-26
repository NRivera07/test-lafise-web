import { api } from "./api";
import { Account } from "@/types/account";

export async function getAccounts(accountId: number): Promise<Account[]> {
  const { data } = await api.get<Account[]>(`/accounts/${accountId}`);

  return data;
}
