"use client";

import { useMemo, useState } from "react";

import { useTransactions } from "@/hooks/useTransactions";
import TransactionsTabs from "./TransactionTabs";
import TransactionsTable from "./TransactionTable";
import TransactionSkeleton from "./TransactionSkeleton";
import TransactionEmpty from "./TransactionEmpty";
import { useUserStore } from "@/store/user.store";
import { useTransferStore } from "@/store/transfer.store";

export default function TransactionsView() {
  const [tab, setTab] = useState("movements");
  const user = useUserStore((state) => state.user);

  const transactionQueries = useTransactions(
    user?.products.map((product) => product.id) ?? [],
  );
  const localTransactions = useTransferStore((state) => state.transactions);

  const hasQueries = transactionQueries.length > 0;

  const isPending =
    !hasQueries || transactionQueries.some((query) => query.isPending);

  const apiTransactions = useMemo(
    () => transactionQueries.flatMap((query) => query.data?.items ?? []),
    [transactionQueries],
  );

  const transactions = useMemo(() => {
    const merged = [...localTransactions, ...apiTransactions];

    return merged.filter(
      (transaction, index, array) =>
        array.findIndex(
          (item) => item.transaction_number === transaction.transaction_number,
        ) === index,
    );
  }, [localTransactions, apiTransactions]);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-[20px] font-semibold text-text-primary">
          Mis Transacciones
        </h1>
      </header>

      <TransactionsTabs value={tab} onChange={setTab} />

      {isPending ? (
        <TransactionSkeleton />
      ) : transactions.length === 0 ? (
        <TransactionEmpty />
      ) : (
        <TransactionsTable transactions={transactions} tab={tab} />
      )}
    </section>
  );
}
