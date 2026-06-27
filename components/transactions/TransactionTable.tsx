import { Transaction } from "@/types/transaction";
import TransactionRow from "./TransactionRow";

interface Props {
  transactions: Transaction[];
  tab?: string;
}

export default function TransactionsTable({ transactions, tab }: Props) {
  return (
    <div className="mt-6 rounded-[4px] border border-[#DFE1DF] bg-white overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="text-left h-16 text-[#8D918D] text-[14px] font-semibold">
            {/* 
                El diseño de Figma muestra una columna de "Fecha", pero el Mock API
                no provee información de fechas para las transacciones.
                Se utiliza el número de transacción para aprovechar la información
                disponible.
            */}
            <th className="pl-10">Número de transacción</th>
            <th>Descripción</th>
            <th>Débito USD</th>
            <th>Balance USD</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <TransactionRow
              key={transaction.transaction_number}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
