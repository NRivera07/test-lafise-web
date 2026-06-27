export interface TransactionAmount {
  currency: string;
  value: number;
}

export interface Transaction {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: "Credit" | "Debit";
  amount: TransactionAmount;
  origin: string;
  destination: string;
}

export interface TransactionsResponse {
  page: number;
  size: number;
  next: number;
  total_count: number;
  items: Transaction[];
}
