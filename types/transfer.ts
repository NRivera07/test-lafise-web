export interface TransferData {
  origin: string;
  destination: string;
  currency: string;
  amount: number;
}

export interface TransferFormValues {
  transactionType: string;
  origin: string;
  destination: string;
  amount: number;
}
