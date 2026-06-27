import {
  CreateTransactionRequest,
  TransactionsResponse,
} from "@/types/transaction";
import { api } from "./api";

export async function getTransactions(
  accountId: number,
): Promise<TransactionsResponse> {
  const { data } = await api.get<TransactionsResponse>(
    `/accounts/${accountId}/transactions`,
  );

  return data;
}

export async function createTransaction(body: CreateTransactionRequest) {
  const { data } = await api.post("/transactions", body);

  return data;
}
