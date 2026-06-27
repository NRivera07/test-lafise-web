import { Transaction } from "@/types/transaction";

interface TransactionRowProps {
  transaction: Transaction;
}

export default function TransactionRow({ transaction }: TransactionRowProps) {
  return (
    <tr className="border-t border-[#F1F1F1]">
      <td className="px-10 py-5 text-[14px] text-text-primary">
        {transaction.transaction_number}
      </td>

      <td className="py-5 text-[14px] text-text-primary">
        {transaction.description}
      </td>

      <td className="py-5 text-[14px] text-text-primary">
        {transaction.amount.value.toFixed(2)}
      </td>

      <td className="py-5 text-[14px] text-text-primary">
        {transaction.amount.value.toFixed(2)}
      </td>
    </tr>
  );
}
